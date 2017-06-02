//Hoisting
/*
Functions are available in the execution context
before the execution starts.
Variables are set to undefined though.

Here therefore we can call calculateAge in the upper
part itself , however function is down

Also here the execution stack is global execution stack
*/

calculateAge(1965);

function calculateAge(year){
	console.log(2017 - year);
}

//calculateAge(1990);

//For function Expression

//You can see here the function expression it is
// treated as a variable.

//retirement(1990);

var retirement = function(year){
	console.log(65 - (2017 - year));
}

retirement(1990);


/* hoisting with variables */
console.log(age);   //Undefined

var age = 23;

console.log(age);  // 23

/*-------------------------------------------*/

function foo(){
	var age = 65; // This age variable is stored in foo execution context
	console.log(age);
}

foo();
console.log(age); // This is stored in global execution object
