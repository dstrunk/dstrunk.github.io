---
title: "Easier data binding in React"
slug: "easier-data-binding-in-react"
date: "2019-02-02T11:01:00Z"
---

Using ES2015, it's possible to initialize objects using computed property names. This is handy for dynamically setting the state in React, for example:

```js
// App.js
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      username: ''
    }

    this.handleChange = this.handleChange.bind(this) // Don't forget this!
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
        // ...
        <input type="text"
          name="username"
          placeholder="username"
          onChange={this.handleChange}
          value={this.state.username} />
        // ...
      </>
    )
  }
}
```

Note the `handleChange()` method. This method uses a computed property name, `[e.target.name]`, to set the value. This means you can reuse the method to bind multiple elements to state changes with minimal effort.

To add another element, you'd do the following. First, in the `constructor()`:

```js
this.state = {
  // ...
  email: ''
}
```

And in the `render()` function:

```js
<input type="text"
  name="email"
  placeholder="user@example.com"
  onChange={this.handleChange}
  value={this.state.email} />
```
