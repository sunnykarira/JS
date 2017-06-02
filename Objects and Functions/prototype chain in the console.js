Person {name: "John", yearOfBirth: 1990, job: "Teacher"}
job: "Teacher"
name: "John"
yearOfBirth: 1990
__proto__: Object
	calculateAge: function ()lastName: "Smith"
	constructor: function (name, yearOfBirth, job)
	__proto__: Object
		constructor: function Object()
		hasOwnProperty: function hasOwnProperty()
		isPrototypeOf: function isPrototypeOf()
		propertyIsEnumerable: function propertyIsEnumerable()
		toLocaleString: function toLocaleString()
		toString: function toString()
		valueOf: function valueOf()

// John has its own property as name
john.hasOwnProperty('name') -----> True

// John has inherited lastname from Person prototype property
john.hasOwnProperty('lastname') --------> False

// John is an instanceOf Person function constructor
john instanceOf Person -----> True