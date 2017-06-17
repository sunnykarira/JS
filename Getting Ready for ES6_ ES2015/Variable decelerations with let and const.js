
// Lesson 98

// ES5 Way -------- Variables are function scoped

var name5 = 'Jane Smith';
var age5 = 23;
// We can muttate this name variable here
name5 = 'Jane Miller';
console.log(name5);


// ES6 ----------------- Variables are block scoped
const name6 = 'Jane Smith';
let age6 = 23;

//name6 = 'Jane Miller';
//console.log(name6);


/*----------------------------- Driver license function ----------- */

// ES5 Way
function driversLicense5(passedTest){
	if(passedTest){
		var firstName = 'John';
		var yearOfBirth = 1990;

		
	}
	console.log(firstName + 'born in' + yearOfBirth + 'is now allowed to drive a car.');
}

driversLicense5(true);

//ES6 Way ---- They are block scoped.
function driversLicense6(passedTest){

	//console.log(firstName);
	//Temporal dart zone. Variables are hoisted and set to undefined and we cannot use them.
	let firstName;
	const yearOfBirth = 1990;

	if(passedTest){
		 firstName = 'John';

		
	}
	console.log(firstName + 'born in ' + yearOfBirth + ',is now allowed to drive a car.');
}

driversLicense6(true);


// All i are block scopes in ES6
// let i = 23;

// for(let i = 0; i < 5; i++){
// 	console.log(i);
// }

// console.log(i);

// But in ES5 we get
var i = 23;

for(var i = 0; i < 5 ; i++){
	console.log(i);
}

console.log(i);