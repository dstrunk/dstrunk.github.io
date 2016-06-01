---
layout: blog/show
title: Some clever train-pun title
date: 2014-03-07 07:30:54.000000000 -05:00
---

It's now week ... I don't even know any more! Week 6, I think. Maybe week 7 officially—my [GitHub contributions log](https://github.com/dstrunk) is showing 51 days now, so there's that. It's been a busy week, day-job-work-wise. That's my excuse for the lack of blog posts (and a somewhat schizophrenic blog post) ... but there's never an excuse for not continuing my Ruby on Rails quest! This week I continued my [URL shortener project](https://github.com/dstrunk/shorter), writing my first unassisted unit and integration tests. The thing I really love about TDD is just how gratifying it is. I'll admit I cheated a bit—creating a model and doing some light validation beforehand—but writing those first tests and seeing no errors made me almost giddy. Next up on that front is collecting analytics for links clicked; browser information, number of clicks, and so on. Oh! Here's one reason why I enjoy Ruby so much: it's so *expressive*. Check out this code for a random upper / lowercase / number generator that is building URLs for the URL shortener:

	def random_string(var_length)
	o = [("a".."z"), ("A".."Z"), (0..9)].map { |i| i.to_a }.flatten
	(0..var_length).map { o[rand(o.length)] }.join
	end

with that extremely simple two-line method, I'm able to add all letters (both upper and lower case) and numbers, combine them into a single array, and select a random string of any length. Pretty cool huh?\* I also tinkered a bit more on the [Typist](https://github.com/dstrunk/typist) project. It's pretty close to where I want it to be as a boilerplate, but I'd like to make it a bit more modular so parts can be removed / added a bit easier. Welp, that's all this week; have a good weekend and until next time!
 
<small>* Yes I'm aware I could use [SecureRandom](http://www.ruby-doc.org/stdlib-1.9.3/libdoc/securerandom/rdoc/SecureRandom.html); but creating this method was good practice for me :)</small>
