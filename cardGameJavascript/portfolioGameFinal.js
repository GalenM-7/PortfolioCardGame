/////////////// set up Global variables  //////////////////////////////////

//create arrays for hands, suits, and values
//this is final version
let suits = ["Hearts", "Diamonds", "Clubs", "Spades", "Skulls", "Swords"];
let values = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

let hand1 = [];
let hand2 = [];
let hand3 = [];
let hand4 = [];
let hand5 = [];
let hand6 = [];
let hand7 = [];
let hand8 = [];
let hand9 = [];
let hand10 = [];
let hand11 = [];
let hand12 = [];
let hand13 = [];
let hand14 = [];
let hand15 = [];

let collection = [];
let collectionNew = [];

let valuesTest1 = [];
let valuesTest2 = [];

let evaluateSet1 = [];
let evaluateSet2 = [];
let evaluateSet3 = [];
let evaluateSet4 = [];
let evaluateSet5 = [];
let evaluateSet6 = [];

let evalSuit = [];
let storeBonuses = [];
let score1 = [];
let score2 = [];
let score3 = [];
let score4 = [];
let score5 = [];
let score6 = [];

let bonusScore = [];
let cocktailNegativeScore = [0, 0, 0];
let cocktailPositiveScore = [0, 0, 0];

let Royal1 = [];
let Straight1 = [];
let FourKind1 = [];
let FullHouse1 = [];
let ThreeKind1 = [];
let Pair1 = [];
let Flush1 = [];

let Royal2 = [];
let Straight2 = [];
let FourKind2 = [];
let FullHouse2 = [];
let ThreeKind2 = [];
let TwoPair2 = [];
let Pair2 = [];
let Flush2 = [];

let Royal3 = [];
let Straight3 = [];
let FourKind3 = [];
let FullHouse3 = [];
let ThreeKind3 = [];
let Pair3 = [];
let Flush3 = [];

let Royal4 = [];
let Straight4 = [];
let FourKind4 = [];
let FullHouse4 = [];
let ThreeKind4 = [];
let Pair4 = [];
let Flush4 = [];

let Royal5 = [];
let Straight5 = [];
let FourKind5 = [];
let FullHouse5 = [];
let ThreeKind5 = [];
let Pair5 = [];
let Flush5 = [];

let Royal6 = [];
let Straight6 = [];
let FourKind6 = [];
let FullHouse6 = [];
let ThreeKind6 = [];
let Pair6 = [];
let Flush6 = [];

let handCounter = [];

let handChoices = [];
let handChoices2 = [];
let handChoices3 = [];
let handChoices4 = [];
let handChoices5 = [];
let handChoices6 = [];
let handChoices7 = [];
let handChoices8 = [];
let handChoices9 = [];
let handChoices10 = [];
let handChoices11 = [];
let handChoices12 = [];
let handChoices13 = [];
let handChoices14 = [];
let handChoices15 = [];

let dupCounter = [];
let dupCounter2 = [];
let dupCounter3 = [];
let dupCounter4 = [];
let dupCounter5 = [];
let dupCounter6 = [];
let dupCounter7 = [];
let dupCounter8 = [];
let dupCounter9 = [];
let dupCounter10 = [];
let dupCounter11 = [];
let dupCounter12 = [];
let dupCounter13 = [];
let dupCounter14 = [];
let dupCounter15 = [];

let drawCounter = [];

let check2 = [];

let anchor = [];

let finalScore = [];

let collectionAnalysisAnchors = [
  "collectionAnchor1",
  "collectionAnchor2",
  "collectionAnchor3",
  "collectionAnchor4",
  "collectionAnchor5",
  "collectionAnchor6",
  "collectionAnchor7",
  "collectionAnchor8",
  "collectionAnchor9",
  "collectionAnchor10",
  "collectionAnchor11",
  "collectionAnchor12",
  "collectionAnchor13",
  "collectionAnchor14",
  "collectionAnchor15",
  "collectionAnchor16",
  "collectionAnchor17",
  "collectionAnchor18",
  "collectionAnchor19",
  "collectionAnchor20",
  "collectionAnchor21",
  "collectionAnchor22",
  "collectionAnchor23",
  "collectionAnchor24",
  "collectionAnchor25",
  "collectionAnchor26",
  "collectionAnchor27",
  "collectionAnchor28",
  "collectionAnchor29",
  "collectionAnchor30",
];
let collectionAnalysisCocktail = [
  "No",
  "No",
  "No",
  "No",
  "No",
  "No",
  "No",
  "No",
  "No",
  "No",
  "No",
  "No",
  "No",
  "No",
  "No",
  "No",
  "No",
  "No",
  "No",
  "No",
  "No",
  "No",
  "No",
  "No",
  "No",
  "No",
  "No",
  "No",
  "No",
  "No",
];


let collectionFinal = [];

let collectionDividedPostive = [];
let collectionDividedNegative = [];
let collectionAnalysisTotal = [];

let wagerCheck = [];
let cocktailCardsDifference = [0];
let wagerResultPositive = [0];
let wagerResultNegative = [0];
let wagerDifference = [0];
let wagerResultDifference = [0];
let userWager = [];
let wager = [];
let finalNegative = [];
let finalPositive = [];




/////////////// functions to create deck bonus cards  //////////////////////////////////

let bonusDeck = [];

class cardBonus {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}

let bonus1 = new cardBonus("BonusM", "Bonus");
let bonus2 = new cardBonus("BonusM", "Bonus");
let bonus3 = new cardBonus("BonusM", "Bonus");
let bonus4 = new cardBonus("BonusM", "Bonus");
let bonus5 = new cardBonus("BonusM", "Bonus");

class BonusDeck {
  constructor() {
    this.bonusDeck = [];
  }

  shuffle() {
    let counter = this.bonusDeck.length,
      temp,
      i;

    while (counter) {
      i = Math.floor(Math.random() * counter--);
      temp = this.bonusDeck[counter];
      this.bonusDeck[counter] = this.bonusDeck[i];
      this.bonusDeck[i] = temp;
    }
    return this.deck;
  }

  createBonusDeck() {
    this.bonusDeck.push(bonus1);
    this.bonusDeck.push(bonus2);
    this.bonusDeck.push(bonus3);
    this.bonusDeck.push(bonus4);
    this.bonusDeck.push(bonus5);
  }
}

let bonusDeckObject = new BonusDeck();
bonusDeckObject.createBonusDeck();
bonusDeckObject.shuffle();

/////////////// functions to create cards and main draw deck  //////////////////////////////////

class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}

class Deck {
  constructor() {
    this.deck = [];
  }

  createDeck(suits, values) {
    for (let suit of suits) {
      for (let value of values) {
        this.deck.push(new Card(suit, value));
      }
    }
    return this.deck;
  }

  shuffle() {
    let counter = this.deck.length,
      temp,
      i;

    while (counter) {
      i = Math.floor(Math.random() * counter--);
      temp = this.deck[counter];
      this.deck[counter] = this.deck[i];
      this.deck[i] = temp;
    }
    return this.deck;
  }

  deal1() {
    hand1.push(bonusDeckObject.bonusDeck.pop());
    for (let i = 0; i < 4; i++) {
      hand1.push(this.deck.pop());
    }
    return hand1;
  }

  deal2() {
    hand2.push(bonusDeckObject.bonusDeck.pop());
    for (let i = 0; i < 4; i++) {
      hand2.push(this.deck.pop());
    }
    return hand2;
  }

  deal3() {
    hand3.push(bonusDeckObject.bonusDeck.pop());
    for (let i = 0; i < 4; i++) {
      hand3.push(this.deck.pop());
    }
    return hand3;
  }

  deal4() {
    hand4.push(bonusDeckObject.bonusDeck.pop());
    for (let i = 0; i < 4; i++) {
      hand4.push(this.deck.pop());
    }
    return hand4;
  }

  deal5() {
    hand5.push(bonusDeckObject.bonusDeck.pop());
    for (let i = 0; i < 4; i++) {
      hand5.push(this.deck.pop());
    }
    return hand5;
  }

  deal6() {
    for (let i = 0; i < 5; i++) {
      hand6.push(this.deck.pop());
    }
    return hand6;
  }

  deal7() {
    for (let i = 0; i < 5; i++) {
      hand7.push(this.deck.pop());
    }
    return hand7;
  }

  deal8() {
    for (let i = 0; i < 5; i++) {
      hand8.push(this.deck.pop());
    }
    return hand8;
  }

  deal9() {
    for (let i = 0; i < 5; i++) {
      hand9.push(this.deck.pop());
    }
    return hand9;
  }

  deal10() {
    for (let i = 0; i < 5; i++) {
      hand10.push(this.deck.pop());
    }
    return hand10;
  }

  deal11() {
    for (let i = 0; i < 5; i++) {
      hand11.push(this.deck.pop());
    }
    return hand11;
  }

  deal12() {
    for (let i = 0; i < 5; i++) {
      hand12.push(this.deck.pop());
    }
    return hand12;
  }

  deal13() {
    for (let i = 0; i < 5; i++) {
      hand13.push(this.deck.pop());
    }
    return hand13;
  }

  deal14() {
    for (let i = 0; i < 5; i++) {
      hand14.push(this.deck.pop());
    }
    return hand14;
  }

  deal15() {
    for (let i = 0; i < 5; i++) {
      hand15.push(this.deck.pop());
    }
    return hand15;
  }
}

let deck = new Deck();
deck.createDeck(suits, values);
////console.log(deck);

function deal() {
  console.log("deck");
  console.log(deck);
  console.log(deck.deck.length);
  console.log("cocktail deck Negative");
  console.log(cocktailDeckNegative);
  console.log(cocktailDeckNegative.deckCocktailNegative.length);
  console.log("cocktail deck");
  console.log(cocktailDeck);
  console.log(cocktailDeck.deckCocktail.length);

  //console.log(deck.deck.length);
  //console.log(deck.deck[5]);
  console.log;
  deck.shuffle();
  deck.shuffle();
  cocktailDeck.shuffle();
  cocktailDeckNegative.shuffle();

  if (collection.length === 0) {
    deck.deal1();
    console.log(hand1);
  } else if (collection.length === 2) {
    deck.deal2();
    console.log(hand2);
  } else if (collection.length === 4) {
    deck.deal3();
    console.log(hand3);
  } else if (collection.length === 6) {
    deck.deal4();
    console.log(hand4);
  } else if (collection.length === 8) {
    deck.deal5();
    console.log(hand5);
  } else if (collection.length === 10) {
    deck.deal6();
    console.log(hand6);
  } else if (collection.length === 12) {
    deck.deal7();
    console.log(hand7);
  } else if (collection.length === 14) {
    deck.deal8();
    console.log(hand8);
  } else if (collection.length === 16) {
    deck.deal9();
    console.log(hand9);
  } else if (collection.length === 18) {
    deck.deal10();
    console.log(hand10);
  } else if (collection.length === 20) {
    deck.deal11();
    console.log(hand11);
  } else if (collection.length === 22) {
    deck.deal12();
    console.log(hand12);
  } else if (collection.length === 24) {
    deck.deal13();
    console.log(hand13);
  } else if (collection.length === 26) {
    deck.deal14();
    console.log(hand14);
  } else if (collection.length === 28) {
    deck.deal15();
    console.log(hand15);
  } else {
  }
}

///// Create Cocktail Deck Negative ///////////////////////////////////////////////////////////////////////////////////

class cardCocktailNegative {
  constructor(suit, value, polarity) {
    this.suit = suit;
    this.value = value;
    this.polarity = polarity;
  }
}

class cocktailDeckClassNegative {
  constructor() {
    this.deckCocktailNegative = [];
  }

  createCocktailCardsNegative() {
    for (let i = 0; i < 35; i++) {
      let RumCoke25NDeck = new cardCocktailNegative("RumCoke", 20, "Negative");
      this.deckCocktailNegative.push(RumCoke25NDeck);
    }

    for (let i = 0; i < 30; i++) {
      let GinTonic35NDeck = new cardCocktailNegative(
        "GinTonic",
        40,
        "Negative"
      );
      this.deckCocktailNegative.push(GinTonic35NDeck);
    }

    for (let i = 0; i < 25; i++) {
      let LongIsland45NDeck = new cardCocktailNegative(
        "LongIsland",
        55,
        "Negative"
      );
      this.deckCocktailNegative.push(LongIsland45NDeck);
    }

    for (let i = 0; i < 10; i++) {
      let Margarita50NDeck = new cardCocktailNegative(
        "Margarita",
        70,
        "Negative"
      );
      this.deckCocktailNegative.push(Margarita50NDeck);
    }

    for (let i = 0; i < 6; i++) {
      let Margarita60NDeck = new cardCocktailNegative(
        "Margarita",
        80,
        "Negative"
      );
      this.deckCocktailNegative.push(Margarita60NDeck);
    }

    for (let i = 0; i < 2; i++) {
      let Margarita90Negative = new cardCocktailNegative(
        "Margarita",
        100,
        "Negative"
      );
      this.deckCocktailNegative.push(Margarita90Negative);
    }
  }

  shuffle() {
    let counter = this.deckCocktailNegative.length,
      temp,
      i;

    while (counter) {
      i = Math.floor(Math.random() * counter--);
      temp = this.deckCocktailNegative[counter];
      this.deckCocktailNegative[counter] = this.deckCocktailNegative[i];
      this.deckCocktailNegative[i] = temp;
    }
    return this.deckCocktailNegative;
  }
}

let cocktailDeckNegative = new cocktailDeckClassNegative();
cocktailDeckNegative.createCocktailCardsNegative();
cocktailDeckNegative.shuffle();
//console.log(cocktailDeckNegative);
////console.log("cocktailDeckNegative");
////console.log(cocktailDeckNegative);

///// Create Cocktail Deck /////////////////////////////////////////////////////////////////////////////////////

class cardCocktail {
  constructor(suit, value, polarity) {
    this.suit = suit;
    this.value = value;
    this.polarity = polarity;
  }
}

class cocktailDeckClass {
  constructor() {
    this.deckCocktail = [];
  }

  createCocktailCards() {
    for (let i = 0; i < 10; i++) {
      let RumCoke15N = new cardCocktail("RumCoke", 20, "Negative");
      this.deckCocktail.push(RumCoke15N);
    }

    for (let i = 0; i < 35; i++) {
      let RumCoke15P = new cardCocktail("RumCoke", 20, "Positive");
      this.deckCocktail.push(RumCoke15P);
    }

    for (let i = 0; i < 7; i++) {
      let GinTonic25N = new cardCocktail("GinTonic", 40, "Negative");
      this.deckCocktail.push(GinTonic25N);
    }

    for (let i = 0; i < 25; i++) {
      let GinTonic25P = new cardCocktail("GinTonic", 40, "Positive");
      this.deckCocktail.push(GinTonic25P);
    }

    for (let i = 0; i < 4; i++) {
      let LongIsland35N = new cardCocktail("LongIsland", 55, "Negative");
      this.deckCocktail.push(LongIsland35N);
    }
    for (let i = 0; i < 15; i++) {
      let LongIsland35P = new cardCocktail("LongIsland", 55, "Positive");
      this.deckCocktail.push(LongIsland35P);
    }
    for (let i = 0; i < 2; i++) {
      let Margarita40N = new cardCocktail("Margarita", 70, "Negative");
      this.deckCocktail.push(Margarita40N);
    }
    for (let i = 0; i < 7; i++) {
      let Margarita40P = new cardCocktail("Margarita", 70, "Positive");
      this.deckCocktail.push(Margarita40P);
    }

    for (let i = 0; i < 1; i++) {
      let Margarita50N = new cardCocktail("Margarita", 80, "Negative");
      this.deckCocktail.push(Margarita50N);
    }

    for (let i = 0; i < 2; i++) {
      let Margarita50P = new cardCocktail("Margarita", 80, "Positive");
      this.deckCocktail.push(Margarita50P);
    }
  }

  shuffle() {
    let counter = this.deckCocktail.length,
      temp,
      i;

    while (counter) {
      i = Math.floor(Math.random() * counter--);
      temp = this.deckCocktail[counter];
      this.deckCocktail[counter] = this.deckCocktail[i];
      this.deckCocktail[i] = temp;
    }
    return this.deckCocktail;
  }
}

let cocktailDeck = new cocktailDeckClass();
cocktailDeck.createCocktailCards();
cocktailDeck.shuffle();
//console.log(cocktailDeck)
////console.log(cocktailDeck);
////console.log("cocktailDeck");

///// Create Functions Sending Points Bonus/Cocktail, Shuffling New Cards back into deck  //////////////////////////////////

function send3Deck(options) {
  bonusDeckObject.shuffle();

  if (options[0].suit === "BonusM") {
    deck.deck.push(cocktailDeck.deckCocktail.pop());
    deck.deck.push(cocktailDeck.deckCocktail.pop());
    deck.deck.push(cocktailDeck.deckCocktail.pop());
    deck.deck.push(cocktailDeck.deckCocktail.pop());

    bonusScore.push(5);
    deck.shuffle();
    //console.log("Deck Length");
    //console.log(deck.deck.length);
    //console.log("Card 5");
    //console.log(deck.deck[5]);
    //console.log("Bonus Score");
    //console.log(bonusScore);
  } else if (options[1].suit === "BonusM") {
    deck.deck.push(cocktailDeck.deckCocktail.pop());
    deck.deck.push(cocktailDeck.deckCocktail.pop());
    deck.deck.push(cocktailDeck.deckCocktail.pop());
    deck.deck.push(cocktailDeck.deckCocktail.pop());

    bonusScore.push(5);
    deck.shuffle();
    //console.log("Deck Length");
    //console.log(deck.deck.length);
    //console.log("Card 5");
    //console.log(deck.deck[5]);
    //console.log("Bonus Score");
    //console.log(bonusScore);
    //} else if (options[0].suit === "BonusL") {
    // deck.deck.push(cocktailDeck.deckCocktail.pop());
    // deck.deck.push(cocktailDeck.deckCocktail.pop());
    // deck.deck.push(cocktailDeck.deckCocktail.pop());
    // bonusScore.push(5);
    // deck.shuffle();
    //console.log("Deck Length");
    //console.log(deck.deck.length);
    //console.log("Card 5");
    //console.log(deck.deck[5]);
    //console.log("Bonus Score");
    //console.log(bonusScore);
    //} else if (options[1].suit === "BonusL") {
    // deck.deck.push(cocktailDeck.deckCocktail.pop());
    // deck.deck.push(cocktailDeck.deckCocktail.pop());
    //deck.deck.push(cocktailDeck.deckCocktail.pop());
    // bonusScore.push(5);
    //  deck.shuffle();
    //console.log("Deck Length");
    //console.log(deck.deck.length);
    //console.log("Card 5");
    //console.log(deck.deck[5]);
    //console.log("Bonus Score");
    //console.log(bonusScore);
  } else {
  }
}

