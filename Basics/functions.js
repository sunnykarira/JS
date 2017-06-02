//Important aspect os JS. Piece of code we want to run
// over and over again.

// DRY: Don't Repeat Yourself


function calculateAge(yearOfBirth){

	return (2017 - yearOfBirth);
}

//var birthYear = prompt('Which year you are born?');
//console.log(calculateAge(birthYear));

function yearsUntilRetirement(name, yearOfBirth){

	var age = calculateAge(yearOfBirth);
	if(age < 65)
		console.log(name + ' has ' + (65-age) + ' years left!');
	else
		console.log(name + ' already retired ' + (age-65) + ' years ago');
}

yearsUntilRetirement('John', 1950);