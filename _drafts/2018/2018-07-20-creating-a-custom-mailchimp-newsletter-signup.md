---
title: Creating a custom MailChimp newsletter signup
description: Creating a custom AJAX MailChimp newsletter signup using JSONP and VueJS (part 1)
---

MailChimp is a fantastic email campaign platform that has kept up its good reputation since its founding in 2001 (!).

I use MailChimp for one-off emails and a curated tech-based newsletter ([check it out here][newsletter]). For my purposes, you can't beat the price (free for 2,000 contacts and up to 12,000 emails per month).

[newsletter]: '/newsletter'

One unfortunate part of maintaining this site with a static site generator such as Jekyll is the lack of API support available. For instance, MailChimp offers an API, but that requires generating a client-side API key&mdash;one that needs to be kept secret, meaning I cannot use it client-side only. Luckily (for now), MailChimp has an undocumented JSONP alternative for some of their endpoints.
