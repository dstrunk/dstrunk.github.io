---
layout: blog/show
title: Github dotfiles
tags: [git, dotfiles]
category: General
---

I work across a couple of computers for development; a Mac Pro at work, and a Macbook Air at home. For the most part, I've kept my development environments similar, but I recently ran into a problem where my work computer died and I needed to transfer everything to a new Mac Pro. Enter [GitHub dotfiles](http://dotfiles.github.com/).

### Dotfiles to the rescue!

 Dotfiles provide a way to backup, restore and sync various programs in your toolbox. Things like OS user settings, terminal settings, or keyboard shortcuts can all be backed up and saved on GitHub. You might not think you need to back up all your user settings now, but trust me, it's worth it if something unexpected happens. When I started up my new computer, I simply downloaded [my most commonly used apps](http://dstrunk.com/blog/my-front-end-development-workflow/) and entered a couple of commands from my dotfiles into the terminal, and I was up and running! Manually setting up those settings might have otherwise taken hours, and I still would've probably forgotten something. This is handy in and of itself, but the great thing about GitHub's dotfiles is the community. You can fork anybody's dotfiles and use theirs as a base (I personally forked [Mathias Bynens' dotfiles](https://github.com/mathiasbynens/dotfiles) and customized from there). If you work off of multiple computers, and even if you don't--you should be backing up your dotfiles. You never know when they might come in handy!
