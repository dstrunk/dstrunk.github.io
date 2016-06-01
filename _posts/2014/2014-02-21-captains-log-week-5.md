---
layout: blog/show
title: Captain's log, week 5
date: 2014-02-21 07:30:21.000000000 -05:00
---

Hiya! Hope your week's treated you well. I received the MEAP version 13 of *Rails 4 in Action* on Monday night. It's very well-written (despite some grammatical errors that I'm sure will be taken care of in the final version), and I'm antsy for the authors to complete it so I can receive my hard copy! I got to working on the newest completed chapter. Needless to say, jumping back into the codebase after a month off felt like this: ![I have no memory of this place](http://res.cloudinary.com/dstrunk/image/upload/v1414083569/Z9rfG_lpcm5c.gif) After the initial "wtf is all this" feeling wore off, I knocked out the new chapter pretty quickly. I'll write a full review of *Rails 4 in Action* in the future (there's a pretty comprehensive review in my drafts now; I'm just waiting for the final book), but I'll share my initial opinionated impressions here: I like this book's approach to Rails dev **a whole lot more** than the Ruby on Rails tutorial by Hartl. Git commits are quicker, tests are a bit more basic (and are truly focused on writing a failing test before generating models, controllers, etc), and the overall writing style is easier for me to understand. That's not to take anything away from Hartl—I'm going through his tutorial in tandem, and it's very well done! It's just, well, different strokes and all that. I've been continuing my work on building the development site I talked about last week. I'm playing with extending layouts a bit more via YAML and Liquid (to a newbie it sounds a lot harder than it actually is). So, for instance, my about page has this additional information in the YAML front matter block:

	---
	layout: about
	title: about
	
	profile_img: /images/profile.png
	profile_name: Daniel Strunk
	profile_title: Developer
	profile_email: daniel@silentpost.io
	profile_twitter: dstrunk
	profile_fb: silentpost
	profile_instagram: silentpost
	profile_github: silentpost
	---

 From there, I can dynamically insert all of those values with Liquid, and let Jekyll take care of compiling the correct information:

~~~ 
<div class="about">
	  <img alt="{{ page.profile_name }}" src="{{ page.profile_img }}" />
	  {{ page.profile_name }}
	  {{ page.profile_title }}, Silentpost
	  ...
~~~ 

That's an extremely simple example of what Jekyll can do. As you can see, **very** simple stuff, but it's really turning me on to the Jekyll ecosystem. I haven't even touched the cool parts yet—things like what it can do with categories and tags. Jekyll's smart enough to group similarly named categories and tags together, and build a site based on that category structure for you. That's a terrible explanation, so I'd recommend [checking out the docs](http://jekyllrb.com/docs/frontmatter/). Until next week!
