---
title: Setting up multiple server blocks in nginx
tags: [nginx]
category: DevOps
---
One of the good (and bad) things about moving from shared hosting to a VPS is that I have full control over server settings. It might feel a little intimidating, but it's a much more rewarding experience when everything is working properly.

Today, I decided to set up a Jekyll blog for another site I'm cooking up. Not wanting to shell out for another droplet on Digital Ocean, I decided to set up a server block via Nginx using the same server this blog is hosted on. I'll reserve how I set up Capistrano and Jekyll to automatically update my site for another day... Instead, read on for what was most difficult for me.

### A crash course in nginx server blocks

Server blocks are pretty easy to understand once you get used to the syntax; here's an example of what one looks like:

~~~
server {
        listen 80 default_server;

        root /usr/share/nginx/html;
        index index.html index.htm;

        # Make site accessible from http://localhost/
        server_name localhost;

        location / {
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
                try_files $uri $uri/ /index.html;
                # Uncomment to enable naxsi on this location
                # include /etc/nginx/naxsi.rules
        }
}
~~~

This file can be called anything; for our purposes, we'll call it `example-site.com`. Typical nginx installs expect this file to be located in `/etc/nginx/sites-available/`. From there, you'll create a symbolic link to `/etc/nginx/sites-enabled/` to make the server block active:

~~~
ln -s /etc/nginx/sites-available/example-site.com /etc/nginx/sites-enabled/
~~~

You don't *need* to understand everything that's going on, I'll just focus on the relevant parts.

* First up is the `listen` line. `listen 80 default_server`, does pretty much what you might expect: Listen on port 80 for incoming connections, and let the server know that this is the default configuration. When having two server blocks, note that only one of these blocks can have the `default_server` part.

* Next is the `root [...]` line. This line tells the domain where your physical files are stored. Personally, I like to host my files in `var/www/example-site.com/`, where `example-site.com` is our target directory.

* Finally we've got the `server_name` line; for this one, you'll want to put in your domain address, something like this: `server_name example-site.com;`.

### A tale of two sites

It'll be easier to visualize this if you have two sites to work with. I like to host my sites in `/var/www/`, so let's set up two sites in this directory now. Create two directories under `/var/www/`, called `example.com/` and `test.com/`.

* Under `example.com/` directory, create a file called `index.html`, and put the following: `<h1>Example.com works!</h1>`.
* Similarly, under `test.com/` directory, create a file called `index.html`, and put the following: `<h1>Test.com works!</h1>`.

Now that your pseudo sites are set up, let's move to the server blocks to make sure everything gets wired up correctly.

#### Example.com block

Under `/etc/nginx/sites-available`, create a new file called `example.com`. In this file, paste the following:

~~~
server {
        listen 80 default_server;

        root /var/www/example.com;
        index index.html index.htm;

        server_name example.com;
}
~~~

Save your file, and create a symbolic link of this file to your `/etc/nginx/sites-enabled/` directory:

~~~
ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
~~~

#### Test.com block

Under `/etc/nginx/sites-available`, create another new file called `test.com`. In this file, paste the following:

~~~
server {
        listen 80;

        root /var/www/test.com;
        index index.html index.htm;

        server_name test.com;
}
~~~

Save your file, and create a symbolic link of this file to your `/etc/nginx/sites-enabled/` directory:

~~~
ln -s /etc/nginx/sites-available/test.com /etc/nginx/sites-enabled/
~~~

### Testing our config and troubleshooting

Now that we're all set up, run `service nginx restart` to make sure Nginx picks up any changes.

Let's switch to our local computer now. We obviously don't own the **example.com** and **test.com** domains, so we'll need to be clever about how we test our server blocks. That's pretty simple by editing our `/private/etc/hosts` file (assuming we're on a linux-based computer). Open up the file in the editor of your choice and add these two lines (replace `your.server.ip` with your server's IP address):

~~~
your.server.ip example.com
your.server.ip test.com
~~~

Save the file, then navigate to **example.com** in your browser. You should see **Example.com works!**

Navigating to **test.com** should show you **Test.com works!**

If for some reason either of the above options doesn't work, you'll need to troubleshoot. Best guess would be a syntax error in one of your server blocks. Semicolons are imperative to terminate lines—if you're missing one, the block will never properly direct the browser.

You should be all set from here. More advanced configurations are obviously possible—for example, I've currently got a NodeJS app, a Rails app, and a static site blog all hosted alongside each other.

Until next time!
