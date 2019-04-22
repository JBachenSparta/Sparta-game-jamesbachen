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

  setTimeout(function () {
    console.log("Helo");
  }, 1000);


    $('<img src="images/' + dealtUserCards[hitCount][1] + dealtUserCards[hitCount][2] + '.png"> ').attr('alt', 'image').appendTo(".userCardSpace"+hitCount).fadeIn(200).delay(200);

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
    console.log(blackJackDealerTotal);
//dealer will request another card if total is less than or equal to 16 and the total is less than the users.
    while (blackJackDealerTotal <= 16 && blackJackDealerTotal < blackJackUserTotal){
      console.log(blackJackDealerTotal);
      dealerCards();
    }

    if (blackJackDealerTotal > 21) {
      console.log("Dealer bust");
      blackJackDealerTotal = 0;
    }

    else if (blackJackDealerTotal == 21) {
      console.log("Black Jack");
    }

    else  {
      console.log("Dealer Stays");
    }

    score();
  }

  function score (){
    $('.userCommands').show();
    if (blackJackUserTotal == blackJackDealerTotal) {
      $('.userCommands').html("Draw");
      pot += (bet * 2)
      $('.money').html(money)

    } else if (blackJackUserTotal > blackJackDealerTotal ) {
      $('.userCommands').html("User Wins");
      money += pot+(bet * 2);
      $('.money').html(money)
      moneyTrack();

    } else {
      $('.userCommands').html("Dealer Wins");
      pot = 0;
      $('.money').html(money)
      moneyTrack();
    }
    $('.newGameButton').prop('disabled', false);

  }

  function setup (){
    deck1.reset();
    deck1.shuffle();
    userCards();
    userCards();
    dealerCards();

    $('.dealerScore').show();
    $('.userScore').show();
    $('.bettingButtons').hide();
    //delay apperance of buttons so cards can be dealt, cards dealt also delayed each second.
    $('.newGameButton').prop('disabled', true);
    $('.playingButtons').show();
    $('.userCommands').hide();
    //money += (-bet);
    $('.money').html(money);


    console.log(blackJackUserTotal);
    console.log(blackJackDealerTotal);
    $('<img src="images/CardBack.png" id=card-back>').appendTo(".dealerCardSpace"+dealerHitCount);
  }

  function betStartUp (){
    money = 100;
    //cover page that when pressed begins game and activates this function
      $('.money').html(money)
  }

  function betting (){
    if ((money - bet) <= -10) {
      $('.userCommands').show();
      $('.userCommands').html("don't have enough money to make that bet");
      setTimeout(function(){ $('.userCommands').hide(); }, 1000);
      money + bet;
      return
    }
    else {
      money += (-bet)
      setup();
    }
}

  function doubleDownBet (){
    if ((money - bet) <= -10) {
      $('.userCommands').show();
      $('.userCommands').html("don't have enough money to make that bet");
      setTimeout(function(){ $('.userCommands').hide(); }, 1000);
      money + bet;
      return
    }
    else {
      money += (-bet);
      bet += bet;
    }
}

  function moneyTrack (){

  if (money <= 0) {


    setTimeout(function() {
      gameLost();
    }, 1800);

    return;
  }
  if (money > 200) {

    setTimeout(function() {
      gameWon();
    }, 1800);

    return;
  }
  return;
}

  function gameLost() {

    $('.tableRow, .tableButtons').hide();
    $('.finalScreen, screenButton').show();
    $('.lost').html("You've run out of money!!<br>Would you like to borrow some more to continue playing?").css('margin-top', '29%')

    $(".screenButton1").on("click", function (){
      betStartUp ();
      $('.lost').html("Good luck!!").css('margin-top', '35%')
      $('.screenButton').hide();


      setTimeout(function() {
        pageLoad();
        newGame();

      }, 1600);

    })


    $(".screenButton2").on("click", function (){
      $('.lost').html("Probably a wise decision!! <br>But is you change your mind")
      $('.screenButton2').hide();
    })

  }

  function gameWon() {

    var gameHasBeenWon = "";

    if (gameHasBeenWon == false) {
      $('.tableRow, .tableButtons').hide();
      $('.finalScreen, screenButton').show();
      $('.lost').html("You have beaten the dealer!!<br> Would you like to continue playing").css('margin-top', '29%')
      $(".screenButton1").html("Contine playing")

      $(".screenButton1").on("click", function (){
        $('.lost').html("Good luck!!").css('margin-top', '35%')
        $('.screenButton').hide();

        setTimeout(function() {
          $('.tableRow, .tableButtons').show();
          $('.finalScreen').hide();
          newGame();
          gameHasBeenWon += 1

        }, 1600);

      })

      $(".screenButton2").on("click", function (){
        $('.lost').html("Probably a wise decision!! <br>But is you change your mind")
        $('.screenButton2').hide();
      })

    }
    else {
      return;

    }

    }


  ////// sets new game
  function newGame(){

    dealtUserCards = [];
    dealtDealerCards = [];
    hitCount = 0;
    dealerHitCount = 0;
    blackJackUserTotal = 0;
    blackJackDealerTotal = 0;
    $('img').remove('img');
    $('.money').html(money);
    // $('.userCommands').show();
    $('.userCommands').html("PLACE YOUR BETS!!");
    $('.bettingButtons').show();
    $('.playingButtons').hide();
    $('.dealerScore').hide();
    $('.userScore').hide();
    $('.doubleDownButton').prop('disabled', false);
    console.log("pot = " + pot);

  }

  //// first function called, sets up page
  function pageLoad (){

    betStartUp();
    $('.tableRow, .tableButtons').show();
    $('.finalScreen').hide();
    $('.money').html(money);
    $('.userCommands').html("Black Jack <br> PLACE YOUR BETS!!");
    $('.playingButtons').hide();
    $(".instructions").hide();

  }




  function enableLoop() {
    x.loop = true;

  }

  function playAudio() {
    x.play();
    x.load();
  }

  function instructions (){
    $('.tableRow, .tableButtons').hide();
    $('.finalScreen').hide();
    $('.instructions').show();
    playAudio();
    enableLoop();


  }



  var x = document.getElementById("myAudio");
  var deck1 = new Deck();
  var dealtUserCards = [];
  var dealtDealerCards = [];
  var hitCount = 0;
  var dealerHitCount = 0;
  var blackJackUserTotal = 0;
  var blackJackDealerTotal = 0;
  var money = 100;
  var bet = 0;
  var pot = 0;

////////  Setting bet values to buttons
  $(".betButton40").on("click", function (){
    bet = 40;
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
    $('.doubleDownButton').prop('disabled', true);
    doubleDownBet();
    $('.money').html(money)
  })


//////  functionallity of game, increments hit count

  $(".hitButton").on("click", function (){

    userCards();
    console.log(blackJackUserTotal);


    if (blackJackUserTotal > 21){
      console.log("Bust");
      $('.userCommands').show();
      $('.userCommands').html("You've gone bust");
      blackJackUserTotal = false;
      score();
    }

    else if (blackJackUserTotal == 21) {
      automateDealer();
      console.log("BlackJack");
    }

    else {
      console.log("Play on ");
    }
  });

//////  functionallity of game, automates dealer on stay button click
  $(".stayButton").on("click", function (){
    automateDealer();
  })


///// order of events and functions

  instructions();

  $(".instructionsButton").on("click", function (){
    pageLoad();

  })
  $(".betButton").on("click", function (){
    betting ();
  })

  $(".newGameButton").on("click", function (){
    newGame();
  })
})
