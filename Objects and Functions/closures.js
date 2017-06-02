// Lecture 53 Important

// How many years left until retirement

function retirement(retirementAge){

	a = ' Years left until retirement';
	return function(yearOfBirth){
		var age = 2017 - yearOfBirth;

		console.log((retirementAge - age) + a);
	}
}

var retirementUS = retirement(66);

var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);

//retirement(66)(1995);


// What is clousre?
// The execution stack of retirement function is popped off the
// stack. However we can use the variables of that function like 'a'
// above. This is closure.

/*-------------- Summary -------- */

/*
An inner function has always access to the variables and parameters
of its outer function, even after the outer function has returned.
*/

// Challenge

function interviewQuestion(job){

	return function(name){
		if(job === 'Designer'){
			console.log(name + ' What is UX design?');
		}else if(job === 'Teacher'){
			console.log('What subject do you teach ' + name);
		}else{
			console.log('Hello ' + name + ' What do you do?' );
		}
	}
}

interviewQuestion('Teacher')('John');

