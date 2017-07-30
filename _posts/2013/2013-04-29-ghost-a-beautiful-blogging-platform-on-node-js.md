---
layout: blog/show
title: 'Ghost: a beautiful blogging platform on Node.JS'
tags: [nodejs, javascript, ghost]
category: JavaScript
---

Around six months ago, [John O'Nolan](http://john.onolan.org/ "John O Nolan") published an idea: to [simplify and beautify the WordPress blogging platform](http://john.onolan.org/ghost/ "Ghost - the idea"). I loved the initial idea, and immediately signed up to receive updates via email. Then, nothing. There was hardly a whisper of any progress via [the website](http://tryghost.org/ "Try Ghost") or Twitter account. Until today.

![Ghost intro image](http://res.cloudinary.com/dstrunk/image/upload/v1414083575/main1-624x286_hyeccf.jpg)

I received an email at around 8:30AM EST notifying me that Ghost was being funded via [Kickstarter](http://www.kickstarter.com/projects/johnonolan/ghost-just-a-blogging-platform "Kickstarter: Ghost: Just a Blogging Platform"). I must say, I'm thoroughly impressed by what I've seen so far; the dashboard is beautiful, the posting is nice (Markdown with a live preview, and dropping in images straight from the desktop to the browser with little to no admin configuration!), and the content management looks dead simple. Out of the box it comes configured with Twitter and Facebook support, which is awesome. The crew in charge of development and design have a great track record with products (watch [the video](http://kck.st/ZKpHXr) for more information)

![Ghost proposed dashboard](http://res.cloudinary.com/dstrunk/image/upload/v1414083574/53cb7cffa27c89a43bc91b40f604f7e2_large_a4s5v9.jpg)

One thing that might deter some users is the choice to build this in Node.js. The idea of Ghost was originally conceived as a fork of the WordPress (WP) core, which is of course built in PHP. This was nice because most, if not all, hosting providers support PHP out of the box (it's the most ubiquitous language on the web). It also involved the WP community, with the promise of a familiar base for both theme and plugin creation. While support for NodeJS is growing, you might not be able to use your shared hosting provider any more (I personally use Dreamhost for my site). Alternative hosting providers that support NodeJS are [nodejitsu](https://www.nodejitsu.com/ "nodejitsu"), [heroku](https://www.heroku.com/ "Heroku"), and most dedicated hosting environments such as [Linode](https://www.linode.com/ "Linode") or [Media Temple](https://www.mediatemple.net/ "mediatemple").

I don't think the WP community will be too miffed with having to recreate themes and plugins either; theoretically, plugins would now be installable via [npm](https://npmjs.org/ "NPM"), and the themeing would be done in[ mustachejs](http://mustache.github.io/ "mustache") which semantically separates business and presentation logic. John's screenshot of the [templating differences between WP and Ghost](http://cl.ly/OXhm) look completely painless to migrate.

I think the idea to create Ghost as an app separate from WP is a great idea; as nice as WP is, it is certainly old and suffers from a lot of code bloat and old programming paradigms. Decoupling Ghost from WP gives developers a chance at a fresh start. Developing in Node is another plus—the community is strong, and the platform is blazing fast. As someone with a good grasp on JavaScript and a relatively poor PHP background, I love the idea of developing both the front- and the back-end in the same language.

An unintended consequence of developing in Node + Express that I can see is the ease of developing a RESTful JSON API for Ghost. I didn't notice this in the Kickstarter campaign, but after having developed minor applications in Node + Express, I know how easy this could be in theory. I'm interested to see John O'Nolan and crew's thoughts regarding this.

I'm excited to see the development of this project. The initial idea was beautiful, and the prototype exceeded my already high expectations. link to Kickstarter campaign: [http://www.kickstarter.com/projects/johnonolan/ghost-just-a-blogging-platform](http://www.kickstarter.com/projects/johnonolan/ghost-just-a-blogging-platform)

<small>(images borrowed from the kickstarter campaign.)</small>
