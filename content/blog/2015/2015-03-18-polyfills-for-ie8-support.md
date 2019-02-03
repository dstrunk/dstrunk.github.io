---
title: Polyfills and shims for IE8 support
tags: [html]
category: JavaScript
---
If you've ever done work for a government, financial or B2B organization, you might find yourself needing to support Internet Explorer 8. I know, I know: you've made your case for dropping support, pointing out that [large][salesforce] [SaaS][zurb] [companies][google] are dropping support (or dropped support years ago), Microsoft itself is [dropping support soon][microsoft], development time could double, etc. But higher ups point out that 10+% of users are locked into IE8, and until corporate IT is able to justify OS upgrades, we're stuck.

[salesforce]: http://www.zdnet.com/article/salesforce-to-drop-ie7-and-ie8-support-in-may-2015/
[zurb]: http://zurb.com/article/1265/ie8-is-going-the-way-of-the-dodo-so-why-s
[google]: http://thenextweb.com/google/2013/09/16/google-analytics-to-drop-internet-explorer-8-support-at-the-end-of-2013/
[microsoft]: http://www.techtimes.com/articles/12722/20140811/17-months-until-ie8-support-ends.htm

Don't fret too much. It's still possible to create a modern site and provide a pretty decent user experience on these older browsers, with some caveats. It probably won't be a completely 1-to-1 experience from IE8 to a modern browser, but it should be enough to allow you to develop using best practices going forward while creating a not-completely-hideous result in IE8. Here are some of the tools you'll need in your toolbox:

* [HTML5 Shim][html5-shim] - Adds browser support for HTML5 elements, including `header`, `footer`, `aside`, `main`, and others.
* [jQuery 1.x][jquery] - the 1.x versions of jQuery have promised support for Internet Explorer 6, 7 and 8. This gives us the jQuery we're all used to with a guarantee our JavaScript should Just Work.
* [Selectivizr][selectivizr] - adds CSS3 selectors for IE. This can be important if you're using a grid framework that makes use of `nth-child` to clear elements, for example.
* [RespondJS][respond-js] - a polyfill for CSS3 media queries. This is important if you're building a mobile-first website, as IE6-8 don't support media queries.
* [ES5 shim (and optionally ES5 sham)][es5-shim] - **ES5 shim** monkey patches JavaScript to contain ES5 methods that can be faithfully emulated. **ES5 sham** monkey patches other methods as closely as possible, or allows them to silently fail instead of causing runtime errors. *Use ES5 sham at your discretion.*

[html5-shim]: http://www.paulirish.com/2011/the-history-of-the-html5-shiv/
[jquery]: http://jquery.com/download/
[selectivizr]: http://selectivizr.com/
[respond-js]: https://github.com/scottjehl/Respond
[es5-shim]: https://github.com/es-shims/es5-shim

The next two links are especially handy. They allow for some nicer CSS decoration techniques that we've become used to that otherwise wouldn't be possible on legacy browsers.

* [CSS3 PIE][pie] - This polyfill adds support for `border-radius`, `box-shadow`, and `linear-gradient`. Yes, you can still have depth and detail in your IE8 designs!
* [Background cover][background-size] - Useful for full-container images. This will ensure your `background-size: cover` or `background-size: contain` behaves as expected.

[pie]: http://css3pie.com/
[background-size]: https://github.com/louisremi/background-size-polyfill#readme

In addition to the links above, you'll most likely have to make consessions for IE8 in your CSS. Things like a margin not working will have you climbing up the walls! Here are some common ones that I've come across:

* [Top margin doesn't work in IE8][top-margin] - This is a [known bug][top-margin-bug], and a pretty easy fix. Just add `overflow: auto` to the clearing div.
* **I want to add a transparent div / blur / shadow!** - Here's a fun one. IE CSS has a property called `filter`. This property accepts several attributes, all noted [here][ms-filter]. A good reference I found for transparent backgrounds in particular is on [CSS Tricks][css-tricks]. These will definitely muck up your stylesheets, but if you want to provide a better user experience for your IE8 users, this is one of the ways.

[top-margin]: http://stackoverflow.com/questions/13911010/top-margin-doesnt-work-in-ie-8
[top-margin-bug]: http://www.inventpartners.com/ie8_margin_top_bug
[ms-filter]: https://msdn.microsoft.com/en-us/library/ie/ms530752%28v=vs.85%29.aspx
[css-tricks]: https://css-tricks.com/rgba-browser-support/

I'm working on a rather large project redesign that needs IE8 support, so I'm sure I'll find more issues in the future. But for now, the above tips and hacks have definitely kept me sane as I build out a modern experience that needs to support outdated browsers.

Now, you might have no real choice in supporting IE8 if you're in the public sector or financials. But if you're a freelancer? Make the same case for dropping support at the top of this article, and also charge double for IE8 support and testing :)
