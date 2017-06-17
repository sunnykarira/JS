const years = [1990,  1965, 1982, 1937];

// ES5

var ages5 = years.map(function(curr){
	return new Date().getFullYear() - curr;s
});

console.log(ages5);

//ES6

let ages6 = years.map( el =>  new Date().getFullYear() - el);
console.log(ages6);

// mre tahn one arguments
ages6 = years.map((el, idx) => `Age element ${idx+1}: ${new Date().getFullYear() - el}`);
console.log(ages6);

// More than one lines to return

ages6 = years.map((el, idx) => {
	const now = new Date().getFullYear();
	const age = now - el;
	return `Age element ${idx+1}: ${age}`
});

console.log(ages6);
