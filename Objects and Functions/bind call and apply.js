// Lecture 54 

/*
These methods allow us to call a function and 
set the 'this' variable manually.
*/

var john = {
	name: 'john',
	age: 26,
	job: 'teacher',
	presentation: function(style, timeOfDay){
		if(style === 'formal'){
			console.log('Good ' + timeOfDay + ' Ladies and Gentlemen! I\'m  a' + this.job + ' and I\'m ' + this.age + ' yo');
		}else if(style === 'friendly'){
			console.log('Hey what\'s up' +'I\'m  a ' + this.job + ' and I\'m ' + this.age + ' yo' + ' Have a nice ' + timeOfDay);
		}
	}

};

john.presentation('formal', 'morning');

 var emily = {
 	name: 'emily',
 	age : 35,
 	job: 'designer'
 };

 // Call: methods set the this variable [Arguments --- this, style, timeOfDay]
 // This is called method borrowing
 john.presentation.call(emily, 'friendly', 'afternoon');

 //Apply: set the this variable. only 2 arguments, this and all othe argunments as array
 //john.presentation.apply(emily, ['friendly', 'afternoon']);


// Bind: Same as call let us explicitly set 'this' variable
// Does not call the function immediately but let us store the function
// by generating a copy of it.
//Preset some Arguments
var johnFriendly = john.presentation.bind(john, 'friendly');
// Not setting timeOfDay argument
johnFriendly('Morning');
johnFriendly('Night');
// This Technique is called Currying.

var EmilyFormal = john.presentation.bind(emily, 'formal');
EmilyFormal('Afternoon');


/*-------------------------------------------*/

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
	var arrRes = [];

	for(var i=0; i<arr.length; i++){
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function calculateAge(el){
	return 2017 - el;
}

function isFullAge(limit, el){
	return el >= limit;
}


var ages = arrayCalc(years, calculateAge);
//Preset the limit already by bind function because
// isFullAge has 2 arguments and fn accepts 1 argument
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);