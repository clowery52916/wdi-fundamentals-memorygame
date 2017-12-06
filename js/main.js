//create cards in game
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped queen");
var cardTwo = cards[3];
cardsInPlay.push = (cardTwo);
console.log("User flipped king");

if (cardsInPlay.length === 2) {
	console.log("You have selected 2 cards.");
}
if (cardsInPlay[0] === cardsInPlay[1]) {
	alert ("You found a match!");
} else {alert ("Sorry, try again.");
}

