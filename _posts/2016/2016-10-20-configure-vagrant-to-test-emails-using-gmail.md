---
layout: blog/show
title: Configure Vagrant to test emails using Gmail
tags: [Vagrant, workflow]
description: Send emails from your local Vagrant box using Postfix and Gmail
---

_This walkthrough assumes you have a Gmail account. If you are using another
email provider that utilizes SMTP, skip to the bottom of this tutorial for a
list of files that will need to be updated with your provider's SMTP
information._

Occasionally you might need to test PHP email functionality from your local
development environment; if that's the case, this is for you.

First up, I created a shell script that quickly sets up a Vagrant Ubuntu box
with Postfix; this script downloads and updates CA Certificates, installs
Postfix and all required dependencies, updates the Postfix configuration, and
finally reloads the service:

{% gist ff6301609bdbbcb3057d27812f8630e6 %}

## Let's get started

First thing's first: let's create an application password for Gmail. Follow the
steps below:

1. Visit your [App passwords][app-passwords] page.
2. At the bottom, click **Select app** and choose the app you're using.
3. Click **Select device** and choose the device you're using.
4. Select **Generate**.
5. Follow the instructions to enter the App password (the 16 character code in
the yellow bar) on your device.
6. Select **Done**.

[app-passwords]: https://security.google.com/settings/security/apppasswords

Once you are finished, you won't see that App password again. However, you will
see a list of apps and devices you've created App passwords for.

Now that you've got an applciation-specific password, SSH into your VM. From
your VM's directory, run this command:

```bash
vagrant ssh
```

Now that you're in the VM, edit `/etc/postfix/sasl_passwd` by running following
command:

```bash
sudo vim /etc/postfix/sasl_passwd
```

The file contains one line: the SMTP information for Gmail, and a placeholder
for your gmail address and application-specific password. Input these now
(formatted as such: `username@gmail.com:password`), then save the file.

After saving the file, run the below command:

```bash
sudo /etc/init.d/postfix reload
```

Now, you should be good to go! If you'd like to test sending out an email, you
can run the below command:

```bash
echo "it works!" | mail -s "Test email from Vagrant" username@gmail.com
```

You should receive an email in short order.

## Alternatives

### I don't use Gmail; what should I do?

As long as your email provider has SMTP support, updating your Postfix config is
relatively straightforward. Googling for '[your-email-provider] smtp' should
yield their address and port number needed (e.g., a quick Google search for
Yahoo's information yielded `smtp.mail.yahoo.com` and port 465).

From there, you will need to edit `/etc/postfix/main.cf` and
`/etc/postfix/sasl_passwd`. In main.cf you're looking for the line containing
relayhost. You will update this line to have your email client's SMTP settings
within the square brackets, and the port after the colon (e.g.
\[smtp.mail.yahoo.com]:465).

In `/etc/postfix/sasl_passwd` you will need to do the same thing.

**Also of note when working with a non-Gmail account:** you might not have the
ability to create application-specific passwords. So, you'll need to put your
actual email password inside `/etc/postfix/sasl_passwd`. 

### How about using an external mail provider (Mailgun, Mandrill, etc.)?

Go for it! If that's the case, you don't need this at all. You will, however,
need an understanding of your respective email provider's API, as well as how to
integrate this API into whatever you're building. Please see their documentation
for more details.

{% include shared/image.html name="princess-another-castle.jpg" alt="Your
princess is in another castle!" %}
