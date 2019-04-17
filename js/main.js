$(function (){
  class Deck{
  constructor(){
    this.deck = [];
    this.reset();
    this.shuffle();
  }

  reset(){
    this.deck = [];

    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

    for (let suit in suits) {
      for (let value in values) {
        this.deck.push(`${values[value]} of ${suits[suit]}`);
      }
    }
  }

  shuffle(){
    const { deck } = this;
    let m = deck.length, i;

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

    console.log(completeSplitCard);
    $('<img src="images/' + dealtUserCards[hitCount][1] + dealtUserCards[hitCount][2] + '.png"> ').attr('alt', 'image').appendTo(".userCardSpace"+hitCount);
    hitCount++;

    $('.userScore').html('User Score: ' + blackJackUserTotal)



  }

  function dealerCards () {


    var completeSplitCard = [];
    completeSplitCard = cardValues (completeSplitCard);
    dealtDealerCards.push(completeSplitCard);
    blackJackDealerTotal += parseInt(completeSplitCard[0]);

    //console.log(blackJackDealerTotal);

    $('<img src="images/' + dealtDealerCards[dealerHitCount][1] + dealtDealerCards[dealerHitCount][2] + '.png">').appendTo(".dealerCardSpace"+dealerHitCount);
    dealerHitCount++;
    $('.dealerScore').html('Dealer Score: ' + blackJackDealerTotal)
  }

  function automateDealer () {

    $('#card-back').remove();

    while (blackJackDealerTotal <= 16){
      dealerCards();
    }

    if (blackJackDealerTotal == 21) {
      console.log("Black Jack");
    }

    else if (blackJackDealerTotal < 21 && blackJackDealerTotal > 16) {
      console.log("Dealer Stays");
    } else  {
      blackJackDealerTotal = 0
      console.log("Dealer is bust");
    }

    console.log(blackJackDealerTotal);
    score ();
  }



  function score (){
    if (blackJackUserTotal == blackJackDealerTotal) {
      console.log("Draw");
      money += (bet/2);
      $('.money').html(money)

    } else if (blackJackUserTotal > blackJackDealerTotal ) {
      console.log("User wins");
      money += (bet * 2);
      $('.money').html(money)

    } else {
      console.log("Dealer wins");
      money = money;
      $('.money').html(money)
    }

  }

  function setup (){
    deck1.reset();
    deck1.shuffle();
    userCards();
    userCards();
    dealerCards();
    console.log(blackJackUserTotal);
    console.log(blackJackDealerTotal);
    $('<img src="images/CardBack.png" id=card-back>').appendTo(".dealerCardSpace"+dealerHitCount);
  }

  function betStartUp (){
    money = 100;
    //cover page that when pressed begins game and activates this function
      $('.money').html(money)
      console.log(money);
  }

  // function betting(){
  //   if (true) {
  //
  //   }
  //
  // }


  var deck1 = new Deck();
  var dealtUserCards = [];
  var dealtDealerCards = [];
  var hitCount = 0;
  var dealerHitCount = 0;
  var blackJackUserTotal = 0;
  var blackJackDealerTotal = 0;
  var money = 100;
  var bet = 0;

  // deck1.shuffle();  //add this to intital setup
  // console.log(deck1.deck);
  // console.log(blackJackUserTotal);
  //

  // $('.money').html(money)

// $(".doubleDownButton").on("click", function (){
//   betStartUp();
//
// })

  $(".betButton40").on("click", function (){
    bet = 40
  })
  $(".betButton20").on("click", function (){
    bet = 20
  })
  $(".betButton10").on("click", function (){
    bet = 10
  })
  $(".betButton5").on("click", function (){
    bet = 5
  })
  $(".doubleDownButton").on("click", function (){
    money += -bet;
    bet += bet;
    $('.money').html(money)
  })


  $(".betButton").on("click", function (){
    money += (-bet);

    $('.money').html(money)
    console.log(money);
    if (money < 0) {
      console.log("Looser")
    }
    if (money > 130) {
      console.log("Congrats you beat the dealer");

    }

  })

  $(".hitButton").on("click", function (){

    userCards();
    console.log(blackJackUserTotal);

    if (blackJackUserTotal == 21) {
      automateDealer();
      console.log("BlackJack");
    }

    else if (blackJackUserTotal > 21){
      console.log("Bust");
      blackJackUserTotal = false;
      automateDealer();

    }
    else {
      console.log("Play on ");
    }
  });

  $(".stayButton").on("click", function (){
    automateDealer();
  })


  // $(".newGameButton").on("click", function (){
  //
  //   dealtUserCards = [];
  //   dealtDealerCards = [];
  //   hitCount = 0;
  //   dealerHitCount = 0;
  //   blackJackUserTotal = 0;
  //   blackJackDealerTotal = 0;
  //   $('img').remove('img');
  //   setup();
  //
  // })

function newGame(){
  dealtUserCards = [];
  dealtDealerCards = [];
  hitCount = 0;
  dealerHitCount = 0;
  blackJackUserTotal = 0;
  blackJackDealerTotal = 0;
  $('img').remove('img');
  $('.money').html(money);
  $('.userCommands').show();
  $('.userCommands').html("PLACE YOUR BETS!!");
  $('.bettingButtons').show();
  $('.playingButtons').hide();


}


  function pageLoad (){
    betStartUp();
    $('.money').html(money);
    $('.userCommands').html("Black Jack <br> PLACE YOUR BETS!!");
    $('.playingButtons').hide();

  }

  pageLoad();

  $(".betButton").on("click", function (){

    $('.bettingButtons').hide();
    //delay apperance of buttons so cards can be dealt, cards dealt also delayed each second.
    $('.playingButtons').show();
    $('.userCommands').hide();
    setup();

    $(".newGameButton").on("click", function (){
      newGame();
    })



  })

})
