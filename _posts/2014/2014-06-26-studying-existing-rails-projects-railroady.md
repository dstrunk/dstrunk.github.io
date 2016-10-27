---
layout: blog/show
title: Studying existing Rails projects with Railroady
tags: [ruby, rails]
---

As a newer Rails developer, I can wrap my head around smaller, less complex projects. But as a project grows in complexity, I get more and more reluctant to even begin to attempt to understand it—backing away slowly, then finally turning and running for dear life. Recently, however, I came across [RailRoady](http://railroady.prestonlee.com/), a gem billed as "dirt simple UML generation for Rails 3 and 4 applications." For the uninitiated, UML stands for "Unified Modeling Language," a specification that models application structure, behavior and architecture. As a visual person, I've found that generating UML diagrams is helpful in understanding more sophisticated Rails apps. Using Railroady is easy. First, include railroady as a development dependency in Rails:

```ruby
group :development, :test do
  gem 'railroady'
end
```

 After a quick `bundle install`, run railroady's rake task: `rake diagram:all`. This will generate four svg files under doc/*.svg.
