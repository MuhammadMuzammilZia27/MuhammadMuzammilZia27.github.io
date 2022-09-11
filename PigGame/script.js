'use strict';

let hold_button = document.querySelector('.btn--hold');
let reset_button = document.querySelector('.btn--new');
let dice_roll_button = document.querySelector('.btn--roll');
let allDices = document.querySelectorAll('.dice');
let player1 = document.querySelector('.player--0');
let player2 = document.querySelector('.player--1');
let allCurrent = document.querySelectorAll('.current-score')
let allScore = document.querySelectorAll('.score');
let score1 = 0, temp1 = 0;
let score2 = 0, temp2 = 0;
let user_dice = 0;

let hide_dicess = function () {
    for (let j = 0; j <= allDices.length; j++) {
        if (!allDices[i].classList.contains('hidden'))
            allDices[j].classList.add('hidden');
    }
}

let resetTheGame = function () {
    for (let i = 0; i < allCurrent.length; i++) {
        allCurrent[i].textContent = 0;
        score1 = 0;
        temp2 = 0;
        allScore[i].textContent = 0;
        score2 = 0;
        temp2 = 0;
    }
    allDices[user_dice].classList.add('hidden');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
}

let resetPlayer1 = function () {
    allCurrent[0].textContent = 0;
    score1 = 0;
    temp1 = 0;
    allScore[0].textContent = 0;
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.add('player--active');
}

let resetPlayer2 = function () {
    allCurrent[1].textContent = 0;
    allScore[1].textContent = 0;
    score2 = 0;
    temp2 = 0;
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
}


//This will RESET the Game
reset_button.addEventListener('click', resetTheGame)



//This will ROLL the dice
dice_roll_button.addEventListener('click', function () {
    if (user_dice === 0)
        console.log("");
    else
        allDices[user_dice].classList.add('hidden');

    user_dice = (Math.floor(Math.random() * 6) + 1) - 1;
    allDices[user_dice].classList.remove('hidden');

    if (user_dice === 0 && player1.classList.contains('player--active'))
        resetPlayer1();
    else if (user_dice === 0 && player2.classList.contains('player--active'))
        resetPlayer2();
    else {
        if (player1.classList.contains('player--active')) {
            score1 += (user_dice + 1);
            temp1 += (user_dice + 1);
            allCurrent[0].textContent = temp1;
        }
        else if (player2.classList.contains('player--active')) {
            score2 += (user_dice + 1);
            temp2 += (user_dice + 1);
            allCurrent[1].textContent = temp2;
        }
    }
})





//This will perform HOLD for each player
document.querySelector('.btn--hold').addEventListener('click', function () {
    if (player1.classList.contains('player--active')) {
        player1.classList.remove('player--active');
        player2.classList.add('player--active');
        allScore[0].textContent = score1;
        temp1 = 0;
        allCurrent[0].textContent = temp1;
    }
    else if (player2.classList.contains('player--active')) {
        player2.classList.remove('player--active');
        player1.classList.add('player--active');
        allScore[1].textContent = score2;
        temp2 = 0;
        allCurrent[1].textContent = temp2;
    }
})



