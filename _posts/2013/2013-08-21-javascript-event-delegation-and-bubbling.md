---
layout: blog/show
title: JavaScript event delegation and bubbling
tags: [javascript]
---

I like to periodically read through this [github repository](https://github.com/darcyclarke/Front-end-Developer-Interview-Questions "GitHub - Darcyclarke - Front-end Developer Interview Questions") to make sure my front end developer chops are up to snuff. I ran across one talking about event delegation, and couldn't quite answer it. Being self-taught from the jQuery to JavaScript camp, I always handled event delegation via the jQuery-handy **.on** method. (A quick example: `$('.object').on('click', '.child-element', function() {});`) But I didn't really know how it worked, or why it was considered a best practice. So, to the internet!

## First, event delegation with vanilla JS

Leave it to David Walsh to set me straight in an easy to understand article: [http://davidwalsh.name/event-delegate](http://davidwalsh.name/event-delegate "How JavaScript Event Delegation Works"). Paraphrasing an already short article: Say you have a parent element with several child elements, and you want to find out when a user clicks one of those child elements. Instead of adding an event listener to the child elements (which becomes troublesome, especially if you frequently add or remove child elements), you can add an event listener to the parent element, and detect when a child element is clicked when the event bubbles up to the parent element.

## What exactly is bubbling, anyway?

That led to another question: what exactly did 'bubbling' mean? I'd heard vaguely of events 'bubbling', but didn't really understand that part either. That question lead me here: [http://stackoverflow.com/questions/4616694/what-is-event-bubbling-and-capturing](http://stackoverflow.com/questions/4616694/what-is-event-bubbling-and-capturing "Stack Overflow - What is Event Bubbling and Capturing"). Bubbling does exactly what it sounds like. An event is captured by the inner-most element, and is propagated (or raised, or 'bubbled') to outer elements. Tying back into event delegation, a click event on a child element bubbles up to the parent event, which is recognized by the event delegator.

## The (bubble)wrap up (I'm sorry)

Event delegation is an important topic worthy of much more than this short post—especially when considering web apps, where elements are created and destroyed by the hundreds. Not utilizing event delegation could quickly grind a web app to a halt. Conversely, utilizing event delegation results in less ties to the DOM and less memory to process.
