/*
	Allows us to pass any number of arguments in the function.
*/

/*

// ES5 Way

function isFullAge5(){
	console.log(arguments);
	// Arguments is not an array therefore we transform it to array
	var argsArr = Array.prototype.slice.call(arguments);

	argsArr.forEach(function(curr){
		console.log((2016 - curr) >= 18);
	});
}

isFullAge5(1990, 1999, 1965);
isFullAge5(1990, 1999, 1965, 2016, 1987);

// ES6 Way

function isFullAge6(...years){

	// It transforms it into an array
	console.log(years);
	years.forEach(curr => console.log(2016- curr >= 18));

	
}

isFullAge6(1990, 1999, 1965);
isFullAge5(1990, 1999, 1965, 2016, 1987);

*/

// Adding age limit

// ES5 Way

function isFullAge5(limit /* limit + arguments */){
	console.log(arguments);
	// Arguments is not an array therefore we transform it to array
	var argsArr = Array.prototype.slice.call(arguments, 1); //--- Start to slice from position 1 and can
	// Exclude limits

	argsArr.forEach(function(curr){
		console.log((2016 - curr) >= limit);
	});
}

isFullAge5(21, 1990, 1999, 1965);
//isFullAge5(1990, 1999, 1965, 2016, 1987);

// ES6 Way

function isFullAge6(limit, ...years){

	// It transforms it into an array
	console.log(years);
	years.forEach(curr => console.log(2016- curr >= limit));

	
}

isFullAge6(21, 1990, 1999, 1965);
isFullAge5(21, 1990, 1999, 1965, 2016, 1987);