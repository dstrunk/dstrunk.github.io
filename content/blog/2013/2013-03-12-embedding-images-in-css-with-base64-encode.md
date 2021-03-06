---
title: Embedding images in CSS with base64 encode
tags: [css]
category: CSS
---

A recent *A List Apart* article, [Improving UX Through Front-End Performance](http://alistapart.com/article/improving-ux-through-front-end-performance "Improving UX Through Front-End Performance"), reminded me of how important optimizing your front end can be to conversions. While we don't live in the age of the 28.8k modem any more, the information laid out in the article stressed how important optimization still is. Things like [coding for performance](http://alistapart.com/article/improving-ux-through-front-end-performance#section2 "Coding for Performance"), [optimizing requests](http://alistapart.com/article/improving-ux-through-front-end-performance#section3 "Optimizing Requests") and [optimizing images](http://alistapart.com/article/improving-ux-through-front-end-performance#section4 "Optimizing Images") should be a front-end standard. Other things were touched on that might not be so obvious; namely, **embedding images in CSS with base64**. I didn't previously know how to do this, or even what base64 encoding was, which led to this article.

## What is base64 encoding?

Base64 encoding is, per Wikipedia:

> Base64 is a group of similar binary-to-text encoding schemes that represent binary data in an ASCII string format by translating it into a radix-64 representation. The Base64 term originates from a specific MIME content transfer encoding.

Wait, what? Basically (pun intended), base64 encoding is a way of taking binary data and turning it into text so it's more easily transmitted in email, HTML form data and the like. For example: when somebody emails you a picture, base64 encoding is used to translate images into ASCII text and send that email to you. Once your email is received, the ASCII text is decoded on your end, and the original image is rebuilt.

## When you should base64 encode images

You should look at base64 encoding in any application where you're trying to cut down on http requests. Base64-encoded images should only be used on background images, gradients, or similar elements that improve the look and feel of an application. Places that would benefit from this level of optimization would be responsive mobile sites. If you need to reference an image multiple times in your CSS, base64 encoding is probably overkill. You'd be better using CSS sprites instead, which you should be familiar with by now. see [this](http://www.w3.org/TR/mwabp/#bp-conserve-css-images "W3C - include background images inline in CSS style sheets") w3c spec regarding best practices for base64 encoding.

## How to base64 encode images

Onto the good stuff. You now know what base64 is (kind of), and when you should use it, so how do we do it?

### The easy way

The easiest way to base64 encode an image is to use one of the free tools available on the web. Just google “*base64 encoder” *and click on one of the first links. I've provided a few below:

- [http://www.motobit.com/util/base64-decoder-encoder.asp](http://www.motobit.com/util/base64-decoder-encoder.asp)
- [http://webcodertools.com/imagetobase64converter](http://webcodertools.com/imagetobase64converter)
- [http://www.base64-image.de/](http://www.base64-image.de/)

### The hard way

If you're anything like me, you'll want to know how to do this yourself. The easiest hard way I found for grabbing the base64 string is detailed below: We'll be using the HTML5 `<canvas>` element, loading an image onto it, and using the `toDataURL()` to get the base64-encoded image out of the `data:` URL. Here's the code I used below:

~~~
function getBase64(img) {
	var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext('2d');

    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL('img/png');

    console.log( dataURL.replace(/^data:image/(png|jpg);base64,/, '') );
}
~~~

With this script, you could make a handy GreaseMonkey snippet to base64 encode images on the fly. Note that this will not work on your local server when serving a page up using the `file://` URI scheme. You will need to put the files on your local server so you can use `http://localhost.` From there, embedding the data URI in your css is easy; simply use the format below (warning, the length will be understandably long):

~~~
.shell {

	background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAACCCAYAAABvsRfUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0 NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAv IiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RS ZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpD cmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFu Y2VJRD0ieG1wLmlpZDpEMkVCQTk3RDdEMzMxMUUyQkVDRDlGNkVFNkRCMzZEQyIgeG1wTU06RG9j dW1lbnRJRD0ieG1wLmRpZDpEMkVCQTk3RTdEMzMxMUUyQkVDRDlGNkVFNkRCMzZEQyI+IDx4bXBN TTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQyRUJBOTdCN0QzMzExRTJC RUNEOUY2RUU2REIzNkRDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQyRUJBOTdDN0QzMzEx RTJCRUNEOUY2RUU2REIzNkRDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4 bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+WsPSNQAAAetJREFUeNrs3VFuozAUhlFulWygG666 4W7B6WPeDLkYG/uc91GZfKLSb5hMlFK2dxGxDa4Mfn1Df4Dvvb82liW++IiP+IiP+MzqMduOL9+/ bUf830/2+sOdj/iIj/iIj/iIz0Q7v7Tc6Tt2eO7i89c3zDmAO9+vfcRHfMRHfMRnOtHgvf2uO773 8/wLzilSgby3j/jiIz7iIz7iM7Xh3tvvveOrO7ny80e/fnc+4ouP+IiP+IjPcP6n4vO0Wf3B8/zU 8/o77eAWsn//7PN+z/MRX3zER3zER3zmnp1n7/zqH578HOCCHW/n49c+4iM+4iM+4nNk59/6++5X //nVPqWEOx/xxUd8xEd8xMfOv2rH9t7B1Z189/cJ7HzEFx/xER/xER87f6Cd7Pv2k5+/nY/44iM+ 4iM+4rPUzt+S//7+hP+Xr+uOb30OcMJOT1+iOx/xxUd8xEd8xGdaj6M7vbYzszu09TlBbyfs9NTn 53v4EF98xEd8xEd81tr5W+X72tPf05c8Jxj9HGCAc45w5yM+4iM+4iO++CwrWj9fPnpOcPX1XP6B 15+3hzsf8REf8REf8RGfu+z87DlATe/34ndcX7jzER/xER/xER/xWWXn9z4nuNNOd+cjPuIjPuIj PuIz+87Hnc8OLwEGAGQYuQSk9fS/AAAAAElFTkSuQmCC ====);
}
~~~
