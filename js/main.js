//create cards in game
var cards = [
{
rank:'queen',
suit: 'hearts',
cardImage: "images/queen-of-hearts.png"
},
{
rank:'queen',
suit: 'diamonds',
cardImage: "images/queen-of-diamonds.png"
},
{
rank: 'king',
suit: 'hearts',
cardImage: "images/king-of-hearts.png"
},
{
rank: 'king',
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];
//card properties

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
console.log("User flipped " + cards[cardId].rank);
//add queen and king cards to array
cardsInPlay.push(cards[cardId].rank);
//display
console.log (cards[cardId].cardImage);
console.log (cards[cardId].suit);

	if (cardsInPlay.length === 2) {
	//do something?
}

checkForMatch();
};

flipCard(0);
flipCard(2);
//card methods
