// Variable Mutation and Type Coersion

var name = 'John ';
var age = 26;

console.log(age+age);
console.log(name + age);

//Type Coersion : JS automatically convert numberto string

var job, isMarried;
console.log(job);
job = 'Teacher';
isMarried = false;

//Type Coersion (Upcasting to string)
console.log(name + age + ' ' + job + ' ' + isMarried);

// Variable Mutation : Changing values of variable
age = 'thirty six';
job = 'Driver';

console.log(name + age + ' ' + job + ' ' + isMarried); 

//Get data from console
var lastName = prompt('What is the last name?');
console.log(lastName);

alert(name + age + ' ' + job + ' ' + isMarried);