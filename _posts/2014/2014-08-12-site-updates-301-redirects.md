---
layout: blog/show
title: Site updates and 301 redirects
tags: [development]
---

Something's ... different. If you've been reading for a while, you might have noticed a not-insignificant update made to the site over the weekend. I decided to separate concerns a bit, adding dedicated sections for portfolio pieces and resume entries. No, I'm not looking for a job! I just felt the need to utilize WordPress more as a CMS and less like I was (blank pages in WordPress with all of the copy updated in a custom page through the theme—I don't want to talk about it.) Though the front-end changed significantly, most of the heavy lifting was accomplished on the back-end with custom post types, custom taxonomies, and a completely new structure built on [Underscores](http://underscores.me/) and [Bootstrap](http://getbootstrap.com/). But I won't bore you with details on that (in this post). What I really want to talk about is 301 redirects. See, since the front page is no longer my latest posts, my site structure changed url-wise. Changing urls from a WordPress standpoint is trivial, but if you want to do something like this, you better do it right. 301 redirects will help you accomplish this correctly so your page rank doesn't suffer much on search engines. First, for the uninitiated: HTTP 301 is a response status code meaning "Moved permanently". It lets users and search engines know that they need to update their old urls to the new one. The search engine bit is key; you don't want all current search engine results to point users to 404 pages! Google's got a great video detailing changing urls with 301 redirects, and what they expect from a search engine standpoint: https://support.google.com/webmasters/answer/93633?hl=en If you're looking to add a redirect to your site, you're going to be working with your `.htaccess` file. The correct syntax for adding a 301 redirect looks like this:

    redirect 301 /oldpage.html http://site.com/newpage/

 Now that you know the syntax, open up the `.htaccess` file in the root directory of your WordPress installation. You should see something like this:

```sh  
# BEGIN WordPress
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]
...
```

 Above the `#BEGIN WordPress` comment, add your redirect lines:

```
redirect 301 /oldpage.html http://site.com/newpage/
redirect 301 /oldpage2.html http://site.com/newpage2/
```

That's it! This could probably be accomplished with a WP Plugin, but it's easy enough that I'd rather not install a plugin for it. 301 redirects might seem tedious to implement, but if you're worried about your page rank, or your users in general (read: you should be), they are imperative.