function isItACocktail(options) {
  if (options[0].polarity === "Positive") {
    cocktailPositiveScore.push(options[0].value);
    console.log("cocktailScore");
    console.log(options[0]);
    console.log("cocktailPositiveScore");
    console.log(cocktailPositiveScore);
    console.log(cocktailPositiveScore.length - 3);
  } else {
  }
  if (options[1].polarity === "Positive") {
    cocktailPositiveScore.push(options[1].value);
    console.log("cocktailScore");
    console.log(options[1]);
    console.log("cocktailPositiveScore");
    console.log(cocktailPositiveScore);
    console.log(cocktailPositiveScore.length - 3);
  } else {
  }

  if (options[0].polarity === "Negative") {
    cocktailNegativeScore.push(options[0].value);
    console.log("cocktailScore");
    console.log(options[0]);
    console.log("cocktailNegativeScore");
    console.log(cocktailNegativeScore);
    console.log(cocktailNegativeScore.length - 3);
  } else {
  }

  if (options[1].polarity === "Negative") {
    cocktailNegativeScore.push(options[1].value);
    console.log("cocktailScore");
    console.log(options[1]);
    console.log("cocktailNegativeScore");
    console.log(cocktailNegativeScore);
    console.log(cocktailNegativeScore.length - 3);
  } else {
  }
}

function sendNegativeDeckCards(options) {
  if (options[0].suit === "RumCoke") {
    //console.log(cocktailDeck.deckCocktail[5]);
    //console.log("shuffle proof");
    //cocktailDeck.deckCocktail.push(
     // cocktailDeckNegative.deckCocktailNegative.pop()
    //);

    deck.deck.push(cocktailDeck.deckCocktail.pop());

   // console.log("deckCocktailNegative length");
   // console.log(cocktailDeckNegative.deckCocktailNegative.length);
    cocktailDeck.shuffle();
    cocktailDeck.shuffle();
    deck.shuffle();
    deck.shuffle();
    //console.log("choice");
    //console.log(options[0]);
    //console.log("cocktail deck length Neg cards");
    //console.log(cocktailDeck.deckCocktail.length);
    //console.log(cocktailDeck.deckCocktail[5]);
  } else {
  }

  if (options[1].suit === "RumCoke") {
    cocktailDeck.deckCocktail.push(
      cocktailDeckNegative.deckCocktailNegative.pop()
    );

    deck.deck.push(cocktailDeck.deckCocktail.pop());

   // console.log("deckCocktailNegative length");
   // console.log(cocktailDeckNegative.deckCocktailNegative.length);
    cocktailDeck.shuffle();
    cocktailDeck.shuffle();
    deck.shuffle();
    deck.shuffle();
  } else {
  }

  if (options[0].suit === "GinTonic") {
    cocktailDeck.deckCocktail.push(
      cocktailDeckNegative.deckCocktailNegative.pop()
    );
    cocktailDeck.deckCocktail.push(
      cocktailDeckNegative.deckCocktailNegative.pop()
    );

    deck.deck.push(cocktailDeck.deckCocktail.pop());
    deck.deck.push(cocktailDeck.deckCocktail.pop());

  //  console.log("deckCocktailNegative length");
   // console.log(cocktailDeckNegative.deckCocktailNegative.length);
    cocktailDeck.shuffle();
    cocktailDeck.shuffle();
    deck.shuffle();
    deck.shuffle();
  } else {
  }

  if (options[1].suit === "GinTonic") {
    cocktailDeck.deckCocktail.push(
      cocktailDeckNegative.deckCocktailNegative.pop()
    );
    cocktailDeck.deckCocktail.push(
      cocktailDeckNegative.deckCocktailNegative.pop()
    );

    deck.deck.push(cocktailDeck.deckCocktail.pop());
    deck.deck.push(cocktailDeck.deckCocktail.pop());

   // console.log("deckCocktailNegative length");
   // console.log(cocktailDeckNegative.deckCocktailNegative.length);
    cocktailDeck.shuffle();
    cocktailDeck.shuffle();
    deck.shuffle();
    deck.shuffle();
  } else {
  }

  if (options[0].suit === "LongIsland") {
    cocktailDeck.deckCocktail.push(
      cocktailDeckNegative.deckCocktailNegative.pop()
    );
    cocktailDeck.deckCocktail.push(
      cocktailDeckNegative.deckCocktailNegative.pop()
    );
    cocktailDeck.deckCocktail.push(
      cocktailDeckNegative.deckCocktailNegative.pop()
    );

    deck.deck.push(cocktailDeck.deckCocktail.pop());
    deck.deck.push(cocktailDeck.deckCocktail.pop());

    //console.log("deckCocktailNegative length");
   // console.log(cocktailDeckNegative.deckCocktailNegative.length);
    cocktailDeck.shuffle();
    cocktailDeck.shuffle();
    deck.shuffle();
    deck.shuffle();

  } else {
  }

  if (options[1].suit === "LongIsland") {
    cocktailDeck.deckCocktail.push(
      cocktailDeckNegative.deckCocktailNegative.pop()
    );
    cocktailDeck.deckCocktail.push(
      cocktailDeckNegative.deckCocktailNegative.pop()
    );
    cocktailDeck.deckCocktail.push(
      cocktailDeckNegative.deckCocktailNegative.pop()
    );

    deck.deck.push(cocktailDeck.deckCocktail.pop());
    deck.deck.push(cocktailDeck.deckCocktail.pop());

    //console.log("deckCocktailNegative length");
  //  console.log(cocktailDeckNegative.deckCocktailNegative.length);
    cocktailDeck.shuffle();
    cocktailDeck.shuffle();
    deck.shuffle();
    deck.shuffle();

  } else {
  }

  if (options[0].suit === "Margarita") {
    cocktailDeck.deckCocktail.push(
      cocktailDeckNegative.deckCocktailNegative.pop()
    );
    cocktailDeck.deckCocktail.push(
      cocktailDeckNegative.deckCocktailNegative.pop()
    );
    cocktailDeck.deckCocktail.push(
      cocktailDeckNegative.deckCocktailNegative.pop()
    );
    cocktailDeck.deckCocktail.push(
      cocktailDeckNegative.deckCocktailNegative.pop()
    );
    cocktailDeck.deckCocktail.push(
      cocktailDeckNegative.deckCocktailNegative.pop()
    );

    deck.deck.push(cocktailDeck.deckCocktail.pop());
    deck.deck.push(cocktailDeck.deckCocktail.pop());
    deck.deck.push(cocktailDeck.deckCocktail.pop());

   // console.log("deckCocktailNegative length");
   // console.log(cocktailDeckNegative.deckCocktailNegative.length);
    cocktailDeck.shuffle();
    cocktailDeck.shuffle();
    deck.shuffle();
    deck.shuffle();

  } else {
  }

  if (options[1].suit === "Margarita") {
    cocktailDeck.deckCocktail.push(
      cocktailDeckNegative.deckCocktailNegative.pop()
    );
    cocktailDeck.deckCocktail.push(
      cocktailDeckNegative.deckCocktailNegative.pop()
    );
    cocktailDeck.deckCocktail.push(
      cocktailDeckNegative.deckCocktailNegative.pop()
    );
    cocktailDeck.deckCocktail.push(
      cocktailDeckNegative.deckCocktailNegative.pop()
    );
    cocktailDeck.deckCocktail.push(
      cocktailDeckNegative.deckCocktailNegative.pop()
    );

    deck.deck.push(cocktailDeck.deckCocktail.pop());
    deck.deck.push(cocktailDeck.deckCocktail.pop());
    deck.deck.push(cocktailDeck.deckCocktail.pop());

   // console.log("deckCocktailNegative length");
   // console.log(cocktailDeckNegative.deckCocktailNegative.length);
    cocktailDeck.shuffle();
    cocktailDeck.shuffle();
    deck.shuffle();
    deck.shuffle();

  } else {
  }
}

///////////// hide buttons and add event listeners to collection /////////////////////////////////

function hideall() {
  let makeSwitch1 = document.getElementById("makeSwitch");
  makeSwitch1.style.display = "none";

  let reset1 = document.getElementById("reset");
  reset1.style.display = "none";

  let scoreHideLabel = document.getElementById("scoreLabel");
  scoreHideLabel.style.display = "none";

  let scoreHide = document.getElementById("score");
  scoreHide.style.display = "none";

  let FE1 = document.getElementById("FinalEvaluation");
  FE1.style.display = "none";

  let AddUp = document.getElementById("AddItUp");
  AddUp.style.display = "none";

  let makeWager = document.getElementById("wager");
  makeWager.style.display = "none"

  document
    .getElementById("collectionAnchor1")
    .addEventListener("click", getValue1);
  document
    .getElementById("collectionAnchor2")
    .addEventListener("click", getValue2);
  document
    .getElementById("collectionAnchor3")
    .addEventListener("click", getValue3);
  document
    .getElementById("collectionAnchor4")
    .addEventListener("click", getValue4);
  document
    .getElementById("collectionAnchor5")
    .addEventListener("click", getValue5);
  document
    .getElementById("collectionAnchor6")
    .addEventListener("click", getValue6);
  document
    .getElementById("collectionAnchor7")
    .addEventListener("click", getValue7);
  document
    .getElementById("collectionAnchor8")
    .addEventListener("click", getValue8);
  document
    .getElementById("collectionAnchor9")
    .addEventListener("click", getValue9);
  document
    .getElementById("collectionAnchor10")
    .addEventListener("click", getValue10);
  document
    .getElementById("collectionAnchor11")
    .addEventListener("click", getValue11);
  document
    .getElementById("collectionAnchor12")
    .addEventListener("click", getValue12);
  document
    .getElementById("collectionAnchor13")
    .addEventListener("click", getValue13);
  document
    .getElementById("collectionAnchor14")
    .addEventListener("click", getValue14);
  document
    .getElementById("collectionAnchor15")
    .addEventListener("click", getValue15);
  document
    .getElementById("collectionAnchor16")
    .addEventListener("click", getValue16);
  document
    .getElementById("collectionAnchor17")
    .addEventListener("click", getValue17);
  document
    .getElementById("collectionAnchor18")
    .addEventListener("click", getValue18);
  document
    .getElementById("collectionAnchor19")
    .addEventListener("click", getValue19);
  document
    .getElementById("collectionAnchor20")
    .addEventListener("click", getValue20);
  document
    .getElementById("collectionAnchor21")
    .addEventListener("click", getValue21);
  document
    .getElementById("collectionAnchor22")
    .addEventListener("click", getValue22);
  document
    .getElementById("collectionAnchor23")
    .addEventListener("click", getValue23);
  document
    .getElementById("collectionAnchor24")
    .addEventListener("click", getValue24);
  document
    .getElementById("collectionAnchor25")
    .addEventListener("click", getValue25);
  document
    .getElementById("collectionAnchor26")
    .addEventListener("click", getValue26);
  document
    .getElementById("collectionAnchor27")
    .addEventListener("click", getValue27);
  document
    .getElementById("collectionAnchor28")
    .addEventListener("click", getValue28);
  document
    .getElementById("collectionAnchor29")
    .addEventListener("click", getValue29);
  document
    .getElementById("collectionAnchor30")
    .addEventListener("click", getValue30);
}

window.onload = hideall();

//////////////// create modals for rules, etc. ////////////////////////////////////

let rulesModal = document.getElementById("rulesModal");
let rulesBtn = document.getElementById("rulesBtn");

rulesBtn.onclick = function () {
  rulesModal.style.display = "block";
  //let backgroundModal = document.getElementById("backgroundModal");
 // backgroundModal.style.display = "block";
};

let rulesSpan = document.getElementsByClassName("close1")[0];

rulesSpan.onclick = function () {
  rulesModal.style.display = "none";
};

let pointValuesModal = document.getElementById("pointValuesModal");
let pointValuesBtn = document.getElementById("pointValuesBtn");

pointValuesBtn.onclick = function () {
  pointValuesModal.style.display = "block";
};

let pointValuesSpan = document.getElementsByClassName("close2")[0];

pointValuesSpan.onclick = function () {
  pointValuesModal.style.display = "none";
};

let decksModal = document.getElementById("decksModal");
let decksBtn = document.getElementById("decksBtn");

decksBtn.onclick = function () {
  decksModal.style.display = "block";
};

let deckSpan = document.getElementsByClassName("closeDecks")[0];

deckSpan.onclick = function () {
  decksModal.style.display = "none";
};

//////////////// functions for changing colors ////////////////////////////////////

function makeRedBorder(anchor) {
  let border1 = document.getElementById(anchor);
  border1.style.backgroundColor = "red";
}

function makeGreenBorder() {
  let border1 = document.getElementById("handAnchor1");
  border1.style.backgroundColor = "green";
  let border2 = document.getElementById("handAnchor2");
  border2.style.backgroundColor = "green";
  let border3 = document.getElementById("handAnchor3");
  border3.style.backgroundColor = "green";
  let border4 = document.getElementById("handAnchor4");
  border4.style.backgroundColor = "green";
  let border5 = document.getElementById("handAnchor5");
  border5.style.backgroundColor = "green";
}

function makeDarkGreenBorder(anchor) {
  let border1 = document.getElementById(anchor);
  border1.style.backgroundColor = "darkgreen";
}

function changeColorGetHandR() {
  document.getElementById("nextHand").style.backgroundColor = "darkred";
  document.getElementById("nextHand").style.color = "white";
}

function changeColorGetHandW() {
  document.getElementById("nextHand").style.backgroundColor = "white";
  document.getElementById("nextHand").style.color = "black";
}

function makeLightGreenBorder(anchor) {
  let borderG = document.getElementById(anchor);
  borderG.style.backgroundColor = "lightgreen";
}

function makeLightRedBorder(anchor) {
  let borderLR = document.getElementById(anchor);
  borderLR.style.backgroundColor = "red";
}

function changeColorGetConfirmR() {
  if (collection.length === 30) {
    document.getElementById("confirmButton").style.backgroundColor = "darkred";
    document.getElementById("confirmButton").style.color = "white";
  } else {
    document.getElementById("confirmButton").style.backgroundColor = "white";
    document.getElementById("confirmButton").style.color = "black";
  }
}

function changeColorGetConfirmW() {
  document.getElementById("confirmButton").style.backgroundColor = "white";
  document.getElementById("confirmButton").style.color = "black";
}

/////////////// function to change anchor dynamically //////////////////////////////////

function whichAnchor() {
  if (collection.length === 0) {
    anchor[0] = "collectionAnchor1";
  } else if (collection.length === 1) {
    anchor[0] = "collectionAnchor2";
  } else if (collection.length === 2) {
    anchor[0] = "collectionAnchor3";
  } else if (collection.length === 3) {
    anchor[0] = "collectionAnchor4";
  } else if (collection.length === 4) {
    anchor[0] = "collectionAnchor5";
  } else if (collection.length === 5) {
    anchor[0] = "collectionAnchor6";
  } else if (collection.length === 6) {
    anchor[0] = "collectionAnchor7";
  } else if (collection.length === 7) {
    anchor[0] = "collectionAnchor8";
  } else if (collection.length === 8) {
    anchor[0] = "collectionAnchor9";
  } else if (collection.length === 9) {
    anchor[0] = "collectionAnchor10";
  } else if (collection.length === 10) {
    anchor[0] = "collectionAnchor11";
  } else if (collection.length === 11) {
    anchor[0] = "collectionAnchor12";
  } else if (collection.length === 12) {
    anchor[0] = "collectionAnchor13";
  } else if (collection.length === 13) {
    anchor[0] = "collectionAnchor14";
  } else if (collection.length === 14) {
    anchor[0] = "collectionAnchor15";
  } else if (collection.length === 15) {
    anchor[0] = "collectionAnchor16";
  } else if (collection.length === 16) {
    anchor[0] = "collectionAnchor17";
  } else if (collection.length === 17) {
    anchor[0] = "collectionAnchor18";
  } else if (collection.length === 18) {
    anchor[0] = "collectionAnchor19";
  } else if (collection.length === 19) {
    anchor[0] = "collectionAnchor20";
  } else if (collection.length === 20) {
    anchor[0] = "collectionAnchor21";
  } else if (collection.length === 21) {
    anchor[0] = "collectionAnchor22";
  } else if (collection.length === 22) {
    anchor[0] = "collectionAnchor23";
  } else if (collection.length === 23) {
    anchor[0] = "collectionAnchor24";
  } else if (collection.length === 24) {
    anchor[0] = "collectionAnchor25";
  } else if (collection.length === 25) {
    anchor[0] = "collectionAnchor26";
  } else if (collection.length === 26) {
    anchor[0] = "collectionAnchor27";
  } else if (collection.length === 27) {
    anchor[0] = "collectionAnchor28";
  } else if (collection.length === 28) {
    anchor[0] = "collectionAnchor29";
  } else if (collection.length === 29) {
    anchor[0] = "collectionAnchor30";
  } else {
  }
}

