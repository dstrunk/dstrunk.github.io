---
layout: blog/show
title: 'Monstra: a flat-file CMS'
tags: [php]
---

I can't seem to get enough of these flat-file CMSes lately! While I enjoy WordPress development, I think we can all agree that WordPress can be overkill for many clients' needs. To that end, I've been playing around with a new flat-file PHP CMS I found recently, called [Monstra CMS](http://monstra.org/ "Monstra CMS").* *<small>Just because I haven't played around with a ton of flat-file CMSes lately ([Stacey](http://www.staceyapp.com/ "Stacey") and [Kirby](http://getkirby.com/ "Kirby") are the only ones I'm truly familiar with), you may see comparisons to them.</small>

## Before we start

There are some things you need to understand when using Monstra: first and foremost, it's a CMS for developers. The WYSIWYG editor is minimal and expects the editor to have knowledge of HTML. Creating themes and snippets is easy, but requires knowledge of minor PHP. You could hand off a Monstra-powered site to a client, but I would plan on making it completely idiot-proof and still expecting something to break via the editor occasionally. Of course, when it comes to breaking things, clients will always find a way ;). Now...

## The good

- **Monstra is completely open-source (read: free to use!).** Use it to your heart's desire! This is a big one for me. I was previously (and still am, to a certain extent) enamored with the Kirby CMS, but was a bit put off by the license. $49 per site isn't insane per say, but coming from the world of WordPress, it could be a deal breaker for some. Monstra doesn't have this cash restriction, which is nice.
- **Twitter bootstrap**; the front end is built on this. That makes for quick and easy development, easy extendability, and a mobile-ready site out of the gate with their default theme.
- **The dashboard is easily understandable to those familiar with the WordPress dashboard.** I really like the admin side; it's surprisingly robust for a flat-file system. Supporting things like semi-advance metadata configuration, simple access views, and templating, you can tell that Monstra was developed with an eye toward WordPress.

![Monstra admin page](http://res.cloudinary.com/dstrunk/image/upload/v1414083574/Screen-Shot-2013-04-16-at-09_59_15_f71rtz.png)

- **Blocks.** It's easy to create a block of formatted text that can be injected into other pages via either a shortcode (Monstra uses curly braces instead of square braces) or PHP.
- **User administration.** for a simple CMS, this is surprisingly robust. You can set up editors for the back end, restricting editors to page creation and editing, or you can set up users, and restrict page views to logged in users.
- **Update (2013-18-06):** **Active central plugin repository.** Many thanks to [Sergey (Awilum)](http://awilum.monstra.org/ "SERGEY ROMANENKO | Awilum"), the creator of Monstra, for notifying me of this. It looks like [http://plugins.monstra.org](http://plugins.monstra.org "Monstra: Plugins") is now live, with a healthy number of useful plugins available. There are the usual suspects, such as a blog plugin, a guestbook or a contact form. These are expected plugins, but their arrival shows that Monstra isn't just another flash in the pan.
- **Upadate (2013-18-06): Active forum.** The forum seems well-populated, with developers ready to answer questions and troubleshoot for you. A definite plus.

## The bad

- **The [documentation](http://monstra.org/documentation "Monstra documentation") for Monstra is slim to none in most places.** I really hope they address this soon; lack of proper documentation just stinks of laziness. The bit of good news in this area is, at least the actual code is properly documented.
- <del>**No active central plugin site.** This just comes down to Monstra's "wet behind the ears" nature, but the plugin site ([http://plugins.monstra.org/](http://plugins.monstra.org/ "Monstra Plugins")) takes you to a coming soon page. It's smart that the developer chose to have a central plugin site, but, well, it's not up yet.</del>**Update:** see the good :)

Some questionable calls were made; things like recreating a WYSIWYG editor instead of using the robust and extendable [TinyMCE](http://www.tinymce.com/ "Tiny MCE"), for example. I understand that it's a great learning exercise to recreate something from scratch, but the WYSIWYG editor of Monstra feels incomplete and a bit cumbersome, in my opinion. I couldn't see handing this off to a client with the editor in its current state. Compared to Kirby, Monstra's code base is a bit more schizophrenic. Don't get me wrong; it's well-done, and everything works as expected. It's just that Kirby's structure was so well-defined and open to extendability. Kirby's code was a joy to dig through and extend, and (coming from a junior back-end developer, at least), Monstra's code feels a bit less structured. I honestly think that comes down to Kirby CMS's use of the [Kirby PHP toolkit](http://toolkit.getkirby.com/ "Kirby Toolkit"); that thing abstracts away a **ton** of complex PHP code, kind of acting like a jQuery for PHP (sorry, this is a Monstra review, not Kirby!). I honestly feel bad writing about those first two points; it's obvious that Monstra is a newcomer to the CMS scene, and these things can easily be fixed in the future. But so it goes.

## Conclusion

At the end of the day, Monstra is a solid choice for simple site development. Its early development cycle shows in places, and the lack of documentation means that you better be comfortable with PHP development if something breaks, but I'm confident that Monstra can hold its own against other, more mature CMSes. If you're looking into flat-file based CMSes, I'd keep my eye on Monstra. *site:* [Monstra](http://monstra.org/ "Monstra")
