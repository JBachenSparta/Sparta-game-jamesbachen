$(function (){
class Deck {
  constructor() {
    this.deck = [];

    var suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    var values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

    for (var suit in suits) {
      for (var value in values) {
        this.deck.push(`${values[value]} of ${suits[suit]}`); /////this thing
      }
    }
  }

  shuffle(){
    var { deck } = this;
    var m = deck.length, i;

    while(m){
      i = Math.floor(Math.random() * m--);

      [deck[m], deck[i]] = [deck[i], deck[m]];
    }

    return this;
  }

  deal(){
    return this.deck.shift();
  }
}


function cardValues (completeSplitCard){

  splitDealtCard = deck1.deal().split(" ");
  var valuesFace = ["King", "Queen", "Jack"];
  var valuesNum = ["2","3","4","5","6","7","8","9","10"];
  var valuesAce = ["Ace"]
  value = splitDealtCard[0];
  suit = splitDealtCard[2];
  completeSplitCard = [];

  if (valuesFace.indexOf(value) >= 0) {
    blackJackValue = 10;
    completeSplitCard.push(blackJackValue)
    completeSplitCard.push(value)


  }
  else if (valuesNum.indexOf(value) >= 0) {
    blackJackValue = value;
    completeSplitCard.push(blackJackValue)
    completeSplitCard.push(value)

  }
  else {
    blackJackValue = 11;
    completeSplitCard.push(blackJackValue)
    completeSplitCard.push(value)
  }

  completeSplitCard.push(suit)

  return completeSplitCard;

}

function userCards () {
  var completeSplitCard = [];

  completeSplitCard = cardValues (completeSplitCard);
  dealtUserCards.push(completeSplitCard);
  blackJackUserTotal +=  parseInt(completeSplitCard[0]);

  //
  // for (var i = 0; i < completeSplitCard.length; i++) {
  //   for (var j = 0; j < completeSplitCard.length; j++) {
  //     completeSplitCard[j]
  //   }
  //   completeSplitCard[i][j]
  //   console.log(completeSplitCard[i].length);
  //
  // }
  console.log(completeSplitCard[2]);


//$('<img src="images/' + completeSplitCard[1] + completeSplitCard[2] + '.png">').appendTo(".userCardSpace" + hitCount );

}

function dealerCards () {
  var completeSplitCard = [];
  completeSplitCard = cardValues (completeSplitCard);
  dealtDealerCards.push(completeSplitCard);
  blackJackDealerTotal += parseInt(completeSplitCard[0]);

  console.log(completeSplitCard[2]);
  console.log(blackJackDealerTotal);
}




function automateDealer () {
  while (blackJackDealerTotal <= 16){
    dealerCards();

  }

  if (blackJackDealerTotal == 21) {
    console.log("Black Jack");
  }

  else if (blackJackDealerTotal < 21 && blackJackDealerTotal > 16) {
    console.log("Dealer Stays");
      // console.log(blackJackDealerTotal);
  }
  else  {
    console.log("Dealer is bust");
      // console.log(blackJackDealerTotal);
  }

}


var deck1 = new Deck();
var dealtUserCards = [];
var dealtDealerCards = [];
var hitCount = 0;
var blackJackUserTotal = 0;
var blackJackDealerTotal = 0

deck1.shuffle();
console.log(deck1.deck);
console.log(blackJackUserTotal);

// $('.hitButton').html(function(i, userCardSpace) { return +userCardSpace+1 });

//console.log(dealtUserCards[hitCount][1]);

$(".hitButton").on("click", function (){

  userCards();
  console.log(blackJackUserTotal);
  $('<img src="images/' + dealtUserCards[hitCount][1] + dealtUserCards[hitCount][2] + '.png">').appendTo(".userCardSpace"+hitCount);

  //$('userCardSpace'+hitcount)
  //if statment if value of cards it greater than 21 go bust, play dealer after interval.
  hitCount++;

  if (blackJackUserTotal == 21) {
    console.log("BlackJack");
  }

  else if (blackJackUserTotal > 21){
    console.log("Bust");
    automateDealer();

  }
  else {
    console.log("Play on ");
  }

});

$(".dealerButton").on("click", function (){
  dealerCards();
});


$(".stayButton").on("click", function (){
  automateDealer();
});







  // $(".hitButton").on("click", function (){
  //   userCards();
  //   console.log(dealtUserCards);


  })
