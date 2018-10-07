---
title: WordPress 3.6 is nice
tags: [wordpress, php]
category: PHP
---
That's pretty much the tl;dr of this post: **WordPress 3.6 is nice**. Automattic really stepped up their game for this release, rolling out features that I've been hoping for since I started WordPress development. I've been playing with the beta on my local server, and I have to say I'm impressed. Most of the features in the rollout are user-experience oriented, which is something I always felt was lacking from the admin side. Here's a quick rundown of some new features that might have you jumping for joy:

## Post formats

3.6 comes with post formats that have their own UI; most importantly, though, is theme authors have access to templating functions to access the data. This will make for a more pleasing user experience for your (read: my) clients. Example for a portfolio post: perhaps instead of creating a custom post type, one could just extend the post format to include a portfolio post type and extend the templating functions for this type.

## Autosave

Posts are now saved locally, which is an awesome thing. Not too much that needs to be said on that one.

## Post locking

This is a great feature for a site that has multiple authors / content providers. A 'lock' icon will appear if a user is currently editing a post, and will kick them off the post if they are idle for too long.

## Revisions

**FINALLY.** WordPress's revision feature has been lacking quite a bit, in my opinion. This new rollout features a diff comparison (think git), a slider that "scrubs" through history, and more. Never again wonder which revision is the right one—you'll be able to see exactly what was added / removed in previous versions! This one's a godsend.

## Other features

The twentythirteen theme is very nice; it's fully responsive and takes full advantage of the new post formats feature. From a personal standpoint, the theme is a bit too opinionated, but I can see this being important for quality control when dealing with clients. If you'd like to try out 3.6 beta now, [hit the download here](http://wordpress.org/wordpress-3.6-beta1.zip "Wordpress 3.6 beta")!
