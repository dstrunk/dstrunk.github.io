---
layout: blog/show
title: Bedrock for modern WordPress deployment
---
I haven't worked with WordPress in quite a while. After working with Rails for the last year, I grew to dislike my WordPress deployment process—it was nonstandard, hard to manage separate instances, and perhaps worst of all, didn't utilize a VCS to the best of its ability.

Recently, however, I came across the [Bedrock WordPress Stack](http://roots.io/wordpress-stack/) from [Roots](http://roots.io). Bedrock follows the [12-factor app methodology](http://12factor.net/) (and specifically Roots' own brand of 12-factor, [Twelve-factory WordPress app](http://roots.io/twelve-factor-wordpress/)). Bedrock bakes in best practices for WordPress deployments, it allows for easy versioning of plugins or themes, and, thanks to Capistrano and Git, allows for easily rolling back any updates. Though it's not currently in Bedrock as of this writing, database management can be added easily as a Capistrano + WordPress CLI task. Using these tools, WordPress sites can enjoy a similar process to a modern development cycle: fork, commit, pull request, code review, merge.

Looking through Bedrock, I like what I see: development of WordPress as a web application framework instead of a one-off site. Things are repeatable, automated, and most importantly, versioned. Need to roll back a deploy? No problem. Want to merge changes after reviewing your staging deploy? Go for it! Instead of whiteknuckling a plugin or WordPress update, update everything via composer and run `composer update`. Push changes to the server, and if something breaks, roll back to the previous version!

Most important for me is onboarding time. Onboarding for my previous site at work would have involved several steps, different programs and a confusing review process. Now with a simple `setup` script, onboarding can take minutes of setup, allowing for more time familiarizing oneself with the codebase. So long, technical debt, hello productivity!

I've already begun migrating the work website to Bedrock's Capistrano + Composer + WP CLI stack, and development has been pretty painless. Perhaps the largest time sink has been migrating plugins to the `composer.json` file. Luckily, thanks to [WPackagist](http://wpackagist.org/), most of the plugins exist as composer packages, and only two premium plugins required additional configuration.

Bedrock is doing a huge service to the WordPress community, and I can see it being adopted as the standard for WordPress development. Hopefully as more people adopt it, the developer community at large will view WordPress sites on similar footing as more "professional" platforms.
