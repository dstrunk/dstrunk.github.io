---
layout: blog/show
title: 'ECMAScript 6 features: classes'
date: 2013-07-19 05:30:47.000000000 -04:00
---
Continuing my ES6 series, today we're going to talk about classes. People coming from a more traditional programming background will already be familiar with classes, but for the uninitiated: a class is a representation of an object. A real world example might be: **Vehicle** is a class, and **Car** is an object within the Car class. Past iterations of JavaScript are like school in the summertime (no class). Instead, everything is an object. If you've read [*JavaScript: The Good Parts*](http://www.amazon.com/gp/product/0596517742/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0596517742&linkCode=as2&tag=sa0c7-20 "Amazon - JavaScript: The Good Parts by Douglas Crockford"), you might be familiar with the somewhat unintuitive way of implementing classes within JavaScript:

~~~ 
var Vehicle = function( name, year ) {
	this.name = name;
	this.year = year;
};
	
Vehicle.prototype.about = function() {
	return "This vehicle's name is " + this.name + " and it was manufactured in " + this.year;
};
~~~ 

Using functions and prototypes, it's possible to simulate a class in JavaScript. This somewhat confusing method changes (kind of; more on that later) in ECMAScript 6. Here's how we'd implement the same Vehicle class:

~~~ 
class Vehicle { 
	constructor( name, year ) {
		this.name = name;
		this.year = year;
	}
	
	summary() {
		return "This vehicle's name is " + this.name + " and it was manufactured in " + this.year;
	}
}
~~~ 

Isn't that easier to understand? I sure think so. This format also allows us to extend classes (create a new class that inherits all of the properties of the parent class). See below:

~~~ 
class SemiTruck extends Vehicle { 
	constructor( x, y ) {
		super( x, y );
		this.wheels = 18;
	}
}
~~~ 

The `super` function calls the constructor of the parent class so it can inherit all of its properties. I think it's important to note that the class feature of Harmony is really just syntactic sugar; that is, it compiles down to functions and prototypes, just like we're used to writing with current "classes". Classes in JavaScript's case isn't about adopting standards set by Java; rather, it's to make the developer's code more readable and abstract away some of the mechanics of the language.
