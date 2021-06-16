const rollDice = () => {
    return Math.floor(Math.random() * 6) + 1;
}

let randomNumber1  = rollDice(), randomNumber2  = rollDice();


const displayDIceRoll = (img, diceVal) => {
    document.querySelector(img).setAttribute("src", `./images/dice${diceVal}.png`);
}

const getWinner = (roll1, roll2) => {
    if (roll1 === roll2) {
        return "DRAW"
    }
    return (roll1 > roll2) ? 1 : 2;
}

const displayWinner = () => {
    const draw = "DRAW"
    const winner = getWinner(randomNumber1, randomNumber2);
    const winnerText = document.querySelector("h1");
    (winner === draw) ? winnerText.innerText=draw : winnerText.innerText=`WINNER: PLAYER ${winner}`
}

document.addEventListener('DOMContentLoaded', () => {

    displayDIceRoll(".img1", randomNumber1);
    displayDIceRoll(".img2", randomNumber2);

    displayWinner(); 
})

