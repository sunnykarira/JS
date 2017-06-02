var names = ['John','Jane', 'Mark'];

var years = new Array(1990, 1969, 1949);


//Whole Array
console.log(names);

//Retrieve Value
console.log(names[0]);

//Mutating value in Array
names[1] = 'Ben';

console.log(names);

//Mixed Array
var john = ['John', 'Smith', 1990, 'Teacher', false];

//Add Element at starting of array
john.push('Blue');

//Add at the beginning
john.unshift('Mr.');

//Removes from last
john.pop();

//Removes from first
john.shift();

//Tells the index of the element we pass into it 
john.indexOf('Smith');

if(john.indexOf('Teacher') === -1)
	console.log('John is not a Teacher.');
else
	console.log('John is Something else.')

console.log(john);