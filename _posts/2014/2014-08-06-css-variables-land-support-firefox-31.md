---
layout: blog/show
title: CSS variables land support in Firefox 31
tags: [css]
category: CSS
---

Firefox 31 was recently released on July 22, 2014. It's largely bug fixes and minor tweaks, but one mildly interesting development is their addition of support for native CSS variables without enabling experimental features. If you're in the 15% of web developers that have yet to adopt [Sass](http://sass-lang.com), [Less](http://lesscss.org/), or [Stylus](http://learnboost.github.io/stylus/), this might be exciting news for you! Read on for more.

#### The bare essentials

To declare a CSS variable, you declare your **element**; the variable within that element is available to all styles that inherit this element. Within your **element** brackets, declare your variable like so: `--my-variable: #fc0;`

To use your variable, use that ol' familiar functional notation:

~~~
main {
	color: var(--my-variable);
}
~~~

One more thing: if you want a variable to be available to **all** elements, use `:root` as your element. Since variables can be declared globally, cascading down to other elements, it's not hard to imagine being able to dynamically change variables via JavaScript and completely generate a new stylesheet. That could be cool, but with past timelines for CSS vendor support, who knows when we'll be able to do something like that. You might be saying to yourself, "This whole thing looks hideous!" I agree. All in all, it feels a bit like a hack release in general. I'm sure the release cycle is looking to eventually mimic the functionality of one of the CSS preprocessors, but for now I'm unimpressed. For the time being, I'll stick to Sass with its mixins, variables, helper functions and calculations.