/////////////// functions to get hands, change round text  //////////////////////////////////

function clearHand() {
  let anchorHand1 = document.getElementById("handAnchor1");
  while (anchorHand1.firstChild) {
    anchorHand1.removeChild(anchorHand1.firstChild);
  }
  let anchorHand2 = document.getElementById("handAnchor2");
  while (anchorHand2.firstChild) {
    anchorHand2.removeChild(anchorHand2.firstChild);
  }
  let anchorHand3 = document.getElementById("handAnchor3");
  while (anchorHand3.firstChild) {
    anchorHand3.removeChild(anchorHand3.firstChild);
  }
  let anchorHand4 = document.getElementById("handAnchor4");
  while (anchorHand4.firstChild) {
    anchorHand4.removeChild(anchorHand4.firstChild);
  }
  let anchorHand5 = document.getElementById("handAnchor5");
  while (anchorHand5.firstChild) {
    anchorHand5.removeChild(anchorHand5.firstChild);
  }
}

function changeRound(number) {
  document.getElementById("round");
  let roundCounter = document.createElement("p");
  round.appendChild(roundCounter);
  roundCounter.innerHTML = `Hand ${number}`;
  // roundCounter.setAttribute("style", "font-size: 50px");
  // roundCounter.setAttribute("style", "margin: 0px");
  roundCounter.style.textAlign = "right";
  roundCounter.style.color = "white";
  roundCounter.className += "hand";
}

function clearRound() {
  let anchorRound = document.getElementById("round");
  while (anchorRound.firstChild) {
    anchorRound.removeChild(anchorRound.firstChild);
  }
}

function showCard1(currentHand) {
  document.getElementById("handAnchor1");
  let h1c1 = document.createElement("img");
  h1c1.src = `cardGameImages/${currentHand[0].suit}${currentHand[0].value}.png`;
  handAnchor1.appendChild(h1c1);
}

function showCard2(currentHand) {
  document.getElementById("handAnchor2");
  let h1c1 = document.createElement("img");
  h1c1.src = `cardGameImages/${currentHand[1].suit}${currentHand[1].value}.png`;
  handAnchor2.appendChild(h1c1);
}

function showCard3(currentHand) {
  document.getElementById("handAnchor3");
  let h1c1 = document.createElement("img");
  h1c1.src = `cardGameImages/${currentHand[2].suit}${currentHand[2].value}.png`;
  handAnchor3.appendChild(h1c1);
}

function showCard4(currentHand) {
  document.getElementById("handAnchor4");
  let h1c1 = document.createElement("img");
  h1c1.src = `cardGameImages/${currentHand[3].suit}${currentHand[3].value}.png`;
  handAnchor4.appendChild(h1c1);
}

function showCard5(currentHand) {
  document.getElementById("handAnchor5");
  let h1c1 = document.createElement("img");
  h1c1.src = `cardGameImages/${currentHand[4].suit}${currentHand[4].value}.png`;
  handAnchor5.appendChild(h1c1);
  check2.push("draw");
}

///////////////////////////////////////////////////////////////////////////////////////

function getHand() {
  if (collection.length === 0 && drawCounter.length === 0) {
    changeColorGetHandW();
    makeGreenBorder();
    deal();
    changeRound("One");
    showCard1(hand1);
    showCard2(hand1);
    showCard3(hand1);
    showCard4(hand1);
    showCard5(hand1);
    drawCounter.push("draw");
    ////console.log("collection length");
    ////console.log(collection.length);
    ////console.log(drawCounter.length);
    ////console.log(cocktailDeck);
  } else if (collection.length === 2 && drawCounter.length === 1) {
    clearHand();
    clearRound();
    changeColorGetHandW();
    makeGreenBorder();
    send3Deck(handChoices);
    sendNegativeDeckCards(handChoices);
    isItACocktail(handChoices);
    deal();
    changeRound("Two");
    showCard1(hand2);
    showCard2(hand2);
    showCard3(hand2);
    showCard4(hand2);
    showCard5(hand2);
    drawCounter.push("draw");
  } else if (collection.length === 4 && drawCounter.length === 2) {
    clearHand();
    clearRound();
    changeColorGetHandW();
    makeGreenBorder();
    send3Deck(handChoices2);
    sendNegativeDeckCards(handChoices2);
    isItACocktail(handChoices2);
    deal();
    changeRound("Three");
    showCard1(hand3);
    showCard2(hand3);
    showCard3(hand3);
    showCard4(hand3);
    showCard5(hand3);
    drawCounter.push("draw");
    ////console.log("collection length");
    ////console.log(collection.length);
    ////console.log(drawCounter.length);
  } else if (collection.length === 6 && drawCounter.length === 3) {
    clearHand();
    clearRound();
    changeColorGetHandW();
    makeGreenBorder();
    send3Deck(handChoices3);
    sendNegativeDeckCards(handChoices3);
    isItACocktail(handChoices3);
    deal();
    changeRound("Four");
    showCard1(hand4);
    showCard2(hand4);
    showCard3(hand4);
    showCard4(hand4);
    showCard5(hand4);
    drawCounter.push("draw");
    ////console.log("collection length");
    ////console.log(collection.length);
    ////console.log(drawCounter.length);
  } else if (collection.length === 8 && drawCounter.length === 4) {
    clearHand();
    clearRound();
    changeColorGetHandW();
    makeGreenBorder();
    send3Deck(handChoices4);
    sendNegativeDeckCards(handChoices4);
    isItACocktail(handChoices4);
    deal();
    changeRound("Five");
    showCard1(hand5);
    showCard2(hand5);
    showCard3(hand5);
    showCard4(hand5);
    showCard5(hand5);
    drawCounter.push("draw");
    ////console.log("collection length");
    ////console.log(collection.length);
    ////console.log(drawCounter.length);
  } else if (collection.length === 10 && drawCounter.length === 5) {
    clearHand();
    clearRound();
    changeColorGetHandW();
    makeGreenBorder();
    send3Deck(handChoices5);
    sendNegativeDeckCards(handChoices5);
    isItACocktail(handChoices5);
    deal();
    changeRound("Six");
    showCard1(hand6);
    showCard2(hand6);
    showCard3(hand6);
    showCard4(hand6);
    showCard5(hand6);
    drawCounter.push("draw");
    ////console.log("collection length");
    ////console.log(collection.length);
    ////console.log(drawCounter.length);
  } else if (collection.length === 12 && drawCounter.length === 6) {
    clearHand();
    clearRound();
    changeColorGetHandW();
    makeGreenBorder();
    send3Deck(handChoices6);
    sendNegativeDeckCards(handChoices6);
    isItACocktail(handChoices6);
    deal();
    changeRound("Seven");
    showCard1(hand7);
    showCard2(hand7);
    showCard3(hand7);
    showCard4(hand7);
    showCard5(hand7);
    drawCounter.push("draw");
    ////console.log("collection length");
    ////console.log(collection.length);
    ////console.log(drawCounter.length);
  } else if (collection.length === 14 && drawCounter.length === 7) {
    clearHand();
    clearRound();
    changeColorGetHandW();
    makeGreenBorder();
    send3Deck(handChoices7);
    sendNegativeDeckCards(handChoices7);
    isItACocktail(handChoices7);
    deal();
    changeRound("Eight");
    showCard1(hand8);
    showCard2(hand8);
    showCard3(hand8);
    showCard4(hand8);
    showCard5(hand8);
    drawCounter.push("draw");
    ////console.log("collection length");
    ////console.log(collection.length);
    ////console.log(drawCounter.length);
  } else if (collection.length === 16 && drawCounter.length === 8) {
    clearHand();
    clearRound();
    changeColorGetHandW();
    makeGreenBorder();
    ////console.log("deck NNNNNNew");
    ////console.log(deck);
    send3Deck(handChoices8);
    sendNegativeDeckCards(handChoices8);
    isItACocktail(handChoices8);
    deal();
    changeRound("Nine");
    showCard1(hand9);
    showCard2(hand9);
    showCard3(hand9);
    showCard4(hand9);
    showCard5(hand9);
    drawCounter.push("draw");
    ////console.log("collection length");
    ////console.log(collection.length);
    ////console.log(drawCounter.length);
  } else if (collection.length === 18 && drawCounter.length === 9) {
    clearHand();
    clearRound();
    changeColorGetHandW();
    makeGreenBorder();
    send3Deck(handChoices9);
    sendNegativeDeckCards(handChoices9);
    isItACocktail(handChoices9);
    deal();
    changeRound("Ten");
    showCard1(hand10);
    showCard2(hand10);
    showCard3(hand10);
    showCard4(hand10);
    showCard5(hand10);
    drawCounter.push("draw");
    ////console.log("collection length");
    ////console.log(collection.length);
    ////console.log(drawCounter.length);
  } else if (collection.length === 20 && drawCounter.length === 10) {
    clearHand();
    clearRound();
    changeColorGetHandW();
    makeGreenBorder();
    send3Deck(handChoices10);
    sendNegativeDeckCards(handChoices10);
    isItACocktail(handChoices10);
    deal();
    changeRound("Eleven");
    showCard1(hand11);
    showCard2(hand11);
    showCard3(hand11);
    showCard4(hand11);
    showCard5(hand11);
    drawCounter.push("draw");
    ////console.log("collection length");
    ////console.log(collection.length);
    ////console.log(drawCounter.length);
  } else if (collection.length === 22 && drawCounter.length === 11) {
    clearHand();
    clearRound();
    changeColorGetHandW();
    makeGreenBorder();
    send3Deck(handChoices11);
    sendNegativeDeckCards(handChoices11);
    isItACocktail(handChoices11);
    deal();
    changeRound("Twelve");
    showCard1(hand12);
    showCard2(hand12);
    showCard3(hand12);
    showCard4(hand12);
    showCard5(hand12);
    drawCounter.push("draw");
    ////console.log("collection length");
    ////console.log(collection.length);
    ////console.log(drawCounter.length);
  } else if (collection.length === 24 && drawCounter.length === 12) {
    clearHand();
    clearRound();
    changeColorGetHandW();
    makeGreenBorder();
    send3Deck(handChoices12);
    sendNegativeDeckCards(handChoices12);
    isItACocktail(handChoices12);
    deal();
    changeRound("Thirteen");
    showCard1(hand13);
    showCard2(hand13);
    showCard3(hand13);
    showCard4(hand13);
    showCard5(hand13);
    drawCounter.push("draw");
    ////console.log("collection length");
    ////console.log(collection.length);
    ////console.log(drawCounter.length);
  } else if (collection.length === 26 && drawCounter.length === 13) {
    clearHand();
    clearRound();
    changeColorGetHandW();
    makeGreenBorder();
    send3Deck(handChoices13);
    sendNegativeDeckCards(handChoices13);
    isItACocktail(handChoices13);
    deal();
    changeRound("Fourteen");
    showCard1(hand14);
    showCard2(hand14);
    showCard3(hand14);
    showCard4(hand14);
    showCard5(hand14);
    drawCounter.push("draw");
  } else if (collection.length === 28 && drawCounter.length === 14) {
    clearHand();
    clearRound();
    changeColorGetHandW();
    makeGreenBorder();
    send3Deck(handChoices14);
    sendNegativeDeckCards(handChoices14);
    isItACocktail(handChoices14);
    deal();
    changeRound("Fifteen");
    showCard1(hand15);
    showCard2(hand15);
    showCard3(hand15);
    showCard4(hand15);
    showCard5(hand15);
    drawCounter.push("draw");
    let hideNext = document.getElementById("nextHand");
    hideNext.style.display = "none";
  } else {
  }
}

function seeAll() {
  ////console.log("1");
  ////console.log(handChoices);
  ////console.log("2");
  ////console.log(handChoices2);
  ////console.log("3");
  ////console.log(handChoices3);
}

/////////////// functions to get card from hand to collection  //////////////////////////////////

function addCard1() {
  if (handChoices.length < 2 && drawCounter.length === 1) {
    whichAnchor();
    Card1(handChoices, hand1, 0, 1, dupCounter);
  } else if (handChoices2.length < 2 && drawCounter.length === 2) {
    whichAnchor();
    Card1(handChoices2, hand2, 2, 3, dupCounter2);
  } else if (handChoices3.length < 2 && drawCounter.length === 3) {
    whichAnchor();
    Card1(handChoices3, hand3, 4, 5, dupCounter3);
  } else if (handChoices4.length < 2 && drawCounter.length === 4) {
    whichAnchor();
    Card1(handChoices4, hand4, 6, 7, dupCounter4);
  } else if (handChoices5.length < 2 && drawCounter.length === 5) {
    whichAnchor();
    Card1(handChoices5, hand5, 8, 9, dupCounter5);
  } else if (handChoices6.length < 2 && drawCounter.length === 6) {
    whichAnchor();
    Card1(handChoices6, hand6, 10, 11, dupCounter6);
  } else if (handChoices7.length < 2 && drawCounter.length === 7) {
    whichAnchor();
    Card1(handChoices7, hand7, 12, 13, dupCounter7);
  } else if (handChoices8.length < 2 && drawCounter.length === 8) {
    whichAnchor();
    Card1(handChoices8, hand8, 14, 15, dupCounter8);
  } else if (handChoices9.length < 2 && drawCounter.length === 9) {
    whichAnchor();
    Card1(handChoices9, hand9, 16, 17, dupCounter9);
  } else if (handChoices10.length < 2 && drawCounter.length === 10) {
    whichAnchor();
    Card1(handChoices10, hand10, 18, 19, dupCounter10);
  } else if (handChoices11.length < 2 && drawCounter.length === 11) {
    whichAnchor();
    Card1(handChoices11, hand11, 20, 21, dupCounter11);
  } else if (handChoices12.length < 2 && drawCounter.length === 12) {
    whichAnchor();
    Card1(handChoices12, hand12, 22, 23, dupCounter12);
  } else if (handChoices13.length < 2 && drawCounter.length === 13) {
    whichAnchor();
    Card1(handChoices13, hand13, 24, 25, dupCounter13);
  } else if (handChoices14.length < 2 && drawCounter.length === 14) {
    whichAnchor();
    Card1(handChoices14, hand14, 26, 27, dupCounter14);
  } else if (handChoices15.length < 2 && drawCounter.length === 15) {
    whichAnchor();
    Card1(handChoices15, hand15, 28, 29, dupCounter15);
  } else {
  }
}

function Card1(choices, hand, number, number2, duplicate) {
  if (duplicate[0] === "card1") {
    ////console.log("duplicate");
  } else if (collection.length > number2) {
  } else if (collection.length === number) {
    collection.push(hand[0]);
    choices.push(hand[0]);
    duplicate.push("card1");
    ////console.log(choices);
    let toAttach = document.getElementById(anchor);
    let card1 = document.createElement("img");
    card1.src = `cardGameImages/${hand[0].suit}${hand[0].value}.png`;
    toAttach.appendChild(card1);
    ////console.log("anchor");
    ////console.log(anchor);
    makeRedBorder("handAnchor1");
  } else if (collection.length === number2) {
    collection.push(hand[0]);
    choices.push(hand[0]);
    ////console.log(choices);
    let toAttach = document.getElementById(anchor);
    let card1 = document.createElement("img");
    card1.src = `cardGameImages/${hand[0].suit}${hand[0].value}.png`;
    toAttach.appendChild(card1);
    ////console.log("anchor");
    ////console.log(anchor);
    changeColorGetHandR();
    changeColorGetConfirmR();
    makeRedBorder("handAnchor1");
  } else {
  }
}


function addCard2() {
  if (handChoices.length < 2 && drawCounter.length === 1) {
    whichAnchor();
    Card2(handChoices, hand1, 0, 1, dupCounter);
  } else if (handChoices2.length < 2 && drawCounter.length === 2) {
    whichAnchor();
    Card2(handChoices2, hand2, 2, 3, dupCounter2);
  } else if (handChoices3.length < 2 && drawCounter.length === 3) {
    whichAnchor();
    Card2(handChoices3, hand3, 4, 5, dupCounter3);
  } else if (handChoices4.length < 2 && drawCounter.length === 4) {
    whichAnchor();
    Card2(handChoices4, hand4, 6, 7, dupCounter4);
  } else if (handChoices5.length < 2 && drawCounter.length === 5) {
    whichAnchor();
    Card2(handChoices5, hand5, 8, 9, dupCounter5);
  } else if (handChoices6.length < 2 && drawCounter.length === 6) {
    whichAnchor();
    Card2(handChoices6, hand6, 10, 11, dupCounter6);
  } else if (handChoices7.length < 2 && drawCounter.length === 7) {
    whichAnchor();
    Card2(handChoices7, hand7, 12, 13, dupCounter7);
  } else if (handChoices8.length < 2 && drawCounter.length === 8) {
    whichAnchor();
    Card2(handChoices8, hand8, 14, 15, dupCounter8);
  } else if (handChoices9.length < 2 && drawCounter.length === 9) {
    whichAnchor();
    Card2(handChoices9, hand9, 16, 17, dupCounter9);
  } else if (handChoices10.length < 2 && drawCounter.length === 10) {
    whichAnchor();
    Card2(handChoices10, hand10, 18, 19, dupCounter10);
  } else if (handChoices11.length < 2 && drawCounter.length === 11) {
    whichAnchor();
    Card2(handChoices11, hand11, 20, 21, dupCounter11);
  } else if (handChoices12.length < 2 && drawCounter.length === 12) {
    whichAnchor();
    Card2(handChoices12, hand12, 22, 23, dupCounter12);
  } else if (handChoices13.length < 2 && drawCounter.length === 13) {
    whichAnchor();
    Card2(handChoices13, hand13, 24, 25, dupCounter13);
  } else if (handChoices14.length < 2 && drawCounter.length === 14) {
    whichAnchor();
    Card2(handChoices14, hand14, 26, 27, dupCounter14);
  } else if (handChoices15.length < 2 && drawCounter.length === 15) {
    whichAnchor();
    Card2(handChoices15, hand15, 28, 29, dupCounter15);
  } else {
  }
}

