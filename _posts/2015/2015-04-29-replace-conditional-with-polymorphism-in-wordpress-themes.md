---
layout: blog/show
title: Replace conditional with polymorphism in WordPress themes and Advanced Custom Fields
date: 2015-04-29 10:30:20.000000000 -04:00
---

I haven't blogged in a while, and there's a reason for that: I'm working on combining my portfolio and blog into one site over at [danielstrunk.me][danielstrunk]. Recently, however, I was working on a WordPress layout, and built out something that could help others in my situation... and I couldn't wait to publish it on the new platform!

[danielstrunk]: http://danielstrunk.me

When building themes, I like to use [Advanced Custom Fields][acf]. It is a fantastic plugin that allows for custom meta fields to be quickly defined while easily retaining that WordPress look. It's quite a powerful plugin that I like to use in conjunction with custom post types such as portfolios, as they usually have a lot of bespoke needs.

[acf]: http://www.advancedcustomfields.com/

**Advanced Custom Fields Pro**, ACF's newest update, has some great features like [flexible content][flex-content]. I'm able to build a theme that feels like a powerful CMS while still retaining relatively tight control over the layout. First, check out the flexible content's [awesome documentation][flex-content] to understand the below code.

[flex-content]: http://www.advancedcustomfields.com/resources/flexible-content/#template-usage

With ACF's flexible content, I defined a series of layouts for a portfolio. The portfolio would allow for text, single images, image galleries, callout text, and quotes. With these six content areas defined, I created my first pass at a portfolio layout:

~~~ php
<?php if (have_rows('section')) : while (have_rows('section')) : the_row(); ?>
  <?php if (get_row_layout() == 'text') : ?>
      <?php get_template_part('templates/portfolio/text'); ?>
    <?php elseif (get_row_layout() == 'single_image') : ?>
      <?php get_template_part('templates/portfolio/single-image'); ?>
    <?php elseif (get_row_layout() == 'image_gallery') : ?>
      <?php get_template_part('templates/portfolio/image-gallery'); ?>
    <?php elseif (get_row_layout() == 'callout_text') : ?>
      <?php get_template_part('templates/portfolio/callout-text'); ?>
    <?php elseif (get_row_layout() == 'quote') : ?>
      <?php get_template_part('templates/portfolio/quote'); ?>
    <?php endif; ?>
<?php endwhile; endif; ?>
~~~ 

Look at all that duplication! There has to be a better way. There's repetition galore, and if I add another flexible content section on the backend, I'd have to add yet another conditional to my layout in addition to a new template. We developers are a lazy bunch, so I knew there was a better way. And there is: through [polymorphism][wiki], we can define a generic function and have it Just Work&trade; with any number of new layouts.

[wiki]: http://en.wikipedia.org/wiki/Polymorphism_%28computer_science%29

First, I borrowed heavily from [Rails for parameterization][parameterize] (virtually a one-to-one Ruby to PHP translation, in fact):

[parameterize]: http://apidock.com/rails/ActiveSupport/Inflector/parameterize

~~~ php
<?php
function parameterize($string, $sep = '-') {
  $parameterized_string = preg_replace("/[^a-z0-9\-]+/", $sep, $string);
    $parameterized_string = preg_replace("/$sep{2,}/", $sep, $parameterized_string);
    $parameterized_string = preg_replace("/^$sep|$sep$/", '', $parameterized_string);
    
    return strtolower($parameterized_string);
}
...
~~~ 

I place this function in `functions.php`, or wherever you need to define your helpers. This function allows me to take any string and return a dash-separated version of said string, with all spaces and special characters removed (`aren't regular expressions fun?!` turns into `arent-regular-expressions-fun`).

From here, I revisited my conditional-heavy layout:

~~~ php
<?php if (have_rows('section')) : while (have_rows('section')) : the_row(); ?>
  <?php $layout = parameterize(get_row_layout()); ?>
    <?php get_template_part('templates/portfolio/' . $layout); ?>
<?php endwhile; endif; ?>
~~~ 

**MUCH** better. The only thing I have to worry about now is making sure the flexible content I've defined has the same (parameterized) name as my template partial. This makes it easy to add new flexible content areas, and ensures my template partials are named in a logical manner.

Hope that helps somebody that finds themselves in a similar situation... Do your part to decrease duplication in the WordPress community! :)
