# Sparta-game-jamesbachen-BlackJack

# Sparta Core Project 1

## Task

Build a browser based game using html, css and JavaScript!

The game must:

* Include an instruction section explaining how to play the game.
* Ether display a message when the user has won or display the users score after the game has finished.
* Be styled to perfection!
* Be hosted online!

## Comments

## Black Jack

# To play / Edit

To play the game either click the link - https://jbachensparta.github.io/Sparta-game-jamesbachen/

Or download the files to your desktop, open the directory 'Sparta-game-jamesbachen' with the code editor of your choice.  



The Game I picked was blackJack. You place a bet, then you are dealt a hand, then the dealer is dealt a hand, the person who's hand is closest a blackJack value of 21 wins and takes all the winnings.  

I began by planned out each of the necessary steps needed for the game to be able to run.  I needed be able to:
- Create a deck of cards.
- Shuffle the deck of cards.
- To draw a card from the deck.
- Apply a value to that card, for the black jack value, and also the values that would be displayed to the user.
- Draw multiple cards from the deck and create a total value for that hand, or go bust.
- Draw the dealers hand automatically, and find a value for that.
- Compare the user and dealers hand and determine a winner
- Allow bets to be placed on each hand, and the total amount bet transfer to the winner or loser.  

By planning out the game as such, I could forestall and potential logical errors and code in a more DRY fashion.  By completing each of the steps as a function I was then able to reshuffle and re-deal the in one further function, which is a crucial part of the game.  

##Further Comments

I had some issues with the finer rules of the game, such as if the dealer and player had a draw the bet money must remain in the pot and be added to the next winners takings, also using the setTimeout function to stall events and give the game a guiding flow. Both of these challenges could have been mitigated with greater planning whoever, which is what I shall endeavour to do on my next task.  

Further improvements to the game would be, incorporating all the logic of the game such as splitting hands, insurance and settling.  Finally it would be interesting to create a cheating dealer that would look at the value of the cards in the deck to come and hit or stay in accordance with that knowledge.  
