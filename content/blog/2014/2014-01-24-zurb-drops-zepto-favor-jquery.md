---
title: ZURB drops Zepto in favor of jQuery
tags: [javascript]
category: JavaScript
---

[ZURB](http://zurb.com "ZURB"), the creators of the popular front-end responsive framework [Foundation](http://foundation.zurb.com "ZURB - Foundation"), recently announced that they dropped [Zepto](http://zeptojs.com "ZeptoJS") in favor of [jQuery 2](http://jquery.com "jQuery"). Longtime readers might remember a [certain post](http://wp.me/p3ERzH-2m "Daniel Strunk - Is Zepto still relevant?") where I posited that, with jQuery's 2.x versions dropping support of older browsers, Zepto might prove to be irrelevant. It seems that my propositions were perhaps correct, for more reasons than one. In their blog post, ZURB details how they realized that Zepto's lighter file size didn't necessarily translate to better performance. Other notable considerations for ZURB's choice to switch over to jQuery: better industry acceptance,  better documentation and better overall support. So what does that translate to? Another nail in the coffin for Zepto? I don't think so, not necessarily. Zepto could remain a powerful contender for mobile JavaScript framework. Personally, however, I don't see the need for Zepto. My reasoning:

1. as of 1.8, jQuery is modular (via [Grunt](http://gruntjs.com/ "Grunt - The JavaScript Task Runner") tasks);
2. jQuery is cached on a large number of users' computers already; and
3. with today's internet speeds, jQuery's minified / gzipped 19kB is a drop in the bucket for those users that don't have it cached yet.

*via [http://zurb.com/article/1293/why-we-dropped-zepto](http://zurb.com/article/1293/why-we-dropped-zepto)*
