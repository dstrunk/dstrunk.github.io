---
layout: blog/show
title: Changing CSS to Sass in Bower dependencies
date: 2015-03-11 11:17:08.000000000 -04:00
---
I'm working on an updated version of our company's online styleguide at work, and wanted to modernize it by introducing [Bower](//bower.io/) and [Gulp](//gulpjs.com) into the build process. This will make it easier to update and share with other developers as our team grows. 

Early in the process, I ran into a problem: I wanted to include [normalize.css](necolas.github.com/normalize.css/) via bower, then include that in the Sass stylesheet. The issue with this is, normalize is a CSS file. Including this file in Sass results in a CSS `@import 'normalize.css'` at compile time, which is not a best practice in most cases\*. We need the file to end with `.scss` or `.sass` to properly integrate it with our other Sass files.

After looking around a bit, I found a rather large [GitHub issue](https://github.com/sass/sass/issues/556), opened in October 2012, that is still pretty much unresolved. There are dozens of comments in the issue from people in similar situations as mine—using bower to import assets but not wanting the curent behavior.

Since the issue is now going on 3 years without any official fix, there were a couple of commenters showing how they approached a fix. I liked one of them, and now here it is!

## The fix

Say you're installing normalize.css like me. If you install via bower, the file will returned will be `normalize.css`. In order to add this asset to your sass file and have it compile correctly, you'll need the final file to be called `_normalize.scss`.

Knowing this, let's start. You'll need to create a `.bowerrc` file to configure Bower. Add this to the file:

~~~ 
{
    "scripts": {
        "postinstall": "./.bower-postinstall"
    }
}
~~~ 

Now, let's create the shell script `.bower-postinstall` referenced in the `.bowerrc`:

~~~ 
#!/bin/sh

if [ -f "bower_components/normalize.css/normalize.css" ]; then
	mv bower_components/normalize.css/normalize.css bower_components/normalize.css/_normalize.scss
fi
~~~ 

The `if` statement is just for peace of mind so future bower installs don't make bower complain of `no such file or directory`. One last thing—we'll need to make sure this script is executable. In terminal, type `chmod a+x .bower-postinstall`.

Now, install normalize.css through bower as usual:

~~~ 
bower install normalize.css
~~~ 

If everything worked out, you should be able to browse to *bower_components > normalize.css* and see `_normalize.scss` in place of the normal `normalize.css` file.

There are pros and cons to this approach. The good: you should be able to upgrade via bower with no problems as usual. The bad? This approach assumes knowledge of the folder structure of whatever component you're installing. This doesn't seem like a huge deal with one or two components, but if you have a lot of modules and / or the folder structure / file name on any of those modules changes, you'll have to deal with those in the `.bower-postinstall` script. This isn't normally a problem, but it's something to watch out for.

Hope that helps anyone in a similar position!

<small>*Occasionally you might see imports used in something like media queries, for instance, but it's usually a bad idea. CSS imports don't download concurrently, so if you **really** need to use an import, you might just want to stick to using two `link` tags instead.</small>
