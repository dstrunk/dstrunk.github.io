---
title: Squashing git commits with rebase
tags: [git]
category: Git
---
The prevailing mantra with git, or any version control system for that matter, is "commit early, commit often." For the last year, I've been doing so, which is a Good Thing. And if I were to continue working as a team of one developer, that might be fine. But if you're looking to commit to an open source project like I am, you'll probably want to learn how to clean up your git commits so entries don't include "forgot to add file" or "stupid mistake". That's where squashing comes in.

Squashing commits, in simple terms, is pretty much what it sounds like—squashing together multiple commits into a single commit. That allows you to commit early and often (with mistakes, as things sometimes go), while still enjoying a clean, respectible git repository when you finally push your changes to master. How do you do it? Glad you asked.

Let's say you've made a few small commits, and want to make a larger commit out of them. You can use interactive rebasing to take care of this:

~~~
git rebase -i HEAD~4

pick 000001a Add files
pick 000002b Oops! Forgot to add files
pick 000003c Added external library to make changes easier
pick 000004d Large code changes that actually matter

# Commands:
# p, pick = use commit
# e, edit = use commit, but stop for ammending
# s, squash = use commit, but meld into previous commit
~~~

This command will tells git that you want to rebase the last four commits from where `HEAD` is to `HEAD~4`. From there you're taken to an editor with text in it, and an explanation of what can be done. Change your file to look something like the below:

~~~
pick 000001a Add files
sqaush 000002b Oops! Forgot to add files
squash 000003c Added external library to make changes easier
squash 000004d Large code changes that are worthy of a longer commit.
~~~

This essentially tells git to combine the all of the commits with the first in the list. Once saved, another editor pops up:

~~~
# This is a combination of 4 commits
# The first commit's message is:
Add files

# This is the 2nd commit message:
Oops! Forgot to add files
...
~~~

This file shows all of the previous commits, and allows you to modify the message of the squashed commits based on the rest of the commits involved. Edit the message as necessary, and [be explicit](http://robots.thoughtbot.com/5-useful-tips-for-a-better-commit-message). Save the file and quit, and your commits will be successfully squashed!

If you run into conflicts during the rebase, they're usually pretty painless. Git is solid at leading you through: display the conflicting files, allow you to edit the files, `git add`, then `git rebase --continue` to resume the squashing process.

If you take a look at your `git log`, you'll see the history reflects your squash. Pushing to master will display to users only the history you want them to see—the meat of your commits, and not your mistakes.
