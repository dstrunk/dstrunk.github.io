---
layout: blog/show
title: Autopost from Jekyll to Twitter
tags: [Workflow]
description: Learn how to automatically post from Jekyll to Twitter
---

Automatically tweeting after posting a new blog entry with Jekyll doesn't need
to require complicated development scenarios full of git post-commit hooks, API
keys or registering apps with Twitter. It might feel a little low-tech, but all
you need is [IFTTT][ifttt] and some knowhow.

First, get a link to your RSS feed. If you don't have RSS set up for your Jekyll
instance, you can grab a sample from [snaptortoise/jekyll-rss-feeds][rss-feeds].
Next, sign up for IFTTT and create a new recipe. You'll need to link your
Twitter account as an action for the recipe, and you should have default values
to add the title and the URL of the post. Activate the channel, and your good to
go on that front.

Now, when you post an article to Jekyll, a few moments later the RSS feed should
be picked up via IFTTT and your post will kick off on Twitter.

[rss-feeds]: https://github.com/snaptortoise/jekyll-rss-feeds
[ifttt]: https://ifttt.com
