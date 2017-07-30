---
layout: blog/show
title: Background images in individual table cells in email
tags: [html]
category: HTML
---

I was recently tasked with developing assets for an email campaign for work. The design was already finalized, and just needed to be built out as a Mailchimp template. These types of requests frequently hit my desk, and they're usually fine, but this one was tricky—having background images under dynamic copy. Anyone that has done email templates might understand what a potential problem this is. Email clients are finicky, requiring developers to revert to development standards 15 years ago (which is to say, no standards at all). Tables, inline CSS, etc. are the norm. But even inline CSS wasn't solving my problem–in initial tests, adding a background image to the table cell yielded poor results across devices. So, after a bit of research (and pulling of hair, gnashing of teeth, etc.) I came across this fantastic little hack via Campaign Monitor: [http://www.campaignmonitor.com/blog/post/3192/add-a-background-image-to-individual-table-cells/](http://www.campaignmonitor.com/blog/post/3192/add-a-background-image-to-individual-table-cells/). Here are the steps:

- Replace `<html>` tag with `<html xmlns:v="urn:schemas-microsoft-com:vml">`
- Add the following style in the `<head>`: `v:* { behavior: url(#default#VML); display: inline-block; }`
- In the table cell you're looking to add the background image to, add this code:

~~~
<!--[if gte vml 1]>

	<v:image style='width: 600px; height: 402px; position: absolute; top: 0; left: 0; border: 0; z-index: -1;' src="http://www.yourlocationhere.com/image.gif" />

<![endif]-->
~~~

According to Campaign Monitor's blog post, this technique has been tested and works in most major mail clients, Which is great. Is it hacky? Absolutely. But anybody building an email campaign should expect no less at this point.
