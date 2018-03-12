import './styles.css';
import {startGame} from './memory.js';
import {cardOpen} from './memory.js';
import $ from 'jquery';

window.onload = startGame();


$(document).ready(function() {
  $('li.card').click(function(name) {
    var clickedThing = card.getElementsByName(name);
    console.log(clickedThing);
    cardOpen(clickedThing);
  });
  $('#startOver').live("click",function(){
    document.location.reload();
  });
});
