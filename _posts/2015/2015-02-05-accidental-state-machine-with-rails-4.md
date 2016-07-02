---
layout: blog/show
title: Accidental simple state machine with Rails 4
---
At work I'm always looking for opportunities to work smarter, not harder. To cut out repetitive tasks that keep me from getting meaningful work done. That's what computers are for, right? Most recently, I grew tired with a gap in how we managed and tracked projects, and decided to do something about it.

## The impetus

Our old ways of working were driving me crazy. The workflow went:

* A customer wants a new project initiated.
* An email is sent to our division, stating the constraints: deadline, life of the project, etc.
* A member of our team sets up the project, and notes on their calendar when the project is nearing end-of-life.
* Once the project reaches EOL, we archive the project and begin again.

Obviously, emails between parties is not the most efficient means of communication, and it makes going back through past projects a nightmare. We could use an issue or project tracker, but we're currently in between systems and I couldn't wait that long. So, last weekend I decided to create an app that both provided visibility to managers and made coworkers' jobs more streamlined.

## The accidental state machine

The app was pretty simple; basic CRUD functionality, a couple of relationships, and a form that allowed users to submit new requests. There needed to be an admin area for managing the projects, as well as a dashboard for managers to see how many projects were live and their timelines. Along the way, I also wanted to store the status of a project: pending review, accepted, rejected, live, or archived. For this last part, edge Rails had me covered: `enums`.

Enums, or enumerated types, are a data type consisting of a set of named values of said type. You deal with them every day: For an `enum` WEEK, the named values are SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY and SATURDAY.

Newer versions of Rails have baked-in support for enums, which makes for easy creation of simple state machines:

~~~
class Project < ActiveRecord::Base
	enum :status, [:pending, :accepted, :rejected, :live, :archived]
end
~~~

with the `enum` attribute, you can now do things like this:

~~~
project.pending!
project.pending? # => true
project.status # => "pending"

project.accepted!
project.status # => "accepted"
~~~

To work with an enum from the database perspective, use an integer column. You can set a default status in the database as well (recommended for persistence):

~~~
create_table :projects do |t|
	t.column :status, :integer, default: 0
end
~~~

Now every project initialized will have a default status of "pending" unless otherwise specified.

**On to state machines:** I had no idea this is what I was creating... I simply saw a need, and enums looked to fit the bill. But as I dug deeper into my app, I realized I'd need mailers that triggered upon switching from one state to another, and some sort of history of the state switching. And of course, while searching the web I found that this is one of the oldest problems in the book.

There are plenty of gems that handle this much more elegantly than my stumbling about: [aasm](https://github.com/aasm/aasm), [workflow](https://github.com/geekq/workflow), and [statesman](https://github.com/gocardless/statesman). All are solid (though aasm is quite long in the tooth), but I decided to go with Go Cardless's statesman for my project.

I'm currently refactoring my app to work with statesman, but this was a good learning process for me. The app makes it easy to manage projects from the backend, it provides visibility to those-that-need-to-know, and, once the refactoring is complete, it will tidy up a once-cumbersome task.

[Check out the code that inspired this post!](https://github.com/dstrunk/tombstone)
