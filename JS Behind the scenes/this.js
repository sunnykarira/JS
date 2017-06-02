//This variable is a variable that each and every
//execution context has. It is stored in execution stack

/*

Regular function call: The this keyword points to global
object (i.e.) the window object

Method Call: the this variable points to the object that is calling
the method

The this keyword is not assigned a value until a function
where it is defined is actually called.
*/


// This is practice

//console.log(this);

// calculateAge(1985);

// function calculateAge(year){
// 	console.log(2016 - year);
// 	console.log(this); // Pointing to a window object
// 	// Since this is regular function call not an object method.
// 	//hence it will point to window object.
// }


//Object

var john = {
	name: 'John',
	yearofBirth: 1990,
	calculateAge: function (){
		console.log(this);
		console.log(2017 - this.yearofBirth);

			// //Inner Function
			// function innerFunction(){
			// 	console.log(this);
			// 	// Here this will point to window object
			// }

			// innerFunction();
	}
	// Here the this keyword is pointing to object
	// method i.e. calculate age
}

john.calculateAge();

//--------------- Method Borrowing ----------//


var mike = {
	name: 'Mike',
	yearofBirth: 1984,

};

// Important
// Method Borrowing
mike.calculateAge = john.calculateAge;
mike.calculateAge();