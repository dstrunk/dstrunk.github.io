---
layout: blog/show
title: My dotfiles
tags: [dotfiles]
description: Using dotfiles to maintain parity between workstations
---

My [dotfiles config][dotfiles] is my baby. In its year of active development, I've switched jobs, setup a work laptop, and setup two laptops at home to work on special projects with. I've tested the waters with switching from vim to emacs, and I've bounced between Ruby on Rails, Magento in PHP and, most recently, Phoenix and Elixir work.

It can be argued that spending too long on configuration is not a good use of productivity, and that is a fair point... to a point. For me, though, I feel that comfort with your configuration allows you to stay in your editor longer, which makes you more productive in the long run. Plus, it's fun!

Here are some tactics I use to maintain my dotfiles.

## Git submodules

While most of my dotfiles are hand-crafted, there are some parts that I'd rather leave to those more involved. For example, within the `emacs/` folder, I use Harry Schwartz's very handy [sensible-defaults.el][sensible]. These sensible defaults take care of things like ensuring files end with newlines, enabling syntax highlighting, defaulting the line-length to 80 characters, and other things that you would expect / like to have in an editor.

**Another example:** I use [dotbot][dotbot] to handle the actual act of symlinking my dotfiles folder into capital DOT `.dot files`.

To that point...

## Dotbot

[Dotbot][dotbot] is fantastic for maintaining my dotfiles configuration. It expects a manifest of sorts, called `install.conf.yaml`, that symlinks your files to their expected location in your home folder. Using dotbot to manage the symlinking has allowed me to better separate my dotfiles repo based on concerns. It also allows you to run post-install hooks, like `git clone`ing a repo or running other shell commands after the symlinking is complete.

## To Do lists

I've found maintaining a to-do list for my dotfiles beneficial to ramping up my productivity within editors. If I'm not pleased with how something is working, I'll make a note to either learn how to do it better, or to setup something to fix it. For example, in emacs I want to resize splits similar to how I manage them in tmux (either shift + arrow keys or ctrl + arrow keys). I made a note of this, then came up with the below script a little later:

~~~ lisp
    (global-set-key (kbd "M-C-h") 'enlarge-window-horizontally)
    (global-set-key (kbd "M-C-j") 'enlarge-window)
    (global-set-key (kbd "M-C-k") 'shink-window)
    (global-set-key (kbd "M-C-l") 'shrink-window-horizontally)
~~~

This allows me to resize windows using Ctrl + Meta + hjkl (using `evil-mode`, this combination feels very familiar).

[dotfiles]: https://github.com/dstrunk/dotfiles
[sensible]: https://github.com/hrs/sensible-defaults.el
[dotbot]: https://git.io/dotbot
