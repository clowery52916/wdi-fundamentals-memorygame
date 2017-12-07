//create cards in game
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var checkForMatch = function() {
		if (cardsInPlay[0] === cardsInPlay[1]) {
		alert ("You found a match!");
} 	else { 
		alert ("Sorry, try again.");
}
};

var flipCard = function(cardId) {
	//user flips card and we can tell what card is picked 
console.log("User flipped " + cards[cardId]);
	if (cardsInPlay.length === 2) {
	//do something?
}
cardsInPlay.push(cards[cardId]);
checkForMatch();
};

flipCard(0);
flipCard(2);