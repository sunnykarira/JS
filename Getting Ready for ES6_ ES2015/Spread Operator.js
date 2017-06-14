/*
Useful to expand elements of an array in arguments or function calls
*/

function addFourAges(a, b, c, d){
	return a+b+c+d;
}

var sum1 = addFourAges(18, 30, 12, 21);

console.log(sum1);

// What is we have these four numbers in the array. How would we pass an array into that function

// ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null /* this variable */, ages);
console.log(sum2);

// ES6 -- Spread Operator
const sum3 = addFourAges(...ages);
console.log(sum3);


const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);

// Spread on Nodelist
const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');