function Card2(choices, hand, number, number2, duplicate) {
  if (duplicate[0] === "card2") {
    ////console.log("duplicate");
  } else if (collection.length > number2) {
  } else if (collection.length === number) {
    collection.push(hand[1]);
    choices.push(hand[1]);
    duplicate.push("card2");
    ////console.log(choices);
    let toAttach = document.getElementById(anchor);
    let card2 = document.createElement("img");
    card2.src = `cardGameImages/${hand[1].suit}${hand[1].value}.png`;
    toAttach.appendChild(card2);
    ////console.log("anchor");
    ////console.log(anchor);
    makeRedBorder("handAnchor2");
  } else if (collection.length === number2) {
    collection.push(hand[1]);
    choices.push(hand[1]);
    ////console.log(choices);
    let toAttach = document.getElementById(anchor);
    let card2 = document.createElement("img");
    card2.src = `cardGameImages/${hand[1].suit}${hand[1].value}.png`;
    toAttach.appendChild(card2);
    ////console.log("anchor");
    ////console.log(anchor);
    changeColorGetHandR();
    changeColorGetConfirmR();
    makeRedBorder("handAnchor2");
  } else {
  }
}

function addCard3() {
  if (handChoices.length < 2 && drawCounter.length === 1) {
    whichAnchor();
    Card3(handChoices, hand1, 0, 1, dupCounter);
  } else if (handChoices2.length < 2 && drawCounter.length === 2) {
    whichAnchor();
    Card3(handChoices2, hand2, 2, 3, dupCounter2);
  } else if (handChoices3.length < 2 && drawCounter.length === 3) {
    whichAnchor();
    Card3(handChoices3, hand3, 4, 5, dupCounter3);
  } else if (handChoices4.length < 2 && drawCounter.length === 4) {
    whichAnchor();
    Card3(handChoices4, hand4, 6, 7, dupCounter4);
  } else if (handChoices5.length < 2 && drawCounter.length === 5) {
    whichAnchor();
    Card3(handChoices5, hand5, 8, 9, dupCounter5);
  } else if (handChoices6.length < 2 && drawCounter.length === 6) {
    whichAnchor();
    Card3(handChoices6, hand6, 10, 11, dupCounter6);
  } else if (handChoices7.length < 2 && drawCounter.length === 7) {
    whichAnchor();
    Card3(handChoices7, hand7, 12, 13, dupCounter7);
  } else if (handChoices8.length < 2 && drawCounter.length === 8) {
    whichAnchor();
    Card3(handChoices8, hand8, 14, 15, dupCounter8);
  } else if (handChoices9.length < 2 && drawCounter.length === 9) {
    whichAnchor();
    Card3(handChoices9, hand9, 16, 17, dupCounter9);
  } else if (handChoices10.length < 2 && drawCounter.length === 10) {
    whichAnchor();
    Card3(handChoices10, hand10, 18, 19, dupCounter10);
  } else if (handChoices11.length < 2 && drawCounter.length === 11) {
    whichAnchor();
    Card3(handChoices11, hand11, 20, 21, dupCounter11);
  } else if (handChoices12.length < 2 && drawCounter.length === 12) {
    whichAnchor();
    Card3(handChoices12, hand12, 22, 23, dupCounter12);
  } else if (handChoices13.length < 2 && drawCounter.length === 13) {
    whichAnchor();
    Card3(handChoices13, hand13, 24, 25, dupCounter13);
  } else if (handChoices14.length < 2 && drawCounter.length === 14) {
    whichAnchor();
    Card3(handChoices14, hand14, 26, 27, dupCounter14);
  } else if (handChoices15.length < 2 && drawCounter.length === 15) {
    whichAnchor();
    Card3(handChoices15, hand15, 28, 29, dupCounter15);
  } else {
  }
}

function Card3(choices, hand, number, number2, duplicate) {
  if (duplicate[0] === "card3") {
    ////console.log("duplicate");
  } else if (collection.length > number2) {

  } else if (collection.length === number) {
    collection.push(hand[2]);
    choices.push(hand[2]);
    duplicate.push("card3");
    ////console.log(choices);
    let toAttach = document.getElementById(anchor);
    let card1 = document.createElement("img");
    card1.src = `cardGameImages/${hand[2].suit}${hand[2].value}.png`;
    toAttach.appendChild(card1);
    ////console.log("anchor");
    ////console.log(anchor);
    makeRedBorder("handAnchor3");
  } else if (collection.length === number2) {
    collection.push(hand[2]);
    choices.push(hand[2]);
    ////console.log(choices);
    let toAttach = document.getElementById(anchor);
    let card1 = document.createElement("img");
    card1.src = `cardGameImages/${hand[2].suit}${hand[2].value}.png`;
    toAttach.appendChild(card1);
    ////console.log("anchor");
    ////console.log(anchor);
    changeColorGetHandR();
    changeColorGetConfirmR();
    makeRedBorder("handAnchor3");
  } else {
  }
}

function addCard4() {
  if (handChoices.length < 2 && drawCounter.length === 1) {
    whichAnchor();
    Card4(handChoices, hand1, 0, 1, dupCounter);
  } else if (handChoices2.length < 2 && drawCounter.length === 2) {
    whichAnchor();
    Card4(handChoices2, hand2, 2, 3, dupCounter2);
  } else if (handChoices3.length < 2 && drawCounter.length === 3) {
    whichAnchor();
    Card4(handChoices3, hand3, 4, 5, dupCounter3);
  } else if (handChoices4.length < 2 && drawCounter.length === 4) {
    whichAnchor();
    Card4(handChoices4, hand4, 6, 7, dupCounter4);
  } else if (handChoices5.length < 2 && drawCounter.length === 5) {
    whichAnchor();
    Card4(handChoices5, hand5, 8, 9, dupCounter5);
  } else if (handChoices6.length < 2 && drawCounter.length === 6) {
    whichAnchor();
    Card4(handChoices6, hand6, 10, 11, dupCounter6);
  } else if (handChoices7.length < 2 && drawCounter.length === 7) {
    whichAnchor();
    Card4(handChoices7, hand7, 12, 13, dupCounter7);
  } else if (handChoices8.length < 2 && drawCounter.length === 8) {
    whichAnchor();
    Card4(handChoices8, hand8, 14, 15, dupCounter8);
  } else if (handChoices9.length < 2 && drawCounter.length === 9) {
    whichAnchor();
    Card4(handChoices9, hand9, 16, 17, dupCounter9);
  } else if (handChoices10.length < 2 && drawCounter.length === 10) {
    whichAnchor();
    Card4(handChoices10, hand10, 18, 19, dupCounter10);
  } else if (handChoices11.length < 2 && drawCounter.length === 11) {
    whichAnchor();
    Card4(handChoices11, hand11, 20, 21, dupCounter11);
  } else if (handChoices12.length < 2 && drawCounter.length === 12) {
    whichAnchor();
    Card4(handChoices12, hand12, 22, 23, dupCounter12);
  } else if (handChoices13.length < 2 && drawCounter.length === 13) {
    whichAnchor();
    Card4(handChoices13, hand13, 24, 25, dupCounter13);
  } else if (handChoices14.length < 2 && drawCounter.length === 14) {
    whichAnchor();
    Card4(handChoices14, hand14, 26, 27, dupCounter14);
  } else if (handChoices15.length < 2 && drawCounter.length === 15) {
    whichAnchor();
    Card4(handChoices15, hand15, 28, 29, dupCounter15);
  } else {
  }
}

function Card4(choices, hand, number, number2, duplicate) {
  if (duplicate[0] === "card4") {
    ////console.log("duplicate");
  } else if (collection.length > number2) {

  } else if (collection.length === number) {
    collection.push(hand[3]);
    choices.push(hand[3]);
    duplicate.push("card4")
    let toAttach = document.getElementById(anchor);
    let card1 = document.createElement("img");
    card1.src = `cardGameImages/${hand[3].suit}${hand[3].value}.png`;
    toAttach.appendChild(card1);
    ////console.log("anchor");
    ////console.log(anchor);
    makeRedBorder("handAnchor4");
  } else if (collection.length === number2) {
    collection.push(hand[3]);
    choices.push(hand[3]);
    let toAttach = document.getElementById(anchor);
    let card1 = document.createElement("img");
    card1.src = `cardGameImages/${hand[3].suit}${hand[3].value}.png`;
    toAttach.appendChild(card1);
    ////console.log("anchor");
    ////console.log(anchor);
    changeColorGetHandR();
    changeColorGetConfirmR();
    makeRedBorder("handAnchor4");
  } else {
  }
}

function addCard5() {
  if (handChoices.length < 2 && drawCounter.length === 1) {
    whichAnchor();
    Card5(handChoices, hand1, 0, 1, dupCounter);
   // getRedOutline("handAnchor5");
  } else if (handChoices2.length < 2 && drawCounter.length === 2) {
    whichAnchor();
    Card5(handChoices2, hand2, 2, 3, dupCounter2);
  } else if (handChoices3.length < 2 && drawCounter.length === 3) {
    whichAnchor();
    Card5(handChoices3, hand3, 4, 5, dupCounter3);
  } else if (handChoices4.length < 2 && drawCounter.length === 4) {
    whichAnchor();
    Card5(handChoices4, hand4, 6, 7, dupCounter4);
  } else if (handChoices5.length < 2 && drawCounter.length === 5) {
    whichAnchor();
    Card5(handChoices5, hand5, 8, 9, dupCounter5);
  } else if (handChoices6.length < 2 && drawCounter.length === 6) {
    whichAnchor();
    Card5(handChoices6, hand6, 10, 11, dupCounter6);
  } else if (handChoices7.length < 2 && drawCounter.length === 7) {
    whichAnchor();
    Card5(handChoices7, hand7, 12, 13, dupCounter7);
  } else if (handChoices8.length < 2 && drawCounter.length === 8) {
    whichAnchor();
    Card5(handChoices8, hand8, 14, 15, dupCounter8);
  } else if (handChoices9.length < 2 && drawCounter.length === 9) {
    whichAnchor();
    Card5(handChoices9, hand9, 16, 17, dupCounter9);
  } else if (handChoices10.length < 2 && drawCounter.length === 10) {
    whichAnchor();
    Card5(handChoices10, hand10, 18, 19, dupCounter10);
  } else if (handChoices11.length < 2 && drawCounter.length === 11) {
    whichAnchor();
    Card5(handChoices11, hand11, 20, 21, dupCounter11);
  } else if (handChoices12.length < 2 && drawCounter.length === 12) {
    whichAnchor();
    Card5(handChoices12, hand12, 22, 23, dupCounter12);
  } else if (handChoices13.length < 2 && drawCounter.length === 13) {
    whichAnchor();
    Card5(handChoices13, hand13, 24, 25, dupCounter13);
  } else if (handChoices14.length < 2 && drawCounter.length === 14) {
    whichAnchor();
    Card5(handChoices14, hand14, 26, 27, dupCounter14);
  } else if (handChoices15.length < 2 && drawCounter.length === 15) {
    whichAnchor();
    Card5(handChoices15, hand15, 28, 29, dupCounter15);
  } else {
  }
}

function Card5(choices, hand, number, number2, duplicate) {
  if (duplicate[0] === "card5") {
    ////console.log("duplicate");
  } else if (collection.length > number2) {

  } else if (collection.length === number) {
    collection.push(hand[4]);
    choices.push(hand[4]);
    duplicate.push("card5");
    let toAttach = document.getElementById(anchor);
    let card1 = document.createElement("img");
    card1.src = `cardGameImages/${hand[4].suit}${hand[4].value}.png`;
    toAttach.appendChild(card1);
    ////console.log("anchor");
    ////console.log(anchor);
    makeRedBorder("handAnchor5");
  } else if (collection.length === number2) {
    collection.push(hand[4]);
    choices.push(hand[4]);
    let toAttach = document.getElementById(anchor);
    let card1 = document.createElement("img");
    card1.src = `cardGameImages/${hand[4].suit}${hand[4].value}.png`;
    toAttach.appendChild(card1);
    ////console.log("anchor");
    ////console.log(anchor);
    changeColorGetHandR();
    changeColorGetConfirmR();
    makeRedBorder("handAnchor5");
  } else {
  }
}

/////////////// functions to swap cards in your collection  //////////////////////////////////

//function getRedOutline(anchor) {
//  document.getElementById(anchor).style.border= "thick solid red";
//}

function getValue1() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor1");
    valuesTest1.push("0");
    valuesTest1.push(collection[0]);
    ////console.log(valuesTest1);
    makeRedBorder("collectionAnchor1");
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor1");
    valuesTest2.push("0");
    valuesTest2.push(collection[0]);
    ////console.log(valuesTest2);
    makeRedBorder("collectionAnchor1");
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function getValue2() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor2");
    valuesTest1.push("1");
    valuesTest1.push(collection[1]);
    ////console.log(valuesTest1);
    makeRedBorder("collectionAnchor2");
    //document.getElementById("card1Sel").style.backgroundColor="red";
    //document.body.style.backgroundColor="red";
    // btnColor.style.backgroundColor="red";
    //.style.text="white";
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor2");
    valuesTest2.push("1");
    valuesTest2.push(collection[1]);
    ////console.log(valuesTest2);
    makeRedBorder("collectionAnchor2");
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function getValue3() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor3");
    valuesTest1.push("2");
    valuesTest1.push(collection[2]);
    makeRedBorder("collectionAnchor3");
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor3");
    valuesTest2.push("2");
    valuesTest2.push(collection[2]);
    makeRedBorder("collectionAnchor3");
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function getValue4() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor4");
    valuesTest1.push("3");
    valuesTest1.push(collection[3]);
    makeRedBorder("collectionAnchor4");
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor4");
    valuesTest2.push("3");
    valuesTest2.push(collection[3]);
    makeRedBorder("collectionAnchor4");
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function getValue5() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor5");
    valuesTest1.push("4");
    valuesTest1.push(collection[4]);
    makeRedBorder("collectionAnchor5");
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor5");
    valuesTest2.push("4");
    valuesTest2.push(collection[4]);
    makeRedBorder("collectionAnchor5");
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function getValue6() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor6");
    valuesTest1.push("5");
    valuesTest1.push(collection[5]);
    makeRedBorder("collectionAnchor6");
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor6");
    valuesTest2.push("5");
    valuesTest2.push(collection[5]);
    makeRedBorder("collectionAnchor6");
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function getValue7() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor7");
    valuesTest1.push("6");
    valuesTest1.push(collection[6]);
    makeRedBorder("collectionAnchor7");
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor7");
    valuesTest2.push("6");
    valuesTest2.push(collection[6]);
    makeRedBorder("collectionAnchor7");
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function getValue8() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor8");
    valuesTest1.push("7");
    valuesTest1.push(collection[7]);
    makeRedBorder("collectionAnchor8");
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor8");
    valuesTest2.push("7");
    valuesTest2.push(collection[7]);
    makeRedBorder("collectionAnchor8");
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function getValue9() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor9");
    valuesTest1.push("8");
    valuesTest1.push(collection[8]);
    makeRedBorder("collectionAnchor9");
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor9");
    valuesTest2.push("8");
    valuesTest2.push(collection[8]);
    makeRedBorder("collectionAnchor9");
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function getValue10() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor10");
    valuesTest1.push("9");
    valuesTest1.push(collection[9]);
    makeRedBorder("collectionAnchor10");
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor10");
    valuesTest2.push("9");
    valuesTest2.push(collection[9]);
    makeRedBorder("collectionAnchor10");
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function getValue11() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor11");
    valuesTest1.push("10");
    valuesTest1.push(collection[10]);
    makeRedBorder("collectionAnchor11");
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor11");
    valuesTest2.push("10");
    valuesTest2.push(collection[10]);
    makeRedBorder("collectionAnchor11");
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }

  if (valuesTest1.length > 1 && valuesTest1.length > 1) {
  } else {
  }
}

function getValue12() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor12");
    valuesTest1.push("11");
    valuesTest1.push(collection[11]);
    makeRedBorder("collectionAnchor12");
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor12");
    valuesTest2.push("11");
    valuesTest2.push(collection[11]);
    makeRedBorder("collectionAnchor12");
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function getValue13() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor13");
    valuesTest1.push("12");
    valuesTest1.push(collection[12]);
    makeRedBorder("collectionAnchor13");
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor13");
    valuesTest2.push("12");
    valuesTest2.push(collection[12]);
    makeRedBorder("collectionAnchor13");
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function getValue14() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor14");
    valuesTest1.push("13");
    valuesTest1.push(collection[13]);
    makeRedBorder("collectionAnchor14");
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor14");
    valuesTest2.push("13");
    valuesTest2.push(collection[13]);
    makeRedBorder("collectionAnchor14");
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function getValue15() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor15");
    valuesTest1.push("14");
    valuesTest1.push(collection[14]);
    makeRedBorder("collectionAnchor15");
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor15");
    valuesTest2.push("14");
    valuesTest2.push(collection[14]);
    makeRedBorder("collectionAnchor15");
    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function getValue16() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor16");
    valuesTest1.push("15");
    valuesTest1.push(collection[15]);
    makeRedBorder("collectionAnchor16");
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor16");
    valuesTest2.push("15");
    valuesTest2.push(collection[15]);
    makeRedBorder("collectionAnchor16");

    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function getValue17() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor17");
    valuesTest1.push("16");
    valuesTest1.push(collection[16]);
    makeRedBorder("collectionAnchor17");
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor17");
    valuesTest2.push("16");
    valuesTest2.push(collection[16]);
    makeRedBorder("collectionAnchor17");

    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function getValue18() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor18");
    valuesTest1.push("17");
    valuesTest1.push(collection[17]);
    makeRedBorder("collectionAnchor18");
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor18");
    valuesTest2.push("17");
    valuesTest2.push(collection[17]);
    makeRedBorder("collectionAnchor18");

    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function getValue19() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor19");
    valuesTest1.push("18");
    valuesTest1.push(collection[18]);
    makeRedBorder("collectionAnchor19");
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor19");
    valuesTest2.push("18");
    valuesTest2.push(collection[18]);
    makeRedBorder("collectionAnchor19");

    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}
