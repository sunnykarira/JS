
// Lesson 48
// First define an object that act as a protoype and then create an object based onto it

var personProto = {

	calculateAge: function(){
		console.log(2017 - this.yearOfBirth);
	}
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth  = 1990;
john.job = 'Teacher';

//Another person with different method
var jane = Object.create(personProto, {

	name: {value: 'Jane'},
	yearOfBirth: {value: 1969},
	job: {value: 'Designer'}
});


/*

Object.create() = Builts an object that inherits directly from the one that we passed into the first argument
Function Contructor = Newly created objects inherit from the function cnostructor prototype property.
*/