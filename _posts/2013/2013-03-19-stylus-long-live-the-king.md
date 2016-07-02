---
layout: blog/show
title: Stylus - long live the king
---

## Once upon a time...

...there was [Sass](http://sass-lang.com/ "Sass"). Sass was (is) an extension of CSS3, adding in nested rules, variables, mixins, selector inheritance, and all the features that CSS lacked. Its format was indented syntax, which was inspired by [Haml](http://haml.info/ "Haml")'s syntax. Indentations specified blocks instead of brackets and semicolons, CSS was pronounced more readable, and everyone rejoiced. Well, not everyone. Sass detractors objected, stating that indented syntax was too foreign to CSS. And so, version 3 of Sass was born: SCSS. SCSS was a superset of CSS3; using brackets and semicolons, just like CSS. It was white-space agnostic. In the end, SCSS contained all that was well with the original iteration of Sass, minus the opinionated syntax, and there was again peace in the land.

Except there wasn't. [Less](http://lesscss.org/ "Less"), [Stylus](http://learnboost.github.com/stylus/ "Stylus"), [Compass](http://compass-style.org/ "Compass")... It gets tricky here, with various preprocessor camps branching off like religious zealots after the 95 thesis were posted up on the Catholic Church. Which preprocessors were used could usually be traced back to the back-end development that was being done: Sass/SCSS (with or without Compass) was Ruby, Less was JavaScript, and Stylus was NodeJS. And that's the long and short of where we are today.

## Where my loyalties lie

I was an early adopter of Sass. Already familiar with Haml, I was developing my blog in Ruby at the time and enjoyed the brevity of syntax and runtime compilation using various gems. But I had my frustrations; namely, I couldn't mix Sass and SCSS syntaxes, and I wasn't a huge fan of the SCSS syntax of declaring mixins. I liked the idea of the old Sass syntax, with the option of falling back on regular CSS if necessary. Stylus seemed like the perfect match for me.

## Enter Stylus: the once and future king

Stylus is a relative newbie to the CSS Preprocessor game, but it's quite elegant. It can mix and match syntaxes, there's no weird syntax for mixins, mixins are transparent, and there are in-language functions to make things like loops or conditional classes easier. It has all of the features that I was looking for in Sass and more. “But what about Compass?!” Sass-vocates cry. Well, Stylus has [nib](http://visionmedia.github.com/nib/ "Stylus nib - a CSS3 library for stylus"), which is a small and powerful library that provides powerful CSS3 mixins in the \*.styl of Compass (this is a pun which I am stretching **hard** for; **.styl** is the stylus extension for the uninitiated). If you're using Stylus as part of your middleware stack for NodeJS development, there is also the added benefit of automatically including the data URI of an image for [embedding images in CSS](http://blog.dstrunk.com/css/embedding-images-in-css-with-base64-encode/ "Embedding images in CSS with base64 encode"). See [this post](http://bengourley.co.uk/using-stylus "Using stylus") for details on that one (scroll down to “*Never use a sprite again”*). Of course, dear reader, you might take all this with a grain of salt: I am most probably drinking the water a bit as well, as I am currently spending my free time developing in NodeJS. Stylus and Jade templates are all up in my project folders, because, well, Stylus and Jade were developed with NodeJS in mind.

## Bottom line

CSS preprocessors are great. Stylus, while a relative newcomer to the game, is a truly elegant solution which deserves consideration in your front end development stack. Regardless of which CSS preprocessor you use, though, just make sure you're using one! *P.S. Apologies for this overly cheesy post; I've been watching a lot of BBC's **Merlin**.*
