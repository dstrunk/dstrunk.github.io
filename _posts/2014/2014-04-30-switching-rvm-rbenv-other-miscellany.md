---
layout: blog/show
title: Switching from RVM to RBenv (and other miscellany)
tags: [ruby]
---

I've been a big fan of [RVM](http://rvm.io) for a while now. I started using it when I first began developing Rails apps my first go-around (not this 100+ day streak, but about six months prior). It is great for getting up to speed quickly, and it does its job well. I even backed it on Bountysource! But it does too much (for me). That might sound ridiculous, but a core tenet of the UNIX philosophy is for tools to do one thing, and do them well. Following this ideology, RVM is too powerful—maintaining Ruby versions in addition to installing Rubies and maintaining gemsets. In an attempt to better follow this idea, I took this weekend to switch from RVM to [rbenv](http://rbenv.org). To keep the functionality provided from RVM, I also made sure [Bundler](http://bundler.io) and [ruby-build](https://github.com/sstephenson/ruby-build) were installed to manage gemsets and installing Rubies, respectively. There were a couple of hiccups along the way, but I managed to clean up my file system and get everything back to where it needs to be for continued development. Rather than rehash other peoples' work, here are some great guides to get people interested in Ruby on Rails development up to speed. The first link details how to set up a Rails environment from scratch, and the second link details how to switch from RVM to rbenv (what I needed):

- [http://www.createdbypete.com/articles/ruby-on-rails-development-setup-for-mac-osx/](http://www.createdbypete.com/articles/ruby-on-rails-development-setup-for-mac-osx/)
- [http://robots.thoughtbot.com/using-rbenv-to-manage-rubies-and-gems](http://robots.thoughtbot.com/using-rbenv-to-manage-rubies-and-gems)

Another thing that might interest users looking to get started with Rails development, but might not be tech-savvy enough to fool with the command line: [Tokaido](https://github.com/tokaido/tokaidoapp). Tokaido is a Kickstarter-funded project created by developer heavy-hitter [Yehuda Katz](http://yehudakatz.com/). I haven't personally tried it out yet, but the app is aimed at making the development setup of Rails painless for new users.
