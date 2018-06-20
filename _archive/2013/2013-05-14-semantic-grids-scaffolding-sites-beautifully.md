---
layout: blog/show
title: 'Semantic grids: scaffolding sites beautifully'
tags: [css]
category: CSS
---
If you're a front-end developer and you're still rolling your own custom sites every time you need to create a new site, you're wasting your time. There are tons of frameworks—[Twitter Bootstrap](http://twitter.github.io/bootstrap/ "Twitter Bootstrap"), [Zurb Foundation](http://foundation.zurb.com/ "Foundation"), and more—that have been developed over the last couple of years that will vastly speed up development time, allowing developers more time to focus on the UI/UX of a product rather than stressing over the scaffolding. That said, these frameworks are not without their shortcomings. The most glaring issue with almost all of these blueprints is their dependence on nested divs or presentation classes to control content. "But how else could we allow for responsive designs while easily maintaining our rapid prototypes?" You might ask. Enter **Bourbon**, and its semantic grid framework** Neat**.

## First off: Bourbon

Bourbon is a lightweight mixin library for SASS. With Bourbon, you can disregard vendor prefixes, as well as write CSS faster and cleaner. You might wonder why one would use Bourbon over a more robust framework such as Compass. Good question; for me, at least, Compass's functionality would be overkill for a large number of my projects.[ Thoughtbot](http://www.thoughtbot.com/ "Thoughtbot"), the development team behind Bourbon, promises that Bourbon will remain lightweight, which suites my needs wonderfully.

## Neat

Now, on to [Neat](http://neat.bourbon.io/ "Bourbon Neat"): this guy is really cool. You don't have to change your markup at all (as long as it's semantic). For example:

~~~
<section>
	<aside>Here is an aside.</aside>
    <article>Here is your main content article.</article>
</section>
~~~

Notice that there's no messy nesting of divs or presentation classes. Now, here's how to include the Neat framework using that markup:

~~~
section { @include outer-container;
	aside { @include span-columns(3); }
    section { @include span-columns(9); }
}
~~~

That's it! If you're familiar with Sass, you should be able to understand most of it, but I'll give a brief rundown. The **outer-container** mixin acts as the wrapper element, centering content, clearing floats, and providing width. The **span-columns(\*)** mixin provides the, you guessed it, columns for the framework. Neat is based on a 12 column grid, so you can provide any column combination that adds up to 12. The span-columns mixin also takes other parameters: you can specify how many columns an element will take up (for example: **2** of **6**), and you can specify if the element should display as a block or table. For a complete list of features, check out the [documentation](http://neat.bourbon.io/docs/ "Bourbon Neat - Documentation"). I like this idea. Nesting divs and adding presentation classes to markup began to muddy the waters as far as "separation of presentation and business logic" went. Using Sass—along with Bourbon and Neat—as a way to extend classes via mixins allows for a true scaffolding solution that won't change semantics, only the presentation. Semantic grid frameworks are a breath of fresh air to develop with. Personally, I'm using Bourbon Neat to develop my newer WordPress client sites with. Also, stay tuned for an upcoming WP framework using Bourbon and Neat :)
