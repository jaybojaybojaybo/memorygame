import './styles.css';
import {startGame} from './../src/memory.js';

window.onload = startGame();
// 
// let card = document.getElementsByClassName('card');
// let cards = [...card];

// for(var i = 0; i < cards.length; i++){
//   cards[i].addEventListener("click", displayCard);
// }

// var displayCard = function() {
//   this.classList.toggle('open');
//   this.classList.toggle('show');
//   this.classList.toggle('disabled');
// };
