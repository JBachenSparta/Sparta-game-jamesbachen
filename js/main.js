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

// function split (test){
  // var str = deck1.deal();
  // var test = str.split(" ");
  //dealt.push(cardData);
  // test = cardData;
//   return test = deck1.deal().split(" ");
//
// }


function cardValues (completeSplitCard){
// function cardValues (blackJackValue, faceValue, faceSuit){
  // blackJackValue = "";
  // faceValue = "";
  // faceSuit = "";



// function cardValues (bjValue, value, suit){
  // var test = (split(test));
  // console.log(test);

  splitDealtCard = deck1.deal().split(" ");
  var valuesFace = ["King", "Queen", "Jack"];
  var valuesNum = ["2","3","4","5","6","7","8","9","10"];
  var valuesAce = ["Ace"]
  value = splitDealtCard[0];
  suit = splitDealtCard[2];
  completeSplitCard = [];

  // console.log(value);

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
  console.log(completeSplitCard);

  return completeSplitCard;
  // console.log(suit)
  // return suit
}

function userCards () {
  var completeSplitCard = [];
  completeSplitCard = cardValues (completeSplitCard);
  console.log(completeSplitCard)
// function userCards (blackJackValue, faceValue, faceSuit) {
  // var blackJackValue = cardValues(blackJackValue);
  // var faceValue = cardValues(faceValue);
  // var faceSuit = cardValues(faceSuit);
  // console.log(blackJackValue, faceValue, faceSuit);

}

var deck1 = new Deck();

deck1.shuffle();
console.log(deck1.deck);
userCards ();

console.log(deck1.deck);
