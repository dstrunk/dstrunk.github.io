---
layout: blog/show
title: That asset pipeline tho
tags: [ruby, rails]
---

Have I mentioned how much I love the asset pipeline? Seriously, it's great. For the uninitiated, the [asset pipeline](http://guides.rubyonrails.org/asset_pipeline.html) is a core feature of Rails. At its most basic, it provides a framework to concatenate and minify JavaScript and CSS files. The cool feature that gets me excited about developing within the Rails ecosystem is its ability to write JavaScript or CSS assets in other languages such as CoffeeScript, Sass and ERB. You say, "Okay, okay—but I can do that same kind of thing with a [task runner](http://gruntjs.com)*!" That's true, but that requires configuration, additional dependencies, etc etc. If you want to do the same thing with the asset pipeline, all you need to do is append the desired file extension to your target. For example, if you'd like Rails to parse your CSS with Embedded Ruby (ERB) first, simply append .erb to the file name you're targeting (example.css.**erb**). The asset pipeline will compile the last file extension and work its way inward to the last file extension. A more in-depth example: Say you have a model called `Group`. Group has two attributes, `background` and `color`. Let's also say you have an undefined number of instances for `Group`; these instances can be created and modified by users of your application, and the users can change the `color` and `background` attributes. Now, to take care of applying these attributes, you could either muck around in your view, adding inline styles to your code to take care of the user-generated colors. Or, you could head over to the asset pipeline, append a file extension and have your code compile in a much cleaner way. Here would be your file `group.css.erb`:

	<% Group.all.each do |group| %>
	  .group_<%= group.name.parameterize %> {
	    background: <%= group.background %>;
	    color: <%= group.color %>
	  }
	<% end %>

 Now, when your app fires up, the asset pipeline will compile the ERB, adding any available `Group` instances to your css automatically. Easy, right? And that's just CSS. You can also handle JavaScript in the same way, which one might argue is more powerful and impressive. Also available is the ability to "chain" extensions. For example, **example.css.scss.erb** will compile ERB, then take care of Sass, ending with CSS. Cool, right? That's it for this (brief) overview. Have any more tips or tricks about the asset pipeline? Let me know in the comments! *I'll save task runners for another post :)
