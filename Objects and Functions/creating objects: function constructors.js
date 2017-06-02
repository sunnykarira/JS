//Lesson 46
// Function Constructor

// Simple way to write an object but what if we have a lot of objects to create
var john = {
	name: 'John',
	yearOfBirth: 1990,
	job: 'Teacher'
};


// Pattern for writing for blueprint (function constructor)
var Person = function(name, yearOfBirth, job){
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;

	 /*--------------------------------------- Inheritance ------------------------ */
 	//Adding method to a object
	// this.calculateAge = function(){
	// 	console.log(2017 - this.yearOfBirth);
	// }
}

// Here it will not be copied all and all. It will be shared among objects.   
Person.prototype.calculateAge = function(){
	console.log(2017 - this.yearOfBirth);
}

//Adding properties to prototype it will be shared among the objects.
Person.prototype.lastName = 'Smith';

// This is called Instantiation
// new -- brand new empty object is created after that arguments are sent
// Here when on object is created and execution stack is also created with this variable.
// In general normal function expression this points to window object but here if we see this will point to
// Person Object as it is function statement.
 var john = new Person('John', 1990, 'Teacher');
 //john.calculateAge();

// Each of the object has calculateAge() functio attached to them because we have it in function constructor
// But what if calculateAge() has very much lines of code . Therefore we will make 3 copies of the same calculateAge()
// function
// This is exactly we use inheritance. Therefore we need to add calculateAge() 
//in function constructor prototype property
 var jane = new Person('Jane', 1969, 'Designer');
 var mark = new Person('Mark', 1948, 'Retired');


 john.calculateAge();
 jane.calculateAge();
 mark.calculateAge();

 console.log(john.lastName);
 console.log(jane.lastName);
 console.log(mark.lastName);




