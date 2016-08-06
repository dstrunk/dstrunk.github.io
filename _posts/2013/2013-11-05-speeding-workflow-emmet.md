---
layout: blog/show
title: Speeding up your workflow with Emmet
---

Recently, a colleague asked me to create a quick and dirty website structure for a demo taking place later that day. Here's how the conversation went:

**Colleague:** "Hey, can you create a quick website scaffold with a header, navigation, a hero element, some Greeked text, a couple of unordered lists, a sidebar and a footer? Let me know how long it'll take you."

**Me:** "Hold tight." One minute passes. "Done!"

**Colleague:** "...Alright, how'd you do that?"

My colleague had never heard of [Emmet](http://emmet.io/ "Emmet"), the front-end development toolkit that greatly speeds up HTML and CSS generation. I showed him how, in one line, I was able to create exactly what he needed: `!>(header>.logo+nav>ul>li>a[href="#"]{$}*4)+(.hero>h1{Hero text}+p>lorem)+(aside>ul>(li.link-$>a[href="#"]{link $$})*10)+(section>article>header>h2{Post Header}^+(p>lorem)*3+footer{Post Footer})+(footer.site-footer>small{Copyright 2013})`

After typing that out in Sublime Text, I pressed CTRL + e and voila! 52 lines of properly tabbed, well-structured HTML5-compliant code appeared, and his jaw dropped.  This is such an edge case it's not even funny—I normally use Emmet to take care of the structure of just one section, for instance—but it was a good way to introduce you, dear reader, to the power of Emmet. Now I'll break down some of the commands I used in the one liner, so you can start to integrate Emmet into your workflow.

## First thing's first

As you might have already guessed, Emmet's syntax mimics CSS selectors. For the basics: `div#foo` translates to `<div id="foo"></div>` and `div.bar` is `<div class="bar"></div>`. Because of this, you already know how to use Emmet—you just need to learn how to tell Emmet how to structure your HTML. Refer to [Emmet's documentation](http://docs.emmet.io/ "Emmet - Documentation") to learn the ins and outs.

## Cool features that I can't live without

I'm a huge fan of Emmet in general for speeding up my workflow, but a couple of its features stand out. First up is its "lorem ipsum" generator.

### Lorem Ipsum

Simply type `lorem` and press Emmet's hot key combination to have Emmet generate a paragraph of dummy text for you. That's not all, though! You can specify how many words of dummy text you want by appending a number to the end of lorem; for example, `lorem100` produces 100 words of dummy text. You can also generate multiple paragraphs of dummy text: for example, typing `p*4>lorem` produces four paragraphs of dummy text.

### CSS vendor prefixes

That's right, Emmet isn't just for HTML; there are a couple of handy CSS tricks as well. You can read more about the features here, but a couple of my favorites are its **vendor prefix** support, and the CSS **reflect value** action. First, the vendor prefix: if you specify something like `-bdrs`, then press the Emmet hot key combination, you'll get something like this:

~~~
-webkit-border-radius: ;
-moz-border-radius: ;
-border-radius: ;
~~~

You'll see that there are multiple cursors after the colons, allowing you to add your values to all vendors simultaneously. The **reflect value** action is a handy supplement to this vendor prefix support. Say you want to change the border radius in this newly created CSS; instead of changing each value manually, or control-clicking to have multiple cursors, you simply update one value. Then you press Command+Shift+R (it might be different on your version of Emmet), and Emmet will update the values for every vendor prefix. Personally, these two features have all but made the Sublime Text [prefixr plugin](http://wbond.net/sublime_packages/prefixr) obsolete for me.

## Conclusion

I hardly even scratched the surface on how handy Emmet can be to your workflow. With actions like toggling comments on entire tag blocks, traversing edit points, and incrementing numbers, Emmet can keep your fingers on the keyboard and keep you productively writing code. How do you use Emmet in your workflow? Let me know in the comments!
