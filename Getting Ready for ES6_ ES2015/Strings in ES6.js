// Lesson 100
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year){
	return 2016 - year;
}


// Template Literals
// ES5 Way
console.log('This is ' + firstName + ' ' + lastName);

// ES6 Way
console.log(`This is ${firstName} ${lastName}. He is ${calcAge(yearOfBirth)}`);



const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('J'));
console.log(n.includes(' '));
console.log(`${firstName} `.repeat(5));
