---
layout: blog/show
title: Dynamic favicons with favico.js
tags: [javascript, workflow]
---

This is a seriously clever JavaScript plugin. If you've ever wanted to display a dynamic fav icon for things like badge counts or alerts, this plugin allows you to do so easily. This could come in handy if you want to notify users of an alert that's happening on your site and they're on another browser tab. There are also semi-silly features that it can handle, like playing a video in the favicon. I can't see too many uses for that one, although people might want to display the movie playing on the page so browser users know which tab is showing a video. Cheesy features aside, dynamic fav icons are a nice detail feature that could set your app apart from the crowd. Favico.js is primarily a result of HTML5 features; specifically, using a canvas element and the canvas element's method `toDataUrl` to write a dynamic base64 icon that is inserted into the icon link. Because of this, it only works in modern browsers ... But chances are, if you're developing a web app, those browsers are your primary audience, so no big deal that it doesn't support IE9 and lower. The script is *tiny*; coming in at 7.56 kb minified, and it doesn't have any dependencies, so you can use it on its own. Check out **favico.js** today! [http://lab.ejci.net/favico.js/](http://lab.ejci.net/favico.js/ "Favico.JS")
