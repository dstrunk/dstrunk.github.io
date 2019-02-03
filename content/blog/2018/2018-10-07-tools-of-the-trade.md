---
title: My Development Tools of the Trade
tags: [workflow]
category: general
description: Multi-language development tools I use to focus on Getting Things Done
---

## Hello, world!

I originally started blogging at the end of 2012, with a post titled "My front-end development workflow". In that post, I detailed some of the tools, languages and frameworks I was using at the time (if you're interested in a trip down memory lane, you can [check it out here][front-end-workflow]). In July 2018 I decided to revamp my site by cleaning up the structure, use some new tech I've been interested in, and give the site an overall refresh. Keeping with the theme of the first post I decided to create a new post touching on my workflow. I'm a sucker for process, and I'm sure others out there might be interested in refining their workflow or looking for some new recommendations. So, without further ado, here is my updated development tools focused on getting things done.

[front-end-workflow]: /blog/2012/my-front-end-development-workflow/

## Languages / Frameworks

- [Laravel][laravel] - I love Laravel for the simple fact that it abstracts away the monotonous parts of building an app. 99% of the apps I've ever built have needed authorization, authentication, and other sensible defaults that end up being boilerplate. I appreciate that I can switch from app to app and expect the same conventions. Bonus points for being in the same language I use in my day-to-day, PHP.
- [Vue][vue] - This is the first frontend framework that really "clicked" for me. React might be more practical from a developer mindshare perspective, but I never really dug JSX or the tooling.\* For my personal projects, Vue has been a fantastic way to quickly add reactivity to my frontend. By using Laravel Mix as my build pack of choice, Vue is pretty plug-and-play.
- [Tailwind][tailwind] - I've fought in the past to maintain a CSS design system long-term, and have **never** been able to make one portable enough to bring over to a new project. Tailwind alleviates me of that responsibility. Using a utility-first approach, I can build out the UI iteratively, and extract components if I ever find myself repeating clumps of classes on elements. See examples of that on this site&mdash;much of the site is built using straight utility classes, but some things, like the "Originally posted on \<date\>" string, or categories, are repeated, and have been pulled out into their own classes for repeatability's sake.
- [Laravel Mix][laravel-mix] - I've used Laravel Mix on Elixir Phoenix projects, Magento stores, Laravel apps, and this blog, which is a Jekyll install. I love its ability to provide the power of Webpack in a wrapper that more closely resembles Gulp, which I used previously.
- [Magento][magento] - Here's one that might not be on others' lists. I got hired as a Magento developer two and a half years ago, and have been working in it ever since. Learning it was a chore to be sure, but now that I know what's going on, it's not so bad. The dangers of Magento are also its strengths--It's incredibly extensible, allowing you to create anything you can imagine. I tend to think of Magento modules as discrete Laravel apps acting as microservices. Just make sure you don't use that extensibility to paint yourself into a corner.

\*Note that my experiments with React's ecosystem were very early … Things have changed since then 🙂.I actually used React on an app at work, and the ecosystem has gotten quite pleasant.

[laravel]: https://laravel.com
[vue]: https://vuejs.org
[tailwind]: https://tailwidcss.com
[laravel-mix]: https://github.com/jeffreyway/laravel-mix
[magento]: https://magento.com

## Tools

First, a disclaimer: many of these tools are Mac-only.

- [Neovim][neovim] - Love my Vim. I've been using Vim since I began learning backend development using Ruby and Rails. The Ruby community is pretty thoroughly on board with Vim, so there are tons of resources out there for customizing the editor. Somewhere along the way I switched to PHP, Laravel and Magento development, but my love of Vim stayed. NeoVim is a fork of original Vim, meant to update the editor when the Vim maintainer decided not to accept certain PRs. NeoVim's killer features are an embedded terminal and async support (though Vim 8 has this now, as well). I don't personally use the embedded, but am interested in setting up my testing environment to run directly to a NeoVim terminal instead of relying on tmux so heavily. Speaking of …
- [Tmux][tmux] - I use tmux as an augment to my vim usage. Running tests in Vim opens a tmux split that I can then focus to view the test output. I'll also have a couple of splits open in a new tab that run build processes such as `npm run watch` or `php artisan serve`. I use different tmux sessions to switch between projects without losing my terminal layout. It's become a pretty indespensible part of my workflow.
- [Sketch][sketch] - Sketch superceded Adobe's suite of products for me when Adobe switched to a subscription-based payment system. Which is ironic, since Sketch is kind of doing the same thing now. I enjoy Sketch for prototyping sites and creating SVGs, and find that I can do 90% of what I previously used Illustrator for at a fraction of the price.
- [Table Plus][table-plus] - I use several different databases in my daily work&mdash;MySQL, Postgres, and MSSQL, as well as a couple of Redis servers. Table Plus can handle all of these, no problem. It's a newer app, so it's not _completely_ bug free, but I haven't run into any issues in my day-to-day.
- [Things][things] - I've used a ton of to-do apps in the eternal quest for Getting Things Done&trade;. Omnifocus, Things, Asana, Todoist, Evernote … you name it, I've likely kicked the tires on it. I've stuck with Things the most of all of these, because it's simple. Create a list, check them off, done.
- [Bear][bear] - Though Mac's Notes app has gotten better, Bear beats it (and Evernote), hands down. I can write in markdown, which I'm comfortable with (I've been using markdown for this blog for six years now). Pay the $14 a year to sync across Mac and iPhone and support this great app.
- [1Password][1password] - Best password manager I've ever used, no contest. Better UI than LastPass, great integration with Mac / iPhone … 'nuff said.
- [Expressions][expressions] - This is a cool app&mdash;Add a list of strings in one panel, add a regular expression in the other pane, and Expressions will highlight the strings that match the regular expression. This is great for testing (and learning) regular expressions, something I have been historically bad at.
- [Dash][dash] - Dash is an app that downloads (and keeps current) documentation for any languages or libraries you choose. I use it for offline reference, and to do quick searches on the current word under my cursor in vim using [dash.vim][vim-dash].
- [Spectacle][spectacle] - I briefly used Arch Linux with i3 window manager. One thing I absolutely loved was moving and resizing windows using the keyboard. Spectacle gives me a similar level of control with windows on the Mac, and I can't see going without it anytime soon.

[neovim]: https://neovim.io
[tmux]: https://github.com/tmux/tmux
[sketch]: https://sketchapp.com
[table-plus]: https://tableplus.io
[things]: https://culturedcode.com/things/
[bear]: http://www.bear-writer.com
[1password]: https://1password.com
[expressions]: https://www.apptorium.com/expressions
[dash]: https://kapeli.com/dash
[vim-dash]: https://github.com/rizzatti/dash.vim
[spectacle]: https://www.spectacleapp.com

## Honorable mentions

### Languages / Frameworks

- [Elixir][elixir] / [Phoenix][phoenix] - I've done a few tutorials to wrap my brain around functional programming concepts, but have had to hold off on using Phoenix and Elixir on new projects in favor of focusing on my daily work. I am looking forward to diving deep into the Elixir world, however&mdash;from its compiling code down to the battle-tested Erlang VM, to its high concurrency promises, and its familiar syntax (as a former Rubyist), Elixir and Phoenix are on my short list for using.

[elixir]: https://elixir-lang.org
[phoenix]: https://phoenixframework.org

### Tools

- [Parallels][parallels] - Many of our internal tools are .NET, so I've been learning C# development after hours to better-support our other teams. While C# is possible on any platform (hello, .NET core), it's definitely easier on Windows. To that end, I installed a small Windows 10 partition on my laptop. I installed Parallels to switch between OSes, and found that Parallels comes with a mode called "coherence". Coherence mode is a way to run Windows applications on the Mac, as though they are native Mac applications. In my limited experience opening up IE11 for browser testing or Visual Studio for C# dev, it has been insanely seemless. I highly recommend Parallels, but it didn't make my list because it's just not used that often.

[parallels]: https://www.parallels.com
