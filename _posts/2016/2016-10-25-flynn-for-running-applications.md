---
layout: blog/show
title: Flynn + DigitalOcean for easily running applications
tags: [Vagrant, workflow]
description: Configure a platform for running apps in seconds on your own servers using Flynn
---

I've written several toy apps over the years, created in Rails, Sinatra,
Laravel, and, most recently, Phoenix + Elixir. Though I think it's a great
exercise getting your app running on a production server somewhere, for apps
like mine which are, in most cases, prototypes or portfolio examples, something
like [Flynn][flynn] might be more up your alley.

[flynn]: https://flynn.io

Flynn is an open source Platform-as-a-Service (PaaS) for running applications in
production (similar to Heroku, but on a server of your choice). Out of the box,
it supports:

- Different buildpacks, which means all of my above applications are supported.
- Routes and load balances traffic for each app on the platform
- Includes built-in support for Postgres, MySQL and MongoDB

Perhaps my favorite feature, though, is Flynn's [cloud installation][flynn-cloud].
After installing Flynn, run `flynn install` on your local machine, and your
browser will fire up with steps to install via either Amazon AWS, DigitalOcean,
Microsoft Azure or SSH. Since I run my portfolio apps on DigitalOcean, the only
thing necessary for me to do was:

[flynn-cloud]: https://flynn.io/docs/installation/cloud

1. Select DigitalOcean from the first step
2. Add credentials, which includes generating an API key from DigitalOcean
3. Install

From there, you're taken to a dashboard containing a barebones Flynn install on
a newly provisioned DigitalOcean server. But the coolness doesn't end there;
After connecting your GitHub account to this new Flynn installation, you're able
to one-click spin up any applications that happen to follow [12 factor
app][12-factor] guidelines.

[12-factor]: https://12factor.net

After discovering Flynn, I went from nothing to a host of apps running in
separate processes on a machine provisioned on DigitalOcean in literal minutes!

Though my example was just for portfolio apps, Flynn is **far** more than just a
prototyping tool--it can fully replace Heroku, providing both horizontal and
vertical scalabiltiy quickly through their web interface. Give it a try!
