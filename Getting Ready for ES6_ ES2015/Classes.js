// Lesson 91

/*
	In ES 5 these are called function constructor and then inheritance takes
	place through prototype property.
*/

var Person5 = function(name, yearOfBirth, job){
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
};

Person5.prototype.calculateAge = function(){

	var age = new Date().getFullYear() - this.yearOfBirth;
	console.log(age);
};

var john5 = new Person5('John', 1990, 'Teacher');
john5.calculateAge();


// ES6 Way

// Class Definition are not hoisted unlike function constructors
// Also we can only add functions to classes not properties.

class Person6{

	// Every class is to have is compulsory
	constructor(name, yearOfBirth, job){
		this.name = name;
		this.yearOfBirth = yearOfBirth;
		this.job = job;
	}

	calculateAge(){
		var age = new Date().getFullYear() - this.yearOfBirth;
		console.log(age);
	}

	// We can add static function i.e. they are attached to class
	// but are not inherited by class instances
	// We can use it as helper functions
	static greeting(){
		console.log('Hey There!');
	}
};

const john6 = new Person6('John', 1990, 'Teacher');
john6.calculateAge();

// More of a class fucntion not an object function
Person6.greeting();