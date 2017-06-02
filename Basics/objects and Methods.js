//Objects can hold various data types
//Even methods as well

//Version 1.0
/*
var john = {
	firstName: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'Teacher',
	isMarried: false,
	family: ['Jane', 'Mark', 'Bob'],
	calculateAge: function(){
		return (2017 - this.yearOfBirth);
	}
}


//console.log(john.family[2]);
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);
*/

//Each of these keys are known as properties
//Version 2.0
var john = {
	firstName: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'Teacher',
	isMarried: false,
	family: ['Jane', 'Mark', 'Bob'],
	calculateAge: function(){
		//See here
		this.age = 2017 - this.yearOfBirth;
	}

}

john.calculateAge();
console.log(john);