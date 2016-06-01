---
layout: blog/show
title: 'Link: 80,000 Plaintext Passwords: An Open Source Love Story in Three Acts'
date: 2014-11-03 21:38:36.000000000 -05:00
---
> [80,000 Plaintext Passwords: An Open Source Love Story in Three Acts](http://www.confreaks.com/videos/4183-rmr2014-80-000-plaintext-passwords-an-open-source-love-story-in-three-acts)

This is an entertaining talk given at Rocky Mountain Ruby Conference in Boulder, CO this year. Presenter [T.J. Schuck](https://twitter.com/@tjschuck), a developer at [Harvest](http://getharvest.com), goes over some poor choices/hopefully not-so-common mistakes developers make when handling authentication / passwords in general. **Spoiler alert:** The long and short takeaway is [use bcrypt](http://bcrypt.sourceforge.net/). I love this quote by Schuck:

> By virtue of the fact that I *have* users, I **have to be** [a security] expert. Ignorance is not an excuse.

The presentation explains how authentication used to be handled (Plain text, hashed, hashed + salted, and finally bcrypt), and why bcrypt is a great choice for long-term maintained password protection.

I haven't watched the rest of the videos from Rocky Mountain Ruby Conf, but I'd suggest going through the library and picking out some other topics that interest you.
