---
layout: blog/show
title: Loading conditional libraries in WordPress with RequireJS
---
**07/02/13 Update:** One thing I failed to consider when this was originally written up was loading plugins that also utilize the script you are asynchronously loading. In my case, and I'm sure there are [many](http://stackoverflow.com/questions/15972757/getting-jquery-validation-plug-in-to-work-with-requirejs) [others](http://wordpress.stackexchange.com/questions/50522/require-js-to-load-javascript) with this problem, jQuery. If another WP plugin lists jQuery via an *enqueue_script* in the **functions.php**, you will have two versions of jQuery, which is no bueno. There are [some tickets open](http://core.trac.wordpress.org/ticket/23285 "Make WordPress Core - AMD") to implement AMD into WordPress core, but I don't think there's a clean solution for this yet. Just a heads up before reading the article below.

This is a pretty handy trick for optimizing your WP build for mobile development. I was developing a framework, and wanted to conditionally load either jQuery for desktop environments or Zepto for mobile environments. Rather than going the traditional route of using **wp_register_script()** for both libraries, then conditionally enqueuing the script based on browser sniffing via PHP, I decided to use [RequireJS](http://requirejs.org/ "RequireJS").

## Why RequireJS?

RequireJS is a handy JavaScript file and module loader that loads scripts asynchronously. There's a few reasons for this. Loading scripts asynchronously improves the loading speed of your web page, code is more modular and thus easier to use, and it helps to maintain dependencies. Also, it's a challenge.
## Getting started

I wanted to use RequireJS to conditionally load either jQuery or Zepto, depending on if users were using mobile devices or not. So, first thing was first: detecting browsers. Here's the code I used:

~~~
var isMobile = function() { return navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/); }
~~~

That gnarly bit of regex should detect around 98% of mobile use cases. Now that I had my detection function, I used RequireJS to determine my path based on the results:

~~~
require({ "paths" : { "lib" : (isMobile()) ? "/lib/zepto/zepto.min" : "/lib/jquery/jquery.min" } });
require(['lib'], function($) {
	// JavaScript / jQuery / Zepto goes here
});
~~~

I added this script to my **footer.php**, loaded up my local environment, and immediately noticed a problem: my path was wrong. But how could I avoid hardcoding the theme path into my JavaScript file? Well, luckily WordPress has thought of that. WordPress comes with a handy function called **wp_localize_script()**. With this function, it's possible to pass off back-end specific variables as objects to the script of your choice. Using this, it's possible to pass the directory uri to a JavaScript object which can then be used to determine the path of the scripts that we'll be loading. Here's my code below, to be dropped in your **functions.php **(obviously, change your scripts to their proper name/path/etc.:

~~~
// require.js wp_register_script( 'require-js', get_stylesheet_directory_uri() . '/assets/js/lib/require/require.min.js' );

// my script, main.js
wp_register_script( 'main-js', get_stylesheet_directory_uri() . '/assets/js/main.js', array( 'require-js' ), '', true);

// Add the WP_DIRECTORY object directory.path to the script main-js
// note that `directory` is the object, and `path` is the object's property.
$WP_DIRECTORY = array( '**path**' => get_stylesheet_directory_uri() . '/assets/js' ); wp_localize_script( 'main-js', '**directory**', $WP_DIRECTORY );
~~~

Here you see I've registered requireJS and my main.js script. The script “*main-js*” now had access to the object **directory**, which had the property **path**, which allowed me to pass in the stylesheet directory of my theme structure. This is extremely handy seeing as I'm developing a framework that will be renamed often. Now that I had access to the directory uri in a modular way, I amended my require code to account for that: require({ "paths" : { "lib" : (isMobile()) ? **directory.path +** "/lib/zepto/zepto.min" : **directory.path +** "/lib/jquery/jquery.min" } });

Refreshing my browser now asynchronously loaded either jQuery or Zepto, depending on which user agent was returned. Success!

## Going forward

Using RequireJS to conditionally load libraries is just the beginning. In the future, I'll experiment using RequireJS to use a client-side templating system such as [Handlebars](http://handlebarsjs.com/ "Handlebars") to clean up that nasty WP Loop, and help keep business logic out of my presentation.
