/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/* Challenge 1

- A player looses his EnTIRE score when he rolls two 6  in a row. After that, it's the next player's turn. 
	(Hint: Always save the previous dice roll in a seperate variable.)
*/

var scores, roundScore, activePlayer, gamePlaying;

// This is called pig game

function init(){
	scores = new Array(0,0);  //[Score0, Score1]
	prevscores = new Array(0,0);
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;

	/* Use querySelector to change CSS of the object */
	document.querySelector('.dice').style.display = 'none';

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
				var dice = Math.floor(Math.random()*6 + 1);
				console.log(dice + " " + prevscores[activePlayer]);


				// 2.Display the result
				var diceDOM = document.querySelector('.dice');
				diceDOM.style.display = 'block';
				diceDOM.src = 'dice-'+ dice +'.png';

				//3. Update the round score IF the rolled number  was NOT 1.
				if(dice === 1){
					nextPlayer();

				}else if(dice === 6 && prevscores[activePlayer] === 6 ){
					scores[activePlayer] = 0;
					document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];
					nextPlayer();

				}else{

					roundScore += dice;
					document.querySelector('#current-'+activePlayer).textContent = roundScore;
				}

				prevscores[activePlayer] = dice;
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
			activePlayer === 0 ? activePlayer = 1: activePlayer = 0;

			prevscores = [0,0];

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
			document.querySelector('.dice').style.display = 'none';
}






