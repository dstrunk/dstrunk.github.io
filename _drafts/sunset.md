---
layout: work/show
title: Sunset
description: A scheduling app and simple state machine for managing projects.
categories: [Ruby, Rails]
technology:
  - name: Ruby
    url: https://ruby-lang.org
  - name: Rails
    url: https://rubyonrails.org
  - name: Highcharts
    url: https://highcharts.com
  - name: PostgreSQL
    url: https://www.postgresql.org/
links:
  - name: GitHub
    url: https://github.com/dstrunk/Sunset
image: sunset.jpg
---

**Email Hell.** If you've worked in an office environment in the last 10 years,
you're probably familiar with the term. Companies like [Trello][trello],
[Slack][slack] and others have attempted to alleviate the problem, but more
traditional companies can often be slower to adopt new technologies.
{:.callout}

[slack]: https://slack.com
[trello]: https://trello.com

I found myself in the above situation when I started planning out Sunset. Emails
were the preferred method of initiating new projects, which made tracking them
hard. It also decreased visibility for these projects for managers and
salespeople--they had no real idea what our workload was, or the constraints
imposed by this workload.

My solution was to offer up a UI that promoted simplicity and transparency.
{:.callout.wide}

My solution was to offer up a UI that promoted simplicity and transparency. With
Sunset, managers and salespeople could view how many projects were open, see the
timeline from a 20,000 foot view, or follow up on projects in the pipeline at a
glance.

Development was centered around CI, which allowed for responding to the team's
needs for new features and bug fixes quickly. After about a month of
development, Sunset was feature complete and managing the timelines for 30
projects, housing analytics on archived projects, and making lives easier.

*[CI]: Continuous Integration
