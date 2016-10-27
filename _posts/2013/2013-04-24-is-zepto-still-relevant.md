---
layout: blog/show
title: Is Zepto still relevant?
tags: [javascript]
---
This is a mini blog post of sorts. With the [recent release](http://blog.jquery.com/2013/04/18/jquery-2-0-released/ "jQuery 2.0 released") of jQuery 2.0, I wondered how relevant [Zepto](http://zeptojs.com/ "ZeptoJS") now is.

## Personal conjecture

 I applaud Zepto's entry into the JavaScript library arena. Whereas jQuery was developed to provide a neat wrapper on an ugly DOM with varied browser support, Zepto eschews outdated browsers in favor of the bleeding edge ones. This makes it a great alternative to jQuery for experimental sites or mobile sites for example.

In the past, I would have included Zepto in mobile builds of a site; not only because of the lightweight nature of Zepto, but because it does away with code bloat present in jQuery due to support for outdated browsers. That's especially important on mobile devices that might not have a great connection and you're trying to cut down on http requests and file sizes.

With its 2.0 release, jQuery seems to have closed that gap quite a bit, however, shrinking its code base by 12% (!). I believe Zepto's small footprint is largely due to its newness as a library; as it matures, it will begin to address a lot of issues already encountered by jQuery, and will grow to a similar file size. That, or people will begin to realize that jQuery 2.0 now fills the need that Zepto was originally created for, and Zepto will fade into obscurity. What are your thoughts? Let me know in the comments!
