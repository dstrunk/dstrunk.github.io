---
title: Sass file structure in WordPress
tags: [sass, css, wordpress, workflow]
category: CSS
---

There are many ways people choose to create their Sass file structure, and it's usually dependent on the environment the developer is comfortable with (Ruby,etc). Because I primarily work with WordPress, I thought it made sense to use a similar Sass file structure as is used in WordPress themes.  In my root sass folder, I only have one Sass source file, which imports all of my other files and serves as a primary entry point. Here's my file structure:

~~~
- **stylesheet.scss**
- vendor/
- general/
	- _general.scss
	- _grid-settings.scss
	- _typography.scss
	- _variables.scss
- layout/
	- header.scss
	- index.scss
	- footer.scss
	- page.scss
	- single.scss
	- archives.scss
- media/
	- 1666.scss
	- 1200.scss
	- 1000.scss
	- 500.scss
~~~

 The folder structure is pretty self-explanitory, but here's the rundown: **Vendor** - this holds any vendor Sass files. I'm currently using [Bourbon](http://bourbon.io/ "Sass Bourbon") and [Neat](http://neat.bourbon.io/ "Bourbon Neat") to help create my scaffolding, so my file structure looks like this: - Vendor/ - Bourbon/ - Bourbon source files...
- Neat/ - Neat source files...

**General** - this folder is where I primarily work. It houses my CSS media query files under the **Media** folder, and my WP-centric layout CSS under the **Layout** folder. Any CSS that doesn't fit within these two guidelines is underscored in the General folder, and primarily deals with extremely high-level CSS and / or general use mixins or variables that will be used in the **Media** / **Layout** folder files. I really like this setup, because I can set up my Stylesheet.scss (main entry point, remember?) to import everything just like a typical WordPress theme:

- first, import variables, vendor-specific mixins, resets, etc. which all kind of acts as a CSS version of functions.php.
- next, import the header
- now, the index
- now the archives, pages, and single posts
- finally the footer
- don't forget your media queries!

This setup makes it extremely easy change layouts quickly, adding colors or developing new custom page / post types: simply add a new module, include it in the stylesheet.scss, and you're set. There's more than one way to skin a cat, though, and this is only my recommendation. Regardless of which file structure you decide to land on, however, take one piece of my advice as gospel: developing a modular CSS workflow now will save you a lot of headaches in the future. For modular CSS design recommendations, I suggest studying popular grid frameworks such as [Twitter Bootstrap](https://github.com/twbs/bootstrap "Twitter Bootstrap on Github"), or reading *[Scalable and Modular Architecture for CSS](http://smacss.com/ "SMACCS")* by Jonathan Snook.
