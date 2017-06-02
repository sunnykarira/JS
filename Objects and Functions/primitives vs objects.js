// Lesson 49

/* 
Everything is an object (Not 100% correct)

Primitives: Number, Strings, Booleans, Undefined, Null
			Hold data within itself.

Objects: Everything Else: Arrays, Functions, Objects, Dates, 
		Wrappers for Numbers, Strings, Booleans is an Object.
		They does not have real copy of object but they only have reference
		to that memory location.
*/

// Primitive: They have their own copy of data.
var a  = 23;
var b = a;

a = 46;

console.log(a);
console.log(b);

// Objects: They reference memory location

var obj1 = {
	name: 'john',
	age: 26
}

// No new copy is created here.
// These two point to same memory location.
 var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Passing object and primitive in function
var age = 27;
var obj = {
	name: 'Sunny',
	city: 'Delhi'
};

function change(a, b){

	a = 30;
	b.city = 'San Frasco';
}

change(age, obj);

console.log(age);  // 27
console.log(obj.city); // SFO