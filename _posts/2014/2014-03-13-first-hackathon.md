---
layout: blog/show
title: My first hackathon
---

Last Friday I attended my first ever Hackathon, and I had a blast! Let's back up a bit. I was recently made aware of a monthly hackathon called [First Friday Hackathon](http://firstfridayhackathon.com/), a four hour event taking place simultaneously around the state of Georgia. Normally, an event like this would be reserved for a larger city such as Atlanta, but surprisingly Columbus was one of the host cities! A friend of mine was going and invited me, and I thought, "Sure, why not." Walking in, I'll admit I was pretty nervous; I didn't know what to expect. Although I only knew my friend, I was quickly introduced to a bunch of people from all walks of life: students, web professionals, DIY-enthusiasts, and hardware and software hackers. The host of the Hackathon, Lucas of [Stand and Stretch](http://standandstretch.com/), gave everyone a brief overview of what could be expected: work on a project of your choosing in four hours, and at the end you will demonstrate your project to everyone, who will then vote on the most innovative project. Other attendees projects ranged from creating an augmented reality game using Unity to developing an automated [USB rocket launcher](http://www.thinkgeek.com/product/8a0f/) that fires based on facial recognition. I was struggling to find a project worthy of a hackathon. In the end, I settled on creating a simple watermark generating script using command line tools and [ImageMagick](http://www.imagemagick.org/) as a proof of concept for future projects. Not the most "wow"-worthy project I admit, but it was something I'd been interested in doing. Here are the steps I took:

- I started by installing ImageMagick and Ghostscript, which honestly took longer than the actual command line scripting did. Those libraries are HUGE!
- After installing, I `cd`ed into the target directory with terminal. Using ImageMagick's suite of features, I determined the target's dimensions using `identify target-image.png`.
- Next, I created an image with a transparent background that was the same dimensions as the target image: `convert -size WIDTHxHEIGHT xc:transparent -pointsize 25 -fill Red -draw "text 230,375 'WATERMARK TEXT HERE'" watermark-text.png`.
- Finally, I used ImageMagick's `composite` command: `composite -dissolve 50% -quality 100 watermark-text.png target-image.png output.png`. Here's the breakdown for those commands: - `composite` combines the images
- `-dissolve 50%` makes the overlay image 50% transparent
- `-quality 100` keeps the quality at 100%
- `watermark-text.png` is the image with text
- `target-image.png` is the original image
- `output.png` is the merged images

Et voila! A watermark for your images. Now that I know how to do this with the command line, my next steps are to use the **rmagick** and **rghost** Ruby libraries (Ruby implementations of ImageMagick and Ghostscript) to develop a web app that can batch process and add watermarks to images. And the use-cases don't end there; theoretically, it would be possible to create a full-featured web-to-print system, where a user inputs information into a form, the form information generates a PDF and the PDF is sent to a printer. Using a service such as [Lob](https://www.lob.com/), even the printing and shipping could be automated via their API, resulting in a potential passive income stream. Perhaps that will be my next hackathon project :)
