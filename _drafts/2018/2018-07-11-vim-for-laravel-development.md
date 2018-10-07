---
title: Using Vim for Laravel Development
description: 
categories: workflow
---

Many users of Intellisense-backed IDEs deride users of Vim, Emacs or other "archaic" text editors. This is understandable&mdash;it is very likely their only exposure to Vim was via vanilla Vi, installed by default on a fresh Ubuntu, Fedora or CentOS web server. This Vi had no syntax highlighting, line number support, fuzzy finding capability, code completion or up-to-date language support. These users probably needed to do a quick Google search just to figure out how to exit the damn thing. From there, Vi was avoided in favor of Nano for server-side editor needs, and any further mention of Vim sent the user recoiling from their previous experience.

Learning and becoming efficient in Vim is a labor of love, to be sure. The idea of different modes is offputting. 

## My dotfiles

Check out [my dotfiles][dotfiles] for a 

[dotfiles]: https://github.com/dstrunk/dotfiles

## Must use plugins

While you can find a full rundown of my vim config by doing a deep dive through [my dotfiles][dotfiles], here are a few plugins that I highly recommend for daily Vim work in Laravel and Vue.

* [fzf][] - 
* [vim-test][] - 
* [vim-composer][] - 
* [vim-blade][] - Required install for getting syntax and proper indentation support for blade templates.
* [vim-vue][] - 
* [languageclient][] - Microsoft's contributions to open source in the last couple of years have been fantastic. One thing I've been following closely is their creation of the open standard of language servers for providing syntax highlighting and intellisense for different languages. In the near future, this standard will make it easy for extensible editors (vim and emacs included) to have intellisense like more focused IDEs such as Visual Studio.
  * I'm currently using [felixfbecker's language server][php-language-server] to provide intellisense completion for PHP.
  * I'm using [ncm2][] for autocompletion of all of the language servers, and there's an official package for JavaScript&mdash;[ncm2-tern][js-language-server].

[fzf]: https://github.com/junegunn/fzf
[vim-test]: https://github.com/janko-m/vim-test
[vim-composer]: https://github.com/noahfrederick/vim-composer
[vim-blade]: https://github.com/jwalton512/vim-blade
[languageclient]: https://github.com/autozimu/LanguageClient-neovim
[php-language-server]: https://github.com/felixfbecker/language-server
[ncm2]: https://github.com/ncm2/ncm2
[js-language-server]: https://github.com/ncm2/ncm2-tern
