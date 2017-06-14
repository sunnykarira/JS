/*
When we want the parameters to be preset. 
*/

// ES5
function SmithPerson(firstName, yearofBirth, lastName, nationality){

	// Default in ES5
	lastName === undefined ? lastName = 'Smith' : lastName;
	nationality === undefined ? nationality = 'american' : nationality; 

	this.firstName = firstName;
	this.lastName = lastName;
	this.yearofBirth = yearofBirth;
	this.nationality = nationality;
};

//var john = new SmithPerson('John', 1990); // Simply define undefined to lastName and nationality
//var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');


// ES6

function SmithPerson(firstName, yearofBirth, lastName = 'Smith', nationality = 'american'){
	this.firstName = firstName;
	this.lastName = lastName;
	this.yearofBirth = yearofBirth;
	this.nationality = nationality;
}

var john = new SmithPerson('John', 1990); 
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');