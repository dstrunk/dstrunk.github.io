---
title: 'ECMAScript 6 features: const'
tags: [javascript, ecmascript 6 features]
category: JavaScript
---

Today's ECMAScript 6 feature is similar to the `let` keyword [talked about a couple of days ago](http://wp.me/p3ERzH-3A "Daniel Strunk | ECMAScript 6 features: let"). Those coming from a formal programming background (C or Java) should be familiar with this one. `const` stands for a constant definition. Similar to the `let` keyword, the `const` keyword is block-scoped. Let's look at a quick example:

~~~
const PHI = 1.618;
console.log( PHI ); // 1.618

PHI = 1;
console.log( PHI ); // 1.618 ... can't re-assign

const PHI = 2;
console.log( PHI ); // 1.618 ... can't re-init

var PHI = 5
console.log( PHI ); // 1.618 ... can't re-declare
~~~
