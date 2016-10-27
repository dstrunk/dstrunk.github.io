---
layout: blog/show
title: Variable scope and get_template_part
tags: [php]
---

In developing my company's website, I'm attempting to be as modular as possible. Following this methodology, I'm making heavy use of `get_template_part` to abstract out the WordPress loop and make downstream changes to code easier to understand. Recently, however, I ran into an issue with attempting to use a global variable with `get_template_part`. The issue is pretty easy to understand, and is more a PHP deal than a WordPress one: variable scope. Variables are *mostly* global in PHP; variables defined can be referenced most anywhere else, including `required` or `included` files. However, user-defined functions have their own local function scope. Any variable used in that function is limited to that function only. Here's an example:

```php
	<?php
	  $a = 1;

	  function test() {
	    echo $a; // will not return anything
	  }
	?>
```

 This threw me for a second; I'm used to global variables being accessible everywhere. But in PHP, functions have their own scope, and won't have access to higher-level variables unless they are passed to the function in an argument, or declared with `global`. I didn't want to declare a global variable within my template, and passing variables through `get_template_part` is exceeds the limitations of the WordPress function, so I had to find a different way to make sure my variables were accessible. To get around my problem, I opted to use the WP function `locate_template()`. locate_template is similar to `get_template_part`, except `locate_template` doesn't return the results of the arguments passed. It does exactly what it sounds like, which is locating templates. From there, I did a simple `include` to add the template. Here's what the final result looked like:

```php
include( locate_template( "template-part.php" ) );
```

 It honestly feels a little hack-y to me, but it gets the job done. No more worries about function-level scoping, all the benefits of `get_template_part`, and a modular website back-end. For more information about how scoping is handled in PHP, check out the documentation here: [http://www.php.net/manual/en/language.variables.scope.php](http://www.php.net/manual/en/language.variables.scope.php)
