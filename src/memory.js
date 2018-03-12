var openedCards = [];
let card = document.getElementsByClassName('card');
let cards = [...card];

// fischer-yates shuffle
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// deck of all of the cards

export function startGame() {
  const deck = document.querySelector(".deck");
  let card = document.getElementsByClassName('card');
  let cards = [...card];
  var shuffledCards = shuffle(cards);
  var displayCard = function() {
    this.classList.toggle('open');
    this.classList.toggle('show');
    this.classList.toggle('disabled');
  };
  for(var i = 0; i < cards.length; i++){
    cards[i].addEventListener("click", displayCard);
  }
  for (var j = 0; j < shuffledCards.length; j++){
    deck.innerHTML = "";
    [].forEach.call(shuffledCards, function(item){
      deck.appendChild(item);
    });
    cards[j].classList.remove("show", "open", "match", "disabled");
  }
}

export function cardOpen() {
  openedCards.push(this);
  var len = openedCards.length;
  if(len === 2){
    // moveCounter();
    if(openedCards[0].type === openedCards[1].type){
      matched();
    } else {
      unmatched();
    }
  }
}

function matched(){
  openedCards[0].classList.add("match");
  openedCards[1].classList.add("match");
  openedCards[0].classList.remove("show", "open");
  openedCards[1].classList.remove("show", "open");
}

function unmatched() {
  openedCards[0].classList.add("unmatched");
  openedCards[1].classList.add("unmatched");
  disable();
  setTimeout(function(){
    openedCards[0].classList.remove("show", "open", "unmatched");
    openedCards[1].classList.remove("show", "open", "unmatched");
    enable();
    openedCards = [];
  },1100);
}

function disable(){
  Array.prototype.filter.call(cards, function(card){
    card.classList.add('disabled');
  });
}

function enable(){
  Array.prototype.filter.call(cards, function(card){
    card.classList.remove('disabled');
    for(var i = 0; i < 2; i++){
      [i].classList.add('disabled');
    }
  });
}
