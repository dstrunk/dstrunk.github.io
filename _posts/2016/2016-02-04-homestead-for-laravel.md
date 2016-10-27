---
layout: blog/show
title: Setting up Homestead for Laravel development
tags: [php]
description: Setting up Homestead for Laravel development
---

Today I set my computer up with [Homestead][homestead], a [Vagrant][vagrant] box
that sets up a development environment. Specifically, as of this post, it comes
with:

- Ubuntu 14.04
- Git
- PHP 7.0
- HHVM
- Nginx
- MySQL
- Sqlite3
- Postgres
- Composer
- Node
- Redis
- Memcached
- Beanstalkd

## Prerequisites

Setting up homestead is easy: first, download [Vagrant][vagrant] and a virtual
machine environment such as [VirtualBox][virtualbox]. After downloading, add the
Vagrant box `laravel/homestead` by running the following:

~~~ bash
vagrant box add laravel/homstead
~~~

## Installing Homestead

After those are setup, install Homestead by cloning the repository in your home
directory. Run the following:

~~~ bash
cd ~
git clone https://github.com/laravel/homestead.git Homestead
./Homestead/init.sh
~~~

Setup for Homestead doesn't take long. You'll find its setup in the
`~/.homestead/Homestead.yaml` file. This file defines folders to be synced from
your computer to the vagrant box--folders that contain your apps:

~~~ yaml
folders:
  - map: ~/Code
    to: /home/vagrant/Code
~~~

You then define sites:

~~~ yaml
sites:
  - map: homestead.app
    to: /home/vagrant/Code/Laravel/public
~~~

Finally, you need to remember to edit the `/etc/hosts` file on your local
machine. Add the following to map the above domain, "homestead.app", to the
vagrant box:

~~~ bash
192.168.10.10 homestead.app
~~~

That's it! Once all that is setup, run `vagrant up` inside the `~/Homestead`
directory. Vagrant will provision your machine with all the defaults you set in
your yaml file. I like this approach better than using tools like [MAMP][mamp] or the
like; it feels more portable, and I like the idea of being able to version
control an environment in case other developers need to jump on the project.
Tools like this and [Docker][docker] bring a level of parity between development
and production environments that is quickly approaching 1:1, which is a great
thing.

That's certainly not all you can do with Homestead; you can have a homestead
configuration per project, setup HHVM for some projects, use NFS file systems,
among other things. [Check out the full Homestead documentation for a full
rundown.][homestead].

[laravel]: https://laravel.com
[homestead]: https://laravel.com/docs/5.2/homestead
[vagrant]: https://vagrantup.com
[virtualbox]: https://www.virtualbox.org/wiki/Downloads
[mamp]: http://www.mamp.info
[docker]: http://www.docker.com
