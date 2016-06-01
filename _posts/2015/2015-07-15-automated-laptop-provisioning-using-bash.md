---
layout: blog/show
title: Automated laptop provisioning using bash
date: 2015-07-15 16:30:52.000000000 -05:00
---
Over the weekend, I decided to take a page out of [thoughtbot's][thoughtbot] playbook and create a laptop script for provisioning a new development machine. [Their script][tb-laptop] is a shell app that installs common utilities for web development, including [homebrew][brew], [rbenv][rbenv], [git][git], [postgres][postgres], and [redis][redis], among others. I love the idea of [automating all of the things][automate-job], so I decided to piggyback onto their idea and create a laptop script of my own. 

[thoughtbot]: //thoughtbot.com
[tb-laptop]: //github.com/thoughtbot/laptop
[brew]: //brew.sh/
[rbenv]: http://rbenv.org/
[git]: https://git-scm.com/
[postgres]: www.postgresql.org/
[redis]: //redis.io/
[automate-job]: //dstrunk.com/2015/06/04/automate-yourself-out-of-a-job/

[Grab the script here][ds-laptop]

[ds-laptop]: //github.com/dstrunk/laptop

My laptop script is extremely similar to thoughtbot's version, with some minor differences. For example, thoughbot uses zsh for their shell, but I prefer bash. There are some other command line programs I neglected to include, as I don't use them, and I added in some minor tweaks to how the command line programs were installed. Honestly I could have just forked thoughtbot's script and edited it to fit, but I find I learn more if I'm not mindlessly copying or editing somebody else's programs.

Also available is my [local laptop script][laptop-locals]. This script makes use of homebrew's [cask][cask] to install applications (Evernote, Dropbox and Chrome are notable examples). In addition to these apps, my local script clones [my dotfiles][dotfiles] and installs them via [rcm][rcm].

[cask]: http://caskroom.io/
[laptop-locals]: https://github.com/dstrunk/laptop/blob/master/laptop.local
[dotfiles]: https://github.com/dstrunk/dotfiles
[rcm]: http://thoughtbot.github.io/rcm/rcm.7.html

With all of this automation, a new computer can be setup with my familiar defaults within minutes. Simply download the laptop zip file from GitHub, `cd` into the unzipped folder, and run the following:

```
./laptop
```

Automated provisioning is great. This script takes the worry and dread out of setting up a new computer and hoping everything was taken care of, and allows for quickly getting started from scratch.
