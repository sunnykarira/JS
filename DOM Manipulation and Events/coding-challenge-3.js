/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/* Coding Challenge 3 
- Add another dice to this game, so that there are two dices now. The player loses his current score when 
	one of them is 1.
*/

var scores, roundScore, activePlayer, gamePlaying;

// This is called pig game

function init(){
	scores = new Array(0,0);  //[Score0, Score1]
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;

	/* Use querySelector to change CSS of the object */
	document.querySelector('.dice0').style.display = 'none';
	document.querySelector('.dice1').style.display = 'none';

	/* Setting current score and score to 0. Using getElementById. It is faster for ID's */
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';

	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');

	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');


}


//Generate Random Number
//dice = Math.floor(Math.random()*6 + 1);  // Gives random number between 1 and 6
//console.log(dice);

//Dom Manipulation

/* querySelector = Selects the first element it finds
	textContent = Change only plaintext not HTML text 
	innerHTML = if we need to change text and add HTML as well
*/
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';


/* Read from DOM and store it */
//var x = document.querySelector('#score-'+ activePlayer).textContent;
//console.log(x);

//Starting phase
init();



//Rolling the dice
document.querySelector('.btn-roll').addEventListener('click', /*Anonymous Function*/function(){

		if(gamePlaying){
				// 1.Random Number
				var dice0 = Math.floor(Math.random()*6 + 1);
				var dice1 = Math.floor(Math.random()*6 + 1);

				console.log(dice0 + " "  + dice1);

				// 2.Display the result
				var dice0DOM = document.querySelector('.dice0');
				dice0DOM.style.display = 'block';
				dice0DOM.src = 'dice-'+ dice0 +'.png';

				var dice1DOM = document.querySelector('.dice1');
				dice1DOM.style.display = 'block';
				dice1DOM.src = 'dice-' + dice1 + '.png';

				//3. Update the round score IF the rolled number  was NOT 1.
				if(dice0 === 1 || dice1 === 1){
					//Next Player
					nextPlayer();
					

				}else{
					
					// Add Score
					roundScore += dice0 + dice1;
					document.querySelector('#current-' + activePlayer).textContent = roundScore;

				}
		}
		
});

//Holding the score
document.querySelector('.btn-hold').addEventListener('click', function(){

		if(gamePlaying){
				//Add current score to players global score
				scores[activePlayer] += roundScore;
				console.log(scores[activePlayer]);

				//Update the UI
				document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];


				//Check if player won the game
				if(scores[activePlayer] >= 100){
					// Current player is winner
					document.querySelector('#name-' + activePlayer).textContent = 'Winner!';

					document.querySelector('.dice').style.display = 'none';
					document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
					document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

					gamePlaying = false;


				}else{

					//Next Player
					nextPlayer();

				}

		}
		
});

//New Game
document.querySelector('.btn-new').addEventListener('click', init);



function nextPlayer(){

	//Next Player
			activePlayer ===0 ? activePlayer = 1: activePlayer = 0;

			//Set roundScore to 0
			roundScore = 0;
			document.querySelector('#current-0').textContent = '0';
			document.querySelector('#current-1').textContent = '0';

			// Switching the DOT
			//document.querySelector('.player-0-panel').classList.remove('active');
			//document.querySelector('.player-1-panel').classList.add('active');
			document.querySelector('.player-0-panel').classList.toggle('active');
			document.querySelector('.player-1-panel').classList.toggle('active');

			//Hide the dice again
			document.querySelector('.dice0').style.display = 'none';
			document.querySelector('.dice1').style.display = 'none';
}






