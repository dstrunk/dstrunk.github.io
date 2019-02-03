---
title: Removing com.apple.quarantine
tags: [mac]
category: General
description: Troubleshooting weirdly specific mac permissions issues
---

Today I was working on a new Magento 1.x install. A new install workflow usually goes like this:

- Download a zip of the newest Magento 1.x release
- Extract the contents into the folder of choice
- Update `app/etc/local.xml` to point to the correct database
- Add a new virtual host in my vagrant box pointing to the Magento 1.x folder of choice
- Install as necessary

That usually works fine, but today I was running into some issues. Everything looked fine, but the virtual host was throwing up 403 forbidden errors, leading me to think that there was some sort of permissions issue. Following the reference guides, I ran the following to make sure:

~~~bash
find . -type f | xargs chmod 400
find . -type d | xargs chmod 500
find var/ media/ -type f | xargs chmod 600
find var/ media/ -type d | xargs chmod 700
chmod 700 includes
chmod 600 includes/config.php
~~~

After that, reloaded the page, and ... nothing. I then ran `ls -la` inside the folder of the Magento install to make sure the `chmod` changes occurred, and noticed:

~~~bash
---snip---
-rw-r--r--@   1 dstrunk  staff    2329 Oct 27  2015 index.php.sample
---snip---
~~~

What's that `@` symbol? I'd never seen that before. Looking it up, I found that the `@` symbol represents a file or directory that has extended attributes. If you run the command `xargs -l <filename>`, you will see these attributes in the form of a reverse domain name; something like `com.apple.attribute`.

In my case, all files in my unzipped directory contained the attribute `com.apple.quarantine`. This is a feature that flags the content as having come from a potentially untrustworthy source. That's all well and good, but how do we remove this attribute? Pretty simple, it turns out. Simply run the following within the folder you're looking to unquarantine:

~~~bash
xattr -dr com.apple.quarantine .
~~~

All that said, my issue ended up being an improperly configured Vagrant configuration... but that was a good learning experience :).
