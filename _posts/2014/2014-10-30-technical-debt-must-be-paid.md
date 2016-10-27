---
layout: blog/show
title: Technical debt must be paid
tags: [misc]
---
> [Rebuilding the Shopify Admin: Improving Developer Productivity by Deleting 28,000 Lines of Javascript](http://www.shopify.com/technology/15646068-rebuilding-the-shopify-admin-improving-developer-productivity-by-deleting-28-000-lines-of-javascript)

**The TL;DR:** Shopify created an internal JavaScript framework. This framework became unweildy, it became difficult to train new members of the team, and Shopify was forced to migrate back to a more traditional setup.

The above link speaks to me in so many ways.

While reading the article so many things made me want to pull out my hair. First was the creation of the internal framework in the first place. My contention is this: why, with so many [solid](http://backbonejs.org/), [battle-tested](http://emberjs.com/) [frameworks](http://angularjs.org/), is Shopify trying to reinvent the wheel in the first place? Furthermore, why, after finding that their internal framework didn't work out, would they go back and do it again?!

### Technical debt

Aside from those little quibbles, the actual message of the article is pretty good. Technical debt is a Big Thing&trade;. If management can't be concerned with fixing technical debt, it would be good to make them aware of the problems associated. Technical debt:

* Makes it harder to train new employees on said application
* Makes new features difficult to add
* Makes the app difficult to maintain
* Slows down development
* Usually has performance hits due to poor design choices

And those are just the cost-associated reasons to fix tech debt. Psychologically, technical debt can be draining. Imagine coming in to work everyday and working on a slow, unmaintainable, terribly-built application. It wouldn't be a big leap to imagine a company in this position having a high turnover rate and low morale. In short, technical debt is bad and you should fix it as soon as possible.
