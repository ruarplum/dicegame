// start game button 
const start = document.querySelector(".start-button");
// roll button 
const roll = document.querySelector(".roll-button");
// result of dice roll 
let score = document.querySelector(".rolled-number");
// source of dice image 
let diceImg = document.querySelector(".dice-image").src;
// Player 1/ You lose/ You win 
const title = document.querySelector(".header");


document.addEventListener("click", (roll) => {
    
    // Dice Roll 
    let x = (Math.floor(Math.random()*6)+1);
    
    // assigns diceface image source
    score.textContent += x

    diceImg = `dice${x}.png`;
    
    score.textContent = x
// need to cummulate x's

    if (x > 1) {
    }
   if (x === 1) {
//         document.diceFace.Image =
        console.log("you lose");
    }

    console.log(x);
    console.log(diceImg);
    // console.log("roll dice");
})