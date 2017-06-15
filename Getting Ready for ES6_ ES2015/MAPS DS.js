// Lesson 90

/* 
	New key value pair introduction in ES6
	In Object we are limited to strings but in MAPS we can use anything.
*/

const question = new Map();

// Key value pair
question.set('question', 'What is the official name of the latest major JS version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');

question.set('correct', 3);

question.set(true, 'Correct Answer');
question.set(false, 'Wrong! Please try Again');


//console.log(question);
console.log(question.get('question')); // Get data from Map
// console.log(question.size); // Size of Map
//question.delete(4); // Delete from map
// question.delete(4);

// if(question.has(4)) question.delete(4);

// question.clear(); // Delete all from the map

// Maps are Iterable
// question.forEach( (value, key) => console.log('This is' + key + ', and it\'s set to' + value) );

for(let [key, value] of question.entries()){
	// console.log('This is' + key + ', and it\'s set to' + value);
	if(typeof(key) === 'number'){
		console.log(key + ' ' + value);
	}
}

const ans = parseInt(prompt('Write the correct Answer?'));

// if(question.get('correct') === ans){
// 	console.log(question.get(true));
// }else{
// 	console.log(question.get(false));
// }

console.log(question.get(ans === question.get('correct')));