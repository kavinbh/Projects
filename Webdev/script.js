'use strict';
let secretNumber = Math.floor(Math.random() * 20) + 1;
let userScore = 20;
let highScore = 0;

const displayMsg = function (message) {
	document.querySelector('.message').textContent = message;
};

//document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);
	console.log(guess);

	//when no number
	if (!guess) {
		displayMsg("No Number");
		//document.querySelector('.message').textContent = 'No Number';
	}
	//when user wins
	else if (guess === secretNumber) {
		//document.querySelector('.message').textContent = 'Correct guess';
		displayMsg("Correct Guess");
		document.querySelector('.number').textContent = secretNumber;
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '50rem';
		if (userScore > highScore) {
			highScore = userScore;
			document.querySelector('.highscore').textContent = highScore;
		}
	}
	//when number is not equal
	else if (guess !== secretNumber) {
		if (userScore > 1) {
			displayMsg(guess > secretNumber ? '📈 Too High' : "📉 Too Low");
			userScore--;
			document.querySelector('.score').textContent = userScore
			document.querySelector('body').style.backgroundColor = '#b34747';
			document.querySelector('.guess').value = '';
		} else {
			displayMsg("You Lose");
		}
	}
});

document.querySelector('.again').addEventListener('click', function () {
	userScore = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	//document.querySelector('.number').textContent = secretNumber;
	document.querySelector('body').style.backgroundColor = '#222';
	displayMsg("🤔 Start Guessing");
	//document.querySelector('.message').textContent = 'Start guessing';
	document.querySelector('.number').style.width = '15rem';
	document.querySelector('.score').textContent = userScore;
	document.querySelector('.guess').value = '';
});

document.addEventListener('keydown', function (e) {
	console.log(e);
	if (e.key === "Enter") {
		document.querySelector('.guess').value = '';
	}
})