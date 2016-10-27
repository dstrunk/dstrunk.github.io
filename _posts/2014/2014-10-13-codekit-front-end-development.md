---
layout: blog/show
title: CodeKit 2 for front end development
tags: [development]
---

Back when I was first getting into front end development, I used [CodeKit](https://incident57.com/codekit/) to handle optimizing all of my assets. It was great; it compiled my Sass files to a single stylesheet, minified JavaScript, and optimized images. As I dug deeper into development, I decided to drop CodeKit in favor of new hotness: Grunt, Gulp, and all those CLI programs that handled the same things for free and with only minimal configuration. Grunt and similar tools are great because they allow for task runners that can be community submitted. Despite a full range of community-supported tasks, I found I was only running the common things: Sass compilation, minifiers, and optimizers. So while it was nice having the option of a broad range of features, I didn't really need them.

### Tedium sets in

 Almost two years later, I'm back to CodeKit. Last night, I was setting up a front end project, and was dreading setting up yet another project with Grunt. Installing and managing dependencies, making a Gruntfile, and dealing with an ugly user experience (IMO, of course). I remembered how painless CodeKit was in the past, so I decided to check out their site on a whim. And, well, it's gotten so much better! CodeKit 2 has been rewritten from the ground up with some great features. It's got Bower support for easy asset installation in addition to the usual minification, concatenation, and image optimization you'd expect. having a beautiful GUI is icing on the cake. Add to all that the fact that you get a discount if you've bought a previous version of CodeKit, and I was sold (again). I downloaded CodeKit, dragged my new project folder into CodeKit, and was ready to start developing. I'm certainly not knocking Grunt, Gulp, Broccoli, or [insert task runner of choice here]. And I'm certainly glad I gave them all a go—those experiences mean I will at least be familiar with the setup if I pick up a project somebody else has set up. But for the foreseeable future, I'm sticking to CodeKit, which makes front end development a breeze. [Check it out](https://incident57.com/codekit/)!
