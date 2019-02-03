---
title: Hub for a better GitHub experience
tags: [git]
category: Git
---
I recently installed [Hub](https://hub.github.com/), a command line wrapper for git that pairs nicely with GitHub. Hub makes it easier to fetch repositories, navigate project pages and fork repos from the command line.

For Mac, installation is simple; if you have [Brew](http://brew.sh/) installed, it's as easy as typing `brew install hub` in the command line. From there, type `alias git=hub`, then test it out:

~~~
git version
=> git version 1.7.9
=> hub version 1.11.0
~~~

If you see anything like the above, then it works!

## Playing with Hub

Hub makes managing GitHub through the command line a LOT simpler. Take a look at some ways Hub can improve your workflow:

* Say you want to clone one of your projects (dotfiles, for instance). Instead of `git clone git://github.com/YOUR_USER/dotfiles.git`, you can simply type `git clone dotfiles`. If you've already configured git, Hub already knows who you are, so it smartly fetches your dotfiles repo from the server.

* If you want to clone somebody else's project, add the user's name before the project like this: `git clone another_user/dotfiles`.

* Say you want to look at all of the current project's issues... Just type `git browse -- issues` while in a project.

## An example workflow

"How will this help me as an open source contributor?" you might ask. Good question! Here's an example workflow:

~~~
git clone github/hub
cd hub

# create topic branch
git checkout -b ds-feature
  # making changes...
git commit -m "feature complete!"

# fork the repo
git fork

# push changes to remote
git push YOUR_USER ds-feature

# open pull request from your branch
git pull-request
~~~

That was easy! There's a lot more that Hub does, so I'd suggest reading the documentation neatly laid out at https://hub.github.com. In my opinion, Hub not only saves keystrokes, but makes understanding a typical GitHub workflow a lot easier to wrap your brain around. Try it today!
