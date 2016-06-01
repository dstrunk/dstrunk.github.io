---
layout: blog/show
title: Web scraping with Ruby and Nokogiri
date: 2014-07-24 08:30:22.000000000 -04:00
---

If you're building a site that compares data from different sources, chances are you might find yourself dealing with a couple of sites that don't have an API. But us web developers, we're a resourceful bunch, and we won't let a little thing like a lack of accessible information stop us, right? Right! Before APIs were the norm, an easy way to grab information on the interwebs was through web scraping. If you're using Ruby, a great library for web scraping is [Nokogiri](http://nokogiri.org/). After reading this article, if you're interested in a deeper dive through web scraping, I'd suggest reading the Nokogiri documentation; it supports selecting web elements using CSS selectors or XPath, and is pretty robust. For this contrived example, we're going to search through Amazon for the top 10 highest rated Ruby on Rails books in the "Books" category. First thing's first, grabbing the necessary url to poll for our wanted information. That part is easy: just go to Amazon, select the Books department, search for "Ruby on Rails", then sort by Avg. Customer Review. So, we've got this gnarly URL to work with: `http://www.amazon.com/s/ref=sr_st_review-rank?keywords=ruby+on+rails&qid=1405713252&rh=n%3A283155%2Ck%3Aruby+on+rails&sort=review-rank`. It's pretty ugly, but it works. So now, let's get started with our Ruby script. Actually, first you should install Nokogiri, so do that. Run `gem install -g nokogiri` in your terminal. This will add Nokogiri to your global gems so you can require it in the file we're about to make. Do that now. I'll wait. Okay! Now that Nokogiri is installed, fire up your text editor and create `amazon-scrape.rb`. It doesn't actually matter what you call it, but name it something relevant. Since web scraping is pretty easy, I'm going to post the whole script then go through line-by-line. Let's check it out.

~~~ 
require 'nokogiri'
	
url = 'http://www.amazon.com/s/ref=sr_st_review-rank?keywords=ruby+on+rails&qid=1405713252&rh=n%3A283155%2Ck%3Aruby+on+rails&sort=review-rank'
doc = Nokogiri::HTML(open(url))
	
rails_books = doc.css("a.title").map { |book| "#{book.text} - #{book.attribute('href').to_s}" }
	
puts rails_books[0..9]
~~~ 

Adding the above script into `amazon-scrape.rb`, then running `ruby amazon-scrape.rb` in terminal will output the name and link href into your terminal! Here's the line-by-line:

~~~ 
require 'nokogiri'
~~~ 

This just requires Nokogiri, the scraper that handles heavy lifting.

~~~  
url = 'http://www.amazon.com/s/ref=sr_st_review-rank?keywords=ruby+on+rails&qid=1405713252&rh=n%3A283155%2Ck%3Aruby+on+rails&sort=review-rank'
doc = Nokogiri::HTML(open(url))
~~~ 

The `url` is given our ugly URL as a string. The `doc` variable utilizes the Nokogiri library to open the url variable.
 
~~~ 
rails_books = doc.css("a.title").map { |book| "#{book.text} - #{book.attribute('href').to_s}" }

puts rails_books[0..9]
~~~ 

The real magic happens in this one-liner. First is `rails_books`: Nokogiri uses familiar CSS selectors to traverse the DOM. By calling the method `css` on `doc`, and passing in "a.title", we get a list of all elements that fit this pattern. Next we add these values to an array, adding the text of the `a.title` element and the href attribute of the `a.title` element. From there it's a simple matter of printing the first ten links out to our terminal via `puts rails_books[0..9]`! Pretty straightforward, right? 

### Conclusion

Web scraping can get pretty ugly, having to traverse the DOM via xpath or CSS. It highlights an inherit problem with web scraping, and one you should note if you're thinking about depending on an external site's structure for your content: everything is dependent on how the site exists at the present moment. If for whatever reason Amazon decided to change how its sorting was done, or built its keywords using a different POST variable, we'd have to adjust our web scraper to accommodate. As long as we understand this, however, and don't build a program dependent on another website's structure, we should be okay.
