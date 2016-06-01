---
layout: blog/show
title: Moving around in Vim
date: 2014-11-06 21:24:17.000000000 -05:00
---
Happy Friday! Today I'll touch on a major pain point for people first starting to learn Vim: navigating file structures! Let's get started.

## Splits

One of the frustrating things I first encountered when switching from Sublime Text to Vim was losing my beloved splits. But I didn't lose them of course, I just didn't know how to access them. Splits are just as easy (if not easier) as Sublime Text, we just have to know how to do it.

To do splits in Vim, use the commands `:split` and `:vsplit`. Using the commands by themselves, you'll open either a horizontal or vertical split within the folder structure of the other file you've got open. You can go straight to editing a file if you know what you're looking for by typing `:split <filename>`.

Of course as a Vim nerd, you'll want to save keystrokes. The industrious of you might have already found that you can just type `:sp` or `:vsp` to take care of the same window splitting.

### Moving around those splits

Well you've gotten the splits open, so now what? well, let's move from side to side (Or up and down. Whatever.). to move from split to split, type `ctrl-w <arrow key>`. Nice!

If you want faster keystrokes, you can edit your `.vimrc` as I have. This will allow you to press `ctrl + <hjkl>`, where `h` is left, `j` is down and so on. Just like we're used to with navigating Vim typically. Here's the setup for that:

~~~ 
" Quicker window movement
nnoremap <C-j> <C-w>j
nnoremap <C-k> <C-w>k
nnoremap <C-h> <C-w>h
nnoremap <C-l> <C-w>l
~~~ 

While we're editing our `.vimrc`, let's also make it so new splits open to the right and bottom. That seems more natural.

~~~ 
" Open new split panes to right and bottom
set splitbelow
set splitright
~~~ 

### Switching a split's position

If you're OCD like I am, you'll want your spec either below your model / controller, or whatever your preference. To switch your splits up, type `ctrl-w R`. That will immediately move your bottom split to the top and vice versa (or left to right; whichever is the dominant split).

## Conclusion

Of course that is the tip of the iceberg (as with all things Vim). Here are some other resources to help you move around Vim in a way you might be more used to with other editors:

* https://www.cs.oberlin.edu/~kuperman/help/vim/windows.html
* http://robots.thoughtbot.com/vim-splits-move-faster-and-more-naturally
