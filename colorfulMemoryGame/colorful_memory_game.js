"use strict";
//init game attribute
const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];
let cards = shuffle(colors.concat(colors));
let selectedCards = [];
let score = 0;
let timeLeft = 30;
let gameInterval;
//get value from html
const startbtn = document.getElementById('startbtn');
const gameContainer = document.getElementById('game-container');
const scoreEle = document.getElementById('score');
const timer = document.getElementById('timer');
function generateCards() {
    for (const color of cards) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.color = color;
        card.textContent = '?';
        gameContainer.appendChild(card);
    }
}
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
function cardClick(event) {
    const card = event.target;
    if (!card.classList.contains('card') || card.classList.contains('matched') || card.classList.contains('selected') || selectedCards.length >= 2 || timer.textContent === "Time Left: 0") {
        return;
    }
    card.textContent = card.dataset.color;
    card.style.backgroundColor = card.dataset.color;
    card.classList.add('selected');
    selectedCards.push(card);
    if (selectedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}
function checkMatch() {
    const [card1, card2] = selectedCards;
    if (card1.dataset.color === card2.dataset.color) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        score += 2;
        scoreEle.textContent = `Score: ${score}`;
    }
    else {
        card1.textContent = '?';
        card2.textContent = '?';
        card1.style.backgroundColor = `#ddd`;
        card2.style.backgroundColor = `#ddd`;
    }
    card1.classList.remove('selected');
    card2.classList.remove('selected');
    selectedCards = [];
}
function startGame() {
    let timeLeft = 60;
    startbtn.disabled = true;
    score = 0;
    scoreEle.textContent = `Score: ${score}`;
    startGameTimer(timeLeft);
    cards = shuffle(colors.concat(colors));
    selectedCards = [];
    gameContainer.innerHTML = "";
    generateCards();
    gameContainer.addEventListener('click', cardClick);
}
function startGameTimer(timeLeft) {
    timer.textContent = `Time Left: ${timeLeft}`;
    gameInterval = setInterval(() => {
        timeLeft--;
        timer.textContent = `Time Left: ${timeLeft}`;
        if (timeLeft === 0) {
            clearInterval(gameInterval);
            let timeLeft = 30;
            alert('Game Over!');
            startbtn.disabled = false;
        }
    }, 1000);
}
startbtn.addEventListener('click', startGame);
