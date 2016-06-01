---
layout: blog/show
title: Configuring Rails projects with FastCGI for Dreamhost shared hosting
date: 2014-07-01 08:30:25.000000000 -04:00
---

Last night I decided to install [Redmine](www.redmine.org/) on one of my subdomains to help track my projects. Redmine is a fantastic (free!) project management app built on Rails. It's highly customizable and enjoys all of the features that the big boys offer. It's a great piece of software, and I highly recommend it; not only to budget-conscious outfits, but even bigger companies looking to improve their workflow. Back to last night, though. Seeing as Redmine is a Rails app, I could have run it as a Heroku app and wiped my hands of it, but I wanted more control. I've also had a shared hosting account on Dreamhost since forever, so I decided to test their Rails support. I'd read some horror stories in the past, but after some initial stumbling around, it wasn't so bad.

## Getting started

### Step 1

First I had to set up my subdomain. Pretty standard on Dreamhost's end. Think up a name, configure some options (or leave them at default, which is what I did). One gotcha: Dreamhost has support for Passenger, which is typically used for Ruby or Python apps. **Don't select this for Rails apps.** Dreamhost's Passenger version is pretty much unmaintained. We're going to go with FastCGI instead. 

### Step 2

After your subdomain is configured, things start go get a little non-standard (at least from my typical Dreamhost experiences). First, `ssh` into your server, and `cd` into the folder that you're installing the app under. For Redmine, it was pretty easy to install the latest version—using Mercurial, I typed in `hg clone --updaterev 2.5-stable https://bitbucket.org/redmine/redmine-all redmine-2.5` into the terminal and watched Redmine get installed automatically.

### Step 3

From there it's a typical Rails install (for the most part). `cd` into the installed folder. Open up `config/database.yml` and configure the database settings for your production environment.

### Step 4

Run `bundle install --without development test` to get the required gems for your production Redmine. I had an issue with installing RMagick on Dreamhost, so I installed gems using `bundle install --without development test rmagick`.

### Step 5

Almost ready: generate a secret token for redmine: `rake generate_secret_token`

### Step 6

Time to instantiate the database! Run `RAILS_ENV=production rake db:migrate`.

### Step 7, in three parts

 Here's where things tripped me up a bit. Dreamhost doesn't allow webrick to run on shared hosting accounts, so I had to figure out an alternative. Luckily, it's pretty easy to get setup once you know what to look for. In the root directory of the domain you're looking to install Redmine / your Rails app into, create a `public` folder. You'll be creating two files here: **dispatch.fcgi** and **.htaccess**. Here's what your dispatch.fcgi should look like: 	

~~~ 
#!/usr/bin/ruby
	
# Dreamhost clears environment variables when calling dispatch.fcgi, set again
ENV['RAILS_ENV'] ||= 'production'
ENV['HOME'] ||= `echo ~`.strip
ENV['GEM_HOME'] = File.expand_path('~/.gems')
ENV['GEM_PATH'] = File.expand_path('~/.gems') + ":" + '/usr/lib/ruby/gems/1.8'
	
require 'rubygems'
Gem.clear_paths
require 'fcgi'
	
require '../your/app/config/boot.rb'
require '../your/app/config/environment.rb'
	
class Rack::PathInfoRewriter
	def initialize(app)
		@app = app
	end
	
	def call(env)
		env.delete('SCRIPT_NAME')
	    parts = env['REQUEST_URI'].split('?')
	    env['PATH_INFO'] = parts[0]
	    env['QUERY_STRING'] = parts[1].to_s
	    @app.call(env)
	end
end
	
Rack::Handler::FastCGI.run 
Rack::PathInfoRewriter.new(YourApp::Application)
~~~ 

Things to note about this file: 

* The top of your file should point to the version of ruby you're using. If you're unsure where ruby is located, run `which ruby` in your ssh session.
* As noted on line 3: Dreamhost clears environment variables that Rails will need. You'll need to set these according to your host credentials.
* Make sure that your required files are the correct paths.
* In the bottom line, replace **YourApp** with the name of your app.

And now, your .htaccess:
 
~~~ 
 <IfModule mod_fastcgi.c>
	AddHandler fastcgi-script .fcgi
</IfModule>
<IfModule mod_fcgid.c>
	AddHandler fcgid-script .fcgi
</IfModule>
	
Options +FollowSymLinks +ExecCGI
	
RewriteEngine On
	
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(.*)$ dispatch.fcgi/$1 [QSA,L]
	
ErrorDocument 500 "Rails application failed to start properly"
~~~ 

I didn't make any changes to this configuration, it "just worked".

### Troubleshooting

You should be pretty much finished from here. If you open up the domain you installed to, it should either work or display "Rails application failed to start properly". If you got the latter, no worries. You're still ssh'd into your server, right? `cd` into `public/dispatch.fcgi` and type in terminal `ruby dispatch.fcgi`. That will run dispatch manually and tell you any errors encountered if there are any. More common issues are improper paths (for me, at least).

### Pros

Dreamhost's admin page. I'm biased here, but in all my time working with cPanel or other admin dashboards, I think that Dreamhost's is the most user-friendly. It's easy to set up users, domains, and databases. Ease of setup (kinda). Since Dreamhost manages servers for the most part, you don't have to worry about apt-get apt-update linux stuff. I don't know about you, but I'd rather focus on creating apps than being a sysadmin.

### Cons

Documentation. Pretty terrible—written by customers of Dreamhost that detailed their experiences in getting apps running. I found more help on Redmine forums and StackOverflow. Fast CGI vs Passenger. Passenger would have been a lot easier to set up, but Dreamhost's shared server version of Passenger hasn't been updated since 2010. So using Fast CGI was a bit of a learning curve. Not the fastest solution. 

## Conclusion

Setting up Rails with Dreamhost was not as painful as I'd first thought. Seeing as the majority of my domains are registered at Dreamhost, it gives me a sort of OCD piece of mind knowing I can run my Rails apps alongside WordPress sites without worring about buying a VPS\*. If you're feeling extremely motivated, I bet you could write set up a remote git repository and set up a cron job that detects changes and autodeploys, something like a poor man's Heroku. But that I leave up to you, dear reader.

<small>*For now. I will definitely need one down the road.</small>

