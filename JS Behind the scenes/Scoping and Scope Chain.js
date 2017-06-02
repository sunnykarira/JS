/* 
Scoping: Where can we certaing variable or function

Each new function creates a scope: the space/environment
in which the variables it defines are accessible
*/

/* In JS there is no scoping inn IF, FOR , WHILE */

/* Here is JS the new scope is created only in a function 
Also, in JS we have lexical scoping. A function inside of another function
gets the scope of outer function (parent function) */


// Global Scope
var a = 'Hello';
first();

//First Scope
function first(){
	var b = 'Hi';
	second();

	//Second Scope
	function second(){
		var c = 'Hey';
		console.log(a + b + c);
	}
}

// Goes into the parent scope if not in local scope.
// This does not work backward.



//Execution Stack vs Scope chain

var a = 'Hello';
first();

function first(){
	var b = 'Hi';
	second();

	function second(){
		var c = 'Hey';
		third();
	}
}

function third(){
	var d = 'John';
	console.log(a+d);
	//console.log(a+b+c+d);
	//It can not access b and c , only can access a;
}