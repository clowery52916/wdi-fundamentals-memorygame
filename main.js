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

var checkForMatch = function(elem) {
    elem.setAttribute('src', (cards.cardImage));
    if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]){
        alert("You found a match!");
    } else {
        alert("Sorry, try again");
    }
}

var flipCard = function(elem){
    var cardId = elem.getAttribute('data-id');
    checkForMatch(elem);
    console.log("User flipped " + cards.rank);
    cardsInPlay.push(cards.rank);
    console.log(cards.cardImage);
    console.log(cards.suit);
}



createBoard();