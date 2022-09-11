'use strict';

let secret = Math.trunc(Math.random() * 20);
let tries = 20;
document.querySelector('.score').textContent = tries;
document.querySelector('.highscore').textContent = 0;


document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value);

    if (tries > 1) {
        if (!guess) {
            document.querySelector('.message').textContent = '😑 No Number';
            tries--;
            document.querySelector('.score').textContent = tries;
        }
        else if (guess === secret) {
            document.querySelector('.message').textContent = "🎉 Correct Number";
            tries--;
            document.querySelector('.score').textContent = tries;
            document.querySelector('.highscore').textContent = tries;
            document.querySelector('.number').textContent = secret;
            document.querySelector('.number').style.width = '30rem'
            document.querySelector('body').style.backgroundColor = '#60b347'
        }
        else if (guess > secret) {
            document.querySelector('.message').textContent = "📈 Too High";
            tries--;
            document.querySelector('.score').textContent = tries;
        }
        else if (guess < secret) {
            document.querySelector('.message').textContent = "📉 Too Low";
            tries--;
            document.querySelector('.score').textContent = tries;
        }
    }
    else if (guess !== secret) {
        document.querySelector('.message').textContent = '😥 You Lost'
        document.querySelector('body').style.backgroundColor = '#ff3838'
        document.querySelector('.score').textContent = 0;
    }

})



document.querySelector('.again').addEventListener('click', function () {
    secret = Math.trunc(Math.random() * 20);
    document.querySelector('.message').textContent = "Start guessing...";
    tries = 20;
    document.querySelector('.score').textContent = tries;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem'
})












