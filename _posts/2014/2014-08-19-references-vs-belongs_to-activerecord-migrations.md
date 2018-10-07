---
title: '"references" vs "belongs_to" in ActiveRecord migrations'
tags: [ruby, rails]
category: Ruby
---
I always wondered about the difference between `:belongs_to` vs `:references` when running ActiveRecord migrations, always chalking it up to a quirk in the framework. They do the same thing, right? Well yes, they do **exactly** the same thing, as a matter of fact; take a look at the Rails source:

~~~
def references(*args)
	  options = args.extract_options!
	  polymorphic = options.delete(:polymorphic)
	  args.each do |col|
	    column("#{col}_id", :integer, options)
	    column("#{col}_type", :string, polymorphic.is_a?(Hash) ? polymorphic : options) unless polymorphic.nil?
	  end
	end
	alias :belongs_to :references
~~~

But while they do the same thing, they might make your code a lot more readable to others ... or at least help you to understand why you're doing the association in the first place. Consider these two examples:

### Answers belong_to Questions

Say we have two models, `Question` and `Answer`: 	

~~~
class Question < AR::Base
	has_many :answers
end

class Answer < AR::Base
	belongs_to :question
end
~~~

In this case, when creating the `answer` AR migration, it would make sense for me to use `t.belongs_to :question`. From a vernacular standpoint, it's obvious that an answer instance belongs directly to a question.

### Questions reference Topics

But in a relationship that isn't strictly "parent and child" per-say, it might make more sense in your brain to use `references`. Again, this is purely from a vernacular standpoint; there are no differences once the table is created. My example uses `Questions` and `Topics`:

~~~
class Question < AR::Base
	belongs_to :topic
end

class Topic < AR::Base
	has_many :questions
end
~~~

There's no difference in the model, but if I were creating the table, I'd use `t.references :topic`. This would help make my migration more readable, and I'd know that `Topic` is probably a more adjacent table that `Question` just happens to need a reference to, instead of being a more "connected", "parent-child" relationship that might directly affect the child models. I tend to use `belongs_to` most when I'm using models that accept nested attributes for another model. `reference` is more for tenuous relationships that just need to "talk" to another table, or are related via a `has_many through`, personally. Notice all of the qualifiers in this post! The reason for all of the "personally" or "I tend to" is because doesn't really matter which you use: `belongs_to` or `references`. It might help make your migrations more readable, however. It certainly helps me! Have anything to add? Want to correct me on something? Let me know below!
