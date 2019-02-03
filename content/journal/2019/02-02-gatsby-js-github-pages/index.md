---
title: "GatsbyJS and GitHub Pages"
slug: "gatsby-js-github-pages"
date: "2019-02-02T11:01:00Z"
---

This week I decided to dive into learning a frontend technology that's been gaining serious traction in the Magento crowd: React and Progressive Web Apps (otherwise known as PWAs). [GatsbyJS][gatsby] seemed like a great lower-barrier entry into both React and PWAs, with its fantastic documentation, strong community and abundant tutorials. I have previous experience in [Vue][vue] from building a larger Laravel application in my spare time, so picking up React has largely been a matter of learning syntax. I am **not**, however, familiar with single page application architecture, so there was a bit of a learning curve.

[gatsby]: https://www.gatsbyjs.org
[vue]: https://vuejs.org

To learn Gatsby, I decided to revamp my blog. It's a prime candidate for this type of project: it's already built on GitHub Pages using Jekyll, which means all pages are flat files. Gatsby also has a plugin for deploying to GitHub Pages, which means I can continue hosting there and not worry about finding a new host and updating DNS. I can continue writing in Markdown with the [gatsby-transformer-remark][remark] plugin, which parses markdown files.

[remark]: https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-remark

Below are some of my thoughts on the whole experience.

## Gatsby

Gatsby is magic, pure and simple. It's easy to grok at a glance--dedicated pages go in the `src/pages` directory, components get broken out into `src/components`, and there are some out-of-the-box helpers Gatsby provides so you enjoy best practices regarding SEO and PWAs.

It has a huge plugin ecosystem, which I think is really interesting. For example, you could have a Gatsby site published on GitHub Pages that is backed by content served through a headless CMS somewhere, be it Contentful, Craft CMS, WordPress … pick your poison.

I can't say enough good things about Gatsby, though I imagine some won't like it due to how opinionated it is.

## React

To be honest, I'm more a fan of Vue, though I admit it's more a matter of familiarity at this point. Vue feels a bit more declarative, which I dig. Vue's shorthand directives for methods (e.g. `@click`) and model binding (e.g. `:model`) lets me build out complex reactive functionality without exposing the inner workings of how it's handling things. In React land, having to explicitly bind values, write methods for handling changes and setting state is probably *safer*, but also a bit more boilerplate and annoying. I'm sure that boilerplate pays off when introducing Redux for state management, but I haven't built a complex enough app to warrant needing a dedicated state management library.

I *am* coming around, however, after learning some patterns. In particular, this one gets me pretty much the same model binding as Vue:

```js
// App.js
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      username: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  // ...

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // ...

  render() {
    return (
      <>
        <input type="text"
          name="username"
          placeholder="username"
          onChange={this.handleChange}
          value={this.state.username} />
      </>
    )
  }
}
```

Specifically, the `handleChange` method sets the state using computed property names, so as long as your element is named the same as your state key, using `onChange={this.handleChange}` should just work for most use-cases.

## GraphQL

I didn't get to heavy into GraphQL with this experiment. Most of the GraphQL on this blog is in `gatsby-node.js`. This file handles preprocessing and creating static files for all of the blog posts using the Remark markdown Gatsby plugin. But even that is easy to understand. The experience has largely been, "Ask for data in this shape, receive data in this same shape".

I did get tripped up a couple of times with having to explicitly ask for the correct data to return. That usually got cleared up pretty quickly when I ran the query in the GraphQL Playground that ships with Gatsby.

I expect I'll have more opinions on this once I get into pagination. Concepts like edges, cursors, and fragments will start to make more sense in that context. Also, mutations are an unknown entity for me at the moment. So far I have only queried GraphQL data, never manipulated it.

## Takeaways

You may have gathered this from the above, but I'm a fan of magic--syntactic sugar that handles my implementation details in the background. Some people enjoy the minutiae of what's going on, but I'd rather spend my time planning architecture and solving problems. Gatsby hits all of those dopamine receptors for me--it Just Works when you need it to, but is open to extensibility. React does that less so (over other libraries such as Ember or Vue) but is still miles above manually doing it myself, so I'm ultimately alright with it. Honestly I never had many issues with REST over GraphQL, but I dig the asked-and-answered future of GraphQL.

## Next week

I'm either going with …

### Advanced React with Wes Bos

This foray into React and GraphQL barely scratched the surface. Learning the two in more depth has been on my radar for some time, and not just because of Magento 2's recent choice to use it.

I purchased [Wes Bos's Advanced React][advanced-react] as soon as it was released, but have not fully completed it. In Advanced React, Wes uses the popular GraphQL client [Apollo][apollo] alongside Gatsby to create a fully-functional PWA storefront. It's pretty clear that Magento is going all-in on GraphQL and React (which I consider a good thing for the most part), so it's in my best interest to stay ahead of the curve by really grokking the concepts introduced in Wes's Advanced React course.

[advanced-react]: https://advancedreact.com/
[apollo]: https://www.apollographql.com/

### Firebase

Firebase is a cool idea to me--billed as a "Backend as a Service", Firebase is a decentralized data store by Google. It kind of blows my mind that I can create a React app hosted on GitHub Pages that has database-level functionality (including authorization) for free.

Thanks for reading, until next week!
