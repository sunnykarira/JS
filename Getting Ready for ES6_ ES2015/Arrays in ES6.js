

// It returns a nodeList
const boxes = document.querySelectorAll('.box');

// ES5 

var boxesArr5 = Array.prototype.slice.call(boxes);

boxesArr5.forEach(function(curr){
	curr.style.backgroundColor = 'dodgerblue';
});


// ES6
const boxesArr6 = Array.from(boxes);
// List to Array
boxesArr6.forEach( cur => cur.style.backgroundColor = 'dodgerblue' );


// Loop over the Array
/*--Problem with them is that they can not break or continue---*/


// ES5
// for(var i = 0; i < boxesArr5.length ; i++){

// 	if(boxesArr5[i].className === 'box blue'){
// 		continue;
// 	}

// 	boxesArr5[i].textContent = 'I changed to blue';
// }


// ES6

// forof loop
for(const cur of boxesArr6){
	if(cur.className.includes('blue')) continue;

	cur.textContent = 'I changed to blue';
}


/*-------------------- Find Elements in Array ----------------- */

// ES5
var ages = [12, 17, 8 , 21, 14, 11];

var full = ages.map(function(curr){
	return curr >= 18;
});

console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


// ES6
//findIndex and find 
console.log(ages.findIndex( cur => cur>= 18));
console.log(ages.find(cur => cur >= 18));