function OpeningCeremony(callback) {
    console.log("OpeningCeremony - Let the games begin");
    let scores = { red: 0, blue: 0, green: 0, yellow: 0 };
    setTimeout(() => {
        console.log("OpeningCeremony - Timeout completed");
        callback(scores, LongJump);
    }, 1000);
}

function Race100M(scores, callback) {
    console.log("Race100M - Previous Scores:", scores);
    setTimeout(() => {
        console.log("Race100M - Timeout completed");
        let times = {
            red: Math.floor(Math.random() * (15 - 10) + 10),
            blue: Math.floor(Math.random() * (15 - 10) + 10),
            green: Math.floor(Math.random() * (15 - 10) + 10),
            yellow: Math.floor(Math.random() * (15 - 10) + 10)
        };
        console.log("Race100M - Times:", times);
        let colors = Object.keys(times);
        colors.sort((a, b) => times[a] - times[b]);
        scores[colors[0]] += 50;
        scores[colors[1]] += 25;
        console.log("Race100M - Updated Scores:", scores);
        callback(scores, HighJump);
    }, 3000);
}

function LongJump(scores, callback) {
    console.log("LongJump - Previous Scores:", scores);
    setTimeout(() => {
        console.log("LongJump - Timeout completed");
        let selectedColor = ['red', 'blue', 'green', 'yellow'][Math.floor(Math.random() * 4)];
        console.log(`LongJump - ${selectedColor} wins!`);
        scores[selectedColor] += 150;
        console.log("LongJump - Updated Scores:", scores);
        callback(scores, AwardCeremony);
    }, 2000);
}

function HighJump(scores, callback) {
    console.log("HighJump - Previous Scores:", scores);
    let choice = prompt("What colour secured the highest jump (red/blue/green/yellow)?");
    if (choice && choice.trim() !== "") {
        if (scores.hasOwnProperty(choice)) {
            scores[choice] += 100;
            console.log(`HighJump - ${choice} wins!`);
        } else {
            console.log("Event was cancelled");
        }
    } else {
        console.log("Event was cancelled");
    }
    console.log("HighJump - Updated Scores:", scores);
    callback(scores);
}

function AwardCeremony(scores) {
    console.log("AwardCeremony - Final Scores:", scores);
    let colors = Object.keys(scores);
    colors.sort((a, b) => scores[b] - scores[a]);
    console.log(`${colors[0]} came first with ${scores[colors[0]]} points.`);
    console.log(`${colors[1]} came second with ${scores[colors[1]]} points.`);
    console.log(`${colors[2]} came third with ${scores[colors[2]]} points.`);
}

// Start the sports day
OpeningCeremony(Race100M);

