---
layout: blog/show
title: Reverse engineering Rails sites for fun and profit
date: 2014-05-02 08:30:56.000000000 -04:00
---

What a sensationalist title! Sorry, all those BuzzFeed articles are getting to me. It does speak to what I've been doing for the last week, though (and heartily recommend others do the same to better understand how dynamic web apps, and websites in general, are built). "Reverse engineering" sounds so official, but it basically entails viewing the source of websites and looking at Header information in Google Chrome developer tools. Using these tools on known, successful Rails applications, you can get a better idea of how the big boys structure their models and process requests. As far as viewing the source goes: because of how Rails structures forms, it becomes pretty easy to guess what the Embedded Ruby looks like, if there are nested models, etc. For example, one hidden input field might suggest a `fields_for` helper nested in a `form_for` helper; multiple hidden fields with the value ***_id** probably suggests a model that belongs to a lot of other models. By using **Inspect element** in Google Chrome, you can change values around, submit the form and predict which values change. I think that "real world" homework is just as, if not more, important than traditional book learning / armchair development. Why not stand on the shoulders of giants to get a better view? Until next time, stay curious!

