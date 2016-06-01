---
layout: blog/show
title: 'ECMAScript 6 features: let'
date: 2013-07-10 07:04:27.000000000 -04:00
---

With the target date of [December 2013](http://ecma-international.org/memento/TC39-M.htm "TC39 - ECMAScript") looming ever closer, I thought it would be good to write up a series of posts concerning the upcoming ECMAScript 6. This post will talk about the `let` keyword. It's a pretty simple concept, but I think it will clear up a lot of headaches with development.

### `let` vs `var`

In JavaScript, the `var` keyword declares a variable. The scope of the variable defined using the `var` keyword is the enclosing function, or, if the variable is defined outside a function, the global scope (for front end development, usually the `window` object). The way JavaScript handles scoping can be confusing at times; especially because JavaScript has function-level scope. First, an example:

~~~ 
var x = 1;
console.log( x ); // 1

if ( true ) {
	var x = 2;
	console.log( x ); // 2
}

console.log( x ); // 2
~~~ 

People coming from a C family would be confused at this output, expecting x to output 1. That's because the C family (as well as many other languages) enjoys **block-level scope**. That means a variable declared within any block, such as an `if` statement, won't affect the global scope. In current JavaScript, however, variables enjoy **function-level scope**. That means blocks (such as the one above) won't create a new scope—only functions do. A variable declared within a block statement gets hoisted up to the nearest function block, and if one doesn't exist, the global object. So our code above might as well have read like this:

~~~ 
var x = 1;
console.log( x ); // 1
	
var x = 2;
if ( true ) {
	console.log( x ); // 2
}

console.log( x ); // 2
~~~ 

`let`, on the other hand, allows you to declare variables limited in scope to the block, statement, or expression where it's used. Let's try the example again, subbing in `let` for the x declared within the `if` statement:

~~~ 
var x = 1;
console.log( x ); // 1

if ( true ) {
	let x = 2;
	console.log( x ); // 2
}

console.log( x ); // 1
~~~ 

Much better! In my opinion, this is something that should have been included in JavaScript from the get-go. That's not to say that it's without its own caveats. You need to be mindful of redeclaration within things like `switch` statements, for example: 

~~~ 
switch ( x ) {
	case 0:
		let foo;
		break;
	case 1:
		let foo; // TypeError for redeclaration
		break;
}
~~~ 

Barring this, I believe the `let` keyword will clear up some confusion that might come up with a variable declared within a `for` loop or `if` statement. 

<small>*Tests used in this post will currently only work with the most recent version of Mozilla Firefox.</small>
