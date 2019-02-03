---
title: 'Keep it secret, keep it safe: Using secrets.yml in Rails 4.1 to secure API
  assets'
tags: [ruby, rails]
category: Ruby
---

In the rush to learn Rails (or any framework, for that matter), one thing that might get overlooked is security. Thoughts of "security is already baked into framework x" might be the reasoning, who knows. I'm guilty of it, and I'm sure others are in the same boat. But security of basics, like keeping your API keys and secrets *actually* secret is incredibly important, not just for the integrity of your app, but for the safety of your users. It's also important if you're looking to open source your app on GitHub or the like. In the past, a Rails developer might have saved their API keys and secrets in a file above the Rails app directory. Others might have hardcoded it into the app itself (bad dev!). Still others could have used the [Figaro gem](https://github.com/laserlemon/figaro), meant to secure API keys and make deploying to Heroku with said keys easier. I opted for the Figaro route until recently. Rails 4.1 seems to take a page from Figaro's book: it comes equipped with `config/secrets.yml`. **Currently, this file is not in `.gitignore` by default, so you'll need to add it.** Afterwards, however, simply add your API keys and secrets as below:

	development:
	  secret_api_key: SOMEKEY

 According to the [4.1 release notes](http://edgeguides.rubyonrails.org/4_1_release_notes.html), secrets configured in `secrets.yml` should be accessible via `Rails.application.secrets`. For example: `Rails.application.secrets.secret_api_key` should return SOMEKEY in the development environment. Cool! You might be thinking to yourself, "that's all well and good, but this need for secrecy has predated Rails 4.1 by a LONG time." And you're right. Because of this need in the past, the de facto standard for utilizing secret keys has been environment variables: `ENV["secret_api_key"]`, for example. This standard has persisted because of services such as [Heroku](http://heroku.com) and documents such as [12factor](http://12factor.net). Luckily, since YAML files get processed through ERB, you can still use environment variables. Instead of using `Rails.application.secrets.secret_api_key`, you can simply continue to use `ENV["secret_api_key"]`. Sure, this way isn't technically the "Rails way", but it's a solid middle ground between the "Rails way" and using gem dependencies.
