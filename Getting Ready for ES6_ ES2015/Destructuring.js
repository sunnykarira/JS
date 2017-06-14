/*
Gives us a handy data to extract data from Data Structure like an object or an array.

We have data in an array but we want it to store in a single variable.

*/

// ES 5 

/*
var john = ['John', 26];
var name = john[0];
var age = john[1];
*/

// What if we had 5 or 10 elements in the array.

// ES 6

const [name, age] = ['John', 26];

console.log(name);
console.log(age);

/*--------------------------------- With Objects -------------- */

obj = {
	firstName: 'John',
	lastName: 'Smith'
}

const {firstName, lastName} = obj;

console.log(firstName + ' ' + lastName);

/*------------------------ If we want differerent keys -----------*/

const {firstName: a, lastName: b} = obj;

console.log(a + ' ' + b);



// Practical Application of Destructuring is 
// Returning multiple values from the function

// In ES5 we return a object but in ES6 we can destructuring

function calcAgeRetirement(year){

	let age = new Date().getFullYear() - year;

	return [age, 65 - age];
}


const [age2, retirement] = calcAgeRetirement(1990);

console.log(age + " " + retirement);