Not working at the moment

// start game button 
const start = document.querySelector(".startButton");
// roll button 
const roll = document.querySelector(".roll-button");
// result of dice roll 
let score = document.querySelector(".rolled-number");
// source of dice image 
let diceImg = document.querySelector(".dice-image").src;
// Player 1/ You lose/ You win 
const title = document.querySelector(".header");
// Hidden variable to represent increasing score
let cumulativeScore = 0


const diceRoll = () => {
    let x = Math.floor(Math.random() *6) +1;
    score.textContent = x;
    diceImg.src = `./projects/dicegame/img/dice${x}.png`;
    if (x !== 1) {
        cumulativeScore += x;
        score.textContent = cumulativeScore;
    } else {
        start.style.visibility = "visible";
        roll.style.visibility = "none";
        score.textContent = `You got a 1! You lose, try again...`;
    }
    if (cumulativeScore >= 20) {
        score.textContent = `You win with a score of ${cumulativeScore}`;
        roll.style.visibility = "hidden";
        start.style.visibility = "visible";
    }
}

const gameStart = () => {
    roll.style.visibility = "visible";
    start.style.visibility = "hidden";

    roll.addEventListener("click",(diceRoll) => {
        diceRoll();
    });
}
start.addEventListener("click",() => {
    window.location.reload(true);
    gameStart();
})








// roll.addEventListener("click", () => {
//     if
// What Needs to Happen:
// - Start the game/ roll the dice and get a 1 = start again
// - Roll the dice and get higher than 1
// - Roll the dice and get <20






// for (if x === 1) {
//     title.textContent = "You Lose!";
//     start.textContent = "Start A Game";
//     score.textContent = score += x;
//     console.log(x);

// } else if (x > 1) {
//     title.display = none;
//     score.textContent = score += x;
//     roll.textContent = "roll again";
//     start.textContent = none;

    // }



    
    // Dice Roll 
    
//     // assigns diceface image source
//     score.textContent += x

//     diceImg = `dice${x}.png`;
    
//     score.textContent = x
// // need to cummulate x's

//     if (x > 1) {
//     }
//    if (x === 1) {
// //         document.diceFace.Image =
//         console.log("you lose");
//     }

    // console.log(x)
    // console.log(diceImg);
    // console.log("roll dice");
// })