// Lesson 92

// Inheritance in ES5
var Person5 = function(name, yearOfBirth, job){
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
};

Person5.prototype.calculateAge = function(){

	var age = new Date().getFullYear() - this.yearOfBirth;
	console.log(age);
};

var Athelete5 = function(name, yearOfBirth, job, olympicGames, medals){

	// Call superclass function costructor.
	Person5.call(this, name, yearOfBirth, job);
	this.olympicGames = olympicGames;
	this.medals = medals;

}

// We need there prototype to be same
Athelete5.prototype = Object.create(Person5.prototype);

Athelete5.prototype.wonMedal = function(){
	this.medals++;
	console.log(this.medals);
}

var johnAthelete5 = new Athelete5('John', 1990, 'Swimmer', 3, 10);
johnAthelete5.calculateAge();
johnAthelete5.wonMedal();

/*------------------------------------------------------------------*/
// Inheritance in  ES6 Way
class Person6 {
	constructor(name, yearOfBirth, job){
		this.name = name;
		this.yearOfBirth = yearOfBirth;
		this.job = job;
	}

	calculateAge(){
		var date = new Date().getFullYear();
		console.log(date - this.yearOfBirth);
	}
}

class Athelete6 extends Person6{
	constructor(name, yearOfBirth, job, olympicGames, medals){

		// Call Superclass constructor
		super(name, yearOfBirth, job);
		this.olympicGames = olympicGames;
		this.medals = medals;
	}

	wonMedal(){
		this.medals++;
		console.log(this.medals);
	}
}

const johnAthelete6 = new Athelete6('John', 1990, 'Swimmer', 3, 10);
johnAthelete6.calculateAge();
johnAthelete6.wonMedal();