function getValue20() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor20");
    valuesTest1.push("19");
    valuesTest1.push(collection[19]);
    makeRedBorder("collectionAnchor20");
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor20");
    valuesTest2.push("19");
    valuesTest2.push(collection[19]);
    makeRedBorder("collectionAnchor20");

    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}
function getValue21() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor21");
    valuesTest1.push("20");
    valuesTest1.push(collection[20]);
    makeRedBorder("collectionAnchor21");
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor21");
    valuesTest2.push("20");
    valuesTest2.push(collection[20]);
    makeRedBorder("collectionAnchor21");

    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}
function getValue22() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor22");
    valuesTest1.push("21");
    valuesTest1.push(collection[21]);
    makeRedBorder("collectionAnchor22");
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor22");
    valuesTest2.push("21");
    valuesTest2.push(collection[21]);
    makeRedBorder("collectionAnchor22");

    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}
function getValue23() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor23");
    valuesTest1.push("22");
    valuesTest1.push(collection[22]);
    makeRedBorder("collectionAnchor23");
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor23");
    valuesTest2.push("22");
    valuesTest2.push(collection[22]);
    makeRedBorder("collectionAnchor23");

    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}
function getValue24() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor24");
    valuesTest1.push("23");
    valuesTest1.push(collection[23]);
    makeRedBorder("collectionAnchor24");
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor24");
    valuesTest2.push("23");
    valuesTest2.push(collection[23]);
    makeRedBorder("collectionAnchor24");

    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}
function getValue25() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor25");
    valuesTest1.push("24");
    valuesTest1.push(collection[24]);
    makeRedBorder("collectionAnchor25");
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor25");
    valuesTest2.push("24");
    valuesTest2.push(collection[24]);
    makeRedBorder("collectionAnchor25");

    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}
function getValue26() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor26");
    valuesTest1.push("25");
    valuesTest1.push(collection[25]);
    makeRedBorder("collectionAnchor26");
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor26");
    valuesTest2.push("25");
    valuesTest2.push(collection[25]);
    makeRedBorder("collectionAnchor26");

    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function getValue27() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor27");
    valuesTest1.push("26");
    valuesTest1.push(collection[26]);
    makeRedBorder("collectionAnchor27");
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor27");
    valuesTest2.push("26");
    valuesTest2.push(collection[26]);
    makeRedBorder("collectionAnchor27");

    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function getValue28() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor28");
    valuesTest1.push("27");
    valuesTest1.push(collection[27]);
    makeRedBorder("collectionAnchor28");
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor28");
    valuesTest2.push("27");
    valuesTest2.push(collection[27]);
    makeRedBorder("collectionAnchor28");

    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function getValue29() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor29");
    valuesTest1.push("28");
    valuesTest1.push(collection[28]);
    makeRedBorder("collectionAnchor29");
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor29");
    valuesTest2.push("28");
    valuesTest2.push(collection[28]);
    makeRedBorder("collectionAnchor29");

    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function getValue30() {
  if (valuesTest1.length < 2) {
    valuesTest1.push("collectionAnchor30");
    valuesTest1.push("29");
    valuesTest1.push(collection[29]);
    makeRedBorder("collectionAnchor30");
  } else if (valuesTest2.length < 2) {
    valuesTest2.push("collectionAnchor30");
    valuesTest2.push("29");
    valuesTest2.push(collection[29]);
    makeRedBorder("collectionAnchor30");

    let SwapShow = document.getElementById("makeSwitch");
    SwapShow.style.display = "inline-block";
    let resetShow = document.getElementById("reset");
    resetShow.style.display = "inline-block";
  } else {
  }
}

function makeSwitchCards() {
  ////console.log(collection);
  ////console.log("this is values test 1");
  ////console.log(valuesTest1);
  ////console.log("this is values test 2");
  ////console.log(valuesTest2)
  makeDarkGreenBorder(valuesTest1[0]);
  makeDarkGreenBorder(valuesTest2[0]);
  takeAway();
  switchAdd();
  switchCollection();
  resetSwap();
}

function takeAway() {
  if (valuesTest1[0] === valuesTest2[0]) {
  } else {
    newSwitchA = document.getElementById(valuesTest1[0]);
    newSwitchA.removeChild(newSwitchA.firstChild);
    newSwitchB = document.getElementById(valuesTest2[0]);
    newSwitchB.removeChild(newSwitchB.firstChild);
  }
}

function switchAdd() {
  if (valuesTest1[0] === valuesTest2[0]) {
  } else {
    let addVar = document.getElementById(valuesTest1[0]);
    let newSwitchAdd1 = document.createElement("img");
    newSwitchAdd1.src = `cardGameImages/${valuesTest2[2].suit}${valuesTest2[2].value}.png`;
    addVar.appendChild(newSwitchAdd1);

    let addVar2 = document.getElementById(valuesTest2[0]);
    let newSwitchAdd2 = document.createElement("img");
    newSwitchAdd2.src = `cardGameImages/${valuesTest1[2].suit}${valuesTest1[2].value}.png`;
    addVar2.appendChild(newSwitchAdd2);
  }
}

function switchCollection() {
  if (valuesTest1 === valuesTest2) {
  } else {
    let temp = collection[valuesTest2[1]];
    collection[valuesTest2[1]] = collection[valuesTest1[1]];
    collection[valuesTest1[1]] = temp;
  }
}

function resetSwap() {
  makeDarkGreenBorder(valuesTest1[0]);
  makeDarkGreenBorder(valuesTest2[0]);
  valuesTest1.pop();
  valuesTest1.pop();
  valuesTest1.pop();
  valuesTest2.pop();
  valuesTest2.pop();
  valuesTest2.pop();
  let takeAway1 = document.getElementById("reset");
  takeAway1.style.display = "none";
  let takeAway2 = document.getElementById("makeSwitch");
  takeAway2.style.display = "none";
}

/////////////// functions to make confirmation switch  //////////////////////////////////

function goToConfirmation() {
  let handTakeAway = document.getElementById("handAnchor1");
  while (handTakeAway.firstChild) {
    handTakeAway.removeChild(handTakeAway.firstChild);
  }

  let handTakeAway2 = document.getElementById("handAnchor2");
  while (handTakeAway2.firstChild) {
    handTakeAway2.removeChild(handTakeAway2.firstChild);
  }

  let handTakeAway3 = document.getElementById("handAnchor3");
  while (handTakeAway3.firstChild) {
    handTakeAway3.removeChild(handTakeAway3.firstChild);
  }

  let handTakeAway4 = document.getElementById("handAnchor4");
  while (handTakeAway4.firstChild) {
    handTakeAway4.removeChild(handTakeAway4.firstChild);
  }

  let handTakeAway5 = document.getElementById("handAnchor5");
  while (handTakeAway5.firstChild) {
    handTakeAway5.removeChild(handTakeAway5.firstChild);
  }
  let roundHandTakeAway = document.getElementById("round");
  while (roundHandTakeAway.firstChild) {
    roundHandTakeAway.removeChild(roundHandTakeAway.firstChild);
  }

  let scoreShowLabel = document.getElementById("scoreLabel");
  scoreShowLabel.style.display = "inline-block";

  let scoreShow = document.getElementById("score");
  scoreShow.style.display = "inline-block";

  document
    .getElementById("collectionAnchor1")
    .removeEventListener("click", getValue1);
  document
    .getElementById("collectionAnchor2")
    .removeEventListener("click", getValue2);
  document
    .getElementById("collectionAnchor3")
    .removeEventListener("click", getValue3);
  document
    .getElementById("collectionAnchor4")
    .removeEventListener("click", getValue4);
  document
    .getElementById("collectionAnchor5")
    .removeEventListener("click", getValue5);
  document
    .getElementById("collectionAnchor6")
    .removeEventListener("click", getValue6);
  document
    .getElementById("collectionAnchor7")
    .removeEventListener("click", getValue7);
  document
    .getElementById("collectionAnchor8")
    .removeEventListener("click", getValue8);
  document
    .getElementById("collectionAnchor9")
    .removeEventListener("click", getValue9);
  document
    .getElementById("collectionAnchor10")
    .removeEventListener("click", getValue10);
  document
    .getElementById("collectionAnchor11")
    .removeEventListener("click", getValue11);
  document
    .getElementById("collectionAnchor12")
    .removeEventListener("click", getValue12);
  document
    .getElementById("collectionAnchor13")
    .removeEventListener("click", getValue13);
  document
    .getElementById("collectionAnchor14")
    .removeEventListener("click", getValue14);
  document
    .getElementById("collectionAnchor15")
    .removeEventListener("click", getValue15);
  document
    .getElementById("collectionAnchor16")
    .removeEventListener("click", getValue16);
  document
    .getElementById("collectionAnchor17")
    .removeEventListener("click", getValue17);
  document
    .getElementById("collectionAnchor18")
    .removeEventListener("click", getValue18);
  document
    .getElementById("collectionAnchor19")
    .removeEventListener("click", getValue19);
  document
    .getElementById("collectionAnchor20")
    .removeEventListener("click", getValue20);
  document
    .getElementById("collectionAnchor21")
    .removeEventListener("click", getValue21);
  document
    .getElementById("collectionAnchor22")
    .removeEventListener("click", getValue22);
  document
    .getElementById("collectionAnchor23")
    .removeEventListener("click", getValue23);
  document
    .getElementById("collectionAnchor24")
    .removeEventListener("click", getValue24);
  document
    .getElementById("collectionAnchor25")
    .removeEventListener("click", getValue25);
  document
    .getElementById("collectionAnchor26")
    .removeEventListener("click", getValue26);
  document
    .getElementById("collectionAnchor27")
    .removeEventListener("click", getValue27);
  document
    .getElementById("collectionAnchor28")
    .removeEventListener("click", getValue28);
  document
    .getElementById("collectionAnchor29")
    .removeEventListener("click", getValue29);
  document
    .getElementById("collectionAnchor30")
    .removeEventListener("click", getValue30);

  let hideConfirm = document.getElementById("confirmButton");
  hideConfirm.style.display = "none";

  let hideBack = document.getElementById("handBackground");
  hideBack.style.display = "none";

  let F1Show = document.getElementById("FinalEvaluation");
  F1Show.style.display = "inline-block";

  let makeWagerS = document.getElementById("wager");
  makeWagerS.style.display = "inline-block";

  let Add = document.getElementById("AddItUp");
  Add.style.display = "inline-block";

  evaluateSet1.push(collection[0]);
  evaluateSet1.push(collection[1]);
  evaluateSet1.push(collection[2]);
  evaluateSet1.push(collection[3]);
  evaluateSet1.push(collection[4]);
  ////console.log(evaluateSet1);

  evaluateSet2.push(collection[5]);
  evaluateSet2.push(collection[6]);
  evaluateSet2.push(collection[7]);
  evaluateSet2.push(collection[8]);
  evaluateSet2.push(collection[9]);
  ////console.log(evaluateSet2);

  evaluateSet3.push(collection[10]);
  evaluateSet3.push(collection[11]);
  evaluateSet3.push(collection[12]);
  evaluateSet3.push(collection[13]);
  evaluateSet3.push(collection[14]);
  ////console.log(evaluateSet3);

  evaluateSet4.push(collection[15]);
  evaluateSet4.push(collection[16]);
  evaluateSet4.push(collection[17]);
  evaluateSet4.push(collection[18]);
  evaluateSet4.push(collection[19]);
  ////console.log(evaluateSet4);

  evaluateSet5.push(collection[20]);
  evaluateSet5.push(collection[21]);
  evaluateSet5.push(collection[22]);
  evaluateSet5.push(collection[23]);
  evaluateSet5.push(collection[24]);
  ////console.log(evaluateSet5);

  evaluateSet6.push(collection[25]);
  evaluateSet6.push(collection[26]);
  evaluateSet6.push(collection[27]);
  evaluateSet6.push(collection[28]);
  evaluateSet6.push(collection[29]);
  ////console.log(evaluateSet6)

  isItACocktail(handChoices15);
  ////console.log("bonusScore");

  ////console.log(bonusScore);
  ////console.log("cocktailNegativeScore");
  ////console.log(cocktailNegativeScore);

  ////console.log("cocktailPositiveScore");
  ////console.log(cocktailPositiveScore);
}

////////////// wager function //////////////////////////

function makeWager () {
  let userInput = window.prompt("What is your wager?");
  let regex = /\d[^.-]/;
  console.log("result");
  let result = regex.test(userInput);
  if(wagerCheck.length<1){
    if ( result === true) {
        console.log("userWager");
        wagerCheck.push("true");
        wager.push(userInput)
        let wagerConverted = parseInt(wager[0],10);
        userWager.push(wagerConverted);
        console.log(userWager)
        hideWagerButton();
        showWager();
        
    } else {
          console.log("false");
        window.alert("Your wager was not a valid entry. Your wager can't be a negative number or contain a decimal.")
    }
  } else {
  }
}

function showWager () {
  document.getElementById("wagerAnchor");
  let wagerText = document.createElement("p");
  wagerAnchor.appendChild(wagerText);
  wagerText.innerHTML = `You wagered ${userWager} points`;
  wagerText.className += "messageWager";
}

function showWagerResult() {
   if (userWager[0] > cocktailCardsDifference[0]) {
     document.getElementById("wagerAnchor");
     let wagerTextBust = document.createElement("p");
     wagerAnchor.appendChild(wagerTextBust);
     wagerTextBust.innerHTML = `Your net score from cocktail cards is ${cocktailCardsDifference[0]} points. You lose an additional ${userWager[0]} points`;
     //checked
     wagerTextBust.className += "messageWager";
   } else if (userWager[0] === cocktailCardsDifference[0]) {
     document.getElementById("wagerAnchor");
     let wagerTextExact = document.createElement("p");
     wagerAnchor.appendChild(wagerTextExact);
     wagerTextExact.innerHTML = `Your wager of ${userWager[0]} points matches your net cocktail card score of ${cocktailCardsDifference[0]} points. You gain an additional ${userWager[0]} points`;
     wagerTextExact.className += "messageWager";
     //checked
   } else if (userWager[0] === wagerDifference[0]) {
     document.getElementById("wagerAnchor");
     let wagerTextLessE = document.createElement("p");
     wagerAnchor.appendChild(wagerTextLessE);
     wagerTextLessE.innerHTML = `Your net cocktail card score of ${cocktailCardsDifference[0]} points is exactly ${userWager[0]} points more than what you wagered. No points are lossed or gained due to your wager.`;
     wagerTextLessE.className += "messageWager";
   } else if (wagerDifference[0] > userWager[0]) {
     //checked
     document.getElementById("wagerAnchor");
     let wagerTextLessM = document.createElement("p");
     wagerAnchor.appendChild(wagerTextLessM);
     wagerTextLessM.innerHTML = `Your net cocktail card score of ${cocktailCardsDifference[0]} points is more than what you wagered. No points are lossed or gained due to your wager.`;
     wagerTextLessM.className += "messageWager";
   } else if (userWager[0] < cocktailCardsDifference[0]) {
     //checked
     document.getElementById("wagerAnchor");
     let wagerTextLessNotBust = document.createElement("p");
     wagerAnchor.appendChild(wagerTextLessNotBust);
     wagerTextLessNotBust.innerHTML = `Your wager of ${userWager[0]} points is ${ wagerDifference[0]
     } points less than your net cocktail card score of ${cocktailCardsDifference[0]} points. Therefore your net gain is ${
      userWager[0] - wagerDifference[0]} points`;
  wagerTextLessNotBust.className += "messageWager";
   } else {
   }
  
}

function hideWagerButton () {
  let makeWagerH = document.getElementById("wager");
  makeWagerH.style.display = "none";
}


/////////////// functions to evaluate cards in your collection  //////////////////////////////////

function evaluateAllSets() {
  OneSetEvaluate();
  TwoSetEvaluate();
  ThreeSetEvaluate();
  FourSetEvaluate();
  FiveSetEvaluate();
  SixSetEvaluate();

  let F1Show = document.getElementById("FinalEvaluation");
  F1Show.style.display = "none";
}

