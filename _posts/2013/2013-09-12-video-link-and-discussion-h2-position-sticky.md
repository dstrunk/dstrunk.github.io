---
layout: blog/show
title: 'Video link and discussion: h2 position sticky'
date: 2013-09-12 07:52:48.000000000 -04:00
---
**via [https://air.mozilla.org/intern-presentation-ford/](https://air.mozilla.org/intern-presentation-ford/ "Air Mozilla - h2 position sticky") -** Here's an exciting pseudo-proposition to CSS3: `position: sticky`. "Sticky" elements are similar to fixed positioning, in that they stay "fixed" to a viewport-relative position. The difference with sticky elements though (and one that I'm very excited about) is that sticky elements maintain their relativity to their parent containers. A trend that's been going around a while in web design lately has been having elements remain sticky only for certain parts of a page. To paraphrase somebody that can explain this behaviour better than I: 

> Many web sites have elements that alternate between being in-flow and having `position: fixed`, depending on the user's scroll position. This is often done for elements in a sidebar that the page author wants to be always visible as the user scrolls, but which slot into a space on the page when scrolled to the top. Good examples are [news.google.com](https://news.google.com/) (the "Top Stories" sidebar) and yelp.com ([search results map](http://www.yelp.com/search?find_desc=restaurants&find_loc=San+Francisco%2C+CA&ns=1)). <cite>Edward O’Connor</cite>

## The old way

The old approach to this behaviour was adding a JavaScript event listener to a scroll event, and changing the CSS of the element in question when the window reached a certain point. The problem with this method is twofold. First up: fixed and relative positioning have different behaviors (obviously). Relatively positioned elements honor parent containers, while fixed positioned elements are positioned according to the viewport and are effectively removed from the regular DOM flow, CSS-wise. What I mean to say is things like margins on fixed elements don't effect other elements on the page; if you were to think of a document in terms of layers, a fixed positioned element would always be at the top. So, the problem is: you need to be careful if you're using margins or floats to position the relatively positioned elements—when they change to fixed elements, they might cause layout reflow issues. The second problem with the old approach is the scroll handler in general. [Here's](http://ejohn.org/blog/learning-from-twitter/ "John Resig - Learning from Twitter") a good article from John Resig that mentions scroll events and an old issue with Twitter's site (2011). In practice, it's usually a bad idea to attach event listeners to scroll handlers, since (depending on browsers) a scroll event can happen **a lot**.

## Consensus: sticky is good

As mentioned before, sticky positioned elements stay "fixed" to the page, but maintain their relativity to their parent containers. That means that the old way of keeping an element "stuck" to the viewport can now be achieved 100% with CSS. No event listeners to slow down performance of the page, no layout reflow issues, just good, clean CSS. Unfortunately, as far as support goes, `position: sticky` doesn't get much. As of this writing, there are no official specs concerning `position: sticky`, and browser support is pretty experimental. While I don't recommend using position: sticky in your production code, I do think that this feature is welcome and fits CSS's spec. I for one hope to see it implemented soon; what about you? Thoughts?