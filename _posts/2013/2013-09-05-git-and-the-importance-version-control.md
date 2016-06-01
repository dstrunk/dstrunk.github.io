---
layout: blog/show
title: Git and the importance of version control
date: 2013-09-05 12:59:52.000000000 -04:00
---

Version control is a glorious thing. Let's run through a scenario:

> Your client asks you to move the navigation from the left side of the page to the right. That's well and good, except you're working from a theme that was created from somebody else, and they didn't make switching navigation as easy as changing a couple of class names. So, you finish that change. The client is happy with this change, and all is well and good. They continue to make changes, and you're happy. Then, the client says, "Hey, can you move the navigation back to the left?" Your stomach lurches, you throw a tantrum, your world is in flames, the walls melt around you etc.

 Wouldn't it be nicer if you could revert to before you switched your navigation, then merge those changes with the changes you made later? Enter git, the powerful distributed version control and source code manager (SCM).
 
## Git basics

Git can be a daunting program. It exists on the command line, has a ton of features, and is a (welcome) departure from the way you're probably used to creating versions (especially if your workflow involves naming a ton of files "\*\_v1.php, \*\_v2.php, etc for different versions). First, you'll need to install Git. Go to this website, and select the latest stable release for your platform: [http://git-scm.com/downloads](http://git-scm.com/downloads "Git Download").\* Now that you've downloaded Git, let's get started. I'm working on a Mac, and for the sake of brevity, I'll assume you are as well. <small>*After downloading the Git, you'll notice the website directs you to a free book for learning Git. I highly suggest using that resource, as my post will only highlight initializing, adding files, and committing. Seriously, this is not even scratching the surface. Git is HUGE, people.</small>

## Initial setup

Once git is installed, you'll need to set up a couple of things. Fire up your terminal and type in the following:

~~~ 
git config --global user.name "Your Name"
git config --global user.email your@email
~~~ 

These settings will identify you for all of your git repositories. This is handy for keeping track of changes across users if you're working on an open source project with many users, for instance. 

## Initialization and adding files

Initializing a folder with git is easy. With your terminal still open, you will cd ("change directory" command in unix/linux-based systems) into the directory you are looking to version control. type in `cd your/directory/here` in your terminal, then hit enter. Is your directory empty? Good. Let's initialize git and start adding files. In your terminal: `git init`

That's it! Start adding files. Seriously, it is that simple. Note that none of your changes have been saved to Git yet. You'll want to add all of the files you've added so far. You can type each file manually (the command is `git add FILENAME.php`), but, if you're adding a library of files or something similar, you probably have no idea what's been added. So, here's a shortcut I use frequently to add all files in the directory: `git add .`

That period is not a typo—it will add all untracked files in your git repository. Next, we'll need to commit (save) those changes in case we need to revert back to this point in time: `git commit -m "commit notes here"`

You can put anything you like into your commit notes, but I suggest being as detailed as you can. You might need to go back to an earlier point in time and will get confused if your git log for previous commits reads something like "yet another commit to fix things". Once you've saved your changes, you'll want to store everything somewhere. Most people use [Github](https://github.com/ "Github") to keep track of their changes. Lately I've been using [Bitbucket](https://bitbucket.org "Bitbucket") by [Atlassian](https://www.atlassian.com/ "Atlassian"); they allow multiple private repositories for single users, which is perfect for occasional freelancers that don't want their clients' work open sourced on github, as it were—in other words, me. Whatever your pick for storage, sign up and they will walk you through the process of adding a remote repository on their servers. For Atlassian, you will click "create", add in all of your repository details, and click create repository. If you've been following along with this post, you'll have an existing project to push up, so select this option. They will provide details for setting up a remote server; here's an example:

~~~ 
cd /path/to/my/repo
git remote add origin https://username@bitbucket.org/username/repository-name.git
git push -u origin --all # pushes up the repo and its refs for the first time
git push -u origin --tags # pushes up any tags
~~~ 

Because I'm lazy, I'm only going to break down one line of this; the first line (cd) was already detailed above, and the bottom two lines are broken down in the line comments (the text after the hash symbol). Here is the second line: `git remote add origin https://username@bitbucket.org/username/repository-name.git`

This adds a remote repository called "origin", and supplies the credentials for this remote repository; your username and the repository name. Once your remote repository has been set up, all that is needed to push any changes up to this remote repository is a simple command: `push`. After adding all of your untracked files (`git add .`) and committing your changes (`git commit -m "commit text here"`), use this command: `git push origin master`

In natural English, this says "Git, push my commit **to** origin **from** master". Master being the directory you are working in, and origin being the remote directory being pushed up to. It's a bit counterintuitive in my opinion, but them's the breaks. Terminal might ask you for a password at this point, and you'll fill it out with the password for your remote repository (Github, Bitbucket, what have you).
 
## Wrapping up

The pervading Git mantra is "commit early and commit often". There's no telling when your application will go from "workable" to "an exploding pile of dog code," and you'll be thanking your lucky stars you have a backup that you can revert to. Trust me, I speak from experience! ;)
