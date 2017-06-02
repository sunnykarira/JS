//Index elements by specific keyword
//Like Catgorical Variables -- key value pairs
// No particular order

var john = {
	firstName: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'Teacher',
	isMarried: false
}

console.log(john);
console.log(john['firstName']);
console.log(john.lastName);

//Indirect Access
var xyz = 'job';
console.log(john[xyz]);

//Data Mutation
john['lastName'] = 'Miller';
john.job  = 'Driver'

console.log(john);


//Another way of creating object
var jane = new Object();

jane.firstName = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'Retired';
jane.isMarried = true;

console.log(jane);
