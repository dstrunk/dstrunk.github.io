---
title: Auto deploy with git
tags: [git, workflow]
category: PHP
description: Using git hooks to automatically deploy sites
date: 2017-01-23 13:30:30 0500
---

Occasionally I'll pick up smaller development jobs outside of work. Usually
these jobs follow a standard template: WordPress on shared hosting with a theme
already in place. And up until now, my workflow for these jobs looked similar:
spin up a new WordPress instance, download their theme, create a child theme,
then copy the result to the shared server via FTP. But it's 2017, we can do
better than that! For this most recent job, I decided to utilize git's hook
features to automate deployment using a better (and safer) workflow.

After reading, you will be able to update your website with a simple `git push
production master`!

## Prelinary setup - shared hosting SSH access

First, you'll need to have SSH access to your shared hosting environment. This
is available on most sites under "Home > Security > SSH Access" in cPanel.
You'll need to add a new key; I won't go over that here, but GitHub has a great
how-to on [generating a new SSH key][genssh].

[genssh]: https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/

After following the how-to on generating a new SSH key, add the public key to
cPanel's SSH Access. If you're on a mac, here's an easy command to copy your
newly generated SSH key to the clipboard:

```bash
cat ~/.ssh/id_rsa.pub | pbcopy
```

Now that the key is copied, in cPanel, click "Import key", and paste the public
key into the appropriate text box. Note that you don't need the private key for
this deployment. I'd also recommend naming the key something like "id\_rsa.pub"

## Server setup

For this part, we're going be working with these two directories on our server:

- Server site: `$HOME/public_html/site.com`
- Server git repository: `$HOME/vcs/site.git`

Now that you've got SSH access, you should be able to connect to your shared
hosting server via the command line. try it now; connect to the server using
your login name and the server's IP using SSH:

```bash
ssh name@1.1.1.1
```

### Creating the repository

On the command line, type the following:

```bash
cd $HOME
mkdir -p vcs/site.git && cd vcs/site.git
git init --bare
```

Using the git command `--bare` means the folder will only contain version
control about our site.

### Creating the hook

Git provides hooks to run commands after certain tasks have been completed. Its
documentation isn't that great, but DigitalOcean have done a great job of
documenting things on [using git hooks to automate development and deployment
tasks here][do-git]. The git hook we're interested in is `post-commit`.

[do-git]: https://www.digitalocean.com/community/tutorials/how-to-use-git-hooks-to-automate-development-and-deployment-tasks

On the command line (assuming we are still in the `/var/vcs/site.git` folder),
run the following command:

```bash
cat > post-receive
#!/bin/sh
git --work-tree=$HOME/public_html/site.com --git-dir=$HOME/vcs/site.git checkout -f
```

After writing this, press "Control-d" to save. Now set proper permissions so the
git hook can be executed:

```bash
chmod +x post-receive
```

This `post-receive` hook does all the heavy lifting for our deployment. It is
run every time files get pushed to the `/var/vcs/site.git` repository, and
`work-tree` defines where the files will be transferred to. The `checkout-f`
command ensures our old files will be overwritten on successful push.

## Our local site

Locally, the only thing that needs to be done is add the remote path of the
production website to our repository. I'll assume you've already got a local
folder for `site.com`, and all files are checked in and committed. On the
command line, after `cd`ing into the correct directory, run the following:

```bash
git remote add production ssh://name@1.1.1.1/~/vcs/site.git
```

Notice the `~` tilde; we have to specify that we want the home folder for our
user in the SSH path so we can get to our repository correctly.

From here, it's business as usual. Run the following command:

```bash
git push production master
```

Your changes will be pushed up to the shared hosting server, and your files will
be added to `$HOME/public_html/site.com`!

## Conclusion

This is pretty handy, and is by no means the only thing you can do with git
hooks. For example, you could write a local `post-merge` hook that SSHes into
the production server, creates a database dump, copies it locally and updates
your local database, so your local environment is always up-to-date with
production.

Perhaps the biggest shortcoming of these git hooks is that they cannot be stored
in version control and shared with teams. This is understandable as they have
the potential for remote code execution, but it would be lovely to store an
entire project's build process into a tool that's already being used... I
suppose that's what Jenkins CI is for :)