function OneSetEvaluate() {
  let CheckClubs = evaluateSet1.filter((item) => item.suit === "Clubs");
  if (CheckClubs.length === 5) {
    Flush1.push("Flush");
  } else {
  }

  let CheckDiamonds = evaluateSet1.filter((item) => item.suit === "Diamonds");
  if (CheckDiamonds.length === 5) {
    Flush1.push("Flush");
  } else {
  }

  let CheckSpades = evaluateSet1.filter((item) => item.suit === "Spades");
  if (CheckSpades.length === 5) {
    Flush1.push("Flush");
  } else {
  }

  let CheckHearts = evaluateSet1.filter((item) => item.suit === "Hearts");
  if (CheckHearts.length === 5) {
    Flush1.push("Flush");
  } else {
  }

  let CheckSwords = evaluateSet1.filter((item) => item.suit === "Swords");
  if (CheckSwords.length === 5) {
    Flush1.push("Flush");
  } else {
  }

  let CheckSkulls = evaluateSet1.filter((item) => item.suit === "Skulls");
  if (CheckSkulls.length === 5) {
    Flush1.push("Flush");
  } else {
  }

  let Check2 = evaluateSet1.filter((item) => item.value === 2);
  if (Check2.length === 2) {
    Pair1.push("Pair1");
  } else if (Check2.length === 3) {
    ThreeKind1.push("ThreeKind");
  } else if (Check2.length === 4) {
    FourKind1.push("FourKind");
  } else {
  }

  let Check3 = evaluateSet1.filter((item) => item.value === 3);
  if (Check3.length === 2) {
    Pair1.push("Pair1");
  } else if (Check3.length === 3) {
    ThreeKind1.push("ThreeKind");
  } else if (Check3.length === 4) {
    FourKind1.push("FourKind");
  } else {
  }

  let Check4 = evaluateSet1.filter((item) => item.value === 4);
  if (Check4.length === 2) {
    Pair1.push("Pair1");
  } else if (Check4.length === 3) {
    ThreeKind1.push("ThreeKind");
  } else if (Check4.length === 4) {
    FourKind1.push("FourKind");
  } else {
  }

  let Check5 = evaluateSet1.filter((item) => item.value === 5);
  if (Check5.length === 2) {
    Pair1.push("Pair1");
  } else if (Check5.length === 3) {
    ThreeKind1.push("ThreeKind");
  } else if (Check5.length === 4) {
    FourKind1.push("FourKind");
  } else {
  }

  let Check6 = evaluateSet1.filter((item) => item.value === 6);
  if (Check6.length === 2) {
    Pair1.push("Pair1");
  } else if (Check6.length === 3) {
    ThreeKind1.push("ThreeKind");
  } else if (Check6.length === 4) {
    FourKind1.push("FourKind");
  } else {
  }

  let Check7 = evaluateSet1.filter((item) => item.value === 7);
  if (Check7.length === 2) {
    Pair1.push("Pair1");
  } else if (Check7.length === 3) {
    ThreeKind1.push("ThreeKind");
  } else if (Check7.length === 4) {
    FourKind1.push("FourKind");
  } else {
  }

  let Check8 = evaluateSet1.filter((item) => item.value === 8);
  if (Check8.length === 2) {
    Pair1.push("Pair1");
  } else if (Check8.length === 3) {
    ThreeKind1.push("ThreeKind");
  } else if (Check8.length === 4) {
    FourKind1.push("FourKind");
  } else {
  }

  let Check9 = evaluateSet1.filter((item) => item.value === 9);
  if (Check9.length === 2) {
    Pair1.push("Pair1");
  } else if (Check9.length === 3) {
    ThreeKind1.push("ThreeKind");
  } else if (Check9.length === 4) {
    FourKind1.push("FourKind");
  } else {
  }

  let Check10 = evaluateSet1.filter((item) => item.value === 10);
  if (Check10.length === 2) {
    Pair1.push("Pair1");
  } else if (Check10.length === 3) {
    ThreeKind1.push("ThreeKind");
  } else if (Check10.length === 4) {
    FourKind1.push("FourKind");
  } else {
  }

  let Check11 = evaluateSet1.filter((item) => item.value === 11);
  if (Check11.length === 2) {
    Pair1.push("Pair1");
  } else if (Check11.length === 3) {
    ThreeKind1.push("ThreeKind");
  } else if (Check11.length === 4) {
    FourKind1.push("FourKind");
  } else {
  }

  let Check12 = evaluateSet1.filter((item) => item.value === 12);
  if (Check12.length === 2) {
    Pair1.push("Pair1");
  } else if (Check12.length === 3) {
    ThreeKind1.push("ThreeKind");
  } else if (Check12.length === 4) {
    FourKind1.push("FourKind");
  } else {
  }

  let Check13 = evaluateSet1.filter((item) => item.value === 13);
  if (Check13.length === 2) {
    Pair1.push("Pair1");
  } else if (Check13.length === 3) {
    ThreeKind1.push("ThreeKind");
  } else if (Check13.length === 4) {
    FourKind1.push("FourKind");
  } else {
  }

  let Check14 = evaluateSet1.filter((item) => item.value === 14);
  if (Check14.length === 2) {
    Pair1.push("Pair1");
  } else if (Check14.length === 3) {
    ThreeKind1.push("ThreeKind");
  } else if (Check14.length === 4) {
    FourKind1.push("FourKind");
  } else {
  }

  //CheckVF = [];

  let Royal = [];
  if (evaluateSet1[0].value === 10) {
    Royal.push("success");
  } else {
  }

  if (evaluateSet1[1].value === 11) {
    Royal.push("success");
  } else {
  }

  if (evaluateSet1[2].value === 12) {
    Royal.push("success");
  } else {
  }

  if (evaluateSet1[3].value === 13) {
    Royal.push("success");
  } else {
  }

  if (evaluateSet1[4].value === 14) {
    Royal.push("success");
  } else {
  }

  if (Royal.length === 5) {
    Royal1.push("Royal");
  } else {
  }

  if (
    evaluateSet1[1].value === evaluateSet1[0].value + 1 &&
    evaluateSet1[2].value === evaluateSet1[1].value + 1 &&
    evaluateSet1[3].value === evaluateSet1[2].value + 1 &&
    evaluateSet1[4].value === evaluateSet1[3].value + 1
  ) {
    Straight1.push("Straight");
  } else {
  }

  ////console.log("Pair1");

  ////console.log(Pair1);
}

function TwoSetEvaluate() {
  //let flushSuccess=[];
  let CheckClubs = evaluateSet2.filter((item) => item.suit === "Clubs");
  if (CheckClubs.length === 5) {
    Flush2.push("Flush");
  } else {
  }

  let CheckDiamonds = evaluateSet2.filter((item) => item.suit === "Diamonds");
  if (CheckDiamonds.length === 5) {
    Flush2.push("Flush");
  } else {
  }

  let CheckSpades = evaluateSet2.filter((item) => item.suit === "Spades");
  if (CheckSpades.length === 5) {
    Flush2.push("Flush");
  } else {
  }

  let CheckHearts = evaluateSet2.filter((item) => item.suit === "Hearts");
  if (CheckHearts.length === 5) {
    Flush2.push("Flush");
  } else {
  }

  let CheckSwords = evaluateSet2.filter((item) => item.suit === "Swords");
  if (CheckSwords.length === 5) {
    Flush2.push("Flush");
  } else {
  }

  let CheckSkulls = evaluateSet2.filter((item) => item.suit === "Skulls");
  if (CheckSkulls.length === 5) {
    Flush2.push("Flush");
  } else {
  }

  let Check2 = evaluateSet2.filter((item) => item.value === 2);
  if (Check2.length === 2) {
    Pair2.push("Pair1");
  } else if (Check2.length === 3) {
    ThreeKind2.push("ThreeKind");
  } else if (Check2.length === 4) {
    FourKind2.push("FourKind");
  } else {
  }

  let Check3 = evaluateSet2.filter((item) => item.value === 3);
  if (Check3.length === 2) {
    Pair2.push("Pair1");
  } else if (Check3.length === 3) {
    ThreeKind2.push("ThreeKind");
  } else if (Check3.length === 4) {
    FourKind2.push("FourKind");
  } else {
  }

  let Check4 = evaluateSet2.filter((item) => item.value === 4);
  if (Check4.length === 2) {
    Pair2.push("Pair1");
  } else if (Check4.length === 3) {
    ThreeKind2.push("ThreeKind");
  } else if (Check4.length === 4) {
    FourKind2.push("FourKind");
  } else {
  }

  let Check5 = evaluateSet2.filter((item) => item.value === 5);
  if (Check5.length === 2) {
    Pair2.push("Pair1");
  } else if (Check5.length === 3) {
    ThreeKind2.push("ThreeKind");
  } else if (Check5.length === 4) {
    FourKind2.push("FourKind");
  } else {
  }

  let Check6 = evaluateSet2.filter((item) => item.value === 6);
  if (Check6.length === 2) {
    Pair2.push("Pair1");
  } else if (Check6.length === 3) {
    ThreeKind2.push("ThreeKind");
  } else if (Check6.length === 4) {
    FourKind2.push("FourKind");
  } else {
  }

  let Check7 = evaluateSet2.filter((item) => item.value === 7);
  if (Check7.length === 2) {
    Pair2.push("Pair1");
  } else if (Check7.length === 3) {
    ThreeKind2.push("ThreeKind");
  } else if (Check7.length === 4) {
    FourKind2.push("FourKind");
  } else {
  }

  let Check8 = evaluateSet2.filter((item) => item.value === 8);
  if (Check8.length === 2) {
    Pair2.push("Pair1");
  } else if (Check8.length === 3) {
    ThreeKind2.push("ThreeKind");
  } else if (Check8.length === 4) {
    FourKind2.push("FourKind");
  } else {
  }

  let Check9 = evaluateSet2.filter((item) => item.value === 9);
  if (Check9.length === 2) {
    Pair2.push("Pair1");
  } else if (Check9.length === 3) {
    ThreeKind2.push("ThreeKind");
  } else if (Check9.length === 4) {
    FourKind2.push("FourKind");
  } else {
  }

  let Check10 = evaluateSet2.filter((item) => item.value === 10);
  if (Check10.length === 2) {
    Pair2.push("Pair1");
  } else if (Check10.length === 3) {
    ThreeKind2.push("ThreeKind");
  } else if (Check10.length === 4) {
    FourKind2.push("FourKind");
  } else {
  }

  let Check11 = evaluateSet2.filter((item) => item.value === 11);
  if (Check11.length === 2) {
    Pair2.push("Pair1");
  } else if (Check11.length === 3) {
    ThreeKind2.push("ThreeKind");
  } else if (Check11.length === 4) {
    FourKind2.push("FourKind");
  } else {
  }

  let Check12 = evaluateSet2.filter((item) => item.value === 12);
  if (Check12.length === 2) {
    Pair2.push("Pair1");
  } else if (Check12.length === 3) {
    ThreeKind2.push("ThreeKind");
  } else if (Check12.length === 4) {
    FourKind2.push("FourKind");
  } else {
  }

  let Check13 = evaluateSet2.filter((item) => item.value === 13);
  if (Check13.length === 2) {
    Pair2.push("Pair1");
  } else if (Check13.length === 3) {
    ThreeKind2.push("ThreeKind");
  } else if (Check13.length === 4) {
    FourKind2.push("FourKind");
  } else {
  }

  let Check14 = evaluateSet2.filter((item) => item.value === 14);
  if (Check14.length === 2) {
    Pair2.push("Pair1");
  } else if (Check14.length === 3) {
    ThreeKind2.push("ThreeKind");
  } else if (Check14.length === 4) {
    FourKind2.push("FourKind");
  } else {
  }

  //CheckVF = [];

  let Royal = [];
  if (evaluateSet2[0].value === 10) {
    Royal.push("success");
  } else {
  }

  if (evaluateSet2[1].value === 11) {
    Royal.push("success");
  } else {
  }

  if (evaluateSet2[2].value === 12) {
    Royal.push("success");
  } else {
  }

  if (evaluateSet2[3].value === 13) {
    Royal.push("success");
  } else {
  }

  if (evaluateSet2[4].value === 14) {
    Royal.push("success");
  } else {
  }

  if (Royal.length === 5) {
    Royal2.push("Royal");
  } else {
  }

  if (
    evaluateSet2[1].value === evaluateSet2[0].value + 1 &&
    evaluateSet2[2].value === evaluateSet2[1].value + 1 &&
    evaluateSet2[3].value === evaluateSet2[2].value + 1 &&
    evaluateSet2[4].value === evaluateSet2[3].value + 1
  ) {
    Straight2.push("Straight");
  } else {
  }
  ////console.log("222222");
  ////console.log(Flush2);
}

function ThreeSetEvaluate() {
  //let flushSuccess=[];
  let CheckClubs = evaluateSet3.filter((item) => item.suit === "Clubs");
  if (CheckClubs.length === 5) {
    Flush3.push("Flush");
  }

  let CheckDiamonds = evaluateSet3.filter((item) => item.suit === "Diamonds");
  if (CheckDiamonds.length === 5) {
    Flush3.push("Flush");
  }

  let CheckSpades = evaluateSet3.filter((item) => item.suit === "Spades");
  if (CheckSpades.length === 5) {
    Flush3.push("Flush");
  }

  let CheckHearts = evaluateSet3.filter((item) => item.suit === "Hearts");
  if (CheckHearts.length === 5) {
    Flush3.push("Flush");
  }

  let CheckSwords = evaluateSet3.filter((item) => item.suit === "Swords");
  if (CheckSwords.length === 5) {
    Flush3.push("Flush");
  }

  let CheckSkulls = evaluateSet3.filter((item) => item.suit === "Skulls");
  if (CheckSkulls.length === 5) {
    Flush3.push("Flush");
  }

  let Check2 = evaluateSet3.filter((item) => item.value === 2);
  if (Check2.length === 2) {
    Pair3.push("Pair1");
  } else if (Check2.length === 3) {
    ThreeKind3.push("ThreeKind");
  } else if (Check2.length === 4) {
    FourKind3.push("FourKind");
  } else {
  }

  let Check3 = evaluateSet3.filter((item) => item.value === 3);
  if (Check3.length === 2) {
    Pair3.push("Pair1");
  } else if (Check3.length === 3) {
    ThreeKind3.push("ThreeKind");
  } else if (Check3.length === 4) {
    FourKind3.push("FourKind");
  } else {
  }

  let Check4 = evaluateSet3.filter((item) => item.value === 4);
  if (Check4.length === 2) {
    Pair3.push("Pair1");
  } else if (Check4.length === 3) {
    ThreeKind3.push("ThreeKind");
  } else if (Check4.length === 4) {
    FourKind3.push("FourKind");
  } else {
  }

  let Check5 = evaluateSet3.filter((item) => item.value === 5);
  if (Check5.length === 2) {
    Pair3.push("Pair1");
  } else if (Check5.length === 3) {
    ThreeKind3.push("ThreeKind");
  } else if (Check5.length === 4) {
    FourKind3.push("FourKind");
  } else {
  }

  let Check6 = evaluateSet3.filter((item) => item.value === 6);
  if (Check6.length === 2) {
    Pair3.push("Pair1");
  } else if (Check6.length === 3) {
    ThreeKind3.push("ThreeKind");
  } else if (Check6.length === 4) {
    FourKind3.push("FourKind");
  } else {
  }

  let Check7 = evaluateSet3.filter((item) => item.value === 7);
  if (Check7.length === 2) {
    Pair3.push("Pair1");
  } else if (Check7.length === 3) {
    ThreeKind3.push("ThreeKind");
  } else if (Check7.length === 4) {
    FourKind3.push("FourKind");
  } else {
  }

  let Check8 = evaluateSet3.filter((item) => item.value === 8);
  if (Check8.length === 2) {
    Pair3.push("Pair1");
  } else if (Check8.length === 3) {
    ThreeKind3.push("ThreeKind");
  } else if (Check8.length === 4) {
    FourKind3.push("FourKind");
  } else {
  }

  let Check9 = evaluateSet3.filter((item) => item.value === 9);
  if (Check9.length === 2) {
    Pair3.push("Pair1");
  } else if (Check9.length === 3) {
    ThreeKind3.push("ThreeKind");
  } else if (Check9.length === 4) {
    FourKind3.push("FourKind");
  } else {
  }

  let Check10 = evaluateSet3.filter((item) => item.value === 10);
  if (Check10.length === 2) {
    Pair3.push("Pair1");
  } else if (Check10.length === 3) {
    ThreeKind3.push("ThreeKind");
  } else if (Check10.length === 4) {
    FourKind3.push("FourKind");
  } else {
  }

  let Check11 = evaluateSet3.filter((item) => item.value === 11);
  if (Check11.length === 2) {
    Pair3.push("Pair1");
  } else if (Check11.length === 3) {
    ThreeKind3.push("ThreeKind");
  } else if (Check11.length === 4) {
    FourKind3.push("FourKind");
  } else {
  }

  let Check12 = evaluateSet3.filter((item) => item.value === 12);
  if (Check12.length === 2) {
    Pair3.push("Pair1");
  } else if (Check12.length === 3) {
    ThreeKind3.push("ThreeKind");
  } else if (Check12.length === 4) {
    FourKind3.push("FourKind");
  } else {
  }

  let Check13 = evaluateSet3.filter((item) => item.value === 13);
  if (Check13.length === 2) {
    Pair3.push("Pair1");
  } else if (Check13.length === 3) {
    ThreeKind3.push("ThreeKind");
  } else if (Check13.length === 4) {
    FourKind3.push("FourKind");
  } else {
  }

  let Check14 = evaluateSet3.filter((item) => item.value === 14);
  if (Check14.length === 2) {
    Pair3.push("Pair1");
  } else if (Check14.length === 3) {
    ThreeKind3.push("ThreeKind");
  } else if (Check14.length === 4) {
    FourKind3.push("FourKind");
  } else {
  }

  // CheckVF = [];

  let Royal = [];
  if (evaluateSet3[0].value === 10) {
    Royal.push("success");
  } else {
  }

  if (evaluateSet3[1].value === 11) {
    Royal.push("success");
  } else {
  }

  if (evaluateSet3[2].value === 12) {
    Royal.push("success");
  } else {
  }

  if (evaluateSet3[3].value === 13) {
    Royal.push("success");
  } else {
  }

  if (evaluateSet3[4].value === 14) {
    Royal.push("success");
  } else {
  }

  if (Royal.length === 5) {
    Royal3.push("Royal");
  } else {
  }

  if (
    evaluateSet3[1].value === evaluateSet3[0].value + 1 &&
    evaluateSet3[2].value === evaluateSet3[1].value + 1 &&
    evaluateSet3[3].value === evaluateSet3[2].value + 1 &&
    evaluateSet3[4].value === evaluateSet3[3].value + 1
  ) {
    Straight3.push("Straight");
  } else {
  }

  ////console.log("3333333333");
  ////console.log(Pair3);
}

