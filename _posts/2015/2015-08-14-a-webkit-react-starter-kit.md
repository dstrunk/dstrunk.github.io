---
title: A webkit React starter kit
tags: [javascript]
category: JavaScript
---
Over the last couple of days, I've been prototyping a web application that I've
had an idea for ever since jumping into Rails. It was on the backburner for a
while until I could figure out how to handle such a dynamic UI... Then
[React][react] came out. React is providing exactly the functionality I'm
looking for—able to use components in a web application without hijacking the
entire view (a la Ember), and with a cleaner separation of concerns (looking at
Angular here).

It's been a while since I've dabbled in the front end, though—and the landscape
has changed. [Webpack][webpack], [Babel][babel], widespread adoption of ES6... I
was a bit overwhelmed for a couple of hours catching up. Because of this, I put
together a webpack starter kit to easily pull down when prototyping new React
projects:

[https://github.com/dstrunk/webpack-react-starter-kit](https://github.com/dstrunk/webpack-react-starter-kit)

[react]: http://facebook.github.io/react/
[webpack]: http://webpack.github.io/
[babel]: https://babeljs.io/

To get started with this project, clone it or download the zip from GitHub.
You'll need a couple of things from NPM, so run the following commands:

```
npm install -g webpack
npm install -g webpack-dev-server
```

After installing webpack and webpack-dev-server globally, run the following to
install package dependencies:

```
npm install
```

From there, you can simply run `npm run start`. This command (seen in our
`package.json` file)

- starts an `http-server` running our local directory on port `8080`
- starts `webpack-dev-server` on port `8090` which serves the
  `webpack-dev-server` runtime and our `app.js` file

... and that's it! Once setup, you'll have an environment that allows you to get
started quickly with prototyping React applications, and keeps productivity high
by watching files and refreshing when necessary.
