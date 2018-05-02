---
layout: blog/show
title: Cleaning up nested forms with form objects in Rails 4
tags: [ruby, rails]
category: Ruby
---

It's a big day today... Apple's September 9th event, this blog's 100th post, and perhaps most importantly, my dog Carl's birthday! To celebrate, we'll be talking about cleaning up nested forms in Rails with **form objects**.

### Form Objects

 As your application grows, your models might tend to get messy. Some people subscribe to the "fat model, skinny controller" viewpoint, but I think that our entire codebase should be easily digestible, and that means refactoring certain functionality out of a catch-all model and into plain ol' ruby form objects, service objects et al. If you have a form that updates several ActiveRecord models with one submission, you've got a good candidate for a form object. Form objects can significantly clean up models that use `accepts_nested_attributes_for` *ad nauseum*. Before I get started, I should note that I'll be dealing with Rails 4 for this example. In Rails 4, it's easy to add ActiveRecord-like attribute functionality to objects by including `include ActiveModel::Model` in your class. That allows you to enjoy AR methods like validation, etc. One thing that tripped me up was getting strong parameters to work with this method. After learning how Rails expects its parameters however (hashes), everything started to Just Work&tm;. In this example, we're going to deal with a form that updates both a `User` model that has one `Profile` model in a signup form. First, the models (basic stuff):

~~~
class User < ApplicationRecord
  has_one :profile
end

class Profile < ApplicationRecord
  belongs_to :user
end
~~~

- My `User` model has the following fields: `:username` and `:email`.
- My `Profile` model has the following fields: `:github` and `:twitter`.

Now, instead of going the traditional Rails way with an `accepts_nested_attributes_for :profile` in our User model, we'll extract out the entire form details into a separate `signup` object:

~~~
class Signup
  include ActiveModel::Model

  attr_accessor :username, :email, :twitter, :github

  validates :username, presence: true
  validates :email, presence: true, email: true
  validates :twitter, presence: true
  validates :github, presence: true

  def register
    if valid?
      create_user
      create_profile
    end
  end

  private

  def create_user
    hash = {}
    hash[:username] = "#{username}"
    hash[:email] = "#{email}"
    @user ||= User.new(hash)
    @user.save!
  end

  def create_profile
    hash = {}
    hash[:twitter] = "#{twitter}"
    hash[:github] = "#{github}"
    @profile = Profile.new(hash)
    @user.profile = @profile
  end
end
~~~

#### Quick notes:

- Include `ActiveModel::Model` to gain access to traditional AR methods. Quack, quack
- `attr_accessor` for the fields we'll be using
- validations just like we're used to
- A `register` method that we're using in our `SignupsController` (called below)
- Our user and profile creation methods

Let's take a look at our form. It's standard stuff, but note that we're using the object `@signup` given to us by the `SignupsController` (posted below the form):

~~~
<%= form_for(@signup) do |f| %>
    <% if @signup.errors.any? %>
        <div id="error_explanation">
            <h2><%= pluralize(@signup.errors.count, "error") %> prohibited this user from being saved:</h2>
            <ul>
            <% @signup.errors.full_messages.each do |message| %>
                <li><%= message %></li>
            <% end %>
            </ul>
        </div>
    <% end %>

    <div class="field">
        <%= f.label :username %>
        <%= f.text_field :username %>
    </div>

    <div class="field">
        <%= f.label :email %>
        <%= f.text_field :email %>
    </div>

    <div class="field">
        <%= f.label :twitter %>
        <%= f.text_field :twitter %>
    </div>

    <div class="field">
        <%= f.label :github %>
        <%= f.text_field :github %>
    </div>

    <div class="actions"><%= f.submit %></div>
<% end %>
~~~

From here it's a simple matter of updating the controller accessing the form:

~~~  
class SignupsController < ApplicationController
  respond_to :html

  def new
    @signup = Signup.new
  end

  def create
    @signup = Signup.new(signup_params)
    @signup.register
    respond_with @signup, location: some_location_path
  end

  private

  def signup_params
    params.require(:signup).permit(:username, :email, :github, :twitter)
  end
end
~~~

This should look like something you're used to. A simple `create` method passing in strong params, then calling the `register` method on the `@signup` object.

#### The end

 That's all for today! If you'd like to learn more about cleaning up your fat models, check out this great (if a bit dated) posts from codeclimate: [7 Ways to Decompose Fat ActiveRecord Models](http://blog.codeclimate.com/blog/2012/10/17/7-ways-to-decompose-fat-activerecord-models/). It's got great ideas that you should be able to update to work with Rails 4 pretty easily. I'll close with a picture of Carl, hard at work building out a complex airbnb-type app for dogs: ![Carl, hard at work.](http://res.cloudinary.com/dstrunk/image/upload/v1414083560/2013-09-07-14_24_53-2_sqptrn.jpg) Happy birthday Carl!
