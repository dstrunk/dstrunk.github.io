---
layout: blog/show
title: Using indices in rails
date: 2014-08-22 07:30:41.000000000 -04:00
---

A consequence of the ease of picking up a framework such as Rails, Django, or Laravel means that outsiders to the Computer Science realm are now able to create applications with relative ease. I am certainly counted in the majority in that respect. But if you want to hang with the big boys and continue your career past creating a one-off idea, sooner or later you'll need to learn database design. Database design might seem like a tedious topic, but if you're expecting your idea to gain traction and get picked up by a large audience, it's imperative. First up is a link: [Using indexes in rails - index your applications](https://tomafro.net/2009/08/using-indexes-in-rails-index-your-associations). Indexes (indices) will speed up performance of commonly queried table columns and are important as your application grows. Next is a book that I recently purchased that's been well-rated in the CS realm: [Database Design for Mere Mortals](http://www.amazon.com/Database-Design-Mere-Mortals-Relational/dp/0321884493/). You might notice the dates on both the book and the link; they're old! But that doesn't mean they're outdated. Fact is, relational database design is near-timeless in the CS world. For starters: did you know that the relational database was [first defined in 1970](http://en.wikipedia.org/wiki/Relational_database#Terminology)? The idea of relational databases have been around for 45 years, and with good reason—it fits with the majority of structured data. Sure, nowadays people will tout the wonders of [NoSQL](http://en.wikipedia.org/wiki/NoSQL) (see the [MEAN stack](http://mean.io/#!/)) as the successor to RDBMSes, but even now, after all these years, relational databases are a great fit for modern day applications. But I digress. Back to the topic: DB design goes beyond the speed at which your database responds to a query. It also touches on the way your queries themselves are built, and (more importantly) the underlying architecture of your database itself. As your application grows, you might not be able to continue to rely on queries via an object relational mapper such as ActiveRecord, and you will be in a world of hurt if the integrity of your DB architecture is flawed from the start. We won't even begin to touch on the task of moving a monorails application out into services. For these reasons (and more!) it's important that you understand the *why* behind ActiveRecord's ORM magic, and do your best to plan for the future of your application by first understanding the basics.

