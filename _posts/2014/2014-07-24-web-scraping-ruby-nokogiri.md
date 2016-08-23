---
layout: blog/show
title: Web scraping with Ruby and Nokogiri
---

**updated on Aug 23, 2016**

*This article previously referenced Amazon, and had some issues that might have
broken for some users. The post has been updated to ensure it works as of Aug
23, 2016.*

If you're building a site that compares data from different sources, chances are you might find yourself dealing with a couple of sites that don't have an API. But us web developers, we're a resourceful bunch, and we won't let a little thing like a lack of accessible information stop us, right? Right! Before APIs were the norm, an easy way to grab information on the interwebs was through web scraping. If you're using Ruby, a great library for web scraping is [Nokogiri](http://nokogiri.org/). After reading this article, if you're interested in a deeper dive through web scraping, I'd suggest reading the Nokogiri documentation; it supports selecting web elements using CSS selectors or XPath, and is pretty robust.

## Getting started

To start, let's first install Nokogiri. Run the following:

```bash
gem install nokogiri
```

This command will install Nokogiri on your system. It's better to use a Gemfile
for installing Ruby libraries, but for this example, installing on our system is
fine.

Now we're going to search through New York's Craigslist for some results of some
pets in need of adoption. By digging around a bit, we've found a URL that will
return the results we're looking for:
`http://newyork.craigslist.org/search/pet?s=0`.

## The scrape

So, we've got Nokogiri installed, and we've got our URL. Let's get started.
First, create `craigslist-scrape.rb`, then add the following to this file:

```ruby
require 'open-uri'
require 'nokogiri'

url = 'http://newyork.craigslist.org/search/pet?s=0'
doc = Nokogiri::HTML(open(url))

pets = doc.css("a.hdrlnk").map { |pet| "#{pet.text} - #{pet.attribute('href').to_s}" }

puts pets[0..9]
```

After adding this to your file, you can try running `ruby craigslist-scrape.rb`.
The terminal should output the text of some links, as well as some relative URLs
that accompany it so you can save them to a spreadsheet for further tracking:

```bash
Please adopt or foster a dog or cat from the NYACC kill list today!! - /jsy/pet/5746473654.html
Poor kitten needs your help - /brx/pet/5746472508.html
Please help my kitten in need - /fct/pet/5746469771.html
Please help my kitten - /wch/pet/5746466978.html
6 month old Holland lop needs home today - /brx/pet/5746451660.html
2 month old kittens - /brx/pet/5746420056.html
House Call Veterinarian - /que/pet/5746418041.html
Tiny pure breed Yorkie/Maltese available - /brk/pet/5746441804.html
Pythons & Monitors!!! - /mnh/pet/5730797572.html
looking to place my pocketpit plus her pups - /mnh/pet/5746399334.html
```

Here's a quick line-by-line of what's happening.

```ruby
require 'open-uri'
require 'nokogiri'
```

This requires the libraries we'll be using to scrape Craigslist. Open-URI is
part of Ruby's standard library that is used for opening http, https, or ftp
URLs as if they were files.

As noted before, Nokogiri is the scraper that parses the HTML DOM to find the
elements we're looking for.

```ruby
url = 'http://newyork.craigslist.org/search/pet?s=0'
doc = Nokogiri::HTML(open(url))
```  

The `url` is given our ugly URL as a string. The `doc` variable utilizes the Nokogiri library to open the url variable.

```ruby
pets = doc.css("a.hdrlnk").map { |pet| "#{pet.text} - #{pet.attribute('href').to_s}" }

puts pets[0..9]
```

The real magic happens in this one-liner. First is `pets`: Nokogiri uses familiar CSS selectors to traverse the DOM. By calling the method `css` on `doc`, and passing in "a.hdrlnk", we get a list of all elements that fit this pattern. Next we add these values to an array, adding the text of the `a.hrdlnk` element and the href attribute of the `a.hdrlnk` element. From there it's a simple matter of printing the first ten links out to our terminal via `puts pets[0..9]`! Pretty straightforward, right?

### Conclusion

Web scraping can get pretty ugly, having to traverse the DOM via xpath or CSS. It highlights an inherit problem with web scraping, and one you should note if you're thinking about depending on an external site's structure for your content: everything is dependent on how the site exists at the present moment. If for whatever reason Amazon decided to change how its sorting was done, or built its keywords using a different POST variable, we'd have to adjust our web scraper to accommodate. As long as we understand this, however, and don't build a program dependent on another website's structure, we should be okay.
