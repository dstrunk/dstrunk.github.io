---
layout: blog/show
title: asdf version manager
tags: [workflow]
description: Use asdf to manage different versions of every language you know
date: 2016-11-25 14:00:00 -0500
---

*First, the TL;DR: check out [asdf][asdf]!*

[asdf]: https://github.com/asdf-vm/adsf

I first began web development as a "PHP" developer (if it could be called that):
editing and creating new WordPress themes and writing the ugliest procedural
code you could imagine. There were no worries of object-oriented programming
(OOP), no opinions formed about which framework or language was the best or worst, no
editor wars, nothing. Sometimes I miss those days :)

Since then I've sampled lots of languages. Wanting to finally learn OOP, I tried both
Python and Ruby before settling on Ruby. Interested in functional languages, I
tried my hand at Scala and Haskell before landing on Elixir and Erlang. And of
course, I've always had to deal with front-end development, so Node is
perpetually installed on all machines. One thing all of these languages have in
common? Your world can quickly fall apart when dealing with different language
versions, packages and libraries between versions, and permissions among the
lot. I can't count the number of times permissions have tripped me up with gems
and front end dependencies.

If you aren't a fan of firing up VMs for every single project or language
you want to sample, `asdf` is most likely for you.

## Introduce asdf into your workflow

`asdf` is the easiest package manager you'll ever have to type (look ma, one
hand!). If you are interested in sampling languages as I am, are working on a
machine that is less amenable to running a ton of VMs (whaddup macbook 12"?), or
are working on several different frameworks across different language versions,
check out asdf. Installing is simple:

```bash
# Clone to $HOME/.asdf
git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.2.0

# For Ubuntu or other linux distros
echo '. $HOME/.asdf/asdf.sh' >> ~/.bashrc
echo '. $HOME/.asdf/completions/asdf.bash' >> ~/.bashrc

# OR for Mac OSX
echo '. $HOME/.asdf/asdf.sh' >> ~/.bash_profile
echo '. $HOME/.asdf/completions/asdf.bash' >> ~/.bash_profile
```

After installing asdf itself, you can begin installing plugins, which are then
used to then install different versions of languages. For our next examples,
I'll be using Elixir as our language of choice. Assuming asdf is already
installed, let's install Elixir:

```bash
# Add Elixir
asdf plugin-add elixir https://github.com/asdf-vm/asdf-elixir.git

# Add Elixir v. 1.3
adsf install elixir 1.3.4
```

... And so on and so forth. If you want a global Elixir version, set it!

```bash
asdf global elixir 1.3.4
```

Running this command will add the version to `$HOME/.tool-versions`.

## Add a local version to your project

Adding a language version to your project is super easy as well:

```bash
asdf local elixir 1.3.4
```

This will add a `.tool-versions` file to your root directory. Inside the file is
the name of your language and the version (super easy, right?). This is great
for back-end languages, but I think it's so much more necessary for front-end
development (nodejs, I'm looking at you).

## What about my language-specific package managers?

Look, rbenv is great. I used it for years! And, though not familiar, I'm sure
pyenv is great as well. As are others.

... But ...

Why not one to rule them all? Not only does asdf have a ton of languages
supported already, but it has an API to allow for easily creating a new language
of your choice.

If you're in a bind and can't build out a new language implementation in
time, asdf's got you covered as well. If you create a `.asdfrc` file your home
directory with the following:

```bash
legacy_version_file = yes
```

asdf will attempt to use your previous version manager's defaults (if it is
supported as a language within asdf ... which means you *do* have to add the
language before attempting this step). This means your `.ruby-version` files for
`rbenv` will be supported in addition to asdf's.

If you're still not convinced that asdf can replace rbenv / rvm / pyenv / exenv,
consider asdf's ballad (which might not do much to convince you, but is great
prose by the plugin's author):

```
Once upon a time there was a programming language
There were many versions of it
So people wrote a version manager for it
To switch between versions for projects
Different, old, new.

Then there came more programming languages
So there came more version managers
And many commands for them

I installed a lot of them I learnt a lot of commands

Then I said, just one more version manager
Which I will write instead

So, there came another version manager
asdf version manager - https://github.com/HashNuke/asdf

A version manager so extendable
for which anyone can create a plugin
To support their favourite language
No more installing more version managers
Or learning more commands
```

I am *obviously* a fan of adsf, if only because of how many times I've been
burned by this problem in the past. If you're in a similar boat, give asdf a
try!
