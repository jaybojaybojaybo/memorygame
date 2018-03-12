import './styles.css';
import {startGame} from './memory.js';
import {cardOpen} from './memory.js';

window.onload = startGame();


$(document).ready(function() {
  $('li.card').click(function() {
    var card = document.getElementsByClassName('card');
    cardOpen(card);
  });
  $('#startOver').live("click",function(){
    document.location.reload();
  });
});
