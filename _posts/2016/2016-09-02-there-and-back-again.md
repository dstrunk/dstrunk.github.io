---
layout: blog/show
title: My old friend, vim; or, there and back again
tags: [workflow]
description: Switching back to vim after a brief affair with emacs...
---

For the [last couple of months][learning-emacs], I've been attempting to adjust
my workflow to Emacs. The Elixir community seems really on board with Emacs,
with some notable vim users switching over (Chris McCord, developer of Elixir's
Phoenix framework, among others). And I really, honestly tried. But... I just
couldn't do it.

Below are some things I just missed _too much_ that made me ultimately switch
back.

{% include shared/image.html name="vim-tmux.gif" alt="A sample of my workflow" %}

[learning-emacs]: http://danielstrunk.me/blog/2016/02/09/emacs/

## Tabs

Tabs are probably the number one reason I switched back. I use tabs in both tmux
and in vim, and my workflow is incredibly dependent on then in both programs.

### in tmux

In tmux, I'll use tabs to keep a separate window for running a headless
JavaScript server and a Rails or Phoenix server. That way I can edit files in
one tmux tab, and if anything goes amiss with an acceptance test, I can tab over
to the servers to see exactly what the stacktrace error was.

### in vim

In vim, it's nice to have tabs for context switching. Especially when
refactoring, I'd like my tests to be alongside the class I'm refactoring in one
tab, perhaps a configuration file and my routes in another, etc. I'm sure
there's a way to simulate this behaviour in Emacs (the editor is incredibly
extensible, I know), but I'd rather not have to install a plugin or write elisp
to mimic the functionality I'm used to.

## Terminal emulators vs a terminal

Perhaps my favorite thing about my configuration is its full integration with
Tmux, which allows me to create splits to have my editor on top and a
full-blown terminal on the bottom. Emacs has a terminal emulator, but it's just
that--an emulator. My terminal is a bit customized, so things not running
natively tend to run a little strangely.

And I like doing a lot of things in the terminal, to be honest. Though I have
[tpope/vim-fugitive][fugitive] for running Git commands within vim,
[vim-test][vim-test] for running tests within Rails or Phoenix projects, and
[tpope's vim-rails][vim-rails] for running Rails generations and migrations
within vim, I'll also jump into the terminal for more intensive work, such as
running pry to test out a block, or doing some heavier git commands to blame or
praise those who came before me :).

80% of the time the emulator works fine, but that last 20% is enough of an
annoyance to give me pause.

[fugitive]: https://github.com/tpope/vim-fugitive
[vim-test]: https://github.com/janko-m/vim-test
[vim-rails]: https://github.com/tpope/vim-rails

## Multiple workspaces

Tmux makes it easy to create multiple workspaces. With [this line in my tmux
dotfiles][switch-workspaces], I can press `C-s C-j` to bring up a list of all of
workspaces. Typing will present a fuzzy finder that filters results, which I can
further navigate through by pressing `C-p` or `C-n` (up or down--those emacs
keybindings come in handy sometimes :).

[switch-workspaces]: https://github.com/dstrunk/dotfiles/blob/master/tmux/tmux.conf#L72


## Summary

In the end, things basically came down to muscle memory; my vim + tmux
configuration is tested and true, and it's been hacked to my preferences for
about two years now. Jumping into another editor brought out some pain
points I'd previously ironed out that I just didn't feel like working through
again. In this case, tried and true beat out new and shiny for me.

If you're interested in my vim configuration, check out [my
dotfiles!][dotfiles] The parts I'm most fond of reside in the `vim/` and `tmux/`
folders.

[dotfiles]: https://github.com/dstrunk/dotfiles
