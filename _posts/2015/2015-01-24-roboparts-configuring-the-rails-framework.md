---
layout: blog/show
title: 'Roboparts: configuring the Rails framework'
date: 2015-01-24 12:35:31.000000000 -05:00
---
Over the weekend I completed version 0.6 of my gem, [roboparts]. Roboparts is a command line tool that piggybacks on the Rails engine to create custom defaults that I use a lot when setting up new projects. To use, run `roboparts your-project` to build a customized rails framework with RSpec, FactoryGirl, and some other goodies already set up for you.

[roboparts]: https://rubygems.org/gems/roboparts

When setting up new Rails projects over the last couple of months, I realized I was spending a lot of time setting up a lot of boilerplate: installing gems,  generating the same scaffolds, adding test dependencies, and adding CSS or shared application layouts. Taking a page from one of my favorite development agencies, Thoughtbot, I decided to create a similar gem to their [suspenders].

[suspenders]: https://github.com/thoughtbot/suspenders

This was a huge learning experience for me. Writing a gem is something I'd always wanted to do, but found too daunting. I referenced the HELL out of suspenders, but am refining the gem as I learn more about the process. 

If you're interested, check out [the source] for an idea of everything involved.

[the source]: http://github.com/silentpost/roboparts
