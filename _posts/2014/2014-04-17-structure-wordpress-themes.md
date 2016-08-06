---
layout: blog/show
title: How I structure WordPress themes
---

I know what you're thinking ... "A WordPress post?! I thought this guy drank the Ruby on Rails Kool-Aid." Truth is, I never really stopped WordPress development, I was simply looking to expand my horizons a bit. I still use WordPress daily for personal blogs and work-related activites. It's good at its job, which is either as a blog or an easily extendable CMS-like solution. Anyways ... in developing my WordPress themes, I try to keep everything as modular as possible. Here's my general file structure for anything not WordPress-centric:

	|- assets/
	  |- img/
	  |- inc/
	    |- functions/
	    |- templates/
	    |- vendor/
	  |- js/
	  |- sass/

 This is of course a high-level overview, but let me explain a bit: - the **assets** folder holds all theme-related images, includes, JavaScript and Sass files. - the **img** folder holds all images
- the **inc** folder holds all PHP includes
- the **functions** folder holds all theme-centric functions. More on this folder in a bit.
- the **templates** folder holds all theme-centric templates to keep everything DRY
- the **vendor** folder holds all plugin / framework related things that I've accumulated over the years to help with development (WPAlchemy, etc)
- the **js** folder holds all JavaScript
- the **sass** folder holds all Sass files, again, to keep everything modular

The functions folder
--------------------

 Here's where things get a little more in-depth. First, everyone reading this will know that WordPress requires a **functions.php** file in the top level of a theme directory. Usually, people will add all of their theme configuration options to this file, resulting in a file hundreds of lines long. I'd rather write code than dig through it, so I extracted everything out into its own relevant file placed in the aforementioned **functions** folder. That said, here's my functions.php: ![folder setup for WordPress functions.php](http://res.cloudinary.com/dstrunk/image/upload/v1414083567/Screen-Shot-2014-04-17-at-8_15_13-PM_krqjsg.png) I won't be going over the screenshot in depth, but the gist is simple: first, I define any constants I'll be using a lot in my theme. Next, I have a series of includes that hold relevant code for their name. So, if I create any custom posts? In **custom-post-type.php** it goes. That ensures I always know where my code lies, even if I come back to the project 6 months down the road. I know this was a quick and dirty post, but I hope it helps anyone struggling to maintain a clean directory structure in the face of an ever-evolving theme!
