// Lecture 52

// IIFE: Game: A random score from >=5 we win and lose
// if smaller. But we want the score hidden in the game.

function game(){
	var score = Math.random() * 10;

	console.log(score >= 5);
}
game();

// We can do better by iife

// Trick the parser to wrap function into paranthesis
(function (){
	var score = Math.random() * 10;
	console.log(score >=10);
})();

// We created data privacy here and score is not accessible
//console.log(score);

// Extending IIFE with arguments

(function(goodLuck){
	var score = Math.random() * 10;
	console.log(score >= 5 - goodLuck);
})(5);
