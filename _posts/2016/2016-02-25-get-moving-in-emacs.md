---
layout: blog/show
title: Get moving in Emacs as a Vim user
tags: [Emacs]
description: Learn basic chords for moving around in Emacs
---

I recently decided to force myself into an immersion program with both
[Emacs][emacs] and [Elixir][elixir]. I reformatted the machine I was using to
learn [Arch Linux][arch], reinstalling with only the necessities--Emacs, Elixir,
Phoenix, Node and Git.

Instead of falling back on trusty Vim, I'm slowly accepting that I know nothing
on this machine and diving in. First up is Emacs--I can't expect to get around
in Elixir if I can't move around in the text editor!

At their cores, Emacs and Vim have one thing in common: users don't know how to
exit them when they first open them. For Vim, it ends up being `:q`, and, as I
have now learned, for Emacs, it's `C-x C-c`, or control + x, control + c. Emacs
is all about key chords, or two keys pressed simultaneously.

With the idea of chords in mind, let's get moving in Emacs. In Vim you'd use `h`,
`j`, `k` and `l` to move left, down, up and right respectively. In Emacs, the
idea is similar enough (the right way isn't arrows, and if you do it wrong we
will all laugh at you). Here are the key combos:

``` bash
C-p # up, or PREVIOUS
C-b # BACK
C-f # FORWARD
C-n # down, or NEXT
```

[emacs]: https://www.gnu.org/software/emacs/
[elixir]: https://elixir-lang.org
[arch]: https://www.archlinux.org