function FourSetEvaluate() {
  //let flushSuccess=[];
  let CheckClubs = evaluateSet4.filter((item) => item.suit === "Clubs");
  if (CheckClubs.length === 5) {
    Flush4.push("Flush");
  }

  let CheckDiamonds = evaluateSet4.filter((item) => item.suit === "Diamonds");
  if (CheckDiamonds.length === 5) {
    Flush4.push("Flush");
  }

  let CheckSpades = evaluateSet4.filter((item) => item.suit === "Spades");
  if (CheckSpades.length === 5) {
    Flush4.push("Flush");
  }

  let CheckHearts = evaluateSet4.filter((item) => item.suit === "Hearts");
  if (CheckHearts.length === 5) {
    Flush4.push("Flush");
  }

  let CheckSwords = evaluateSet4.filter((item) => item.suit === "Swords");
  if (CheckSwords.length === 5) {
    Flush4.push("Flush");
  }

  let CheckSkulls = evaluateSet4.filter((item) => item.suit === "Skulls");
  if (CheckSkulls.length === 5) {
    Flush4.push("Flush");
  }

  let Check2 = evaluateSet4.filter((item) => item.value === 2);
  if (Check2.length === 2) {
    Pair4.push("Pair1");
  } else if (Check2.length === 3) {
    ThreeKind4.push("ThreeKind");
  } else if (Check2.length === 4) {
    FourKind4.push("FourKind");
  } else {
  }

  let Check3 = evaluateSet4.filter((item) => item.value === 3);
  if (Check3.length === 2) {
    Pair4.push("Pair1");
  } else if (Check3.length === 3) {
    ThreeKind4.push("ThreeKind");
  } else if (Check3.length === 4) {
    FourKind4.push("FourKind");
  } else {
  }

  let Check4 = evaluateSet4.filter((item) => item.value === 4);
  if (Check4.length === 2) {
    Pair4.push("Pair1");
  } else if (Check4.length === 3) {
    ThreeKind4.push("ThreeKind");
  } else if (Check4.length === 4) {
    FourKind4.push("FourKind");
  } else {
  }

  let Check5 = evaluateSet4.filter((item) => item.value === 5);
  if (Check5.length === 2) {
    Pair4.push("Pair1");
  } else if (Check5.length === 3) {
    ThreeKind4.push("ThreeKind");
  } else if (Check5.length === 4) {
    FourKind4.push("FourKind");
  } else {
  }

  let Check6 = evaluateSet4.filter((item) => item.value === 6);
  if (Check6.length === 2) {
    Pair4.push("Pair1");
  } else if (Check6.length === 3) {
    ThreeKind4.push("ThreeKind");
  } else if (Check6.length === 4) {
    FourKind4.push("FourKind");
  } else {
  }

  let Check7 = evaluateSet4.filter((item) => item.value === 7);
  if (Check7.length === 2) {
    Pair4.push("Pair1");
  } else if (Check7.length === 3) {
    ThreeKind4.push("ThreeKind");
  } else if (Check7.length === 4) {
    FourKind4.push("FourKind");
  } else {
  }

  let Check8 = evaluateSet4.filter((item) => item.value === 8);
  if (Check8.length === 2) {
    Pair4.push("Pair1");
  } else if (Check8.length === 3) {
    ThreeKind4.push("ThreeKind");
  } else if (Check8.length === 4) {
    FourKind4.push("FourKind");
  } else {
  }

  let Check9 = evaluateSet4.filter((item) => item.value === 9);
  if (Check9.length === 2) {
    Pair4.push("Pair1");
  } else if (Check9.length === 3) {
    ThreeKind4.push("ThreeKind");
  } else if (Check9.length === 4) {
    FourKind4.push("FourKind");
  } else {
  }

  let Check10 = evaluateSet4.filter((item) => item.value === 10);
  if (Check10.length === 2) {
    Pair4.push("Pair1");
  } else if (Check10.length === 3) {
    ThreeKind4.push("ThreeKind");
  } else if (Check10.length === 4) {
    FourKind4.push("FourKind");
  } else {
  }

  let Check11 = evaluateSet4.filter((item) => item.value === 11);
  if (Check11.length === 2) {
    Pair4.push("Pair1");
  } else if (Check11.length === 3) {
    ThreeKind4.push("ThreeKind");
  } else if (Check11.length === 4) {
    FourKind4.push("FourKind");
  } else {
  }

  let Check12 = evaluateSet4.filter((item) => item.value === 12);
  if (Check12.length === 2) {
    Pair4.push("Pair1");
  } else if (Check12.length === 3) {
    ThreeKind4.push("ThreeKind");
  } else if (Check12.length === 4) {
    FourKind4.push("FourKind");
  } else {
  }

  let Check13 = evaluateSet4.filter((item) => item.value === 13);
  if (Check13.length === 2) {
    Pair4.push("Pair1");
  } else if (Check13.length === 3) {
    ThreeKind4.push("ThreeKind");
  } else if (Check13.length === 4) {
    FourKind4.push("FourKind");
  } else {
  }

  let Check14 = evaluateSet4.filter((item) => item.value === 14);
  if (Check14.length === 2) {
    Pair4.push("Pair1");
  } else if (Check14.length === 3) {
    ThreeKind4.push("ThreeKind");
  } else if (Check14.length === 4) {
    FourKind4.push("FourKind");
  } else {
  }

  //CheckVF = [];

  let Royal = [];

  if (evaluateSet4[0].value === 10) {
    Royal.push("success");
  } else {
  }

  if (evaluateSet4[1].value === 11) {
    Royal.push("success");
  } else {
  }

  if (evaluateSet4[2].value === 12) {
    Royal.push("success");
  } else {
  }

  if (evaluateSet4[3].value === 13) {
    Royal.push("success");
  } else {
  }

  if (evaluateSet4[4].value === 14) {
    Royal.push("success");
  } else {
  }

  if (Royal.length === 5) {
    Royal4.push("Royal");
  } else {
  }

  if (
    evaluateSet4[1].value === evaluateSet4[0].value + 1 &&
    evaluateSet4[2].value === evaluateSet4[1].value + 1 &&
    evaluateSet4[3].value === evaluateSet4[2].value + 1 &&
    evaluateSet4[4].value === evaluateSet4[3].value + 1
  ) {
    Straight4.push("Straight");
  } else {
  }

  ////console.log("44444444");
  ////console.log(Pair4);
}

function FiveSetEvaluate() {
  //let flushSuccess=[];
  let CheckClubs = evaluateSet5.filter((item) => item.suit === "Clubs");
  if (CheckClubs.length === 5) {
    Flush5.push("Flush");
  }

  let CheckDiamonds = evaluateSet5.filter((item) => item.suit === "Diamonds");
  if (CheckDiamonds.length === 5) {
    Flush5.push("Flush");
  }

  let CheckSpades = evaluateSet5.filter((item) => item.suit === "Spades");
  if (CheckSpades.length === 5) {
    Flush5.push("Flush");
  }

  let CheckHearts = evaluateSet5.filter((item) => item.suit === "Hearts");
  if (CheckHearts.length === 5) {
    Flush5.push("Flush");
  }

  let CheckSwords = evaluateSet5.filter((item) => item.suit === "Swords");
  if (CheckSwords.length === 5) {
    Flush5.push("Flush");
  }

  let CheckSkulls = evaluateSet5.filter((item) => item.suit === "Skulls");
  if (CheckSkulls.length === 5) {
    Flush5.push("Flush");
  }

  let Check2 = evaluateSet5.filter((item) => item.value === 2);
  if (Check2.length === 2) {
    Pair5.push("Pair1");
  } else if (Check2.length === 3) {
    ThreeKind5.push("ThreeKind");
  } else if (Check2.length === 4) {
    FourKind5.push("FourKind");
  } else {
  }

  let Check3 = evaluateSet5.filter((item) => item.value === 3);
  if (Check3.length === 2) {
    Pair5.push("Pair1");
  } else if (Check3.length === 3) {
    ThreeKind5.push("ThreeKind");
  } else if (Check3.length === 4) {
    FourKind5.push("FourKind");
  } else {
  }

  let Check4 = evaluateSet5.filter((item) => item.value === 4);
  if (Check4.length === 2) {
    Pair5.push("Pair1");
  } else if (Check4.length === 3) {
    ThreeKind5.push("ThreeKind");
  } else if (Check4.length === 4) {
    FourKind5.push("FourKind");
  } else {
  }

  let Check5 = evaluateSet5.filter((item) => item.value === 5);
  if (Check5.length === 2) {
    Pair5.push("Pair1");
  } else if (Check5.length === 3) {
    ThreeKind5.push("ThreeKind");
  } else if (Check5.length === 4) {
    FourKind5.push("FourKind");
  } else {
  }

  let Check6 = evaluateSet5.filter((item) => item.value === 6);
  if (Check6.length === 2) {
    Pair5.push("Pair1");
  } else if (Check6.length === 3) {
    ThreeKind5.push("ThreeKind");
  } else if (Check6.length === 4) {
    FourKind5.push("FourKind");
  } else {
  }

  let Check7 = evaluateSet5.filter((item) => item.value === 7);
  if (Check7.length === 2) {
    Pair5.push("Pair1");
  } else if (Check7.length === 3) {
    ThreeKind5.push("ThreeKind");
  } else if (Check7.length === 4) {
    FourKind5.push("FourKind");
  } else {
  }

  let Check8 = evaluateSet5.filter((item) => item.value === 8);
  if (Check8.length === 2) {
    Pair5.push("Pair1");
  } else if (Check8.length === 3) {
    ThreeKind5.push("ThreeKind");
  } else if (Check8.length === 4) {
    FourKind5.push("FourKind");
  } else {
  }

  let Check9 = evaluateSet5.filter((item) => item.value === 9);
  if (Check9.length === 2) {
    Pair5.push("Pair1");
  } else if (Check9.length === 3) {
    ThreeKind5.push("ThreeKind");
  } else if (Check9.length === 4) {
    FourKind5.push("FourKind");
  } else {
  }

  let Check10 = evaluateSet5.filter((item) => item.value === 10);
  if (Check10.length === 2) {
    Pair5.push("Pair1");
  } else if (Check10.length === 3) {
    ThreeKind5.push("ThreeKind");
  } else if (Check10.length === 4) {
    FourKind5.push("FourKind");
  } else {
  }

  let Check11 = evaluateSet5.filter((item) => item.value === 11);
  if (Check11.length === 2) {
    Pair5.push("Pair1");
  } else if (Check11.length === 3) {
    ThreeKind5.push("ThreeKind");
  } else if (Check11.length === 4) {
    FourKind5.push("FourKind");
  } else {
  }

  let Check12 = evaluateSet5.filter((item) => item.value === 12);
  if (Check12.length === 2) {
    Pair5.push("Pair1");
  } else if (Check12.length === 3) {
    ThreeKind5.push("ThreeKind");
  } else if (Check12.length === 4) {
    FourKind5.push("FourKind");
  } else {
  }

  let Check13 = evaluateSet5.filter((item) => item.value === 13);
  if (Check13.length === 2) {
    Pair5.push("Pair1");
  } else if (Check13.length === 3) {
    ThreeKind5.push("ThreeKind");
  } else if (Check13.length === 4) {
    FourKind5.push("FourKind");
  } else {
  }

  let Check14 = evaluateSet5.filter((item) => item.value === 14);
  if (Check14.length === 2) {
    Pair5.push("Pair1");
  } else if (Check14.length === 3) {
    ThreeKind5.push("ThreeKind");
  } else if (Check14.length === 4) {
    FourKind5.push("FourKind");
  } else {
  }

  //CheckVF = [];

  let Royal = [];
  if (evaluateSet5[0].value === 10) {
    Royal.push("success");
  } else {
  }

  if (evaluateSet5[1].value === 11) {
    Royal.push("success");
  } else {
  }

  if (evaluateSet5[2].value === 12) {
    Royal.push("success");
  } else {
  }

  if (evaluateSet5[3].value === 13) {
    Royal.push("success");
  } else {
  }

  if (evaluateSet5[4].value === 14) {
    Royal.push("success");
  } else {
  }

  if (Royal.length === 5) {
    Royal5.push("Royal");
  } else {
  }

  if (
    evaluateSet5[1].value === evaluateSet5[0].value + 1 &&
    evaluateSet5[2].value === evaluateSet5[1].value + 1 &&
    evaluateSet5[3].value === evaluateSet5[2].value + 1 &&
    evaluateSet5[4].value === evaluateSet5[3].value + 1
  ) {
    Straight5.push("Straight");
  } else {
  }

  ////console.log("555555555");
  ////console.log(Pair5);
}

function SixSetEvaluate() {
  //let flushSuccess=[];
  let CheckClubs = evaluateSet6.filter((item) => item.suit === "Clubs");
  if (CheckClubs.length === 5) {
    Flush6.push("Flush");
  }

  let CheckDiamonds = evaluateSet6.filter((item) => item.suit === "Diamonds");
  if (CheckDiamonds.length === 5) {
    Flush6.push("Flush");
  }

  let CheckSpades = evaluateSet6.filter((item) => item.suit === "Spades");
  if (CheckSpades.length === 5) {
    Flush6.push("Flush");
  }

  let CheckHearts = evaluateSet6.filter((item) => item.suit === "Hearts");
  if (CheckHearts.length === 5) {
    Flush6.push("Flush");
  }

  let CheckSwords = evaluateSet6.filter((item) => item.suit === "Swords");
  if (CheckSwords.length === 5) {
    Flush6.push("Flush");
  }

  let CheckSkulls = evaluateSet6.filter((item) => item.suit === "Skulls");
  if (CheckSkulls.length === 5) {
    Flush6.push("Flush");
  }

  let Check2 = evaluateSet6.filter((item) => item.value === 2);
  if (Check2.length === 2) {
    Pair6.push("Pair1");
  } else if (Check2.length === 3) {
    ThreeKind6.push("ThreeKind");
  } else if (Check2.length === 4) {
    FourKind6.push("FourKind");
  } else {
  }

  let Check3 = evaluateSet6.filter((item) => item.value === 3);
  if (Check3.length === 2) {
    Pair6.push("Pair1");
  } else if (Check3.length === 3) {
    ThreeKind6.push("ThreeKind");
  } else if (Check3.length === 4) {
    FourKind6.push("FourKind");
  } else {
  }

  let Check4 = evaluateSet6.filter((item) => item.value === 4);
  if (Check4.length === 2) {
    Pair6.push("Pair1");
  } else if (Check4.length === 3) {
    ThreeKind6.push("ThreeKind");
  } else if (Check4.length === 4) {
    FourKind6.push("FourKind");
  } else {
  }

  let Check5 = evaluateSet6.filter((item) => item.value === 5);
  if (Check5.length === 2) {
    Pair6.push("Pair1");
  } else if (Check5.length === 3) {
    ThreeKind6.push("ThreeKind");
  } else if (Check5.length === 4) {
    FourKind6.push("FourKind");
  } else {
  }

  let Check6 = evaluateSet6.filter((item) => item.value === 6);
  if (Check6.length === 2) {
    Pair6.push("Pair1");
  } else if (Check6.length === 3) {
    ThreeKind6.push("ThreeKind");
  } else if (Check6.length === 4) {
    FourKind6.push("FourKind");
  } else {
  }

  let Check7 = evaluateSet6.filter((item) => item.value === 7);
  if (Check7.length === 2) {
    Pair6.push("Pair1");
  } else if (Check7.length === 3) {
    ThreeKind6.push("ThreeKind");
  } else if (Check7.length === 4) {
    FourKind6.push("FourKind");
  } else {
  }

  let Check8 = evaluateSet6.filter((item) => item.value === 8);
  if (Check8.length === 2) {
    Pair6.push("Pair1");
  } else if (Check8.length === 3) {
    ThreeKind6.push("ThreeKind");
  } else if (Check8.length === 4) {
    FourKind6.push("FourKind");
  } else {
  }

  let Check9 = evaluateSet6.filter((item) => item.value === 9);
  if (Check9.length === 2) {
    Pair6.push("Pair1");
  } else if (Check9.length === 3) {
    ThreeKind6.push("ThreeKind");
  } else if (Check9.length === 4) {
    FourKind6.push("FourKind");
  } else {
  }

  let Check10 = evaluateSet6.filter((item) => item.value === 10);
  if (Check10.length === 2) {
    Pair6.push("Pair1");
  } else if (Check10.length === 3) {
    ThreeKind6.push("ThreeKind");
  } else if (Check10.length === 4) {
    FourKind6.push("FourKind");
  } else {
  }

  let Check11 = evaluateSet6.filter((item) => item.value === 11);
  if (Check11.length === 2) {
    Pair6.push("Pair1");
  } else if (Check11.length === 3) {
    ThreeKind6.push("ThreeKind");
  } else if (Check11.length === 4) {
    FourKind6.push("FourKind");
  } else {
  }

  let Check12 = evaluateSet6.filter((item) => item.value === 12);
  if (Check12.length === 2) {
    Pair6.push("Pair1");
  } else if (Check12.length === 3) {
    ThreeKind6.push("ThreeKind");
  } else if (Check12.length === 4) {
    FourKind6.push("FourKind");
  } else {
  }

  let Check13 = evaluateSet6.filter((item) => item.value === 13);
  if (Check13.length === 2) {
    Pair6.push("Pair1");
  } else if (Check13.length === 3) {
    ThreeKind6.push("ThreeKind");
  } else if (Check13.length === 4) {
    FourKind6.push("FourKind");
  } else {
  }

  let Check14 = evaluateSet6.filter((item) => item.value === 14);
  if (Check14.length === 2) {
    Pair6.push("Pair1");
  } else if (Check14.length === 3) {
    ThreeKind6.push("ThreeKind");
  } else if (Check14.length === 4) {
    FourKind6.push("FourKind");
  } else {
  }

  //CheckVF = [];

  let Royal = [];
  if (evaluateSet6[0].value === 10) {
    Royal.push("success");
  } else {
  }

  if (evaluateSet6[1].value === 11) {
    Royal.push("success");
  } else {
  }

  if (evaluateSet6[2].value === 12) {
    Royal.push("success");
  } else {
  }

  if (evaluateSet6[3].value === 13) {
    Royal.push("success");
  } else {
  }

  if (evaluateSet6[4].value === 14) {
    Royal.push("success");
  } else {
  }

  if (Royal.length === 5) {
    Royal6.push("Royal");
  } else {
  }

  if (
    evaluateSet6[1].value === evaluateSet6[0].value + 1 &&
    evaluateSet6[2].value === evaluateSet6[1].value + 1 &&
    evaluateSet6[3].value === evaluateSet6[2].value + 1 &&
    evaluateSet6[4].value === evaluateSet6[3].value + 1
  ) {
    Straight6.push("Straight");
  } else {
  }
}

