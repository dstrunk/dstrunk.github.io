---
title: Resizing splits in Emacs
tags: [workflow, emacs]
category: Editor
description: Easily resize splits without your mouse
---

As part of my ongoing "Operation Switch to Emacs" initiative, I've tackled handling resizing splits without touching the mouse. Of course, to create a horizontal split you'll press `C-x 2`, and to open a vertical split you'll press `C-x 3`.

From there, the default Emacs functionality for resizing splits gets ugly. To enlarge the window you can press `C-u 6 C-x ^`, where the number 6 is the row size you're looking to resize to. To shrink, you'll put a negative before the number: `C-u - 6 C-x ^`. Pretty gnarly, to say the least. Instead of this, I've mapped Ctrl + Meta + hjkl (vim direction mappings) to resize accordingly. It's a bit wonky since it resizes according to the window you opened from, but it's a lot easier to remember than the aforementioned key combo:

~~~lisp
(global-set-key (kbd "M-C-h") 'enlarge-window-horizontally)
(global-set-key (kbd "M-C-j") 'enlarge-window)
(global-set-key (kbd "M-C-k") 'shrink-window)
(global-set-key (kbd "M-C-l") 'shrink-window-horizontally)
~~~
