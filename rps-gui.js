let classes = ["ROCK", "PAPER", "SCISSORS"];
let cpu = classes[Math.floor(Math.random()*classes.length)];
const viewport = document.querySelector('#viewport');
const score = document.querySelector('#score');
const results = document.createElement('div');
results.classList.add('results');
let playerScore = 0;
let cpuScore = 0;

function round(player) {
    if (playerScore == 5) {
        results.textContent = "PLAYER WINS!";
        viewport.appendChild(results);
        return;
    } if (cpuScore == 5) {
        results.textContent = "CPU WINS!";
        viewport.appendChild(results);
        return;
    }

    player = player.toUpperCase();
    if(player == cpu) {
        results.textContent = 'Tie!';
	} else if(player == "ROCK") {
    	if(cpu == "PAPER") {
            cpuScore++;
        	results.textContent = cpu + " covers " + player;
    	} else {
            playerScore++;
            results.textContent = player + " smashes " + cpu;
    	}
	} else if(player == "PAPER") {
    	if(cpu == "SCISSORS") {
            cpuScore++;
            results.textContent = cpu + " cut " + player;
    	} else {
        	playerScore++;
            results.textContent = player + " covers " + cpu;
    	}
	} else if(player == "SCISSORS") {
    	if(cpu == "ROCK") {
            cpuScore++;
            results.textContent = cpu + " smashes " + player;
    	} else {
            playerScore++;
            results.textContent = player + " cut " + cpu;
    	}
	}
    score.textContent = 'Player: ' + playerScore + " | " + 'CPU: ' + cpuScore;
    viewport.appendChild(score);
    viewport.appendChild(results);

    cpu = classes[Math.floor(Math.random()*classes.length)];
}

document.body.addEventListener("click", event => {
    if (event.target.nodeName == "BUTTON") {  
      round(event.target.textContent);
    }
  });