function getCardPointsClick1() {
  getCardPoints(0, "collectionAnchor1");
}

function getCardPointsClick2() {
  getCardPoints(1, "collectionAnchor2");
}

function getCardPointsClick3() {
  getCardPoints(2, "collectionAnchor3");
}

function getCardPointsClick4() {
  getCardPoints(3, "collectionAnchor4");
}

function getCardPointsClick5() {
  getCardPoints(4, "collectionAnchor5");
}

function getCardPointsClick6() {
  getCardPoints(5, "collectionAnchor6");
}

function getCardPointsClick7() {
  getCardPoints(6, "collectionAnchor7");
}

function getCardPointsClick8() {
  getCardPoints(7, "collectionAnchor8");
}

function getCardPointsClick9() {
  getCardPoints(8, "collectionAnchor9");
}

function getCardPointsClick10() {
  getCardPoints(9, "collectionAnchor10");
}

function getCardPointsClick11() {
  getCardPoints(10, "collectionAnchor11");
}

function getCardPointsClick12() {
  getCardPoints(11, "collectionAnchor12");
}

function getCardPointsClick13() {
  getCardPoints(12, "collectionAnchor13");
}

function getCardPointsClick14() {
  getCardPoints(13, "collectionAnchor14");
}

function getCardPointsClick15() {
  getCardPoints(14, "collectionAnchor15");
}

function getCardPointsClick16() {
  getCardPoints(15, "collectionAnchor16");
}

function getCardPointsClick17() {
  getCardPoints(16, "collectionAnchor17");
}

function getCardPointsClick18() {
  getCardPoints(17, "collectionAnchor18");
}

function getCardPointsClick19() {
  getCardPoints(18, "collectionAnchor19");
}

function getCardPointsClick20() {
  getCardPoints(19, "collectionAnchor20");
}

function getCardPointsClick21() {
  getCardPoints(20, "collectionAnchor21");
}

function getCardPointsClick22() {
  getCardPoints(21, "collectionAnchor22");
}

function getCardPointsClick23() {
  getCardPoints(22, "collectionAnchor23");
}

function getCardPointsClick24() {
  getCardPoints(23, "collectionAnchor24");
}

function getCardPointsClick25() {
  getCardPoints(24, "collectionAnchor25");
}

function getCardPointsClick26() {
  getCardPoints(25, "collectionAnchor26");
}

function getCardPointsClick27() {
  getCardPoints(26, "collectionAnchor27");
}

function getCardPointsClick28() {
  getCardPoints(27, "collectionAnchor28");
}

function getCardPointsClick29() {
  getCardPoints(28, "collectionAnchor29");
}

function getCardPointsClick30() {
  getCardPoints(29, "collectionAnchor30");
}

function getCardPoints(index, anchor) {
  if (collectionAnalysisTotal[index] === "No") {
  } else if (collectionAnalysisTotal[index] === "Yes") {
    let card = document.createElement("img");
    card.src = `cardGameImages/Points${collectionFinal[index].polarity}${collectionFinal[index].value}.png`;
    let cardAnchor = document.getElementById(anchor);
    cardAnchor.removeChild(cardAnchor.firstChild);
    cardAnchor.appendChild(card);
    collectionAnalysisTotal.splice(index, 1, "Score");
    console.log("collectionAnalysisTotal");
    console.log(collectionAnalysisTotal);
  } else if (collectionAnalysisTotal[index] === "Score") {
    let card = document.createElement("img");
    card.src = `cardGameImages/${collectionFinal[index].suit}${collectionFinal[index].value}.png`;
    let cardAnchor = document.getElementById(anchor);
    cardAnchor.removeChild(cardAnchor.firstChild);
    cardAnchor.appendChild(card);

    collectionAnalysisTotal.splice(index, 1, "Yes");
    console.log("collectionAnalysisTotal");
    console.log(collectionAnalysisTotal);
  } else {
  }
}

function EvaluateHands() {
  ////console.log("scores");

  if (Royal1.length === 1 && Flush1.length === 1) {
    score1.push(90);
  } else if (Straight1.length === 1 && Flush1.length == 1) {
    score1.push(60);
  } else if (FourKind1.length === 1) {
    score1.push(50);
  } else if (ThreeKind1.length === 1 && Pair1.length === 1) {
    score1.push(40);
  } else if (Flush1.length === 1) {
    score1.push(35);
  } else if (Straight1.length === 1) {
    score1.push(30);
  } else if (ThreeKind1.length === 1) {
    score1.push(25);
  } else if (Pair1.length === 2) {
    score1.push(15);
  } else if (Pair1.length === 1) {
    score1.push(10);
  } else {
    score1.push(0);
  }

  if (Royal2.length === 1 && Flush2.length === 1) {
    score2.push(90);
  } else if (Straight2.length === 1 && Flush2.length == 1) {
    score2.push(60);
  } else if (FourKind2.length === 1) {
    score2.push(50);
  } else if (ThreeKind2.length === 1 && Pair2.length === 1) {
    score2.push(40);
  } else if (Flush2.length === 1) {
    score2.push(35);
  } else if (Straight2.length === 1) {
    score2.push(30);
  } else if (ThreeKind2.length === 1) {
    score2.push(25);
  } else if (Pair2.length === 2) {
    score2.push(15);
  } else if (Pair2.length === 1) {
    score2.push(10);
  } else {
    score2.push(0);
  }

  if (Royal3.length === 1 && Flush3.length === 1) {
    score3.push(90);
  } else if (Straight3.length === 1 && Flush3.length == 1) {
    score3.push(60);
  } else if (FourKind3.length === 1) {
    score3.push(50);
  } else if (ThreeKind3.length === 1 && Pair3.length === 1) {
    score3.push(40);
  } else if (Flush3.length === 1) {
    score3.push(35);
  } else if (Straight3.length === 1) {
    score3.push(30);
  } else if (ThreeKind3.length === 1) {
    score3.push(25);
  } else if (Pair3.length === 2) {
    score3.push(15);
  } else if (Pair3.length === 1) {
    score3.push(10);
  } else {
    score3.push(0);
  }

  if (Royal4.length === 1 && Flush4.length === 1) {
    score4.push(90);
  } else if (Straight4.length === 1 && Flush4.length == 1) {
    score4.push(60);
  } else if (FourKind4.length === 1) {
    score4.push(50);
  } else if (ThreeKind4.length === 1 && Pair4.length === 1) {
    score4.push(40);
  } else if (Flush4.length === 1) {
    score4.push(35);
  } else if (Straight4.length === 1) {
    score4.push(30);
  } else if (ThreeKind4.length === 1) {
    score4.push(25);
  } else if (Pair4.length === 2) {
    score4.push(15);
  } else if (Pair4.length === 1) {
    score4.push(10);
  } else {
    score4.push(0);
  }

  if (Royal5.length === 1 && Flush5.length === 1) {
    score5.push(90);
  } else if (Straight5.length === 1 && Flush5.length == 1) {
    score5.push(60);
  } else if (FourKind5.length === 1) {
    score5.push(50);
  } else if (ThreeKind5.length === 1 && Pair5.length === 1) {
    score5.push(40);
  } else if (Flush5.length === 1) {
    score5.push(35);
  } else if (Straight5.length === 1) {
    score5.push(30);
  } else if (ThreeKind5.length === 1) {
    score5.push(25);
  } else if (Pair5.length === 2) {
    score5.push(15);
  } else if (Pair5.length === 1) {
    score5.push(10);
  } else {
    score5.push(0);
  }

  if (Royal6.length === 1 && Flush6.length === 1) {
    score6.push(90);
  } else if (Straight6.length === 1 && Flush6.length == 1) {
    score6.push(60);
  } else if (FourKind6.length === 1) {
    score6.push(50);
  } else if (ThreeKind6.length === 1 && Pair6.length === 1) {
    score6.push(40);
  } else if (Flush6.length === 1) {
    score6.push(35);
  } else if (Straight6.length === 1) {
    score6.push(30);
  } else if (ThreeKind6.length === 1) {
    score6.push(25);
  } else if (Pair6.length === 2) {
    score6.push(15);
  } else if (Pair6.length === 1) {
    score6.push(10);
  } else {
    score6.push(0);
  }
  //console.log("cocktailPositiveScoreeeeeeeeeeeeeeeeeeeeeeeeee");

  //console.log(cocktailPositiveScore);
  //console.log("cocktailNegativeScore333333333333333333333333");
  //console.log(cocktailNegativeScore);
  //upload this

 

  let finalBonus = bonusScore.reduce((a, c) => a + c);
  finalNegative.push(cocktailNegativeScore.reduce((a, c) => a + c));
  finalPositive.push(cocktailPositiveScore.reduce((a, c) => a + c));

  cocktailCardsDifference.splice(0,1,finalPositive[0]-finalNegative[0]);
  wagerDifference.splice(0, 1, cocktailCardsDifference[0] - userWager[0]);


   if (wagerCheck.length < 1) {

     hideWagerButton();
     

   } else {
     
      if (userWager[0] === cocktailCardsDifference[0]) {
        wagerResultPositive.splice(0,1,userWager[0]);
      } else if (userWager[0] > cocktailCardsDifference[0]) {
        wagerResultNegative.splice(0, 1, userWager[0]);
      } else if (userWager[0] < cocktailCardsDifference[0]) {
        if (wagerDifference[0] > userWager[0]) {
        } else if (wagerDifference[0] === userWager[0]) {
        } else if (wagerDifference[0] < userWager[0]) {
          wagerResultPositive.splice(0, 1, userWager[0] - wagerDifference[0]);
        } else {
        }
      } else {
      }

      
      showWagerResult();
   }




  console.log("wagerDifference");
  console.log(wagerDifference);
    console.log("finalPositive");
  console.log(finalPositive);
      console.log("finalNegative");

    console.log(finalNegative);



  console.log("finalBonus");
  console.log(finalBonus);
  console.log(bonusScore);

  console.log("cocktailNegativeScoreadded");
  console.log(finalNegative);

  console.log("cocktailPositiveScoreadded");
  console.log(finalPositive);

  console.log("cocktailCardsDifference");
  console.log(cocktailCardsDifference);

  console.log("fianl deck length");
  console.log(deck.deck.length);

  console.log("cocktail deck length");
  console.log(cocktailDeck.deckCocktail.length);

  console.log("negative cocktail deck length");
  console.log(cocktailDeckNegative.deckCocktailNegative.length);

  finalScore.push(
    score1[0] +
      score2[0] +
      score3[0] +
      score4[0] +
      score5[0] +
      score6[0] +
      finalBonus +
      finalPositive[0] -
      finalNegative[0] +
      wagerResultPositive[0] -
      wagerResultNegative[0]
  );
  window.alert("Your Final Score is " + finalScore + " points");

console.log("wagerResultPositive");
console.log(wagerResultPositive)

console.log("wagerResultNegative");
console.log(wagerResultNegative);


  document.getElementById("scoreLabel");
  let finalScoreOnScreen = document.createElement("p");
  scoreLabel.appendChild(finalScoreOnScreen);
  finalScoreOnScreen.innerHTML = finalScore;
  finalScoreOnScreen.className += "scoreFinal";

  document.getElementById("clickCardsAnchor");
  let clickCardsMessage = document.createElement("p");
  clickCardsAnchor.appendChild(clickCardsMessage);
  clickCardsMessage.innerHTML =
    "Click on a Cocktail Card to see it's point value. Click again to return to the card image.";
  clickCardsMessage.className += "message";

  let hideGetScore = document.getElementById("AddItUp");
  hideGetScore.style.display = "none";

  collectionFinal = evaluateSet1
    .concat(evaluateSet2)
    .concat(evaluateSet3)
    .concat(evaluateSet4)
    .concat(evaluateSet5)
    .concat(evaluateSet6);
  console.log(collectionFinal);

  for (let i = 0; i < collectionFinal.length; i++) {
    if (collectionFinal[i].polarity === "Positive") {
      collectionDividedPostive.push(collectionAnalysisAnchors[i]);
      collectionAnalysisTotal.push("Yes");
    } else if (collectionFinal[i].polarity === "Negative") {
      collectionDividedNegative.push(collectionAnalysisAnchors[i]);
      collectionAnalysisTotal.push("Yes");
    } else {
      collectionAnalysisTotal.push("No");
    }
  }

  console.log("collectionDividedPostive");
  console.log(collectionDividedPostive);
  console.log("collectionDividedNegative");
  console.log(collectionDividedNegative);

  for (let i = 0; i < collectionDividedPostive.length; i++) {
    makeLightGreenBorder(collectionDividedPostive[i]);
  }

  for (let i = 0; i < collectionDividedNegative.length; i++) {
    makeLightRedBorder(collectionDividedNegative[i]);
  }

  console.log("collectionAnalysisTotal");
  console.log(collectionAnalysisTotal);

  document
    .getElementById("collectionAnchor1")
    .addEventListener("click", getCardPointsClick1);
  document
    .getElementById("collectionAnchor2")
    .addEventListener("click", getCardPointsClick2);
  document
    .getElementById("collectionAnchor3")
    .addEventListener("click", getCardPointsClick3);
  document
    .getElementById("collectionAnchor4")
    .addEventListener("click", getCardPointsClick4);
  document
    .getElementById("collectionAnchor5")
    .addEventListener("click", getCardPointsClick5);
  document
    .getElementById("collectionAnchor6")
    .addEventListener("click", getCardPointsClick6);
  document
    .getElementById("collectionAnchor7")
    .addEventListener("click", getCardPointsClick7);
  document
    .getElementById("collectionAnchor8")
    .addEventListener("click", getCardPointsClick8);
  document
    .getElementById("collectionAnchor9")
    .addEventListener("click", getCardPointsClick9);
  document
    .getElementById("collectionAnchor10")
    .addEventListener("click", getCardPointsClick10);
  document
    .getElementById("collectionAnchor11")
    .addEventListener("click", getCardPointsClick11);
  document
    .getElementById("collectionAnchor12")
    .addEventListener("click", getCardPointsClick12);
  document
    .getElementById("collectionAnchor13")
    .addEventListener("click", getCardPointsClick13);
  document
    .getElementById("collectionAnchor14")
    .addEventListener("click", getCardPointsClick14);
  document
    .getElementById("collectionAnchor15")
    .addEventListener("click", getCardPointsClick15);
  document
    .getElementById("collectionAnchor16")
    .addEventListener("click", getCardPointsClick16);
  document
    .getElementById("collectionAnchor17")
    .addEventListener("click", getCardPointsClick17);
  document
    .getElementById("collectionAnchor18")
    .addEventListener("click", getCardPointsClick18);
  document
    .getElementById("collectionAnchor19")
    .addEventListener("click", getCardPointsClick19);
  document
    .getElementById("collectionAnchor20")
    .addEventListener("click", getCardPointsClick20);
  document
    .getElementById("collectionAnchor21")
    .addEventListener("click", getCardPointsClick21);
  document
    .getElementById("collectionAnchor22")
    .addEventListener("click", getCardPointsClick22);
  document
    .getElementById("collectionAnchor23")
    .addEventListener("click", getCardPointsClick23);
  document
    .getElementById("collectionAnchor24")
    .addEventListener("click", getCardPointsClick24);
  document
    .getElementById("collectionAnchor25")
    .addEventListener("click", getCardPointsClick25);
  document
    .getElementById("collectionAnchor26")
    .addEventListener("click", getCardPointsClick26);
  document
    .getElementById("collectionAnchor27")
    .addEventListener("click", getCardPointsClick27);
  document
    .getElementById("collectionAnchor28")
    .addEventListener("click", getCardPointsClick28);
  document
    .getElementById("collectionAnchor29")
    .addEventListener("click", getCardPointsClick29);
  document
    .getElementById("collectionAnchor30")
    .addEventListener("click", getCardPointsClick30);
}

////console.log(score);

////console.log("score1");
////console.log(score1);
////console.log("score2");
////console.log(score2);
////console.log("score3");
////console.log(score3);
////console.log("score4");
////console.log(score4);
////console.log("score5");
////console.log (score5);
////console.log("score6");
////console.log(score6);
