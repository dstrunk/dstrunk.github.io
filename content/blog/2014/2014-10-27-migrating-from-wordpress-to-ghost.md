---
title: Migrating from WordPress to Ghost
tags: [development, wordpress]
category: PHP
---
I've been on shared hosting for the better part of 10 years now. My first servers were on [1and1](http://www.1and1.com/), and more recently, [Dreamhost](http://www.dreamhost.com/). To their credit, both hosting providers did their jobs admirably, making it easy for me to setup and host WordPress sites with ease. However, their shortcomings revealed themselves as I began wanting to serve anything other than a PHP-based stack. Rails applications were possible, but tricky to setup. Ruby versions were out of date, with no way to update. Node apps were a no-go (unless you upgraded to their more expensive VPS services).

Over the weekend, I decided to finally take the plunge and move from shared hosting to a VPS—namely, [DigitalOcean](https://www.digitalocean.com/). Along with that move, I decided to forego WordPress and migrate everything over to [Ghost](http://ghost.org).

## First thing's first

To move from WordPress to Ghost, you'll need a plan of attack. Your checklist should include the following:

* Migrate comments to [Disqus](https://disqus.com/)
* Migrate images to [Cloudinary](http://cloudinary.com/) (using Cloudinary's WordPress plugin, this is dead simple)
* Generate a Ghost JSON file to import into Ghost (using Ghost's WordPress plugin this is easy as well)

DigitalOcean has handy one-click installs of common stack-related setups, as well as your run-of-the-mill WordPress installs, a Ghost install, etc. As I have a couple of different configurations necessary, I went with a **LEMP** stack—Linux, Nginx, MySQL and PHP.

Not wanting to [leave my visitors in the dust](http://dstrunk.com/2014/08/12/site-updates-301-redirects/), I went through the entire site and noted all of the URL changes that would occur with Ghost, creating a lengthy rewrite file for Nginx.

## Setup

After taking care of the preliminary work above, setup was pretty straightforward. One of the strongest things going for DigitalOcean is their community forums and tutorials. For setting up Ghost with Nginx, I followed [this tutorial](https://www.digitalocean.com/community/tutorials/how-to-host-ghost-with-nginx-on-digitalocean). As I'd already selected the LEMP stack provided by DigitalOcean, the only to-dos were installing [NodeJS](http://nodejs.org/) and configuring [Upstart](http://upstart.ubuntu.com/) to automatically start / restart if the server goes down.

The only place I really deviated from the tutorial: I am planning on hosting a couple of different websites on this server, so I decided to choose a different folder to install ghost to, and specified said directory in my Nginx setup.

## Sharing

One thing I missed from WordPress is its plugin support for auto-posting to Twitter / LinkedIn / whatever. No worries, though; we're a resourceful bunch, and we can figure that out.

What I did is set up a couple of [IFTTT](https://ifttt.com) recipes. Add a new recipe that says, "If a new RSS item is posted, submit a link to { *social network of your choice* }." Pretty simple!

## In summary

I'm very happy with my current setup. Linux + Nginx is very amenable to all sorts of configurations—Node, Rails, and PHP have all run side-by-side on my new server at one point this weekend.

Have any questions? Comment below!
