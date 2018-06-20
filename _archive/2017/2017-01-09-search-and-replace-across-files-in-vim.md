---
layout: blog/show
title: Search and replace across files in Vim
tags: [workflow, vim]
category: Editor
description: Using buffers to search and replace across your project in Vim
date: 2017-01-09 1:30:00 -0500
---

Happy New Year! Let's get 2017 started right with some Vim tips to increase your
productivity when refactoring code on projects. Today we're focusing on finding
and replacing across your project directory.

Vim doesn't have built-in commands for project-wide search and replace, but it
_does_ provide the building blocks for us to compose our own.

## Easy mode: greplace.vim 

Of course somebody's already tackled this problem in the vibrant Vim ecosystem;
Yan Pritzker has modified an original plugin by Yegappan Lakshmanan to create a
full-featured solution in [greplace][greplace]. I'm basically rehashing
greplace's readme, but to use:

[greplace]: https://github.com/skwp/greplace.vim

1. Type `:Gsearch` along with your search term, hit enter and get a buffer
   window full of your search results.
2. Make replacements inside this buffer using vim's familiar
   `%s/search/replace/`.
3. Call `:Greplace` to make changes across all files.
4. Save changes across all files with `:wall`

This solution is great for me, and somewhat replaces the one thing I miss most
about emacs: dired.

If you're a glutton for punishment, and are looking for the manual way to find
and replace across a project in Vim, look no further than below.

# Hard mode: full manual

Honestly, hard mode isn't too hard nowadays. Before, [vimcasts][vimcasts] had an
entire episode dedicated to find and replace across projects, with the best
option involving a bit of vimscript to allow for writing only to files that
contained the search results (instead of writing to every file within the
project).

[vimcasts]: http://vimcasts.org/episodes/project-wide-find-and-replace/

With the introduction of Vim 8, we now have the ability to iterate over our
quickfix window and make changes (essentially what `greplace` was doing above).
Here's an example to show what I mean:

```bash
:arga **/*
:grep! /Old/g ##
:cdo %s/Old/New/ge | update
```

The first command, `:arga **/*`, adds every file in the directory to the
arguments list. The next line, `:grep! /new/g ##`, adds every instance of our
search term, "Old", into the quickfix (I'm using `grep!` with the bang at the
end so the first instance of the search doesn't get opened). Last we have the
new `:cdo %s/Old/New/ge | update`. `:cdo` acts on every file in the quickfix;
the `%s/Old/New/ge` searches through these files and replaces globally (the `e`
at the end supresses errors resulting from not matching in some files), and the
update saves all files found.

This isn't too big of a hassle, and can be further simplified with
[ack.vim][ack]:

[ack]: https://github.com/mileszs/ack.vim

```bash
:Ack foo
:cdo %s/foo/bar/ge | update
```

Not bad at all!
