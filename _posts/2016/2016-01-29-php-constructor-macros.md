---
title: PHP constructor macros
tags: [Development]
description: Automate tedious object-oriented PHP tasks with vim
---

I've been watching Jeffrey Way's [Laracasts][laracasts] recently--more
specifically, Object-Oriented Bootcamp--and became interested in a macro he used
to automate rote tasks such as adding properties to constructor methods. I
believe he was using Sublime Text to handle his snippets and macros, but I
replicated (more or less) the same tasks with vim.

First, install the vim plugin [UltiSnips][ultisnips]. Next, create a snippet in
`~/.vim/UltiSnips/php.snippets`:

~~~ sh
snippet _c "Constructor"
public function __construct(${1})
{
}
endsnippet
~~~

Now, add the following to your `.vimrc`:

~~~ sh
let @a='lyF${iprotected ;^C^CPo^C^Cjjo$this-> = ;^C^CPlybbbblp'
let @b='lyF$k?protected^Moprotected ;^C^CPjjj%O$this-> = ;^C^CPlybbbblp'
~~~

Now, when you are in a PHP file, you can type	`_c` then `<tab>` to create a
constructor function. To add your first property, add your first argument to the
constructor then press `@a`. To add more properties, add them to your
constructor and press `@b`. For those interested, the second macro ensures that
your properties are ordered as expected.

Looking for more? Check out [my dotfiles][dotfiles] for other efficiency boosts
in your vim productivity.

[laracasts]: https://laracasts.com "Laracasts"
[ultisnips]: https://github.com/SirVir/ultisnips "UltiSnips"
[dotfiles]: https://github.com/dstrunk/dotfiles "my dotfiles"
