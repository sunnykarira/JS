// Lesson 102

//Arrow functions do not have this keyword.
// They share the same this in the function they are written in

// ES5

// var box5 = {
// 	color: 'green',
// 	position: 1,
// 	clickMe: function(){

// 		var self = this;
// 		document.querySelector('.green').addEventListener('click', function(){
// 			var str = 'This is box number ' + self.position + ' and it is ' + self.color;
// 			alert(str);
// 		});
// 	}
// }

// // Only method call this points to the object but in a regular function call it points to the
// // window (global) object.
// box5.clickMe();

//ES6
// Arrow functions share the surrounding this

var box6 = {
	color: 'green',
	position: 1,
	clickMe: function(){
		document.querySelector('.green').addEventListener('click', () => {
			var str = 'This is box number ' + this.position + ' and it is ' + this.color;
			alert(str);
		});
	}
}

box6.clickMe();

// var box6 = {
// 	color: 'green',
// 	position: 1,
// 	// Here this won't work because the surrounding is global object and hence it becomes undefined.
// 	clickMe: () => {
// 		document.querySelector('.green').addEventListener('click', () => {
// 			var str = 'This is box number ' + this.position + ' and it is ' + this.color;
// 			alert(str);
// 		});
// 	}
// }

// // Here this won't work because the surrounding is global object and hence it becomes undefined.
// box6.clickMe();

/*----------------_Another Example ------ */
//ES5
function Person(name){
	this.name = name;
}

Person.prototype.myFriends5 = function(friends){

	// var arr = friends.map(
	// 	 In here this will not point to this local  but will point to this global 
	// 	function(el){
	// 	return this.name + 'is friends with ' + el;
	// });

	var arr = friends.map(function(el){
		return this.name + ' is friends with ' + el;
	}.bind(this));

	console.log(arr);
}

var friends =  ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);


// ES6
Person.prototype.myFriends6 = function(friends){

	// var arr = friends.map(
	// 	 In here this will not point to this local  but will point to this global 
	// 	function(el){
	// 	return this.name + 'is friends with ' + el;
	// });

	var arr = friends.map(el => {
		return `${this.name} is friends with ${el}`;
	});

	console.log(arr);
}

new Person('John').myFriends6(friends);