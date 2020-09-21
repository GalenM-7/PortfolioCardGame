//create arrays for hands, suits, and values

let suits = ["Hearts","Diamonds","Clubs","Spades","Skulls","Swords"];
let values = [2,3,4,5,6,7,8,9,10,11,12,13,14];
let hand1= [];
let hand2= [];
let hand3= [];
let hand4= [];
let hand5= [];
let hand6= [];
let hand7= [];
let hand8= [];
let hand9= [];
let hand10= [];
let hand11= [];
let hand12= [];
let hand13= [];
let hand14= [];
let collection=[];
let collectionRevised1=[];
let collectionRevised2=[];
let collectionRevised3=[];
let collectionRevised4=[];
let collectionRevised5=[];
let collection1=[];
let collection2=[];
let collection3=[];
let collection4=[];
let collection5=[];
let collection6=[];
let valuesTest1=[];
let valuesTest2=[];
let evaluateSet1=[];
let evaluateSet2=[];
let evaluateSet3=[];
let evaluateSet4=[];
let evaluateSet5=[];
let end3=[];
//let FEnd3=[];

let evalSuit=[]
let storeBonuses=[]
let score=[]

let Royal1=[];
let Straight1=[];
let FourKind1=[];
let FullHouse1=[];
let ThreeKind1=[];
let Pair1=[];
let Flush1=[];


let Royal2=[];
let Straight2=[];
let FourKind2=[];
let FullHouse2=[];
let ThreeKind2=[];
let TwoPair2=[];
let Pair2=[];
let Flush2=[];



let Royal3=[];
let Straight3=[];
let FourKind3=[];
let FullHouse3=[];
let ThreeKind3=[];
let Pair3=[];
let Flush3=[];

let Royal4=[];
let Straight4=[];
let FourKind4=[];
let FullHouse4=[];
let ThreeKind4=[];
let Pair4=[];
let Flush4=[];



let Royal5=[];
let Straight5=[];
let FourKind5=[];
let FullHouse5=[];
let ThreeKind5=[];
let Pair5=[];
let Flush5=[];

let finalCountBonuses=[]






//create deck and deal functions

class Card {
    constructor(suit,value){
        this.suit=suit;
        this.value=value;
    }
}

class Deck {
    constructor (){
        this.deck=[];
    }

    createDeck(suits,values) {
        for (let suit of suits){
            for(let value of values){
                this.deck.push (new Card(suit,value));
            }
        }
        return this.deck;
    }

    shuffle(){
        let counter=this.deck.length, temp, i;

        while (counter){
            i=Math.floor(Math.random()*counter--);
            temp=this.deck[counter];
            this.deck[counter]=this.deck[i];
            this.deck[i]=temp;
        }
        return this.deck;
    }

    deal1(){
        for (let i=0;i<5;i++){
            hand1.push(this.deck.pop());
        }
        return hand1;
    }

    deal2(){
        for (let i=0;i<5;i++){
            hand2.push(this.deck.pop());
        }
        return hand2;
    }

    deal3(){
        for (let i=0;i<5;i++){
            hand3.push(this.deck.pop());
        }
        return hand3;
    }

    deal4(){
        for (let i=0;i<5;i++){
            hand4.push(this.deck.pop());
        }
        return hand4;
    }

    deal5(){
        for (let i=0;i<5;i++){
            hand5.push(this.deck.pop());
        }
        return hand5;
    }

    deal6(){
        for (let i=0;i<5;i++){
            hand6.push(this.deck.pop());
        }
        return hand6;
    }

    deal7(){
        for (let i=0;i<5;i++){
            hand7.push(this.deck.pop());
        }
        return hand7;
    }

    deal8(){
        for (let i=0;i<5;i++){
            hand8.push(this.deck.pop());
        }
        return hand8;
    }

    deal9(){
        for (let i=0;i<5;i++){
            hand9.push(this.deck.pop());
        }
        return hand9;
    }

    deal10(){
        for (let i=0;i<5;i++){
            hand10.push(this.deck.pop());
        }
        return hand10;
    }

    deal11(){
        for (let i=0;i<5;i++){
            hand11.push(this.deck.pop());
        }
        return hand11;
    }

    deal12(){
        for (let i=0;i<5;i++){
            hand12.push(this.deck.pop());
        }
        return hand12;
    }

    deal13(){
        for (let i=0;i<5;i++){
            hand13.push(this.deck.pop());
        }
        return hand13;
    }

    deal14(){
        for (let i=0;i<5;i++){
            hand14.push(this.deck.pop());
        }
        return hand14;
    }


}

let deck=new Deck;
deck.createDeck(suits,values);
deck.shuffle();
deck.deal1();
deck.deal2();
deck.deal3();
deck.deal4();
deck.deal5();
deck.deal6();
deck.deal7();
deck.deal8();
deck.deal9();
deck.deal10();
deck.deal11();
deck.deal12();
deck.deal13();
deck.deal14();


//show first hand,
function hideall(){
   

    document.getElementById("btn1").addEventListener("click",Onehand1Choose2C1);
    document.getElementById("btn2").addEventListener("click",Onehand1Choose2C2);
    document.getElementById("btn3").addEventListener("click",Onehand1Choose2C3);
    document.getElementById("btn4").addEventListener("click",Onehand1Choose2C4);
    document.getElementById("btn5").addEventListener("click",Onehand1Choose2C5);


    let GetHideBtn2=document.getElementById("getBtn2");
    GetHideBtn2.style.display="none";
    
    let GetHideBtn3=document.getElementById("getBtn3");
    GetHideBtn3.style.display="none";
    
    let GetHideBtn4=document.getElementById("getBtn4");
    GetHideBtn4.style.display="none";
    
    let GetHideBtn5=document.getElementById("getBtn5");
    GetHideBtn5.style.display="none";
    
    let GetHideBtn6=document.getElementById("getBtn6");
    GetHideBtn6.style.display="none";
    
    let GetHideBtn7=document.getElementById("getBtn7");
    GetHideBtn7.style.display="none";

    let GetHideBtn8=document.getElementById("getBtn8");
    GetHideBtn8.style.display="none";

    let GetHideBtn9=document.getElementById("getBtn9");
    GetHideBtn9.style.display="none";

    let GetHideBtn10=document.getElementById("getBtn10");
    GetHideBtn10.style.display="none";

    let GetHideBtn11=document.getElementById("getBtn11");
    GetHideBtn11.style.display="none";

    let GetHideBtn12=document.getElementById("getBtn12");
    GetHideBtn12.style.display="none";

    let GetHideBtn13=document.getElementById("getBtn13");
    GetHideBtn13.style.display="none";

    let GetHideBtn14=document.getElementById("getBtn14");
    GetHideBtn14.style.display="none";
    /////////
    let GetHideBtn2C=document.getElementById("getBtn2C");
    GetHideBtn2C.style.display="none";

    let GetHideBtn3C=document.getElementById("getBtn3C");
    GetHideBtn3C.style.display="none";

    let GetHideBtn4C=document.getElementById("getBtn4C");
    GetHideBtn4C.style.display="none";

    let GetHideBtn5C=document.getElementById("getBtn5C");
    GetHideBtn5C.style.display="none";

    let GetHideBtn6C=document.getElementById("getBtn6C");
    GetHideBtn6C.style.display="none";

    let GetHideBtn7C=document.getElementById("getBtn7C");
    GetHideBtn7C.style.display="none";

    let GetHideBtn8C=document.getElementById("getBtn8C");
    GetHideBtn8C.style.display="none";

    let GetHideBtn9C=document.getElementById("getBtn9C");
    GetHideBtn9C.style.display="none";

    let GetHideBtn10C=document.getElementById("getBtn10C");
    GetHideBtn10C.style.display="none";

    let GetHideBtn11C=document.getElementById("getBtn11C");
    GetHideBtn11C.style.display="none";

    let GetHideBtn12C=document.getElementById("getBtn12C");
    GetHideBtn12C.style.display="none";

    let GetHideBtn13C=document.getElementById("getBtn13C");
    GetHideBtn13C.style.display="none";

    let GetHideBtn14C=document.getElementById("getBtn14C");
    GetHideBtn14C.style.display="none";

    let GetHideBtn15C=document.getElementById("getBtn15C");
    GetHideBtn15C.style.display="none";

    let hideGetEval=document.getElementById("confirmButton");
    hideGetEval.style.display="none";

   // let hideGetEvalChoice=document.getElementById("confirmChoices");
   // hideGetEvalChoice.style.display="none";

    let makeSwitch1=document.getElementById("makeSwitch");
    makeSwitch1.style.display="none";

    let reset1=document.getElementById("reset");
    reset1.style.display="none";

    let scoreHideLabel=document.getElementById("scoreLabel");
    scoreHideLabel.style.display="none";

    let scoreHide=document.getElementById("score");
    scoreHide.style.display="none";

    //let eval=document.getElementById("evaluation");
    //eval.style.display="none";

    

    let FE1=document.getElementById("FinalEvaluation1");
    FE1.style.display="none";
    
    let FE2=document.getElementById("FinalEvaluation2");
    FE2.style.display="none";

    let FE3=document.getElementById("FinalEvaluation3");
    FE3.style.display="none";

    let FE4=document.getElementById("FinalEvaluation4");
    FE4.style.display="none";

    let FE5=document.getElementById("FinalEvaluation5");
    FE5.style.display="none";

    //let E3=document.getElementById("3Evaluation");
    //E3.style.display="none";

    let Bonuses=document.getElementById("BonusEvaluation");
    Bonuses.style.display="none";

    let AddUp=document.getElementById("AddItUp");
    AddUp.style.display="none";

    //FinalEvaluation1

    document.getElementById("round");
    let roundCounter=document.createElement("p");
    round.appendChild(roundCounter);
    roundCounter.innerHTML="This is Hand 1";
    roundCounter.setAttribute("style","font-size: 50px");
    roundCounter.style.textAlign="right";
    roundCounter.style.color="white";

    document.getElementById("click1").addEventListener("click", getValue1);
    document.getElementById("click2").addEventListener("click", getValue2);
    document.getElementById("click3").addEventListener("click", getValue3);
    document.getElementById("click4").addEventListener("click", getValue4);
    document.getElementById("click5").addEventListener("click", getValue5);
    document.getElementById("click6").addEventListener("click", getValue6);
    document.getElementById("click7").addEventListener("click", getValue7);
    document.getElementById("click8").addEventListener("click", getValue8);
    document.getElementById("click9").addEventListener("click", getValue9);
    document.getElementById("click10").addEventListener("click", getValue10);
    document.getElementById("click11").addEventListener("click", getValue11);
    document.getElementById("click12").addEventListener("click", getValue12);
    document.getElementById("click13").addEventListener("click", getValue13);
    document.getElementById("click14").addEventListener("click", getValue14);
    document.getElementById("click15").addEventListener("click", getValue15);
    document.getElementById("click16").addEventListener("click", getValue16);
    document.getElementById("click17").addEventListener("click", getValue17);
    document.getElementById("click18").addEventListener("click", getValue18);
    document.getElementById("click19").addEventListener("click", getValue19);
    document.getElementById("click20").addEventListener("click", getValue20);
    document.getElementById("click21").addEventListener("click", getValue21);
    document.getElementById("click22").addEventListener("click", getValue22);
    document.getElementById("click23").addEventListener("click", getValue23);
    document.getElementById("click24").addEventListener("click", getValue24);
    document.getElementById("click25").addEventListener("click", getValue25);
    document.getElementById("click26").addEventListener("click", getValue26);
    document.getElementById("click27").addEventListener("click", getValue27);
    document.getElementById("click28").addEventListener("click", getValue28);







}

window.onload=hideall();


function showHand1 () {
    for (i=0; i<hand1.length; ++i) {
        document.getElementById("handAnchor");
        let h1c1=document.createElement("img");

        h1c1.src= `cardGameImages/${hand1[i].suit}${hand1[i].value}.png`;
        handAnchor.appendChild(h1c1);
        let blankSpace=document.createElement("img");
        blankSpace.src="cardGameImages/padding.png";
        handAnchor.appendChild(blankSpace);
    }
};


//pick 2 and add to collection

function Onehand1Choose2C1() {
    if(collection1.length<1){
    collection1.push(hand1[0]);
    collection.push(hand1[0]);
    document.getElementById("collectionAnchor1");
    let ah1c1=document.createElement("img");
    ah1c1.src= `cardGameImages/${hand1[0].suit}${hand1[0].value}.png`;
    collectionAnchor1.appendChild(ah1c1);
    ah1c1.setAttribute("style","width:180px;");
    ah1c1.setAttribute("style","height:240px;");
    ah1c1.setAttribute("style","padding:10px");
        document.getElementById("btn1").removeEventListener("click",Onehand1Choose2C1);
            let GetHideBtn1=document.getElementById("getBtn1");
            GetHideBtn1.style.display="none";
            let GetHideBtn2C=document.getElementById("getBtn2C");
            GetHideBtn2C.style.display="inline-block";
            
    } else if (collection1.length<2){
                collection1.push(hand1[0]);
                collection.push(hand1[0]);
                document.getElementById("collectionAnchor2");
                let ah1c1=document.createElement("img");
                ah1c1.src= `cardGameImages/${hand1[0].suit}${hand1[0].value}.png`;
                collectionAnchor2.appendChild(ah1c1);
                ah1c1.setAttribute("style","width:180px;");
                ah1c1.setAttribute("style","height:240px;");
                ah1c1.setAttribute("style","padding:10px");
                    document.getElementById("btn1").removeEventListener("click",Onehand1Choose2C1);
                        let GetHideBtn1=document.getElementById("getBtn1");
                        GetHideBtn1.style.display="none";
                        let GetHideBtn2C=document.getElementById("getBtn2C");
                        GetHideBtn2C.style.display="inline-block";

    } else{
  
    }  
};

function Onehand1Choose2C2() {
    if(collection1.length<1){
    collection1.push(hand1[1]);
    collection.push(hand1[1]);
    document.getElementById("collectionAnchor1");
    let ah1c2=document.createElement("img");
    ah1c2.src= `cardGameImages/${hand1[1].suit}${hand1[1].value}.png`;
    collectionAnchor1.appendChild(ah1c2);
    ah1c2.setAttribute("style","width:180px;");
    ah1c2.setAttribute("style","height:240px;");
    ah1c2.setAttribute("style","padding:10px");
        document.getElementById("btn2").removeEventListener("click",Onehand1Choose2C2);
            let GetHideBtn1=document.getElementById("getBtn1");
            GetHideBtn1.style.display="none";
            let GetHideBtn2C=document.getElementById("getBtn2C");
            GetHideBtn2C.style.display="inline-block";
            
        } else if (collection1.length<2){
            collection1.push(hand1[1]);
            collection.push(hand1[1]);
            document.getElementById("collectionAnchor2");
            let ah1c1=document.createElement("img");
            ah1c1.src= `cardGameImages/${hand1[1].suit}${hand1[1].value}.png`;
            collectionAnchor2.appendChild(ah1c1);
            ah1c1.setAttribute("style","width:180px;");
            ah1c1.setAttribute("style","height:240px;");
            ah1c1.setAttribute("style","padding:10px");
                document.getElementById("btn1").removeEventListener("click",Onehand1Choose2C1);
                    let GetHideBtn1=document.getElementById("getBtn1");
                    GetHideBtn1.style.display="none";
                    let GetHideBtn2C=document.getElementById("getBtn2C");
                    GetHideBtn2C.style.display="inline-block";

} else {
} 
};

function Onehand1Choose2C3() {
    if(collection1.length<1){
    collection1.push(hand1[2]);
    collection.push(hand1[2]);

    document.getElementById("collectionAnchor1");
    let ah1c3=document.createElement("img");
    ah1c3.src= `cardGameImages/${hand1[2].suit}${hand1[2].value}.png`;
    collectionAnchor1.appendChild(ah1c3);
    ah1c3.setAttribute("style","width:180px;");
    ah1c3.setAttribute("style","height:240px;");
    ah1c3.setAttribute("style","padding:10px");
        document.getElementById("btn3").removeEventListener("click",Onehand1Choose2C3);
            let GetHideBtn1=document.getElementById("getBtn1");
            GetHideBtn1.style.display="none";
            let GetHideBtn2C=document.getElementById("getBtn2C");
            GetHideBtn2C.style.display="inline-block";

        } else if (collection1.length<2){
            collection1.push(hand1[2]);
            collection.push(hand1[2]);

            document.getElementById("collectionAnchor2");
            let ah1c1=document.createElement("img");
            ah1c1.src= `cardGameImages/${hand1[2].suit}${hand1[2].value}.png`;
            collectionAnchor2.appendChild(ah1c1);
            ah1c1.setAttribute("style","width:180px;");
            ah1c1.setAttribute("style","height:240px;");
            ah1c1.setAttribute("style","padding:10px");
                document.getElementById("btn1").removeEventListener("click",Onehand1Choose2C1);
                    let GetHideBtn1=document.getElementById("getBtn1");
                    GetHideBtn1.style.display="none";
                    let GetHideBtn2C=document.getElementById("getBtn2C");
                    GetHideBtn2C.style.display="inline-block";

} else {
} 
};

function Onehand1Choose2C4() {
    if(collection1.length<1){
    collection1.push(hand1[3]);
    collection.push(hand1[3]);

    document.getElementById("collectionAnchor1");
    let ah1c4=document.createElement("img");
    ah1c4.src= `cardGameImages/${hand1[3].suit}${hand1[3].value}.png`;
    collectionAnchor1.appendChild(ah1c4);
    ah1c4.setAttribute("style","width:180px;");
    ah1c4.setAttribute("style","height:240px;");
    ah1c4.setAttribute("style","padding:10px");
        document.getElementById("btn4").removeEventListener("click",Onehand1Choose2C4);
            let GetHideBtn1=document.getElementById("getBtn1");
            GetHideBtn1.style.display="none";
            let GetHideBtn2C=document.getElementById("getBtn2C");
            GetHideBtn2C.style.display="inline-block";

        } else if (collection1.length<2){
            collection1.push(hand1[3]);
            collection.push(hand1[3]);

            document.getElementById("collectionAnchor2");
            let ah1c1=document.createElement("img");
            ah1c1.src= `cardGameImages/${hand1[3].suit}${hand1[3].value}.png`;
            collectionAnchor2.appendChild(ah1c1);
            ah1c1.setAttribute("style","width:180px;");
            ah1c1.setAttribute("style","height:240px;");
            ah1c1.setAttribute("style","padding:10px");
                document.getElementById("btn1").removeEventListener("click",Onehand1Choose2C1);
                    let GetHideBtn1=document.getElementById("getBtn1");
                    GetHideBtn1.style.display="none";
                    let GetHideBtn2C=document.getElementById("getBtn2C");
                    GetHideBtn2C.style.display="inline-block";

} else {
} 
};

function Onehand1Choose2C5() {
    if(collection1.length<1){
    collection1.push(hand1[4]);
    collection.push(hand1[4]);

    document.getElementById("collectionAnchor1");
    let ah1c5=document.createElement("img");
    ah1c5.src= `cardGameImages/${hand1[4].suit}${hand1[4].value}.png`;
    collectionAnchor1.appendChild(ah1c5);
    ah1c5.setAttribute("style","width:180px;");
    ah1c5.setAttribute("style","height:240px;");
    ah1c5.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Onehand1Choose2C5);
            let GetHideBtn1=document.getElementById("getBtn1");
            GetHideBtn1.style.display="none";
            let GetHideBtn2C=document.getElementById("getBtn2C");
            GetHideBtn2C.style.display="inline-block";

        } else if (collection1.length<2){
            collection1.push(hand1[4]);
            collection.push(hand1[4]);

            document.getElementById("collectionAnchor2");
            let ah1c1=document.createElement("img");
            ah1c1.src= `cardGameImages/${hand1[4].suit}${hand1[4].value}.png`;
            collectionAnchor2.appendChild(ah1c1);
            ah1c1.setAttribute("style","width:180px;");
            ah1c1.setAttribute("style","height:240px;");
            ah1c1.setAttribute("style","padding:10px");
                document.getElementById("btn1").removeEventListener("click",Onehand1Choose2C1);
                    let GetHideBtn1=document.getElementById("getBtn1");
                    GetHideBtn1.style.display="none";
                    let GetHideBtn2C=document.getElementById("getBtn2C");
                    GetHideBtn2C.style.display="inline-block";

    } else {
    } 
};

//clear hand1 function and choose 2 new buttons
function Twohand2Choose2C1() {
    if(collection1.length<3){
    collection1.push(hand2[0]);
    collection.push(hand2[0]);

    document.getElementById("collectionAnchor3");
    let ah1c1=document.createElement("img");
    ah1c1.src= `cardGameImages/${hand2[0].suit}${hand2[0].value}.png`;
    collectionAnchor3.appendChild(ah1c1);
    ah1c1.setAttribute("style","width:180px;");
    ah1c1.setAttribute("style","height:240px;");
    ah1c1.setAttribute("style","padding:10px");
        document.getElementById("btn1").removeEventListener("click",Twohand2Choose2C1);
            let GetHideBtn2R=document.getElementById("getBtn2");
            GetHideBtn2R.style.display="none";
            let GetHideBtn3C=document.getElementById("getBtn3C");
            GetHideBtn3C.style.display="inline-block";
} else if (collection1.length<4){
    collection1.push(hand2[0]);
    collection.push(hand2[0]);

    document.getElementById("collectionAnchor4");
    let ah1c1=document.createElement("img");
    ah1c1.src= `cardGameImages/${hand1[0].suit}${hand1[0].value}.png`;
    collectionAnchor4.appendChild(ah1c1);
    ah1c1.setAttribute("style","width:180px;");
    ah1c1.setAttribute("style","height:240px;");
    ah1c1.setAttribute("style","padding:10px");
        document.getElementById("btn1").removeEventListener("click",Onehand1Choose2C1);
            let GetHideBtn2=document.getElementById("getBtn2");
            GetHideBtn2.style.display="none";
            let GetHideBtn3C=document.getElementById("getBtn3C");
            GetHideBtn3C.style.display="inline-block";
    } else {
    } 
};

function Twohand2Choose2C2() {
    if(collection1.length<3){
    collection1.push(hand2[1]);
    collection.push(hand2[1]);

    document.getElementById("collectionAnchor3");
    let ah1c2=document.createElement("img");
    ah1c2.src= `cardGameImages/${hand2[1].suit}${hand2[1].value}.png`;
    collectionAnchor3.appendChild(ah1c2);
    ah1c2.setAttribute("style","width:180px;");
    ah1c2.setAttribute("style","height:240px;");
    ah1c2.setAttribute("style","padding:10px");
        document.getElementById("btn2").removeEventListener("click",Twohand2Choose2C2);
            let GetHideBtn2R=document.getElementById("getBtn2");
            GetHideBtn2R.style.display="none";
            let GetHideBtn3C=document.getElementById("getBtn3C");
            GetHideBtn3C.style.display="inline-block";
} else if (collection1.length<4){
    collection1.push(hand2[1]);
    collection.push(hand2[1]);

    document.getElementById("collectionAnchor4");
    let ah1c1=document.createElement("img");
    ah1c1.src= `cardGameImages/${hand2[1].suit}${hand2[1].value}.png`;
    collectionAnchor4.appendChild(ah1c1);
    ah1c1.setAttribute("style","width:180px;");
    ah1c1.setAttribute("style","height:240px;");
    ah1c1.setAttribute("style","padding:10px");
        document.getElementById("btn1").removeEventListener("click",Onehand1Choose2C1);
            let GetHideBtn2=document.getElementById("getBtn2");
            GetHideBtn2.style.display="none";
            let GetHideBtn3C=document.getElementById("getBtn3C")
            GetHideBtn3C.style.display="inline-block";
    } else {
    } 
};

function Twohand2Choose2C3() {
    if(collection1.length<3){
    collection1.push(hand2[2]);
    collection.push(hand2[2]);

    document.getElementById("collectionAnchor3");
    let ah1c3=document.createElement("img");
    ah1c3.src= `cardGameImages/${hand2[2].suit}${hand2[2].value}.png`;
    collectionAnchor3.appendChild(ah1c3);
    ah1c3.setAttribute("style","width:180px;");
    ah1c3.setAttribute("style","height:240px;");
    ah1c3.setAttribute("style","padding:10px");
        document.getElementById("btn3").removeEventListener("click",Twohand2Choose2C3);
            let GetHideBtn2R=document.getElementById("getBtn2");
            GetHideBtn2R.style.display="none";
            let GetHideBtn3C=document.getElementById("getBtn3C");
            GetHideBtn3C.style.display="inline-block";
} else if (collection1.length<4){
    collection1.push(hand2[2]);
    collection.push(hand2[2]);

    document.getElementById("collectionAnchor4");
    let ah1c1=document.createElement("img");
    ah1c1.src= `cardGameImages/${hand2[2].suit}${hand2[2].value}.png`;
    collectionAnchor4.appendChild(ah1c1);
    ah1c1.setAttribute("style","width:180px;");
    ah1c1.setAttribute("style","height:240px;");
    ah1c1.setAttribute("style","padding:10px");
        document.getElementById("btn1").removeEventListener("click",Onehand1Choose2C1);
            let GetHideBtn2=document.getElementById("getBtn2");
            GetHideBtn2.style.display="none";
            let GetHideBtn3C=document.getElementById("getBtn3C");
            GetHideBtn3C.style.display="inline-block";
    
} else {
} 
};

function Twohand2Choose2C4() {
    if(collection1.length<3){
    collection1.push(hand2[3]);
    collection.push(hand2[3]);

    document.getElementById("collectionAnchor3");
    let ah1c4=document.createElement("img");
    ah1c4.src= `cardGameImages/${hand2[3].suit}${hand2[3].value}.png`;
    collectionAnchor3.appendChild(ah1c4);
    ah1c4.setAttribute("style","width:180px;");
    ah1c4.setAttribute("style","height:240px;");
    ah1c4.setAttribute("style","padding:10px");
        document.getElementById("btn4").removeEventListener("click",Twohand2Choose2C4);
            let GetHideBtn2R=document.getElementById("getBtn2");
            GetHideBtn2R.style.display="none";
            let GetHideBtn3C=document.getElementById("getBtn3C");
    GetHideBtn3C.style.display="inline-block";
} else if (collection1.length<4){
    collection1.push(hand2[3]);
    collection.push(hand2[3]);

    document.getElementById("collectionAnchor4");
    let ah1c1=document.createElement("img");
    ah1c1.src= `cardGameImages/${hand2[3].suit}${hand2[3].value}.png`;
    collectionAnchor4.appendChild(ah1c1);
    ah1c1.setAttribute("style","width:180px;");
    ah1c1.setAttribute("style","height:240px;");
    ah1c1.setAttribute("style","padding:10px");
        document.getElementById("btn1").removeEventListener("click",Onehand1Choose2C1);
            let GetHideBtn2=document.getElementById("getBtn2");
            GetHideBtn2.style.display="none";
            let GetHideBtn3C=document.getElementById("getBtn3C");
            GetHideBtn3C.style.display="inline-block";

} else {
} 
};

function Twohand2Choose2C5() {
    if(collection1.length<3){
    collection1.push(hand2[4]);
    collection.push(hand2[4]);

    document.getElementById("collectionAnchor3");
    let ah1c5=document.createElement("img");
    ah1c5.src= `cardGameImages/${hand2[4].suit}${hand2[4].value}.png`;
    collectionAnchor3.appendChild(ah1c5);
    ah1c5.setAttribute("style","width:180px;");
    ah1c5.setAttribute("style","height:240px;");
    ah1c5.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Twohand2Choose2C5);
            let GetHideBtn2R=document.getElementById("getBtn2");
            GetHideBtn2R.style.display="none";
            let GetHideBtn3C=document.getElementById("getBtn3C");
            GetHideBtn3C.style.display="inline-block";
} else if (collection1.length<4){
    collection1.push(hand2[4]);
    collection.push(hand2[4]);

    document.getElementById("collectionAnchor4");
    let ah1c1=document.createElement("img");
    ah1c1.src= `cardGameImages/${hand2[4].suit}${hand2[4].value}.png`;
    collectionAnchor4.appendChild(ah1c1);
    ah1c1.setAttribute("style","width:180px;");
    ah1c1.setAttribute("style","height:240px;");
    ah1c1.setAttribute("style","padding:10px");
        document.getElementById("btn1").removeEventListener("click",Onehand1Choose2C1);
            let GetHideBtn2=document.getElementById("getBtn2");
            GetHideBtn2.style.display="none";
            let GetHideBtn3C=document.getElementById("getBtn3C");
            GetHideBtn3C.style.display="inline-block";
} else {
} 
};

function clearHand1(){
    let anchor=document.getElementById("handAnchor");
    while(anchor.firstChild){
        anchor.removeChild(anchor.firstChild);
    }
    

    let GetHideBtn2C2=document.getElementById("getBtn2C");
    GetHideBtn2C2.style.display="none";
    let GetHideBtn1=document.getElementById("getBtn2");
    GetHideBtn1.style.display="inline-block";
    let roundCounter=document.getElementById("round");
    roundCounter.innerHTML="This is Hand 2";
    roundCounter.setAttribute("style","font-size: 50px");
    roundCounter.style.textAlign="right";
    roundCounter.style.color="white";
}

//Get hand 2

function showHand2 () {
    for (i=0; i<hand1.length; ++i) {
        document.getElementById("handAnchor");
        let h2c1=document.createElement("img");
        h2c1.setAttribute("style","padding:50px");
        h2c1.setAttribute("style","width:180px;");
        h2c1.setAttribute("style","height:240px;");
        h2c1.src= `cardGameImages/${hand2[i].suit}${hand2[i].value}.png`;
        handAnchor.appendChild(h2c1);
        let blankSpace=document.createElement("img");
        blankSpace.src="cardGameImages/padding.png";
        handAnchor.appendChild(blankSpace);
    }
    
    document.getElementById("round").innerHTML="This is Hand 2";
    round.setAttribute("style","font-size: 50px");
    round.style.textAlign="right";
    round.style.color="white";

    document.getElementById("btn1").addEventListener("click",Twohand2Choose2C1);
    document.getElementById("btn2").addEventListener("click",Twohand2Choose2C2);
    document.getElementById("btn3").addEventListener("click",Twohand2Choose2C3);
    document.getElementById("btn4").addEventListener("click",Twohand2Choose2C4);
    document.getElementById("btn5").addEventListener("click",Twohand2Choose2C5);

};


//clear hand2. get hand3 buttons.

function clearHand2(){
    let anchor2=document.getElementById("handAnchor");
    while(anchor2.firstChild){
        anchor2.removeChild(anchor2.firstChild);
    }
    
    document.getElementById("round").innerHTML="This is Hand 3";
    round.setAttribute("style","font-size: 50px");
    round.style.textAlign="right";
    round.style.color="white"; 

    let GetHideBtn2C=document.getElementById("getBtn3C");
    GetHideBtn2C.style.display="none";
    let GetHideBtn3=document.getElementById("getBtn3");
    GetHideBtn3.style.display="inline-block";



};

// get hand 3

function showHand3 () {
    for (i=0; i<hand3.length; ++i) {
        document.getElementById("handAnchor");
        let h3c1=document.createElement("img");
        h3c1.setAttribute("style","padding:50px");
        h3c1.setAttribute("style","width:180px;");
        h3c1.setAttribute("style","height:240px;");
        h3c1.src= `cardGameImages/${hand3[i].suit}${hand3[i].value}.png`;
        handAnchor.appendChild(h3c1);
        let blankSpace=document.createElement("img");
        blankSpace.src="cardGameImages/padding.png";
        handAnchor.appendChild(blankSpace);
    }

    document.getElementById("round").innerHTML="This is Hand 3";
    round.setAttribute("style","font-size: 50px");
    round.style.textAlign="right";
    round.style.color="white";

    document.getElementById("btn1").addEventListener("click",Threehand3Choose2C1);
    document.getElementById("btn2").addEventListener("click",Threehand3Choose2C2);
    document.getElementById("btn3").addEventListener("click",Threehand3Choose2C3);
    document.getElementById("btn4").addEventListener("click",Threehand3Choose2C4);
    document.getElementById("btn5").addEventListener("click",Threehand3Choose2C5);
};

// hand 3 choose 2

function Threehand3Choose2C1() {
    if(collection1.length<5){
    collection1.push(hand3[0]);
    collection.push(hand3[0]);

    document.getElementById("collectionAnchor5");
    let ah3c1=document.createElement("img");
    ah3c1.src= `cardGameImages/${hand3[0].suit}${hand3[0].value}.png`;
    collectionAnchor5.appendChild(ah3c1);
    ah3c1.setAttribute("style","width:180px;");
    ah3c1.setAttribute("style","height:240px;");
    ah3c1.setAttribute("style","padding:10px");
        document.getElementById("btn1").removeEventListener("click",Threehand3Choose2C1);
        let GetHideBtn3R=document.getElementById("getBtn3");
    GetHideBtn3R.style.display="none";
    let GetHideBtn4C2=document.getElementById("getBtn4C");
    GetHideBtn4C2.style.display="inline-block";
        
    } else if(collection2.length<1){
    collection2.push(hand3[0]);
    collection.push(hand3[0]);

    document.getElementById("collectionAnchor6");
    let ah3c1=document.createElement("img");
    ah3c1.src= `cardGameImages/${hand3[0].suit}${hand3[0].value}.png`;
    collectionAnchor6.appendChild(ah3c1);
    ah3c1.setAttribute("style","width:180px;");
    ah3c1.setAttribute("style","height:240px;");
    ah3c1.setAttribute("style","padding:10px");
        document.getElementById("btn1").removeEventListener("click",Threehand3Choose2C1);
        let GetHideBtn3R=document.getElementById("getBtn3");
    GetHideBtn3R.style.display="none";
    let GetHideBtn4C2=document.getElementById("getBtn4C");
    GetHideBtn4C2.style.display="inline-block";

} else {
} 
};

function Threehand3Choose2C2() {
    if(collection1.length<5){

    collection1.push(hand3[1]);
    collection.push(hand3[1]);

    document.getElementById("collectionAnchor5");
    let ah3c2=document.createElement("img");
    ah3c2.src= `cardGameImages/${hand3[1].suit}${hand3[1].value}.png`;
    collectionAnchor5.appendChild(ah3c2);
    ah3c2.setAttribute("style","width:180px;");
    ah3c2.setAttribute("style","height:240px;");
    ah3c2.setAttribute("style","padding:10px");
        document.getElementById("btn2").removeEventListener("click",Threehand3Choose2C2);
        let GetHideBtn3R=document.getElementById("getBtn3");
    GetHideBtn3R.style.display="none";
    let GetHideBtn4C2=document.getElementById("getBtn4C");
    GetHideBtn4C2.style.display="inline-block";

} else if(collection2.length<1){
    collection2.push(hand3[1]);
    collection.push(hand3[1]);

    document.getElementById("collectionAnchor6");
    let ah3c1=document.createElement("img");
    ah3c1.src= `cardGameImages/${hand3[1].suit}${hand3[1].value}.png`;
    collectionAnchor6.appendChild(ah3c1);
    ah3c1.setAttribute("style","width:180px;");
    ah3c1.setAttribute("style","height:240px;");
    ah3c1.setAttribute("style","padding:10px");
        document.getElementById("btn2").removeEventListener("click",Threehand3Choose2C2);
        let GetHideBtn3R=document.getElementById("getBtn3");
    GetHideBtn3R.style.display="none";
    let GetHideBtn4C2=document.getElementById("getBtn4C");
    GetHideBtn4C2.style.display="inline-block";

} else {
} 
};

function Threehand3Choose2C3() {
    if(collection1.length<5){

    collection1.push(hand3[2]);
    collection.push(hand3[2]);

    document.getElementById("collectionAnchor5");
    let ah3c3=document.createElement("img");
    ah3c3.src= `cardGameImages/${hand3[2].suit}${hand3[2].value}.png`;
    collectionAnchor5.appendChild(ah3c3);
    ah3c3.setAttribute("style","width:180px;");
    ah3c3.setAttribute("style","height:240px;");
    ah3c3.setAttribute("style","padding:10px");
        document.getElementById("btn3").removeEventListener("click",Threehand3Choose2C3);
        let GetHideBtn3R=document.getElementById("getBtn3");
    GetHideBtn3R.style.display="none";
    let GetHideBtn4C2=document.getElementById("getBtn4C");
    GetHideBtn4C2.style.display="inline-block";

} else if(collection2.length<1){
    collection2.push(hand3[2]);
    collection.push(hand3[2]);

    document.getElementById("collectionAnchor6");
    let ah3c1=document.createElement("img");
    ah3c1.src= `cardGameImages/${hand3[2].suit}${hand3[2].value}.png`;
    collectionAnchor6.appendChild(ah3c1);
    ah3c1.setAttribute("style","width:180px;");
    ah3c1.setAttribute("style","height:240px;");
    ah3c1.setAttribute("style","padding:10px");
        document.getElementById("btn3").removeEventListener("click",Threehand3Choose2C3);
            let GetHideBtn3R=document.getElementById("getBtn3");
            GetHideBtn3R.style.display="none";
            let GetHideBtn4C2=document.getElementById("getBtn4C");
            GetHideBtn4C2.style.display="inline-block";

} else {
} 

};

function Threehand3Choose2C4() {
    if(collection1.length<5){

    collection1.push(hand3[3]);
    collection.push(hand3[3]);

    document.getElementById("collectionAnchor5");
    let ah3c4=document.createElement("img");
    ah3c4.src= `cardGameImages/${hand3[3].suit}${hand3[3].value}.png`;
    collectionAnchor5.appendChild(ah3c4);
    ah3c4.setAttribute("style","width:180px;");
    ah3c4.setAttribute("style","height:240px;");
    ah3c4.setAttribute("style","padding:10px");
        document.getElementById("btn4").removeEventListener("click",Threehand3Choose2C4);
            let GetHideBtn3R=document.getElementById("getBtn3");
        GetHideBtn3R.style.display="none";
        let GetHideBtn4C2=document.getElementById("getBtn4C");
        GetHideBtn4C2.style.display="inline-block";

} else if(collection2.length<1){
    collection2.push(hand3[3]);
    collection.push(hand3[3]);

    document.getElementById("collectionAnchor6");
    let ah3c1=document.createElement("img");
    ah3c1.src= `cardGameImages/${hand3[3].suit}${hand3[3].value}.png`;
    collectionAnchor6.appendChild(ah3c1);
    ah3c1.setAttribute("style","width:180px;");
    ah3c1.setAttribute("style","height:240px;");
    ah3c1.setAttribute("style","padding:10px");
        document.getElementById("btn4").removeEventListener("click",Threehand3Choose2C4);
        let GetHideBtn3R=document.getElementById("getBtn3");
    GetHideBtn3R.style.display="none";
    let GetHideBtn4C2=document.getElementById("getBtn4C");
    GetHideBtn4C2.style.display="inline-block";

} else {
} 
};

function Threehand3Choose2C5() {
    if(collection1.length<5){

    collection1.push(hand3[4]);
    collection.push(hand3[4]);

    document.getElementById("collectionAnchor5");
    let ah3c5=document.createElement("img");
    ah3c5.src= `cardGameImages/${hand3[4].suit}${hand3[4].value}.png`;
    collectionAnchor5.appendChild(ah3c5);
    ah3c5.setAttribute("style","width:180px;");
    ah3c5.setAttribute("style","height:240px;");
    ah3c5.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Threehand3Choose2C5);
        let GetHideBtn3R=document.getElementById("getBtn3");
    GetHideBtn3R.style.display="none";
    let GetHideBtn4C2=document.getElementById("getBtn4C");
    GetHideBtn4C2.style.display="inline-block";

} else if(collection2.length<1){
    collection2.push(hand3[4]);
    collection.push(hand3[4]);

    document.getElementById("collectionAnchor6");
    let ah3c1=document.createElement("img");
    ah3c1.src= `cardGameImages/${hand3[4].suit}${hand3[4].value}.png`;
    collectionAnchor6.appendChild(ah3c1);
    ah3c1.setAttribute("style","width:180px;");
    ah3c1.setAttribute("style","height:240px;");
    ah3c1.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Threehand3Choose2C5);
        let GetHideBtn3R=document.getElementById("getBtn3");
    GetHideBtn3R.style.display="none";
    let GetHideBtn4C2=document.getElementById("getBtn4C");
    GetHideBtn4C2.style.display="inline-block";
} else {
} 
};

// clear hand3. get hand4 buttons.
function clearHand3(){
    let anchor3=document.getElementById("handAnchor");
    while(anchor3.firstChild){
        anchor3.removeChild(anchor3.firstChild);
    }
    

    let GetHideBtn4C=document.getElementById("getBtn4C");
    GetHideBtn4C.style.display="none";
    let GetHideBtn4=document.getElementById("getBtn4");
    GetHideBtn4.style.display="inline-block";
    let roundCounter=document.getElementById("round");

    roundCounter.innerHTML="This is Hand 4";
    roundCounter.setAttribute("style","font-size: 50px");
    roundCounter.style.textAlign="right";
    roundCounter.style.color="white";
};

// get hand 4
function showHand4 () {
    for (i=0; i<hand4.length; ++i) {
        document.getElementById("handAnchor");
        let h4c1=document.createElement("img");
        h4c1.setAttribute("style","padding:50px");
        h4c1.setAttribute("style","width:180px;");
        h4c1.setAttribute("style","height:240px;");
        h4c1.src= `cardGameImages/${hand4[i].suit}${hand4[i].value}.png`;
        handAnchor.appendChild(h4c1);
        let blankSpace=document.createElement("img");
        blankSpace.src="cardGameImages/padding.png";
        handAnchor.appendChild(blankSpace);
    }

    document.getElementById("round").innerHTML="This is Hand 4";
    round.setAttribute("style","font-size: 50px");
    round.style.textAlign="right";
    round.style.color="white";

    document.getElementById("btn1").addEventListener("click",Fourhand4Choose2C1);
    document.getElementById("btn2").addEventListener("click",Fourhand4Choose2C2);
    document.getElementById("btn3").addEventListener("click",Fourhand4Choose2C3);
    document.getElementById("btn4").addEventListener("click",Fourhand4Choose2C4);
    document.getElementById("btn5").addEventListener("click",Fourhand4Choose2C5);
};

// hand 4 choose 2

function Fourhand4Choose2C1() {
    if(collection2.length<2){
        collection2.push(hand4[0]);
        collection.push(hand4[0]);

    document.getElementById("collectionAnchor7");
    let ah4c1=document.createElement("img");
    ah4c1.src= `cardGameImages/${hand4[0].suit}${hand4[0].value}.png`;
    collectionAnchor7.appendChild(ah4c1);
    ah4c1.setAttribute("style","width:180px;");
    ah4c1.setAttribute("style","height:240px;");
    ah4c1.setAttribute("style","padding:10px");
        document.getElementById("btn1").removeEventListener("click",Fourhand4Choose2C1);
            let GetHideBtn4R=document.getElementById("getBtn4");
            GetHideBtn4R.style.display="none";
            let GetHideBtn45C=document.getElementById("getBtn5C");
    GetHideBtn45C.style.display="inline-block";
} else if(collection2.length<3){
    collection2.push(hand4[0]);
    collection.push(hand4[0]);

    document.getElementById("collectionAnchor8");
    let ah3c1=document.createElement("img");
    ah3c1.src= `cardGameImages/${hand4[0].suit}${hand4[0].value}.png`;
    collectionAnchor8.appendChild(ah3c1);
    ah3c1.setAttribute("style","width:180px;");
    ah3c1.setAttribute("style","height:240px;");
    ah3c1.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Threehand3Choose2C5);
        let GetHideBtn4R=document.getElementById("getBtn4");
        GetHideBtn4R.style.display="none";
        let GetHideBtn45C=document.getElementById("getBtn5C");
GetHideBtn45C.style.display="inline-block";
} else {
} 
};


function Fourhand4Choose2C2() {
    if(collection2.length<2){

        collection2.push(hand4[1]);
        collection.push(hand4[1]);

    document.getElementById("collectionAnchor7");
    let ah4c2=document.createElement("img");
    ah4c2.src= `cardGameImages/${hand4[1].suit}${hand4[1].value}.png`;
    collectionAnchor7.appendChild(ah4c2);
    ah4c2.setAttribute("style","width:180px;");
    ah4c2.setAttribute("style","height:240px;");
    ah4c2.setAttribute("style","padding:10px");
        document.getElementById("btn2").removeEventListener("click",Fourhand4Choose2C2);
            let GetHideBtn4R=document.getElementById("getBtn4");
            GetHideBtn4R.style.display="none";
            let GetHideBtn45C=document.getElementById("getBtn5C");
            GetHideBtn45C.style.display="inline-block";

        } else if(collection2.length<3){
            collection2.push(hand4[1]);
            collection.push(hand4[1]);

            document.getElementById("collectionAnchor8");
            let ah3c1=document.createElement("img");
            ah3c1.src= `cardGameImages/${hand4[1].suit}${hand4[1].value}.png`;
            collectionAnchor8.appendChild(ah3c1);
            ah3c1.setAttribute("style","width:180px;");
            ah3c1.setAttribute("style","height:240px;");
            ah3c1.setAttribute("style","padding:10px");
                document.getElementById("btn5").removeEventListener("click",Threehand3Choose2C5);
                let GetHideBtn4R=document.getElementById("getBtn4");
                GetHideBtn4R.style.display="none";
                let GetHideBtn45C=document.getElementById("getBtn5C");
        GetHideBtn45C.style.display="inline-block";
} else {
} 
};

function Fourhand4Choose2C3() {
    if(collection2.length<2){
        collection2.push(hand4[2]);
        collection.push(hand4[2]);

        document.getElementById("collectionAnchor7");
        let ah4c3=document.createElement("img");
        ah4c3.src= `cardGameImages/${hand4[2].suit}${hand4[2].value}.png`;
        collectionAnchor7.appendChild(ah4c3);
        ah4c3.setAttribute("style","width:180px;");
        ah4c3.setAttribute("style","height:240px;");
        ah4c3.setAttribute("style","padding:10px");
            document.getElementById("btn3").removeEventListener("click",Fourhand4Choose2C3);
                let GetHideBtn4R=document.getElementById("getBtn4");
                GetHideBtn4R.style.display="none";
                let GetHideBtn45C=document.getElementById("getBtn5C");
                GetHideBtn45C.style.display="inline-block";
    
            } else if(collection2.length<3){
                collection2.push(hand4[2]);
                collection.push(hand4[2]);

                document.getElementById("collectionAnchor8");
                let ah3c1=document.createElement("img");
                ah3c1.src= `cardGameImages/${hand4[2].suit}${hand4[2].value}.png`;
                collectionAnchor8.appendChild(ah3c1);
                ah3c1.setAttribute("style","width:180px;");
                ah3c1.setAttribute("style","height:240px;");
                ah3c1.setAttribute("style","padding:10px");
                    document.getElementById("btn5").removeEventListener("click",Threehand3Choose2C5);
                    let GetHideBtn4R=document.getElementById("getBtn4");
                    GetHideBtn4R.style.display="none";
                    let GetHideBtn45C=document.getElementById("getBtn5C");
            GetHideBtn45C.style.display="inline-block";
        
    } else {
    } 
    };
    
function Fourhand4Choose2C4() {
    if(collection2.length<2){

        collection2.push(hand4[3]);
        collection.push(hand4[3]);

        document.getElementById("collectionAnchor7");
        let ah4c4=document.createElement("img");
        ah4c4.src= `cardGameImages/${hand4[3].suit}${hand4[3].value}.png`;
        collectionAnchor7.appendChild(ah4c4);
        ah4c4.setAttribute("style","width:180px;");
        ah4c4.setAttribute("style","height:240px;");
        ah4c4.setAttribute("style","padding:10px");
            document.getElementById("btn4").removeEventListener("click",Fourhand4Choose2C4);
                let GetHideBtn4R=document.getElementById("getBtn4");
                GetHideBtn4R.style.display="none";
                let GetHideBtn45C=document.getElementById("getBtn5C");
                GetHideBtn45C.style.display="inline-block";
    
            } else if(collection2.length<3){
                collection2.push(hand4[3]);
                collection.push(hand4[3]);

                document.getElementById("collectionAnchor8");
                let ah3c1=document.createElement("img");
                ah3c1.src= `cardGameImages/${hand4[3].suit}${hand4[3].value}.png`;
                collectionAnchor8.appendChild(ah3c1);
                ah3c1.setAttribute("style","width:180px;");
                ah3c1.setAttribute("style","height:240px;");
                ah3c1.setAttribute("style","padding:10px");
                    document.getElementById("btn5").removeEventListener("click",Threehand3Choose2C5);
                    let GetHideBtn4R=document.getElementById("getBtn4");
                    GetHideBtn4R.style.display="none";
                    let GetHideBtn45C=document.getElementById("getBtn5C");
            GetHideBtn45C.style.display="inline-block";
            
    } else {
    } 
    };

function Fourhand4Choose2C5() {
    if(collection2.length<2){

        collection2.push(hand4[4]);
        collection.push(hand4[4]);

        document.getElementById("collectionAnchor7");
        let ah4c5=document.createElement("img");
        ah4c5.src= `cardGameImages/${hand4[4].suit}${hand4[4].value}.png`;
        collectionAnchor7.appendChild(ah4c5);
        ah4c5.setAttribute("style","width:180px;");
        ah4c5.setAttribute("style","height:240px;");
        ah4c5.setAttribute("style","padding:10px");
            document.getElementById("btn5").removeEventListener("click",Fourhand4Choose2C5);
                let GetHideBtn4R=document.getElementById("getBtn4");
                GetHideBtn4R.style.display="none";
                let GetHideBtn45C=document.getElementById("getBtn5C");
                GetHideBtn45C.style.display="inline-block";
    
            } else if(collection2.length<3){
                collection2.push(hand4[4]);
                collection.push(hand4[4]);

                document.getElementById("collectionAnchor8");
                let ah4c52=document.createElement("img");
                ah4c52.src= `cardGameImages/${hand4[4].suit}${hand4[4].value}.png`;
                collectionAnchor8.appendChild(ah4c52);
                ah4c52.setAttribute("style","width:180px;");
                ah4c52.setAttribute("style","height:240px;");
                ah4c52.setAttribute("style","padding:10px");
                    document.getElementById("btn5").removeEventListener("click",Threehand3Choose2C5);
                    let GetHideBtn4R=document.getElementById("getBtn4");
                    GetHideBtn4R.style.display="none";
                    let GetHideBtn45C=document.getElementById("getBtn5C");
            GetHideBtn45C.style.display="inline-block";
    
    } else {
    } 
    };
// clear hand4. get hand5 buttons.
function clearHand4(){
    let anchor4=document.getElementById("handAnchor");
    while(anchor4.firstChild){
        anchor4.removeChild(anchor4.firstChild);
    }


    let GetHideBtn5C2=document.getElementById("getBtn5C");
    GetHideBtn5C2.style.display="none";
    let GetHideBtn5=document.getElementById("getBtn5");
    GetHideBtn5.style.display="inline-block";
    let roundCounter=document.getElementById("round");

    roundCounter.innerHTML="This is Hand 5";
    roundCounter.setAttribute("style","font-size: 50px");
    roundCounter.style.textAlign="right";
    roundCounter.style.color="white";
};
// get hand 5
function showHand5 () {
    for (i=0; i<hand5.length; ++i) {
        document.getElementById("handAnchor");
        let h5c1=document.createElement("img");
        h5c1.setAttribute("style","padding:50px");
        h5c1.setAttribute("style","width:180px;");
        h5c1.setAttribute("style","height:240px;");
        h5c1.src= `cardGameImages/${hand5[i].suit}${hand5[i].value}.png`;
        handAnchor.appendChild(h5c1);
        let blankSpace=document.createElement("img");
        blankSpace.src="cardGameImages/padding.png";
        handAnchor.appendChild(blankSpace);
    }

    document.getElementById("round").innerHTML="This is Hand 5";
    round.setAttribute("style","font-size: 50px");
    round.style.textAlign="right";
    round.style.color="white";

    document.getElementById("btn1").addEventListener("click",Fivehand5Choose2C1);
    document.getElementById("btn2").addEventListener("click",Fivehand5Choose2C2);
    document.getElementById("btn3").addEventListener("click",Fivehand5Choose2C3);
    document.getElementById("btn4").addEventListener("click",Fivehand5Choose2C4);
    document.getElementById("btn5").addEventListener("click",Fivehand5Choose2C5);
};


// hand 5 choose 2
function Fivehand5Choose2C1() {
    if(collection2.length<4){

    collection2.push(hand5[0]);
    collection.push(hand5[0]);

    document.getElementById("collectionAnchor9");
    let ah5c1=document.createElement("img");
    ah5c1.src= `cardGameImages/${hand5[0].suit}${hand5[0].value}.png`;
    collectionAnchor9.appendChild(ah5c1);
    ah5c1.setAttribute("style","width:180px;");
    ah5c1.setAttribute("style","height:240px;");
    ah5c1.setAttribute("style","padding:10px");
        document.getElementById("btn1").removeEventListener("click",Fivehand5Choose2C1);
            let GetHideBtn5R=document.getElementById("getBtn5");
            GetHideBtn5R.style.display="none";
            let GetHideBtn6C=document.getElementById("getBtn6C");
            GetHideBtn6C.style.display="inline-block";

        } else if(collection2.length<5){
            collection2.push(hand5[0]);
            collection.push(hand5[0]);

            document.getElementById("collectionAnchor10");
            let ah4c52=document.createElement("img");
            ah4c52.src= `cardGameImages/${hand5[0].suit}${hand5[0].value}.png`;
            collectionAnchor10.appendChild(ah4c52);
            ah4c52.setAttribute("style","width:180px;");
            ah4c52.setAttribute("style","height:240px;");
            ah4c52.setAttribute("style","padding:10px");
                document.getElementById("btn5").removeEventListener("click",Threehand3Choose2C5);
                let GetHideBtn5R=document.getElementById("getBtn5");
            GetHideBtn5R.style.display="none";
            let GetHideBtn6C=document.getElementById("getBtn6C");
            GetHideBtn6C.style.display="inline-block";
} else {
} 
};

function Fivehand5Choose2C2() {
    if(collection2.length<4){

    collection2.push(hand5[1]);
    collection.push(hand5[1]);

    document.getElementById("collectionAnchor9");
    let ah5c2=document.createElement("img");
    ah5c2.src= `cardGameImages/${hand5[1].suit}${hand5[1].value}.png`;
    collectionAnchor9.appendChild(ah5c2);
    ah5c2.setAttribute("style","width:180px;");
    ah5c2.setAttribute("style","height:240px;");
    ah5c2.setAttribute("style","padding:10px");
        document.getElementById("btn2").removeEventListener("click",Fivehand5Choose2C2);
            let GetHideBtn5R=document.getElementById("getBtn5");
            GetHideBtn5R.style.display="none";
            let GetHideBtn6C=document.getElementById("getBtn6C");
            GetHideBtn6C.style.display="inline-block";

        } else if(collection2.length<5){
            collection2.push(hand5[1]);
            collection.push(hand5[1]);

            document.getElementById("collectionAnchor10");
            let ah4c52=document.createElement("img");
            ah4c52.src= `cardGameImages/${hand5[1].suit}${hand5[1].value}.png`;
            collectionAnchor10.appendChild(ah4c52);
            ah4c52.setAttribute("style","width:180px;");
            ah4c52.setAttribute("style","height:240px;");
            ah4c52.setAttribute("style","padding:10px");
                document.getElementById("btn5").removeEventListener("click",Threehand3Choose2C5);
                let GetHideBtn5R=document.getElementById("getBtn5");
                GetHideBtn5R.style.display="none";
                let GetHideBtn6C=document.getElementById("getBtn6C");
                GetHideBtn6C.style.display="inline-block";

} else {
} 
};

function Fivehand5Choose2C3() {
    if(collection2.length<4){

    collection2.push(hand5[2]);
    collection.push(hand5[2]);

    document.getElementById("collectionAnchor9");
    let ah5c3=document.createElement("img");
    ah5c3.src= `cardGameImages/${hand5[2].suit}${hand5[2].value}.png`;
    collectionAnchor9.appendChild(ah5c3);
    ah5c3.setAttribute("style","width:180px;");
    ah5c3.setAttribute("style","height:240px;");
    ah5c3.setAttribute("style","padding:10px");
        document.getElementById("btn3").removeEventListener("click",Fivehand5Choose2C3);
        let GetHideBtn5R=document.getElementById("getBtn5");
        GetHideBtn5R.style.display="none";
        let GetHideBtn6C=document.getElementById("getBtn6C");
            GetHideBtn6C.style.display="inline-block";

        } else if(collection2.length<5){
            collection2.push(hand5[2]);
            collection.push(hand5[2]);

            document.getElementById("collectionAnchor10");
            let ah4c52=document.createElement("img");
            ah4c52.src= `cardGameImages/${hand5[2].suit}${hand5[2].value}.png`;
            collectionAnchor10.appendChild(ah4c52);
            ah4c52.setAttribute("style","width:180px;");
            ah4c52.setAttribute("style","height:240px;");
            ah4c52.setAttribute("style","padding:10px");
                document.getElementById("btn5").removeEventListener("click",Threehand3Choose2C5);
                let GetHideBtn5R=document.getElementById("getBtn5");
                GetHideBtn5R.style.display="none";
                let GetHideBtn6C=document.getElementById("getBtn6C");
                GetHideBtn6C.style.display="inline-block";
} else {
} 
};

function Fivehand5Choose2C4() {
    if(collection2.length<4){

    collection2.push(hand5[3]);
    collection.push(hand5[3]);

    document.getElementById("collectionAnchor9");
    let ah5c4=document.createElement("img");
    ah5c4.src= `cardGameImages/${hand5[3].suit}${hand5[3].value}.png`;
    collectionAnchor9.appendChild(ah5c4);
    ah5c4.setAttribute("style","width:180px;");
    ah5c4.setAttribute("style","height:240px;");
    ah5c4.setAttribute("style","padding:10px");
        document.getElementById("btn4").removeEventListener("click",Fivehand5Choose2C4);
            let GetHideBtn5R=document.getElementById("getBtn5");
            GetHideBtn5R.style.display="none";
            let GetHideBtn6C=document.getElementById("getBtn6C");
            GetHideBtn6C.style.display="inline-block";

        } else if(collection2.length<5){
            collection2.push(hand5[3]);
            collection.push(hand5[3]);

            document.getElementById("collectionAnchor10");
            let ah4c52=document.createElement("img");
            ah4c52.src= `cardGameImages/${hand5[3].suit}${hand5[3].value}.png`;
            collectionAnchor10.appendChild(ah4c52);
            ah4c52.setAttribute("style","width:180px;");
            ah4c52.setAttribute("style","height:240px;");
            ah4c52.setAttribute("style","padding:10px");
                document.getElementById("btn5").removeEventListener("click",Threehand3Choose2C5);
                let GetHideBtn5R=document.getElementById("getBtn5");
            GetHideBtn5R.style.display="none";
            let GetHideBtn6C=document.getElementById("getBtn6C");
            GetHideBtn6C.style.display="inline-block";
} else {
} 
};

function Fivehand5Choose2C5() {
    if(collection2.length<4){

    collection2.push(hand5[4]);
    collection.push(hand5[4]);

    document.getElementById("collectionAnchor9");
    let ah5c5=document.createElement("img");
    ah5c5.src= `cardGameImages/${hand5[4].suit}${hand5[4].value}.png`;
    collectionAnchor9.appendChild(ah5c5);
    ah5c5.setAttribute("style","width:180px;");
    ah5c5.setAttribute("style","height:240px;");
    ah5c5.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Fivehand5Choose2C5);
            let GetHideBtn5R=document.getElementById("getBtn5");
            GetHideBtn5R.style.display="none";
            let GetHideBtn6C=document.getElementById("getBtn6C");
            GetHideBtn6C.style.display="inline-block";

        } else if(collection2.length<5){
            collection2.push(hand5[4]);
            collection.push(hand5[4]);

            document.getElementById("collectionAnchor10");
            let ah4c52=document.createElement("img");
            ah4c52.src= `cardGameImages/${hand5[4].suit}${hand5[4].value}.png`;
            collectionAnchor10.appendChild(ah4c52);
            ah4c52.setAttribute("style","width:180px;");
            ah4c52.setAttribute("style","height:240px;");
            ah4c52.setAttribute("style","padding:10px");
                document.getElementById("btn5").removeEventListener("click",Threehand3Choose2C5);
                let GetHideBtn5R=document.getElementById("getBtn5");
                GetHideBtn5R.style.display="none";
                let GetHideBtn6C=document.getElementById("getBtn6C");
                GetHideBtn6C.style.display="inline-block";

} else {
} 
};

// clear hand5. get hand6 buttons.
function clearHand5(){
    let anchor4=document.getElementById("handAnchor");
    while(anchor4.firstChild){
        anchor4.removeChild(anchor4.firstChild);
    }


    let GetHideBtn6C2=document.getElementById("getBtn6C");
    GetHideBtn6C2.style.display="none";
    let GetHideBtn6=document.getElementById("getBtn6");
    GetHideBtn6.style.display="inline-block";
    let roundCounter=document.getElementById("round");

    roundCounter.innerHTML="This is Hand 6";
    roundCounter.setAttribute("style","font-size: 50px");
    roundCounter.style.textAlign="right";
    roundCounter.style.color="white";


};

// get hand 6
function showHand6 () {
    for (i=0; i<hand6.length; ++i) {
        document.getElementById("handAnchor");
        let h6c1=document.createElement("img");
        h6c1.setAttribute("style","padding:50px");
        h6c1.setAttribute("style","width:180px;");
        h6c1.setAttribute("style","height:240px;");
        h6c1.src= `cardGameImages/${hand6[i].suit}${hand6[i].value}.png`;
        handAnchor.appendChild(h6c1);
        let blankSpace=document.createElement("img");
        blankSpace.src="cardGameImages/padding.png";
        handAnchor.appendChild(blankSpace);
    }

    document.getElementById("round").innerHTML="This is Hand 6";
    round.setAttribute("style","font-size: 50px");
    round.style.textAlign="right";
    round.style.color="white";

    document.getElementById("btn1").addEventListener("click",Sixhand6Choose2C1);
    document.getElementById("btn2").addEventListener("click",Sixhand6Choose2C2);
    document.getElementById("btn3").addEventListener("click",Sixhand6Choose2C3);
    document.getElementById("btn4").addEventListener("click",Sixhand6Choose2C4);
    document.getElementById("btn5").addEventListener("click",Sixhand6Choose2C5);
};


// hand 6 choose 2
function Sixhand6Choose2C1() {
    if(collection3.length<1){

        collection3.push(hand6[0]);
        collection.push(hand6[0]);

    document.getElementById("collectionAnchor11");
    let ah6c1=document.createElement("img");
    ah6c1.src= `cardGameImages/${hand6[0].suit}${hand6[0].value}.png`;
    collectionAnchor11.appendChild(ah6c1);
    ah6c1.setAttribute("style","width:180px;");
    ah6c1.setAttribute("style","height:240px;");
    ah6c1.setAttribute("style","padding:10px");
        document.getElementById("btn1").removeEventListener("click",Sixhand6Choose2C1);
        let GetHideBtn6R=document.getElementById("getBtn6");
    GetHideBtn6R.style.display="none";
    let GetHideBtn7C=document.getElementById("getBtn7C");
            GetHideBtn7C.style.display="inline-block";

        } else if(collection3.length<2){
            collection3.push(hand6[0]);
            collection.push(hand6[0]);

            document.getElementById("collectionAnchor12");
            let ah4c52=document.createElement("img");
            ah4c52.src= `cardGameImages/${hand6[0].suit}${hand6[0].value}.png`;
            collectionAnchor12.appendChild(ah4c52);
            ah4c52.setAttribute("style","width:180px;");
            ah4c52.setAttribute("style","height:240px;");
            ah4c52.setAttribute("style","padding:10px");
                document.getElementById("btn5").removeEventListener("click",Threehand3Choose2C5);
                let GetHideBtn6R=document.getElementById("getBtn6");
                GetHideBtn6R.style.display="none";
                let GetHideBtn7C=document.getElementById("getBtn7C");
                        GetHideBtn7C.style.display="inline-block";

} else {
} 
};

function Sixhand6Choose2C2() {
    if(collection3.length<1){

    collection3.push(hand6[1]);
    collection.push(hand6[1]);

    document.getElementById("collectionAnchor11");
    let ah6c2=document.createElement("img");
    ah6c2.src= `cardGameImages/${hand6[1].suit}${hand6[1].value}.png`;
    collectionAnchor11.appendChild(ah6c2);
    ah6c2.setAttribute("style","width:180px;");
    ah6c2.setAttribute("style","height:240px;");
    ah6c2.setAttribute("style","padding:10px");
        document.getElementById("btn2").removeEventListener("click",Sixhand6Choose2C2);
        let GetHideBtn6R=document.getElementById("getBtn6");
    GetHideBtn6R.style.display="none";
    let GetHideBtn7C=document.getElementById("getBtn7C");
            GetHideBtn7C.style.display="inline-block";

        } else if(collection3.length<2){
            collection3.push(hand6[1]);
            collection.push(hand6[1]);

            document.getElementById("collectionAnchor12");
            let ah4c52=document.createElement("img");
            ah4c52.src= `cardGameImages/${hand6[1].suit}${hand6[1].value}.png`;
            collectionAnchor12.appendChild(ah4c52);
            ah4c52.setAttribute("style","width:180px;");
            ah4c52.setAttribute("style","height:240px;");
            ah4c52.setAttribute("style","padding:10px");
                document.getElementById("btn5").removeEventListener("click",Threehand3Choose2C5);
                let GetHideBtn6R=document.getElementById("getBtn6");
                GetHideBtn6R.style.display="none";
                let GetHideBtn7C=document.getElementById("getBtn7C");
                        GetHideBtn7C.style.display="inline-block";

} else {
} 
};

function Sixhand6Choose2C3() {
    if(collection3.length<1){

    collection3.push(hand6[2]);
    collection.push(hand6[2]);

    document.getElementById("collectionAnchor11");
    let ah6c3=document.createElement("img");
    ah6c3.src= `cardGameImages/${hand6[2].suit}${hand6[2].value}.png`;
    collectionAnchor11.appendChild(ah6c3);
    ah6c3.setAttribute("style","width:180px;");
    ah6c3.setAttribute("style","height:240px;");
    ah6c3.setAttribute("style","padding:10px");
        document.getElementById("btn3").removeEventListener("click",Sixhand6Choose2C3);
        let GetHideBtn6R=document.getElementById("getBtn6");
    GetHideBtn6R.style.display="none";
    let GetHideBtn7C=document.getElementById("getBtn7C");
            GetHideBtn7C.style.display="inline-block";

        } else if(collection3.length<2){
            collection3.push(hand6[2]);
            collection.push(hand6[2]);

            document.getElementById("collectionAnchor12");
            let ah4c52=document.createElement("img");
            ah4c52.src= `cardGameImages/${hand6[2].suit}${hand6[2].value}.png`;
            collectionAnchor12.appendChild(ah4c52);
            ah4c52.setAttribute("style","width:180px;");
            ah4c52.setAttribute("style","height:240px;");
            ah4c52.setAttribute("style","padding:10px");
                document.getElementById("btn5").removeEventListener("click",Threehand3Choose2C5);
                let GetHideBtn6R=document.getElementById("getBtn6");
                GetHideBtn6R.style.display="none";
                let GetHideBtn7C=document.getElementById("getBtn7C");
                        GetHideBtn7C.style.display="inline-block";

            

} else {
} 
};

function Sixhand6Choose2C4() {
    if(collection3.length<1){

    collection3.push(hand6[3]);
    collection.push(hand6[3]);

    document.getElementById("collectionAnchor11");
    let ah6c4=document.createElement("img");
    ah6c4.src= `cardGameImages/${hand6[3].suit}${hand6[3].value}.png`;
    collectionAnchor11.appendChild(ah6c4);
    ah6c4.setAttribute("style","width:180px;");
    ah6c4.setAttribute("style","height:240px;");
    ah6c4.setAttribute("style","padding:10px");
        document.getElementById("btn4").removeEventListener("click",Sixhand6Choose2C4);
        let GetHideBtn6R=document.getElementById("getBtn6");
    GetHideBtn6R.style.display="none";
    let GetHideBtn7C=document.getElementById("getBtn7C");
            GetHideBtn7C.style.display="inline-block";

            
        } else if(collection3.length<2){
            collection3.push(hand6[3]);
            collection.push(hand6[3]);

            document.getElementById("collectionAnchor12");
            let ah4c52=document.createElement("img");
            ah4c52.src= `cardGameImages/${hand6[3].suit}${hand6[3].value}.png`;
            collectionAnchor12.appendChild(ah4c52);
            ah4c52.setAttribute("style","width:180px;");
            ah4c52.setAttribute("style","height:240px;");
            ah4c52.setAttribute("style","padding:10px");
                document.getElementById("btn5").removeEventListener("click",Threehand3Choose2C5);
                let GetHideBtn6R=document.getElementById("getBtn6");
                GetHideBtn6R.style.display="none";
                let GetHideBtn7C=document.getElementById("getBtn7C");
                        GetHideBtn7C.style.display="inline-block";
            

} else {
} 
};

function Sixhand6Choose2C5() {
    if(collection3.length<1){

    collection3.push(hand6[4]);
    collection.push(hand6[4]);

    document.getElementById("collectionAnchor11");
    let ah6c5=document.createElement("img");
    ah6c5.src= `cardGameImages/${hand6[4].suit}${hand6[4].value}.png`;
    collectionAnchor11.appendChild(ah6c5);
    ah6c5.setAttribute("style","width:180px;");
    ah6c5.setAttribute("style","height:240px;");
    ah6c5.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Sixhand6Choose2C5);
        let GetHideBtn6R=document.getElementById("getBtn6");
    GetHideBtn6R.style.display="none";
    let GetHideBtn7C=document.getElementById("getBtn7C");
            GetHideBtn7C.style.display="inline-block";

        } else if(collection3.length<2){
            collection3.push(hand6[4]);
            collection.push(hand6[4]);

            document.getElementById("collectionAnchor12");
            let ah4c52=document.createElement("img");
            ah4c52.src= `cardGameImages/${hand6[4].suit}${hand6[4].value}.png`;
            collectionAnchor12.appendChild(ah4c52);
            ah4c52.setAttribute("style","width:180px;");
            ah4c52.setAttribute("style","height:240px;");
            ah4c52.setAttribute("style","padding:10px");
                document.getElementById("btn5").removeEventListener("click",Threehand3Choose2C5);
                let GetHideBtn6R=document.getElementById("getBtn6");
                GetHideBtn6R.style.display="none";
                let GetHideBtn7C=document.getElementById("getBtn7C");
                        GetHideBtn7C.style.display="inline-block";

} else {
} 
};

// clear hand6. get hand7 buttons.
function clearHand6(){
    let anchor5=document.getElementById("handAnchor");
    while(anchor5.firstChild){
        anchor5.removeChild(anchor5.firstChild);
    }


    let GetHideBtn7C=document.getElementById("getBtn7C");
    GetHideBtn7C.style.display="none";
    let GetHideBtn7=document.getElementById("getBtn7");
    GetHideBtn7.style.display="inline-block";
    let roundCounter=document.getElementById("round");

    roundCounter.innerHTML="This is Hand 7";
    roundCounter.setAttribute("style","font-size: 50px");
    roundCounter.style.textAlign="right";
    roundCounter.style.color="white";
};

// get hand 7
function showHand7 () {
    for (i=0; i<hand7.length; ++i) {
        document.getElementById("handAnchor");
        let h7c1=document.createElement("img");
        h7c1.setAttribute("style","padding:50px");
        h7c1.setAttribute("style","width:180px;");
        h7c1.setAttribute("style","height:240px;");
        h7c1.src= `cardGameImages/${hand7[i].suit}${hand7[i].value}.png`;
        handAnchor.appendChild(h7c1);
        let blankSpace=document.createElement("img");
        blankSpace.src="cardGameImages/padding.png";
        handAnchor.appendChild(blankSpace);
    }

    document.getElementById("round").innerHTML="This is Hand 7";
    round.setAttribute("style","font-size: 50px");
    round.style.textAlign="right";
    round.style.color="white";

    document.getElementById("btn1").addEventListener("click",Sevenhand7Choose2C1);
    document.getElementById("btn2").addEventListener("click",Sevenhand7Choose2C2);
    document.getElementById("btn3").addEventListener("click",Sevenhand7Choose2C3);
    document.getElementById("btn4").addEventListener("click",Sevenhand7Choose2C4);
    document.getElementById("btn5").addEventListener("click",Sevenhand7Choose2C5);
};


// hand 7 choose 2
function Sevenhand7Choose2C1() {
    if(collection3.length<3){

    collection3.push(hand7[0]);
    collection.push(hand7[0]);

    document.getElementById("collectionAnchor13");
    let ah7c1=document.createElement("img");
    ah7c1.src= `cardGameImages/${hand7[0].suit}${hand7[0].value}.png`;
    collectionAnchor13.appendChild(ah7c1);
    ah7c1.setAttribute("style","width:180px;");
    ah7c1.setAttribute("style","height:240px;");
    ah7c1.setAttribute("style","padding:10px");
        document.getElementById("btn1").removeEventListener("click",Sevenhand7Choose2C1);
        let GetHideBtn7R=document.getElementById("getBtn7");
    GetHideBtn7R.style.display="none";
    let GetHideBtn8C=document.getElementById("getBtn8C");
            GetHideBtn8C.style.display="inline-block";

        } else if(collection3.length<4){
            collection3.push(hand7[0]);
            collection.push(hand7[0]);

            document.getElementById("collectionAnchor14");
            let ah4c52=document.createElement("img");
            ah4c52.src= `cardGameImages/${hand7[0].suit}${hand7[0].value}.png`;
            collectionAnchor14.appendChild(ah4c52);
            ah4c52.setAttribute("style","width:180px;");
            ah4c52.setAttribute("style","height:240px;");
            ah4c52.setAttribute("style","padding:10px");
                document.getElementById("btn5").removeEventListener("click",Threehand3Choose2C5);
                let GetHideBtn7R=document.getElementById("getBtn7");
                GetHideBtn7R.style.display="none";
                let GetHideBtn8C=document.getElementById("getBtn8C");
                        GetHideBtn8C.style.display="inline-block";

} else {
} 

};

function Sevenhand7Choose2C2() {
    if(collection3.length<3){

    collection3.push(hand7[1]);
    collection.push(hand7[1]);

    document.getElementById("collectionAnchor13");
    let ah7c2=document.createElement("img");
    ah7c2.src= `cardGameImages/${hand7[1].suit}${hand7[1].value}.png`;
    collectionAnchor13.appendChild(ah7c2);
    ah7c2.setAttribute("style","width:180px;");
    ah7c2.setAttribute("style","height:240px;");
    ah7c2.setAttribute("style","padding:10px");
        document.getElementById("btn2").removeEventListener("click",Sevenhand7Choose2C2);
        let GetHideBtn7R=document.getElementById("getBtn7");
    GetHideBtn7R.style.display="none";
    let GetHideBtn8C=document.getElementById("getBtn8C");
    GetHideBtn8C.style.display="inline-block";

} else if(collection3.length<4){
    collection3.push(hand7[1]);
    collection.push(hand7[1]);

    document.getElementById("collectionAnchor14");
    let ah4c52=document.createElement("img");
    ah4c52.src= `cardGameImages/${hand7[1].suit}${hand7[1].value}.png`;
    collectionAnchor14.appendChild(ah4c52);
    ah4c52.setAttribute("style","width:180px;");
    ah4c52.setAttribute("style","height:240px;");
    ah4c52.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Threehand3Choose2C5);
        let GetHideBtn7R=document.getElementById("getBtn7");
        GetHideBtn7R.style.display="none";
        let GetHideBtn8C=document.getElementById("getBtn8C");
                GetHideBtn8C.style.display="inline-block";

} else {
} 
};

function Sevenhand7Choose2C3() {
    if(collection3.length<3){

    collection3.push(hand7[2]);
    collection.push(hand7[2]);

    document.getElementById("collectionAnchor13");
    let ah7c3=document.createElement("img");
    ah7c3.src= `cardGameImages/${hand7[2].suit}${hand7[2].value}.png`;
    collectionAnchor13.appendChild(ah7c3);
    ah7c3.setAttribute("style","width:180px;");
    ah7c3.setAttribute("style","height:240px;");
    ah7c3.setAttribute("style","padding:10px");
        document.getElementById("btn3").removeEventListener("click",Sevenhand7Choose2C3);
        let GetHideBtn7R=document.getElementById("getBtn7");
    GetHideBtn7R.style.display="none";
    let GetHideBtn8C=document.getElementById("getBtn8C");
    GetHideBtn8C.style.display="inline-block";

} else if(collection3.length<4){
    collection3.push(hand7[2]);
    collection.push(hand7[2]);

    document.getElementById("collectionAnchor14");
    let ah4c52=document.createElement("img");
    ah4c52.src= `cardGameImages/${hand7[2].suit}${hand7[2].value}.png`;
    collectionAnchor14.appendChild(ah4c52);
    ah4c52.setAttribute("style","width:180px;");
    ah4c52.setAttribute("style","height:240px;");
    ah4c52.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Threehand3Choose2C5);
        let GetHideBtn7R=document.getElementById("getBtn7");
        GetHideBtn7R.style.display="none";
        let GetHideBtn8C=document.getElementById("getBtn8C");
                GetHideBtn8C.style.display="inline-block";

} else {
} 
};

function Sevenhand7Choose2C4() {
    if(collection3.length<3){

    collection3.push(hand7[3]);
    collection.push(hand7[3]);

    document.getElementById("collectionAnchor13");
    let ah7c4=document.createElement("img");
    ah7c4.src= `cardGameImages/${hand7[3].suit}${hand7[3].value}.png`;
    collectionAnchor13.appendChild(ah7c4);
    ah7c4.setAttribute("style","width:180px;");
    ah7c4.setAttribute("style","height:240px;");
    ah7c4.setAttribute("style","padding:10px");
        document.getElementById("btn4").removeEventListener("click",Sevenhand7Choose2C4);
        let GetHideBtn7R=document.getElementById("getBtn7");
    GetHideBtn7R.style.display="none";
    let GetHideBtn8C=document.getElementById("getBtn8C");
    GetHideBtn8C.style.display="inline-block";

} else if(collection3.length<4){
    collection3.push(hand7[3]);
    collection.push(hand7[3]);

    document.getElementById("collectionAnchor14");
    let ah4c52=document.createElement("img");
    ah4c52.src= `cardGameImages/${hand7[3].suit}${hand7[3].value}.png`;
    collectionAnchor14.appendChild(ah4c52);
    ah4c52.setAttribute("style","width:180px;");
    ah4c52.setAttribute("style","height:240px;");
    ah4c52.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Threehand3Choose2C5);
        let GetHideBtn7R=document.getElementById("getBtn7");
        GetHideBtn7R.style.display="none";
        let GetHideBtn8C=document.getElementById("getBtn8C");
                GetHideBtn8C.style.display="inline-block";

} else {
} 
};

function Sevenhand7Choose2C5() {
    if(collection3.length<3){

    collection3.push(hand7[4]);
    collection.push(hand7[4]);

    document.getElementById("collectionAnchor13");
    let ah7c5=document.createElement("img");
    ah7c5.src= `cardGameImages/${hand7[4].suit}${hand7[4].value}.png`;
    collectionAnchor13.appendChild(ah7c5);
    ah7c5.setAttribute("style","width:180px;");
    ah7c5.setAttribute("style","height:240px;");
    ah7c5.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Sevenhand7Choose2C5);
        let GetHideBtn7R=document.getElementById("getBtn7");
    GetHideBtn7R.style.display="none";
    let GetHideBtn8C=document.getElementById("getBtn8C");
    GetHideBtn8C.style.display="inline-block";

} else if(collection3.length<4){
    collection3.push(hand7[4]);
    collection.push(hand7[4]);

    document.getElementById("collectionAnchor14");
    let ah4c52=document.createElement("img");
    ah4c52.src= `cardGameImages/${hand7[4].suit}${hand7[4].value}.png`;
    collectionAnchor14.appendChild(ah4c52);
    ah4c52.setAttribute("style","width:180px;");
    ah4c52.setAttribute("style","height:240px;");
    ah4c52.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Threehand3Choose2C5);
        let GetHideBtn7R=document.getElementById("getBtn7");
        GetHideBtn7R.style.display="none";
        let GetHideBtn8C=document.getElementById("getBtn8C");
                GetHideBtn8C.style.display="inline-block";

} else {
} 
};
// clear hand7. get hand8 buttons.
function clearHand7(){
    let anchor6=document.getElementById("handAnchor");
    while(anchor6.firstChild){
        anchor6.removeChild(anchor6.firstChild);
    }

    

    let GetHideBtn8C=document.getElementById("getBtn8C");
    GetHideBtn8C.style.display="none";
    let GetHideBtn8=document.getElementById("getBtn8");
    GetHideBtn8.style.display="inline-block";
    let roundCounter=document.getElementById("round");

    roundCounter.innerHTML="This is Hand 8";
    roundCounter.setAttribute("style","font-size: 50px");
    roundCounter.style.textAlign="right";
    roundCounter.style.color="white";
};
// get hand 8
function showHand8 () {
    for (i=0; i<hand8.length; ++i) {
        document.getElementById("handAnchor");
        let h8c1=document.createElement("img");
        h8c1.setAttribute("style","padding:50px");
        h8c1.setAttribute("style","width:180px;");
        h8c1.setAttribute("style","height:240px;");
        h8c1.src= `cardGameImages/${hand8[i].suit}${hand8[i].value}.png`;
        handAnchor.appendChild(h8c1);
        let blankSpace=document.createElement("img");
        blankSpace.src="cardGameImages/padding.png";
        handAnchor.appendChild(blankSpace);
    }

    document.getElementById("round").innerHTML="This is Hand 8";
    round.setAttribute("style","font-size: 50px");
    round.style.textAlign="right";
    round.style.color="white";

    document.getElementById("btn1").addEventListener("click",Eighthand8Choose2C1);
    document.getElementById("btn2").addEventListener("click",Eighthand8Choose2C2);
    document.getElementById("btn3").addEventListener("click",Eighthand8Choose2C3);
    document.getElementById("btn4").addEventListener("click",Eighthand8Choose2C4);
    document.getElementById("btn5").addEventListener("click",Eighthand8Choose2C5);

};


// hand 8 choose 2
function Eighthand8Choose2C1() {
    if(collection3.length<5){

    collection3.push(hand8[0]);
    collection.push(hand8[0]);

    document.getElementById("collectionAnchor15");
    let ah8c1=document.createElement("img");
    ah8c1.src= `cardGameImages/${hand8[0].suit}${hand8[0].value}.png`;
    collectionAnchor15.appendChild(ah8c1);
    ah8c1.setAttribute("style","width:180px;");
    ah8c1.setAttribute("style","height:240px;");
    ah8c1.setAttribute("style","padding:10px");
        document.getElementById("btn1").removeEventListener("click",Eighthand8Choose2C1);
        let GetHideBtn8R=document.getElementById("getBtn8");
    GetHideBtn8R.style.display="none";
    let GetHideBtn9C=document.getElementById("getBtn9C");
    GetHideBtn9C.style.display="inline-block";

    } else if(collection4.length<1){
        collection4.push(hand8[0]);
        collection.push(hand8[0]);

        document.getElementById("collectionAnchor16");
        let ah8c1=document.createElement("img");
        ah8c1.src= `cardGameImages/${hand8[0].suit}${hand8[0].value}.png`;
        collectionAnchor16.appendChild(ah8c1);
        ah8c1.setAttribute("style","width:180px;");
        ah8c1.setAttribute("style","height:240px;");
        ah8c1.setAttribute("style","padding:10px");
            document.getElementById("btn1").removeEventListener("click",Eighthand8Choose2C1);
            let GetHideBtn8R=document.getElementById("getBtn8");
    GetHideBtn8R.style.display="none";
    let GetHideBtn9C=document.getElementById("getBtn9C");
    GetHideBtn9C.style.display="inline-block";

} else {
} 
};

function Eighthand8Choose2C2() {
    if(collection3.length<5){

    collection3.push(hand8[1]);
    collection.push(hand8[1]);

    document.getElementById("collectionAnchor15");
    let ah8c2=document.createElement("img");
    ah8c2.src= `cardGameImages/${hand8[1].suit}${hand8[1].value}.png`;
    collectionAnchor15.appendChild(ah8c2);
    ah8c2.setAttribute("style","width:180px;");
    ah8c2.setAttribute("style","height:240px;");
    ah8c2.setAttribute("style","padding:10px");
        document.getElementById("btn2").removeEventListener("click",Eighthand8Choose2C2);
        let GetHideBtn8R=document.getElementById("getBtn8");
    GetHideBtn8R.style.display="none";
    let GetHideBtn9C=document.getElementById("getBtn9C");
    GetHideBtn9C.style.display="inline-block";

        } else if(collection4.length<1){
            collection4.push(hand8[1]);
            collection.push(hand8[1]);

            document.getElementById("collectionAnchor16");
            let ah8c1=document.createElement("img");
            ah8c1.src= `cardGameImages/${hand8[1].suit}${hand8[1].value}.png`;
            collectionAnchor16.appendChild(ah8c1);
            ah8c1.setAttribute("style","width:180px;");
            ah8c1.setAttribute("style","height:240px;");
            ah8c1.setAttribute("style","padding:10px");
                document.getElementById("btn2").removeEventListener("click",Eighthand8Choose2C2);
                let GetHideBtn8R=document.getElementById("getBtn8");
    GetHideBtn8R.style.display="none";
    let GetHideBtn9C=document.getElementById("getBtn9C");
    GetHideBtn9C.style.display="inline-block";

    } else {
    } 
};

function Eighthand8Choose2C3() {
    if(collection3.length<5){

    collection3.push(hand8[2]);
    collection.push(hand8[2]);

    document.getElementById("collectionAnchor15");
    let ah8c3=document.createElement("img");
    ah8c3.src= `cardGameImages/${hand8[2].suit}${hand8[2].value}.png`;
    collectionAnchor15.appendChild(ah8c3);
    ah8c3.setAttribute("style","width:180px;");
    ah8c3.setAttribute("style","height:240px;");
    ah8c3.setAttribute("style","padding:10px");
        document.getElementById("btn3").removeEventListener("click",Eighthand8Choose2C3);
        let GetHideBtn8R=document.getElementById("getBtn8");
    GetHideBtn8R.style.display="none";
    let GetHideBtn9C=document.getElementById("getBtn9C");
    GetHideBtn9C.style.display="inline-block";

} else if(collection4.length<1){
    collection4.push(hand8[2]);
    collection.push(hand8[2]);

    document.getElementById("collectionAnchor16");
    let ah8c1=document.createElement("img");
    ah8c1.src= `cardGameImages/${hand8[2].suit}${hand8[2].value}.png`;
    collectionAnchor16.appendChild(ah8c1);
    ah8c1.setAttribute("style","width:180px;");
    ah8c1.setAttribute("style","height:240px;");
    ah8c1.setAttribute("style","padding:10px");
        document.getElementById("btn3").removeEventListener("click",Eighthand8Choose2C3);
        let GetHideBtn8R=document.getElementById("getBtn8");
    GetHideBtn8R.style.display="none";
    let GetHideBtn9C=document.getElementById("getBtn9C");
    GetHideBtn9C.style.display="inline-block";

} else {
} 
};

function Eighthand8Choose2C4() {
    if(collection3.length<5){

    collection3.push(hand8[3]);
    collection.push(hand8[3]);

    document.getElementById("collectionAnchor15");
    let ah8c4=document.createElement("img");
    ah8c4.src= `cardGameImages/${hand8[3].suit}${hand8[3].value}.png`;
    collectionAnchor15.appendChild(ah8c4);
    ah8c4.setAttribute("style","width:180px;");
    ah8c4.setAttribute("style","height:240px;");
    ah8c4.setAttribute("style","padding:10px");
        document.getElementById("btn4").removeEventListener("click",Eighthand8Choose2C4);
        let GetHideBtn8R=document.getElementById("getBtn8");
    GetHideBtn8R.style.display="none";
    let GetHideBtn9C=document.getElementById("getBtn9C");
    GetHideBtn9C.style.display="inline-block";

} else if(collection4.length<1){
    collection4.push(hand8[3]);
    collection.push(hand8[3]);

    document.getElementById("collectionAnchor16");
    let ah8c1=document.createElement("img");
    ah8c1.src= `cardGameImages/${hand8[3].suit}${hand8[3].value}.png`;
    collectionAnchor16.appendChild(ah8c1);
    ah8c1.setAttribute("style","width:180px;");
    ah8c1.setAttribute("style","height:240px;");
    ah8c1.setAttribute("style","padding:10px");
        document.getElementById("btn4").removeEventListener("click",Eighthand8Choose2C4);
        let GetHideBtn8R=document.getElementById("getBtn8");
    GetHideBtn8R.style.display="none";
    let GetHideBtn9C=document.getElementById("getBtn9C");
    GetHideBtn9C.style.display="inline-block";

} else {
} 
};

function Eighthand8Choose2C5() {
    if(collection3.length<5){

    collection3.push(hand8[4]);
    collection.push(hand8[4]);

    document.getElementById("collectionAnchor15");
    let ah8c5=document.createElement("img");
    ah8c5.src= `cardGameImages/${hand8[4].suit}${hand8[4].value}.png`;
    collectionAnchor15.appendChild(ah8c5);
    ah8c5.setAttribute("style","width:180px;");
    ah8c5.setAttribute("style","height:240px;");
    ah8c5.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Eighthand8Choose2C5);
        let GetHideBtn8R=document.getElementById("getBtn8");
    GetHideBtn8R.style.display="none";
    let GetHideBtn9C=document.getElementById("getBtn9C");
    GetHideBtn9C.style.display="inline-block";

} else if(collection4.length<1){
    collection4.push(hand8[4]);
    collection.push(hand8[4]);

    document.getElementById("collectionAnchor16");
    let ah8c1=document.createElement("img");
    ah8c1.src= `cardGameImages/${hand8[4].suit}${hand8[4].value}.png`;
    collectionAnchor16.appendChild(ah8c1);
    ah8c1.setAttribute("style","width:180px;");
    ah8c1.setAttribute("style","height:240px;");
    ah8c1.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Eighthand8Choose2C5);
        let GetHideBtn8R=document.getElementById("getBtn8");
    GetHideBtn8R.style.display="none";
    let GetHideBtn9C=document.getElementById("getBtn9C");
    GetHideBtn9C.style.display="inline-block";

} else {
} 
};
// clear hand8. get hand9 buttons.
function clearHand8(){
    let anchor7=document.getElementById("handAnchor");
    while(anchor7.firstChild){
        anchor7.removeChild(anchor7.firstChild);
    }

  

    let GetHideBtn9C=document.getElementById("getBtn9C");
    GetHideBtn9C.style.display="none";
    let GetHideBtn9=document.getElementById("getBtn9");
    GetHideBtn9.style.display="inline-block";
    let roundCounter=document.getElementById("round");

    roundCounter.innerHTML="This is Hand 9";
    roundCounter.setAttribute("style","font-size: 50px");
    roundCounter.style.textAlign="right";
    roundCounter.style.color="white";
};
// get hand 9
function showHand9 () {
    for (i=0; i<hand9.length; ++i) {
        document.getElementById("handAnchor");
        let h9c1=document.createElement("img");
        h9c1.setAttribute("style","padding:50px");
        h9c1.setAttribute("style","width:180px;");
        h9c1.setAttribute("style","height:240px;");
        h9c1.src= `cardGameImages/${hand9[i].suit}${hand9[i].value}.png`;
        handAnchor.appendChild(h9c1);
        let blankSpace=document.createElement("img");
        blankSpace.src="cardGameImages/padding.png";
        handAnchor.appendChild(blankSpace);
    }

    document.getElementById("round").innerHTML="This is Hand 9";
    round.setAttribute("style","font-size: 50px");
    round.style.textAlign="right";
    round.style.color="white";

    document.getElementById("btn1").addEventListener("click",Ninehand9Choose2C1);
    document.getElementById("btn2").addEventListener("click",Ninehand9Choose2C2);
    document.getElementById("btn3").addEventListener("click",Ninehand9Choose2C3);
    document.getElementById("btn4").addEventListener("click",Ninehand9Choose2C4);
    document.getElementById("btn5").addEventListener("click",Ninehand9Choose2C5);
};

// hand 9 choose 2
function Ninehand9Choose2C1() {
    if(collection4.length<2){

    collection4.push(hand9[0]);
    collection.push(hand9[0]);

    document.getElementById("collectionAnchor17");
    let ah9c1=document.createElement("img");
    ah9c1.src= `cardGameImages/${hand9[0].suit}${hand9[0].value}.png`;
    collectionAnchor17.appendChild(ah9c1);
    ah9c1.setAttribute("style","width:180px;");
    ah9c1.setAttribute("style","height:240px;");
    ah9c1.setAttribute("style","padding:10px");
        document.getElementById("btn1").removeEventListener("click",Ninehand9Choose2C1);
        let GetHideBtn9R=document.getElementById("getBtn9");
    GetHideBtn9R.style.display="none";
    let GetHideBtn10C=document.getElementById("getBtn10C");
    GetHideBtn10C.style.display="inline-block";

} else if(collection4.length<3){
    collection4.push(hand9[0]);
    collection.push(hand9[0]);

    document.getElementById("collectionAnchor18");
    let ah8c1=document.createElement("img");
    ah8c1.src= `cardGameImages/${hand9[0].suit}${hand9[0].value}.png`;
    collectionAnchor18.appendChild(ah8c1);
    ah8c1.setAttribute("style","width:180px;");
    ah8c1.setAttribute("style","height:240px;");
    ah8c1.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Eighthand8Choose2C5);
        let GetHideBtn9R=document.getElementById("getBtn9");
        GetHideBtn9R.style.display="none";
        let GetHideBtn10C=document.getElementById("getBtn10C");
        GetHideBtn10C.style.display="inline-block";
    
} else {
    } 

};

function Ninehand9Choose2C2() {
    if(collection4.length<2){

    collection4.push(hand9[1]);
    collection.push(hand9[1]);

    document.getElementById("collectionAnchor17");
    let ah9c2=document.createElement("img");
    ah9c2.src= `cardGameImages/${hand9[1].suit}${hand9[1].value}.png`;
    collectionAnchor17.appendChild(ah9c2);
    ah9c2.setAttribute("style","width:180px;");
    ah9c2.setAttribute("style","height:240px;");
    ah9c2.setAttribute("style","padding:10px");
        document.getElementById("btn2").removeEventListener("click",Ninehand9Choose2C2);
        let GetHideBtn9R=document.getElementById("getBtn9");
    GetHideBtn9R.style.display="none";
    let GetHideBtn10C=document.getElementById("getBtn10C");
    GetHideBtn10C.style.display="inline-block";

} else if(collection4.length<3){
    collection4.push(hand9[1]);
    collection.push(hand9[1]);

    document.getElementById("collectionAnchor18");
    let ah8c1=document.createElement("img");
    ah8c1.src= `cardGameImages/${hand9[1].suit}${hand9[1].value}.png`;
    collectionAnchor18.appendChild(ah8c1);
    ah8c1.setAttribute("style","width:180px;");
    ah8c1.setAttribute("style","height:240px;");
    ah8c1.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Eighthand8Choose2C5);
        let GetHideBtn9R=document.getElementById("getBtn9");
    GetHideBtn9R.style.display="none";
    let GetHideBtn10C=document.getElementById("getBtn10C");
    GetHideBtn10C.style.display="inline-block";
    

} else {
    } 
};

function Ninehand9Choose2C3() {
    if(collection4.length<2){

    collection4.push(hand9[2]);
    collection.push(hand9[2]);

    document.getElementById("collectionAnchor17");
    let ah9c3=document.createElement("img");
    ah9c3.src= `cardGameImages/${hand9[2].suit}${hand9[2].value}.png`;
    collectionAnchor17.appendChild(ah9c3);
    ah9c3.setAttribute("style","width:180px;");
    ah9c3.setAttribute("style","height:240px;");
    ah9c3.setAttribute("style","padding:10px");
        document.getElementById("btn3").removeEventListener("click",Ninehand9Choose2C3);
        let GetHideBtn9R=document.getElementById("getBtn9");
    GetHideBtn9R.style.display="none";
    let GetHideBtn10C=document.getElementById("getBtn10C");
    GetHideBtn10C.style.display="inline-block";

} else if(collection4.length<3){
    collection4.push(hand9[2]);
    collection.push(hand9[2]);

    document.getElementById("collectionAnchor18");
    let ah8c1=document.createElement("img");
    ah8c1.src= `cardGameImages/${hand9[2].suit}${hand9[2].value}.png`;
    collectionAnchor18.appendChild(ah8c1);
    ah8c1.setAttribute("style","width:180px;");
    ah8c1.setAttribute("style","height:240px;");
    ah8c1.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Eighthand8Choose2C5);
        let GetHideBtn9R=document.getElementById("getBtn9");
    GetHideBtn9R.style.display="none";
    let GetHideBtn10C=document.getElementById("getBtn10C");
    GetHideBtn10C.style.display="inline-block";
    

} else {
    } 
};

function Ninehand9Choose2C4() {
    if(collection4.length<2){

    collection4.push(hand9[3]);
    collection.push(hand9[3]);

    document.getElementById("collectionAnchor17");
    let ah9c4=document.createElement("img");
    ah9c4.src= `cardGameImages/${hand9[3].suit}${hand9[3].value}.png`;
    collectionAnchor17.appendChild(ah9c4);
    ah9c4.setAttribute("style","width:180px;");
    ah9c4.setAttribute("style","height:240px;");
    ah9c4.setAttribute("style","padding:10px");
        document.getElementById("btn4").removeEventListener("click",Ninehand9Choose2C4);
        let GetHideBtn9R=document.getElementById("getBtn9");
    GetHideBtn9R.style.display="none";
    let GetHideBtn10C=document.getElementById("getBtn10C");
    GetHideBtn10C.style.display="inline-block";

} else if(collection4.length<3){
    collection4.push(hand9[3]);
    collection.push(hand9[3]);

    document.getElementById("collectionAnchor18");
    let ah8c1=document.createElement("img");
    ah8c1.src= `cardGameImages/${hand9[3].suit}${hand9[3].value}.png`;
    collectionAnchor18.appendChild(ah8c1);
    ah8c1.setAttribute("style","width:180px;");
    ah8c1.setAttribute("style","height:240px;");
    ah8c1.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Eighthand8Choose2C5);
        let GetHideBtn9R=document.getElementById("getBtn9");
    GetHideBtn9R.style.display="none";
    let GetHideBtn10C=document.getElementById("getBtn10C");
    GetHideBtn10C.style.display="inline-block";
    

} else {
    } 
};

function Ninehand9Choose2C5() {
    if(collection4.length<2){

    collection4.push(hand9[4]);
    collection.push(hand9[4]);

    document.getElementById("collectionAnchor17");
    let ah9c5=document.createElement("img");
    ah9c5.src= `cardGameImages/${hand9[4].suit}${hand9[4].value}.png`;
    collectionAnchor17.appendChild(ah9c5);
    ah9c5.setAttribute("style","width:180px;");
    ah9c5.setAttribute("style","height:240px;");
    ah9c5.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Ninehand9Choose2C5);
        let GetHideBtn9R=document.getElementById("getBtn9");
    GetHideBtn9R.style.display="none";
    let GetHideBtn10C=document.getElementById("getBtn10C");
    GetHideBtn10C.style.display="inline-block";

} else if(collection4.length<3){
    collection4.push(hand9[4]);
    collection.push(hand9[4]);

    document.getElementById("collectionAnchor18");
    let ah8c1=document.createElement("img");
    ah8c1.src= `cardGameImages/${hand9[4].suit}${hand9[4].value}.png`;
    collectionAnchor18.appendChild(ah8c1);
    ah8c1.setAttribute("style","width:180px;");
    ah8c1.setAttribute("style","height:240px;");
    ah8c1.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Eighthand8Choose2C5);
        let GetHideBtn9R=document.getElementById("getBtn9");
    GetHideBtn9R.style.display="none";
    let GetHideBtn10C=document.getElementById("getBtn10C");
    GetHideBtn10C.style.display="inline-block";

} else {
    } 
};
// clear hand9. get hand10 buttons.
function clearHand9(){
    let anchor8=document.getElementById("handAnchor");
    while(anchor8.firstChild){
        anchor8.removeChild(anchor8.firstChild);
    }


    let GetHideBtn10C=document.getElementById("getBtn10C");
    GetHideBtn10C.style.display="none";
    let GetHideBtn10=document.getElementById("getBtn10");
    GetHideBtn10.style.display="inline-block";
    let roundCounter=document.getElementById("round");

    roundCounter.innerHTML="This is Hand 10";
    roundCounter.setAttribute("style","font-size: 50px");
    roundCounter.style.textAlign="right";
    roundCounter.style.color="white";
};
//get hand 10
function showHand10 () {
    for (i=0; i<hand10.length; ++i) {
        document.getElementById("handAnchor");
        let h10c1=document.createElement("img");
        h10c1.setAttribute("style","padding:50px");
        h10c1.setAttribute("style","width:180px;");
        h10c1.setAttribute("style","height:240px;");
        h10c1.src= `cardGameImages/${hand10[i].suit}${hand10[i].value}.png`;
        handAnchor.appendChild(h10c1);
        let blankSpace=document.createElement("img");
        blankSpace.src="cardGameImages/padding.png";
        handAnchor.appendChild(blankSpace);
    }

    document.getElementById("round").innerHTML="This is Hand 10";
    round.setAttribute("style","font-size: 50px");
    round.style.textAlign="right";
    round.style.color="white";

    document.getElementById("btn1").addEventListener("click",Tenhand10Choose2C1);
    document.getElementById("btn2").addEventListener("click",Tenhand10Choose2C2);
    document.getElementById("btn3").addEventListener("click",Tenhand10Choose2C3);
    document.getElementById("btn4").addEventListener("click",Tenhand10Choose2C4);
    document.getElementById("btn5").addEventListener("click",Tenhand10Choose2C5);
};

// hand 10 choose 2
function Tenhand10Choose2C1() {
    if(collection4.length<4){

    collection4.push(hand10[0]);
    collection.push(hand10[0]);

    document.getElementById("collectionAnchor19");
    let ah10c1=document.createElement("img");
    ah10c1.src= `cardGameImages/${hand10[0].suit}${hand10[0].value}.png`;
    collectionAnchor19.appendChild(ah10c1);
    ah10c1.setAttribute("style","width:180px;");
    ah10c1.setAttribute("style","height:240px;");
    ah10c1.setAttribute("style","padding:10px");
        document.getElementById("btn1").removeEventListener("click",Tenhand10Choose2C1);
        let GetHideBtn10R=document.getElementById("getBtn10");
    GetHideBtn10R.style.display="none";
    let GetHideBtn11C=document.getElementById("getBtn11C");
    GetHideBtn11C.style.display="inline-block";

} else if(collection4.length<5){
    collection4.push(hand10[0]);
    collection.push(hand10[0]);

    document.getElementById("collectionAnchor20");
    let ah8c1=document.createElement("img");
    ah8c1.src= `cardGameImages/${hand10[0].suit}${hand10[0].value}.png`;
    collectionAnchor20.appendChild(ah8c1);
    ah8c1.setAttribute("style","width:180px;");
    ah8c1.setAttribute("style","height:240px;");
    ah8c1.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Eighthand8Choose2C5);
        let GetHideBtn10R=document.getElementById("getBtn10");
        GetHideBtn10R.style.display="none";
        let GetHideBtn11C=document.getElementById("getBtn11C");
        GetHideBtn11C.style.display="inline-block";
    

} else {
    } 
};

function Tenhand10Choose2C2() {
    if(collection4.length<4){

    collection4.push(hand10[1]);
    collection.push(hand10[1]);

    document.getElementById("collectionAnchor19");
    let ah10c2=document.createElement("img");
    ah10c2.src= `cardGameImages/${hand10[1].suit}${hand10[1].value}.png`;
    collectionAnchor19.appendChild(ah10c2);
    ah10c2.setAttribute("style","width:180px;");
    ah10c2.setAttribute("style","height:240px;");
    ah10c2.setAttribute("style","padding:10px");
        document.getElementById("btn2").removeEventListener("click",Tenhand10Choose2C2);
        let GetHideBtn10R=document.getElementById("getBtn10");
    GetHideBtn10R.style.display="none";
    let GetHideBtn11C=document.getElementById("getBtn11C");
    GetHideBtn11C.style.display="inline-block";

} else if(collection4.length<5){
    collection4.push(hand10[1]);
    collection.push(hand10[1]);

    document.getElementById("collectionAnchor20");
    let ah8c1=document.createElement("img");
    ah8c1.src= `cardGameImages/${hand10[1].suit}${hand10[1].value}.png`;
    collectionAnchor20.appendChild(ah8c1);
    ah8c1.setAttribute("style","width:180px;");
    ah8c1.setAttribute("style","height:240px;");
    ah8c1.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Eighthand8Choose2C5);
        let GetHideBtn10R=document.getElementById("getBtn10");
        GetHideBtn10R.style.display="none";
        let GetHideBtn11C=document.getElementById("getBtn11C");
        GetHideBtn11C.style.display="inline-block";

} else {
    } 
};

function Tenhand10Choose2C3() {
    if(collection4.length<4){

    collection4.push(hand10[2]);
    collection.push(hand10[2]);

    document.getElementById("collectionAnchor19");
    let ah10c3=document.createElement("img");
    ah10c3.src= `cardGameImages/${hand10[2].suit}${hand10[2].value}.png`;
    collectionAnchor19.appendChild(ah10c3);
    ah10c3.setAttribute("style","width:180px;");
    ah10c3.setAttribute("style","height:240px;");
    ah10c3.setAttribute("style","padding:10px");
        document.getElementById("btn3").removeEventListener("click",Tenhand10Choose2C3);
        let GetHideBtn10R=document.getElementById("getBtn10");
    GetHideBtn10R.style.display="none";
    let GetHideBtn11C=document.getElementById("getBtn11C");
    GetHideBtn11C.style.display="inline-block";

} else if(collection4.length<5){
    collection4.push(hand10[2]);
    collection.push(hand10[2]);

    document.getElementById("collectionAnchor20");
    let ah8c1=document.createElement("img");
    ah8c1.src= `cardGameImages/${hand10[2].suit}${hand10[2].value}.png`;
    collectionAnchor20.appendChild(ah8c1);
    ah8c1.setAttribute("style","width:180px;");
    ah8c1.setAttribute("style","height:240px;");
    ah8c1.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Eighthand8Choose2C5);
        let GetHideBtn10R=document.getElementById("getBtn10");
        GetHideBtn10R.style.display="none";
        let GetHideBtn11C=document.getElementById("getBtn11C");
        GetHideBtn11C.style.display="inline-block";

} else {
    } 
};

function Tenhand10Choose2C4() {
    if(collection4.length<4){

    collection4.push(hand10[3]);
    collection.push(hand10[3]);

    document.getElementById("collectionAnchor19");
    let ah10c4=document.createElement("img");
    ah10c4.src= `cardGameImages/${hand10[3].suit}${hand10[3].value}.png`;
    collectionAnchor19.appendChild(ah10c4);
    ah10c4.setAttribute("style","width:180px;");
    ah10c4.setAttribute("style","height:240px;");
    ah10c4.setAttribute("style","padding:10px");
        document.getElementById("btn4").removeEventListener("click",Tenhand10Choose2C4);
        let GetHideBtn10R=document.getElementById("getBtn10");
    GetHideBtn10R.style.display="none";
    let GetHideBtn11C=document.getElementById("getBtn11C");
    GetHideBtn11C.style.display="inline-block";

} else if(collection4.length<5){
    collection4.push(hand10[3]);
    collection.push(hand10[3]);

    document.getElementById("collectionAnchor20");
    let ah8c1=document.createElement("img");
    ah8c1.src= `cardGameImages/${hand10[3].suit}${hand10[3].value}.png`;
    collectionAnchor20.appendChild(ah8c1);
    ah8c1.setAttribute("style","width:180px;");
    ah8c1.setAttribute("style","height:240px;");
    ah8c1.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Eighthand8Choose2C5);
        let GetHideBtn10R=document.getElementById("getBtn10");
        GetHideBtn10R.style.display="none";
        let GetHideBtn11C=document.getElementById("getBtn11C");
        GetHideBtn11C.style.display="inline-block";

} else {
    } 
};

function Tenhand10Choose2C5() {
    if(collection4.length<4){

    collection4.push(hand10[4]);
    collection.push(hand10[4]);

    document.getElementById("collectionAnchor19");
    let ah10c5=document.createElement("img");
    ah10c5.src= `cardGameImages/${hand10[4].suit}${hand10[4].value}.png`;
    collectionAnchor19.appendChild(ah10c5);
    ah10c5.setAttribute("style","width:180px;");
    ah10c5.setAttribute("style","height:240px;");
    ah10c5.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Tenhand10Choose2C5);
        let GetHideBtn10R=document.getElementById("getBtn10");
    GetHideBtn10R.style.display="none";
    let GetHideBtn11C=document.getElementById("getBtn11C");
    GetHideBtn11C.style.display="inline-block";

} else if(collection4.length<5){
    collection4.push(hand10[4]);
    collection.push(hand10[4]);

    document.getElementById("collectionAnchor20");
    let ah8c1=document.createElement("img");
    ah8c1.src= `cardGameImages/${hand10[4].suit}${hand10[4].value}.png`;
    collectionAnchor20.appendChild(ah8c1);
    ah8c1.setAttribute("style","width:180px;");
    ah8c1.setAttribute("style","height:240px;");
    ah8c1.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Eighthand8Choose2C5);
        let GetHideBtn10R=document.getElementById("getBtn10");
        GetHideBtn10R.style.display="none";
        let GetHideBtn11C=document.getElementById("getBtn11C");
        GetHideBtn11C.style.display="inline-block";

} else {
    } 
};

// clear hand10. get hand11 buttons.

function clearHand10(){
    let anchor9=document.getElementById("handAnchor");
    while(anchor9.firstChild){
        anchor9.removeChild(anchor9.firstChild);
    }


    let GetHideBtn11C=document.getElementById("getBtn11C");
    GetHideBtn11C.style.display="none";
    let GetHideBtn11=document.getElementById("getBtn11");
    GetHideBtn11.style.display="inline-block";
    let roundCounter=document.getElementById("round");

    roundCounter.innerHTML="This is Hand 11";
    roundCounter.setAttribute("style","font-size: 50px");
    roundCounter.style.textAlign="right";
    roundCounter.style.color="white";
};

// get hand 11

function showHand11 () {
    for (i=0; i<hand11.length; ++i) {
        document.getElementById("handAnchor");
        let h11c1=document.createElement("img");
        h11c1.setAttribute("style","padding:50px");
        h11c1.setAttribute("style","width:180px;");
        h11c1.setAttribute("style","height:240px;");
        h11c1.src= `cardGameImages/${hand11[i].suit}${hand11[i].value}.png`;
        handAnchor.appendChild(h11c1);
        let blankSpace=document.createElement("img");
        blankSpace.src="cardGameImages/padding.png";
        handAnchor.appendChild(blankSpace);
    }

    document.getElementById("round").innerHTML="This is Hand 11";
    round.setAttribute("style","font-size: 50px");
    round.style.textAlign="right";
    round.style.color="white";

    document.getElementById("btn1").addEventListener("click",Elevenhand11Choose2C1);
    document.getElementById("btn2").addEventListener("click",Elevenhand11Choose2C2);
    document.getElementById("btn3").addEventListener("click",Elevenhand11Choose2C3);
    document.getElementById("btn4").addEventListener("click",Elevenhand11Choose2C4);
    document.getElementById("btn5").addEventListener("click",Elevenhand11Choose2C5);
};



// hand 11 choose 2
function Elevenhand11Choose2C1() {
    if(collection5.length<1){

    collection5.push(hand11[0]);
    collection.push(hand11[0]);

    document.getElementById("collectionAnchor21");
    let ah11c1=document.createElement("img");
    ah11c1.src= `cardGameImages/${hand11[0].suit}${hand11[0].value}.png`;
    collectionAnchor21.appendChild(ah11c1);
    ah11c1.setAttribute("style","width:180px;");
    ah11c1.setAttribute("style","height:240px;");
    ah11c1.setAttribute("style","padding:10px");
        document.getElementById("btn1").removeEventListener("click",Elevenhand11Choose2C1);
        let GetHideBtn11R=document.getElementById("getBtn11");
    GetHideBtn11R.style.display="none";
    let GetHideBtn12C=document.getElementById("getBtn12C");
    GetHideBtn12C.style.display="inline-block";

    
} else if(collection5.length<2){
    collection5.push(hand11[0]);
    collection.push(hand11[0]);

    document.getElementById("collectionAnchor22");
    let ah8c1=document.createElement("img");
    ah8c1.src= `cardGameImages/${hand11[0].suit}${hand11[0].value}.png`;
    collectionAnchor22.appendChild(ah8c1);
    ah8c1.setAttribute("style","width:180px;");
    ah8c1.setAttribute("style","height:240px;");
    ah8c1.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Eighthand8Choose2C5);
        let GetHideBtn11R=document.getElementById("getBtn11");
    GetHideBtn11R.style.display="none";
    let GetHideBtn12C=document.getElementById("getBtn12C");
    GetHideBtn12C.style.display="inline-block";
} else {
    } 
};
function Elevenhand11Choose2C2() {
    if(collection5.length<1){

    collection5.push(hand11[1]);
    collection.push(hand11[1]);

    document.getElementById("collectionAnchor21");
    let ah11c2=document.createElement("img");
    ah11c2.src= `cardGameImages/${hand11[1].suit}${hand11[1].value}.png`;
    collectionAnchor21.appendChild(ah11c2);
    ah11c2.setAttribute("style","width:180px;");
    ah11c2.setAttribute("style","height:240px;");
    ah11c2.setAttribute("style","padding:10px");
        document.getElementById("btn2").removeEventListener("click",Elevenhand11Choose2C2);
        let GetHideBtn11R=document.getElementById("getBtn11");
    GetHideBtn11R.style.display="none";
    let GetHideBtn12C=document.getElementById("getBtn12C");
    GetHideBtn12C.style.display="inline-block";

} else if(collection5.length<2){
    collection5.push(hand11[1]);
    collection.push(hand11[1]);

    document.getElementById("collectionAnchor22");
    let ah8c1=document.createElement("img");
    ah8c1.src= `cardGameImages/${hand11[1].suit}${hand11[1].value}.png`;
    collectionAnchor22.appendChild(ah8c1);
    ah8c1.setAttribute("style","width:180px;");
    ah8c1.setAttribute("style","height:240px;");
    ah8c1.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Eighthand8Choose2C5);
        let GetHideBtn11R=document.getElementById("getBtn11");
    GetHideBtn11R.style.display="none";
    let GetHideBtn12C=document.getElementById("getBtn12C");
    GetHideBtn12C.style.display="inline-block";

} else {
    } 
};

function Elevenhand11Choose2C3() {
    if(collection5.length<1){

    collection5.push(hand10[2]);
    collection.push(hand10[2]);

    document.getElementById("collectionAnchor21");
    let ah11c3=document.createElement("img");
    ah11c3.src= `cardGameImages/${hand11[2].suit}${hand11[2].value}.png`;
    collectionAnchor21.appendChild(ah11c3);
    ah11c3.setAttribute("style","width:180px;");
    ah11c3.setAttribute("style","height:240px;");
    ah11c3.setAttribute("style","padding:10px");
        document.getElementById("btn3").removeEventListener("click",Elevenhand11Choose2C3);
        let GetHideBtn11R=document.getElementById("getBtn11");
    GetHideBtn11R.style.display="none";
    let GetHideBtn12C=document.getElementById("getBtn12C");
    GetHideBtn12C.style.display="inline-block";

} else if(collection5.length<2){
    collection5.push(hand11[2]);
    collection.push(hand11[2]);

    document.getElementById("collectionAnchor22");
    let ah8c1=document.createElement("img");
    ah8c1.src= `cardGameImages/${hand11[2].suit}${hand11[2].value}.png`;
    collectionAnchor22.appendChild(ah8c1);
    ah8c1.setAttribute("style","width:180px;");
    ah8c1.setAttribute("style","height:240px;");
    ah8c1.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Eighthand8Choose2C5);
        let GetHideBtn11R=document.getElementById("getBtn11");
    GetHideBtn11R.style.display="none";
    let GetHideBtn12C=document.getElementById("getBtn12C");
    GetHideBtn12C.style.display="inline-block";

} else {
    } 
};

function Elevenhand11Choose2C4() {
    if(collection5.length<1){

    collection5.push(hand11[3]);
    collection.push(hand11[3]);

    document.getElementById("collectionAnchor21");
    let ah11c4=document.createElement("img");
    ah11c4.src= `cardGameImages/${hand11[3].suit}${hand11[3].value}.png`;
    collectionAnchor21.appendChild(ah11c4);
    ah11c4.setAttribute("style","width:180px;");
    ah11c4.setAttribute("style","height:240px;");
    ah11c4.setAttribute("style","padding:10px");
        document.getElementById("btn4").removeEventListener("click",Elevenhand11Choose2C4);
        let GetHideBtn11R=document.getElementById("getBtn11");
    GetHideBtn11R.style.display="none";
    let GetHideBtn12C=document.getElementById("getBtn12C");
    GetHideBtn12C.style.display="inline-block";

} else if(collection5.length<2){
    collection5.push(hand11[3]);
    collection.push(hand11[3]);

    document.getElementById("collectionAnchor22");
    let ah8c1=document.createElement("img");
    ah8c1.src= `cardGameImages/${hand11[3].suit}${hand11[3].value}.png`;
    collectionAnchor22.appendChild(ah8c1);
    ah8c1.setAttribute("style","width:180px;");
    ah8c1.setAttribute("style","height:240px;");
    ah8c1.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Eighthand8Choose2C5);
        let GetHideBtn11R=document.getElementById("getBtn11");
    GetHideBtn11R.style.display="none";
    let GetHideBtn12C=document.getElementById("getBtn12C");
    GetHideBtn12C.style.display="inline-block";

} else {
    } 
};

function Elevenhand11Choose2C5() {
    if(collection5.length<1){

    collection5.push(hand11[4]);
    collection.push(hand11[4]);

    document.getElementById("collectionAnchor21");
    let ah11c5=document.createElement("img");
    ah11c5.src= `cardGameImages/${hand11[4].suit}${hand11[4].value}.png`;
    collectionAnchor21.appendChild(ah11c5);
    ah11c5.setAttribute("style","width:180px;");
    ah11c5.setAttribute("style","height:240px;");
    ah11c5.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Elevenhand11Choose2C5);
        let GetHideBtn11R=document.getElementById("getBtn11");
    GetHideBtn11R.style.display="none";
    let GetHideBtn12C=document.getElementById("getBtn12C");
    GetHideBtn12C.style.display="inline-block";

} else if(collection5.length<2){
    collection5.push(hand11[4]);
    collection.push(hand11[4]);

    document.getElementById("collectionAnchor22");
    let ah8c1=document.createElement("img");
    ah8c1.src= `cardGameImages/${hand11[4].suit}${hand11[4].value}.png`;
    collectionAnchor22.appendChild(ah8c1);
    ah8c1.setAttribute("style","width:180px;");
    ah8c1.setAttribute("style","height:240px;");
    ah8c1.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Eighthand8Choose2C5);
        let GetHideBtn11R=document.getElementById("getBtn11");
    GetHideBtn11R.style.display="none";
    let GetHideBtn12C=document.getElementById("getBtn12C");
    GetHideBtn12C.style.display="inline-block";

} else {
    } 
};

// clear hand11. get hand12 buttons.
function clearHand11(){
    let anchor10=document.getElementById("handAnchor");
    while(anchor10.firstChild){
        anchor10.removeChild(anchor10.firstChild);
    }

  

    let GetHideBtn12C=document.getElementById("getBtn12C");
    GetHideBtn12C.style.display="none";
    let GetHideBtn12=document.getElementById("getBtn12");
    GetHideBtn12.style.display="inline-block";
    let roundCounter=document.getElementById("round");

    roundCounter.innerHTML="This is Hand 12";
    roundCounter.setAttribute("style","font-size: 50px");
    roundCounter.style.textAlign="right";
    roundCounter.style.color="white";
};

// get hand 12

function showHand12 () {
    for (i=0; i<hand12.length; ++i) {
        document.getElementById("handAnchor");
        let h12c1=document.createElement("img");
        h12c1.setAttribute("style","padding:50px");
        h12c1.setAttribute("style","width:180px;");
        h12c1.setAttribute("style","height:240px;");
        h12c1.src= `cardGameImages/${hand12[i].suit}${hand12[i].value}.png`;
        handAnchor.appendChild(h12c1);
        let blankSpace=document.createElement("img");
        blankSpace.src="cardGameImages/padding.png";
        handAnchor.appendChild(blankSpace);
    }

    document.getElementById("round").innerHTML="This is Hand 12";
    round.setAttribute("style","font-size: 50px");
    round.style.textAlign="right";
    round.style.color="white";

    document.getElementById("btn1").addEventListener("click",Twelvehand12Choose2C1);
    document.getElementById("btn2").addEventListener("click",Twelvehand12Choose2C2);
    document.getElementById("btn3").addEventListener("click",Twelvehand12Choose2C3);
    document.getElementById("btn4").addEventListener("click",Twelvehand12Choose2C4);
    document.getElementById("btn5").addEventListener("click",Twelvehand12Choose2C5);
};


// hand 12 choose 2

function Twelvehand12Choose2C1() {
    if(collection5.length<3){

    collection5.push(hand12[0]);
    collection.push(hand12[0]);

    document.getElementById("collectionAnchor23");
    let ah12c1=document.createElement("img");
    ah12c1.src= `cardGameImages/${hand12[0].suit}${hand12[0].value}.png`;
    collectionAnchor23.appendChild(ah12c1);
    ah12c1.setAttribute("style","width:180px;");
    ah12c1.setAttribute("style","height:240px;");
    ah12c1.setAttribute("style","padding:10px");
        document.getElementById("btn1").removeEventListener("click",Twelvehand12Choose2C1);
        let GetHideBtn12R=document.getElementById("getBtn12");
    GetHideBtn12R.style.display="none";
    let GetHideBtn13C=document.getElementById("getBtn13C");
    GetHideBtn13C.style.display="inline-block";

} else if(collection5.length<4){
    collection5.push(hand12[0]);
    collection.push(hand12[0]);

    document.getElementById("collectionAnchor24");
    let ah8c1=document.createElement("img");
    ah8c1.src= `cardGameImages/${hand12[0].suit}${hand12[0].value}.png`;
    collectionAnchor24.appendChild(ah8c1);
    ah8c1.setAttribute("style","width:180px;");
    ah8c1.setAttribute("style","height:240px;");
    ah8c1.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Eighthand8Choose2C5);
        let GetHideBtn12R=document.getElementById("getBtn12");
        GetHideBtn12R.style.display="none";
        let GetHideBtn13C=document.getElementById("getBtn13C");
        GetHideBtn13C.style.display="inline-block";


} else {
    } 
};

function Twelvehand12Choose2C2() {
    if(collection5.length<3){

    collection5.push(hand12[1]);
    collection.push(hand12[1]);

    document.getElementById("collectionAnchor23");
    let ah12c2=document.createElement("img");
    ah12c2.src= `cardGameImages/${hand12[1].suit}${hand12[1].value}.png`;
    collectionAnchor23.appendChild(ah12c2);
    ah12c2.setAttribute("style","width:180px;");
    ah12c2.setAttribute("style","height:240px;");
    ah12c2.setAttribute("style","padding:10px");
        document.getElementById("btn2").removeEventListener("click",Twelvehand12Choose2C2);
        let GetHideBtn12R=document.getElementById("getBtn12");
    GetHideBtn12R.style.display="none";
    let GetHideBtn13C=document.getElementById("getBtn13C");
    GetHideBtn13C.style.display="inline-block";

} else if(collection5.length<4){
    collection5.push(hand12[1]);
    collection.push(hand12[1]);

    document.getElementById("collectionAnchor24");
    let ah8c1=document.createElement("img");
    ah8c1.src= `cardGameImages/${hand12[1].suit}${hand12[1].value}.png`;
    collectionAnchor24.appendChild(ah8c1);
    ah8c1.setAttribute("style","width:180px;");
    ah8c1.setAttribute("style","height:240px;");
    ah8c1.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Eighthand8Choose2C5);
        let GetHideBtn12R=document.getElementById("getBtn12");
        GetHideBtn12R.style.display="none";
        let GetHideBtn13C=document.getElementById("getBtn13C");
        GetHideBtn13C.style.display="inline-block";

} else {
    } 
};

function Twelvehand12Choose2C3() {
    if(collection5.length<3){

    collection5.push(hand12[2]);
    collection.push(hand12[2]);

    document.getElementById("collectionAnchor23");
    let ah12c3=document.createElement("img");
    ah12c3.src= `cardGameImages/${hand12[2].suit}${hand12[2].value}.png`;
    collectionAnchor23.appendChild(ah12c3);
    ah12c3.setAttribute("style","width:180px;");
    ah12c3.setAttribute("style","height:240px;");
    ah12c3.setAttribute("style","padding:10px");
        document.getElementById("btn3").removeEventListener("click",Twelvehand12Choose2C3);
        let GetHideBtn12R=document.getElementById("getBtn12");
    GetHideBtn12R.style.display="none";
    let GetHideBtn13C=document.getElementById("getBtn13C");
    GetHideBtn13C.style.display="inline-block";

} else if(collection5.length<4){
    collection5.push(hand12[2]);
    collection.push(hand12[2]);

    document.getElementById("collectionAnchor24");
    let ah8c1=document.createElement("img");
    ah8c1.src= `cardGameImages/${hand12[2].suit}${hand12[2].value}.png`;
    collectionAnchor24.appendChild(ah8c1);
    ah8c1.setAttribute("style","width:180px;");
    ah8c1.setAttribute("style","height:240px;");
    ah8c1.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Eighthand8Choose2C5);
        let GetHideBtn12R=document.getElementById("getBtn12");
        GetHideBtn12R.style.display="none";
        let GetHideBtn13C=document.getElementById("getBtn13C");
        GetHideBtn13C.style.display="inline-block";

} else {
    } 
};

function Twelvehand12Choose2C4() {
    if(collection5.length<3){

    collection5.push(hand12[3]);
    collection.push(hand12[3]);

    document.getElementById("collectionAnchor23");
    let ah12c4=document.createElement("img");
    ah12c4.src= `cardGameImages/${hand12[3].suit}${hand12[3].value}.png`;
    collectionAnchor23.appendChild(ah12c4);
    ah12c4.setAttribute("style","width:180px;");
    ah12c4.setAttribute("style","height:240px;");
    ah12c4.setAttribute("style","padding:10px");
        document.getElementById("btn4").removeEventListener("click",Twelvehand12Choose2C4);
        let GetHideBtn12R=document.getElementById("getBtn12");
    GetHideBtn12R.style.display="none";
    let GetHideBtn13C=document.getElementById("getBtn13C");
    GetHideBtn13C.style.display="inline-block";

} else if(collection5.length<4){
    collection5.push(hand12[3]);
    collection.push(hand12[3]);

    document.getElementById("collectionAnchor24");
    let ah8c1=document.createElement("img");
    ah8c1.src= `cardGameImages/${hand12[3].suit}${hand12[3].value}.png`;
    collectionAnchor24.appendChild(ah8c1);
    ah8c1.setAttribute("style","width:180px;");
    ah8c1.setAttribute("style","height:240px;");
    ah8c1.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Eighthand8Choose2C5);
        let GetHideBtn12R=document.getElementById("getBtn12");
        GetHideBtn12R.style.display="none";
        let GetHideBtn13C=document.getElementById("getBtn13C");
        GetHideBtn13C.style.display="inline-block";

} else {
    } 
};

function Twelvehand12Choose2C5() {
    if(collection5.length<3){

    collection5.push(hand12[4]);
    collection.push(hand12[4]);

    document.getElementById("collectionAnchor23");
    let ah12c5=document.createElement("img");
    ah12c5.src= `cardGameImages/${hand12[4].suit}${hand12[4].value}.png`;
    collectionAnchor23.appendChild(ah12c5);
    ah12c5.setAttribute("style","width:180px;");
    ah12c5.setAttribute("style","height:240px;");
    ah12c5.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Twelvehand12Choose2C5);
        let GetHideBtn12R=document.getElementById("getBtn12");
    GetHideBtn12R.style.display="none";
    let GetHideBtn13C=document.getElementById("getBtn13C");
    GetHideBtn13C.style.display="inline-block";

} else if(collection5.length<4){
    collection5.push(hand12[4]);
    collection.push(hand12[4]);

    document.getElementById("collectionAnchor24");
    let ah8c1=document.createElement("img");
    ah8c1.src= `cardGameImages/${hand12[4].suit}${hand12[4].value}.png`;
    collectionAnchor24.appendChild(ah8c1);
    ah8c1.setAttribute("style","width:180px;");
    ah8c1.setAttribute("style","height:240px;");
    ah8c1.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Eighthand8Choose2C5);
        let GetHideBtn12R=document.getElementById("getBtn12");
        GetHideBtn12R.style.display="none";
        let GetHideBtn13C=document.getElementById("getBtn13C");
        GetHideBtn13C.style.display="inline-block";

} else {
    } 
};

// clear hand12. get hand13 buttons.
function clearHand12(){
    let anchor11=document.getElementById("handAnchor");
    while(anchor11.firstChild){
        anchor11.removeChild(anchor11.firstChild);
    }


    let GetHideBtn13C=document.getElementById("getBtn13C");
    GetHideBtn13C.style.display="none";
    let GetHideBtn13=document.getElementById("getBtn13");
    GetHideBtn13.style.display="inline-block";

    let roundCounter=document.getElementById("round");

    roundCounter.innerHTML="This is Hand 13";
    roundCounter.setAttribute("style","font-size: 50px");
    roundCounter.style.textAlign="right";
    roundCounter.style.color="white";
};

// get hand 13
function showHand13 () {
    for (i=0; i<hand13.length; ++i) {
        document.getElementById("handAnchor");
        let h13c1=document.createElement("img");
        h13c1.setAttribute("style","padding:50px");
        h13c1.setAttribute("style","width:180px;");
        h13c1.setAttribute("style","height:240px;");
        h13c1.src= `cardGameImages/${hand13[i].suit}${hand13[i].value}.png`;
        handAnchor.appendChild(h13c1);
        let blankSpace=document.createElement("img");
        blankSpace.src="cardGameImages/padding.png";
        handAnchor.appendChild(blankSpace);
    }

    document.getElementById("round").innerHTML="This is Hand 13";
    round.setAttribute("style","font-size: 50px");
    round.style.textAlign="right";
    round.style.color="white";

    document.getElementById("btn1").addEventListener("click",Thirteenhand13Choose2C1);
    document.getElementById("btn2").addEventListener("click",Thirteenhand13Choose2C2);
    document.getElementById("btn3").addEventListener("click",Thirteenhand13Choose2C3);
    document.getElementById("btn4").addEventListener("click",Thirteenhand13Choose2C4);
    document.getElementById("btn5").addEventListener("click",Thirteenhand13Choose2C5);
};


// hand 13 choose 2
function Thirteenhand13Choose2C1() {
    if(collection5.length<5){

    collection5.push(hand13[0]);
    collection.push(hand13[0]);

    document.getElementById("collectionAnchor25");
    let ah13c1=document.createElement("img");
    ah13c1.src= `cardGameImages/${hand13[0].suit}${hand13[0].value}.png`;
    collectionAnchor25.appendChild(ah13c1);
    ah13c1.setAttribute("style","width:180px;");
    ah13c1.setAttribute("style","height:240px;");
    ah13c1.setAttribute("style","padding:10px");
        document.getElementById("btn1").removeEventListener("click",Thirteenhand13Choose2C1);
        let GetHideBtn13R=document.getElementById("getBtn13");
        GetHideBtn13R.style.display="none";
        let GetHideBtn14C=document.getElementById("getBtn14C");
        GetHideBtn14C.style.display="inline-block";

    
    } else if(collection6.length<1){
    collection6.push(hand13[0]);
    collection.push(hand13[0]);

    document.getElementById("collectionAnchor26");
    let ah13c1=document.createElement("img");
    ah13c1.src= `cardGameImages/${hand13[0].suit}${hand13[0].value}.png`;
    collectionAnchor26.appendChild(ah13c1);
    ah13c1.setAttribute("style","width:180px;");
    ah13c1.setAttribute("style","height:240px;");
    ah13c1.setAttribute("style","padding:10px");
        document.getElementById("btn1").removeEventListener("click",Thirteenhand13Choose2C1);
        let GetHideBtn13R=document.getElementById("getBtn13");
        GetHideBtn13R.style.display="none";
        let GetHideBtn14C=document.getElementById("getBtn14C");
        GetHideBtn14C.style.display="inline-block";


} else {
    } 
};
function Thirteenhand13Choose2C2() {
    if(collection5.length<5){

    collection5.push(hand13[1]);
    collection.push(hand13[1]);

    document.getElementById("collectionAnchor25");
    let ah13c2=document.createElement("img");
    ah13c2.src= `cardGameImages/${hand13[1].suit}${hand13[1].value}.png`;
    collectionAnchor25.appendChild(ah13c2);
    ah13c2.setAttribute("style","width:180px;");
    ah13c2.setAttribute("style","height:240px;");
    ah13c2.setAttribute("style","padding:10px");
        document.getElementById("btn2").removeEventListener("click",Thirteenhand13Choose2C2);
        let GetHideBtn13R=document.getElementById("getBtn13");
        GetHideBtn13R.style.display="none";
        let GetHideBtn14C=document.getElementById("getBtn14C");
        GetHideBtn14C.style.display="inline-block";

} else if(collection6.length<1){
    collection6.push(hand13[1]);
    collection.push(hand13[1]);

    document.getElementById("collectionAnchor26");
    let ah13c2=document.createElement("img");
    ah13c2.src= `cardGameImages/${hand13[1].suit}${hand13[1].value}.png`;
    collectionAnchor26.appendChild(ah13c2);
    ah13c2.setAttribute("style","width:180px;");
    ah13c2.setAttribute("style","height:240px;");
    ah13c2.setAttribute("style","padding:10px");
        document.getElementById("btn2").removeEventListener("click",Thirteenhand13Choose2C2);
        let GetHideBtn13R=document.getElementById("getBtn13");
        GetHideBtn13R.style.display="none";
        let GetHideBtn14C=document.getElementById("getBtn14C");
        GetHideBtn14C.style.display="inline-block";

} else {
    } 
};

function Thirteenhand13Choose2C3() {
    if(collection5.length<5){

    collection5.push(hand13[2]);
    collection.push(hand13[2]);

    document.getElementById("collectionAnchor25");
    let ah13c3=document.createElement("img");
    ah13c3.src= `cardGameImages/${hand13[2].suit}${hand13[2].value}.png`;
    collectionAnchor25.appendChild(ah13c3);
    ah13c3.setAttribute("style","width:180px;");
    ah13c3.setAttribute("style","height:240px;");
    ah13c3.setAttribute("style","padding:10px");
        document.getElementById("btn3").removeEventListener("click",Thirteenhand13Choose2C3);
        let GetHideBtn13R=document.getElementById("getBtn13");
        GetHideBtn13R.style.display="none";
        let GetHideBtn14C=document.getElementById("getBtn14C");
        GetHideBtn14C.style.display="inline-block";

} else if(collection6.length<1){
    collection6.push(hand13[2]);
    collection.push(hand13[2]);

    document.getElementById("collectionAnchor26");
    let ah13c3=document.createElement("img");
    ah13c3.src= `cardGameImages/${hand13[2].suit}${hand13[2].value}.png`;
    collectionAnchor26.appendChild(ah13c3);
    ah13c3.setAttribute("style","width:180px;");
    ah13c3.setAttribute("style","height:240px;");
    ah13c3.setAttribute("style","padding:10px");
        document.getElementById("btn3").removeEventListener("click",Thirteenhand13Choose2C3);
        let GetHideBtn13R=document.getElementById("getBtn13");
        GetHideBtn13R.style.display="none";
        let GetHideBtn14C=document.getElementById("getBtn14C");
        GetHideBtn14C.style.display="inline-block";

} else {
    } 
};

function Thirteenhand13Choose2C4() {
    if(collection5.length<5){

    collection5.push(hand13[3]);
    collection.push(hand13[3]);

    document.getElementById("collectionAnchor25");
    let ah13c4=document.createElement("img");
    ah13c4.src= `cardGameImages/${hand13[3].suit}${hand13[3].value}.png`;
    collectionAnchor25.appendChild(ah13c4);
    ah13c4.setAttribute("style","width:180px;");
    ah13c4.setAttribute("style","height:240px;");
    ah13c4.setAttribute("style","padding:10px");
        document.getElementById("btn4").removeEventListener("click",Thirteenhand13Choose2C4);
        let GetHideBtn13R=document.getElementById("getBtn13");
        GetHideBtn13R.style.display="none";
        let GetHideBtn14C=document.getElementById("getBtn14C");
        GetHideBtn14C.style.display="inline-block";

} else if(collection6.length<1){
    collection6.push(hand13[3]);
    collection.push(hand13[3]);

    document.getElementById("collectionAnchor26");
    let ah13c4=document.createElement("img");
    ah13c4.src= `cardGameImages/${hand13[3].suit}${hand13[3].value}.png`;
    collectionAnchor26.appendChild(ah13c4);
    ah13c4.setAttribute("style","width:180px;");
    ah13c4.setAttribute("style","height:240px;");
    ah13c4.setAttribute("style","padding:10px");
        document.getElementById("btn4").removeEventListener("click",Thirteenhand13Choose2C4);
        let GetHideBtn13R=document.getElementById("getBtn13");
        GetHideBtn13R.style.display="none";
        let GetHideBtn14C=document.getElementById("getBtn14C");
        GetHideBtn14C.style.display="inline-block";

} else {
    } 
};

function Thirteenhand13Choose2C5() {
    if(collection5.length<5){

    collection5.push(hand13[4]);
    collection.push(hand13[4]);

    document.getElementById("collectionAnchor25");
    let ah13c5=document.createElement("img");
    ah13c5.src= `cardGameImages/${hand13[4].suit}${hand13[4].value}.png`;
    collectionAnchor25.appendChild(ah13c5);
    ah13c5.setAttribute("style","width:180px;");
    ah13c5.setAttribute("style","height:240px;");
    ah13c5.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Thirteenhand13Choose2C5);
        let GetHideBtn13R=document.getElementById("getBtn13");
        GetHideBtn13R.style.display="none";
        let GetHideBtn14C=document.getElementById("getBtn14C");
        GetHideBtn14C.style.display="inline-block";

} else if(collection6.length<1){
    collection6.push(hand13[4]);
    collection.push(hand13[4]);

    document.getElementById("collectionAnchor26");
    let ah13c5=document.createElement("img");
    ah13c5.src= `cardGameImages/${hand13[4].suit}${hand13[4].value}.png`;
    collectionAnchor26.appendChild(ah13c5);
    ah13c5.setAttribute("style","width:180px;");
    ah13c5.setAttribute("style","height:240px;");
    ah13c5.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Thirteenhand13Choose2C5);
        let GetHideBtn13R=document.getElementById("getBtn13");
        GetHideBtn13R.style.display="none";
        let GetHideBtn14C=document.getElementById("getBtn14C");
        GetHideBtn14C.style.display="inline-block";
} else {
    } 
};

// clear hand13. get hand14 buttons.

function clearHand13(){
    let anchor12=document.getElementById("handAnchor");
    while(anchor12.firstChild){
        anchor12.removeChild(anchor12.firstChild);
    }


    let GetHideBtn14C=document.getElementById("getBtn14C");
    GetHideBtn14C.style.display="none";
    let GetHideBtn14=document.getElementById("getBtn14");
    GetHideBtn14.style.display="inline-block";
    let roundCounter=document.getElementById("round");

    roundCounter.innerHTML="This is Hand 14";
    roundCounter.setAttribute("style","font-size: 50px");
    roundCounter.style.textAlign="right";
    roundCounter.style.color="white";
};

// get hand 14

function showHand14 () {
    for (i=0; i<hand14.length; ++i) {
        document.getElementById("handAnchor");
        let h14c1=document.createElement("img");
        h14c1.setAttribute("style","padding:50px");
        h14c1.setAttribute("style","width:180px;");
        h14c1.setAttribute("style","height:240px;");
        h14c1.src= `cardGameImages/${hand14[i].suit}${hand14[i].value}.png`;
        handAnchor.appendChild(h14c1);
        let blankSpace=document.createElement("img");
        blankSpace.src="cardGameImages/padding.png";
        handAnchor.appendChild(blankSpace);
    }

    document.getElementById("round").innerHTML="This is Hand 14";
    round.setAttribute("style","font-size: 50px");
    round.style.textAlign="right";
    round.style.color="white";

    document.getElementById("btn1").addEventListener("click",Fourteenhand14Choose2C1);
    document.getElementById("btn2").addEventListener("click",Fourteenhand14Choose2C2);
    document.getElementById("btn3").addEventListener("click",Fourteenhand14Choose2C3);
    document.getElementById("btn4").addEventListener("click",Fourteenhand14Choose2C4);
    document.getElementById("btn5").addEventListener("click",Fourteenhand14Choose2C5);
};

//hand14 choose2
function Fourteenhand14Choose2C1() {
    if(collection6.length<2){

    collection6.push(hand14[0]);
    collection.push(hand14[0]);

    document.getElementById("collectionAnchor27");
    let ah14c1=document.createElement("img");
    ah14c1.src= `cardGameImages/${hand14[0].suit}${hand14[0].value}.png`;
    collectionAnchor27.appendChild(ah14c1);
    ah14c1.setAttribute("style","width:180px;");
    ah14c1.setAttribute("style","height:240px;");
    ah14c1.setAttribute("style","padding:10px");
        document.getElementById("btn1").removeEventListener("click",Fourteenhand14Choose2C1);
        let GetHideBtn14=document.getElementById("getBtn14");
    GetHideBtn14.style.display="none";

} else if(collection6.length<3){
    collection6.push(hand14[0]);
    collection.push(hand14[0]);

    document.getElementById("collectionAnchor28");
    let ah13c5=document.createElement("img");
    ah13c5.src= `cardGameImages/${hand14[0].suit}${hand14[0].value}.png`;
    collectionAnchor28.appendChild(ah13c5);
    ah13c5.setAttribute("style","width:180px;");
    ah13c5.setAttribute("style","height:240px;");
    ah13c5.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Thirteenhand13Choose2C5);
        let showConfirm=document.getElementById("confirmButton");
        showConfirm.style.display="inline-block";
        let handTakeAway=document.getElementById("handAnchor");
    let buttonsHandTakeAway=document.getElementById("buttonsAnchor");
    let roundHandTakeAway=document.getElementById("round");


    while(handTakeAway.firstChild){
        handTakeAway.removeChild(handTakeAway.firstChild);
    }

    while(buttonsHandTakeAway.firstChild){
        buttonsHandTakeAway.removeChild(buttonsHandTakeAway.firstChild);
    }

    while(roundHandTakeAway.firstChild){
        roundHandTakeAway.removeChild(roundHandTakeAway.firstChild);
    }

    let scoreShowLabel=document.getElementById("scoreLabel");
    scoreShowLabel.style.display="inline-block";

    let scoreShow=document.getElementById("score");
    scoreShow.style.display="inline-block";

    let hideGoToEval=document.getElementById("confirmButton");
    hideGoToEval.style.display="inline-block";
        

} else {
    } 
};
function Fourteenhand14Choose2C2() {
    if(collection6.length<2){

    collection6.push(hand14[1]);
    collection.push(hand14[1]);

    document.getElementById("collectionAnchor27");
    let ah14c2=document.createElement("img");
    ah14c2.src= `cardGameImages/${hand14[1].suit}${hand14[1].value}.png`;
    collectionAnchor27.appendChild(ah14c2);
    ah14c2.setAttribute("style","width:180px;");
    ah14c2.setAttribute("style","height:240px;");
    ah14c2.setAttribute("style","padding:10px");
        document.getElementById("btn2").removeEventListener("click",Fourteenhand14Choose2C2);
        let GetHideBtn14=document.getElementById("getBtn14");
    GetHideBtn14.style.display="none";

} else if(collection6.length<3){
    collection6.push(hand14[1]);
    collection.push(hand14[1]);

    document.getElementById("collectionAnchor28");
    let ah13c5=document.createElement("img");
    ah13c5.src= `cardGameImages/${hand14[1].suit}${hand14[1].value}.png`;
    collectionAnchor28.appendChild(ah13c5);
    ah13c5.setAttribute("style","width:180px;");
    ah13c5.setAttribute("style","height:240px;");
    ah13c5.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Thirteenhand13Choose2C5);
        let showConfirm=document.getElementById("confirmButton");
        showConfirm.style.display="inline-block";
        let handTakeAway=document.getElementById("handAnchor");
    let buttonsHandTakeAway=document.getElementById("buttonsAnchor");
    let roundHandTakeAway=document.getElementById("round");


    while(handTakeAway.firstChild){
        handTakeAway.removeChild(handTakeAway.firstChild);
    }

    while(buttonsHandTakeAway.firstChild){
        buttonsHandTakeAway.removeChild(buttonsHandTakeAway.firstChild);
    }

    while(roundHandTakeAway.firstChild){
        roundHandTakeAway.removeChild(roundHandTakeAway.firstChild);
    }

    let scoreShowLabel=document.getElementById("scoreLabel");
    scoreShowLabel.style.display="inline-block";

    let scoreShow=document.getElementById("score");
    scoreShow.style.display="inline-block";

    let hideGoToEval=document.getElementById("confirmButton");
    hideGoToEval.style.display="inline-block";

} else {
    } 
};

function Fourteenhand14Choose2C3() {
    if(collection6.length<2){

    collection6.push(hand14[2]);
    collection.push(hand14[2]);

    document.getElementById("collectionAnchor27");
    let ah14c3=document.createElement("img");
    ah14c3.src= `cardGameImages/${hand14[2].suit}${hand14[2].value}.png`;
    collectionAnchor27.appendChild(ah14c3);
    ah14c3.setAttribute("style","width:180px;");
    ah14c3.setAttribute("style","height:240px;");
    ah14c3.setAttribute("style","padding:10px");
        document.getElementById("btn3").removeEventListener("click",Fourteenhand14Choose2C3);
        let GetHideBtn14=document.getElementById("getBtn14");
    GetHideBtn14.style.display="none";

} else if(collection6.length<3){
    collection6.push(hand14[2]);
    collection.push(hand14[2]);

    document.getElementById("collectionAnchor28");
    let ah13c5=document.createElement("img");
    ah13c5.src= `cardGameImages/${hand14[2].suit}${hand14[2].value}.png`;
    collectionAnchor28.appendChild(ah13c5);
    ah13c5.setAttribute("style","width:180px;");
    ah13c5.setAttribute("style","height:240px;");
    ah13c5.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Thirteenhand13Choose2C5);
        let showConfirm=document.getElementById("confirmButton");
        showConfirm.style.display="inline-block";
        let handTakeAway=document.getElementById("handAnchor");
    let buttonsHandTakeAway=document.getElementById("buttonsAnchor");
    let roundHandTakeAway=document.getElementById("round");


    while(handTakeAway.firstChild){
        handTakeAway.removeChild(handTakeAway.firstChild);
    }

    while(buttonsHandTakeAway.firstChild){
        buttonsHandTakeAway.removeChild(buttonsHandTakeAway.firstChild);
    }

    while(roundHandTakeAway.firstChild){
        roundHandTakeAway.removeChild(roundHandTakeAway.firstChild);
    }

    let scoreShowLabel=document.getElementById("scoreLabel");
    scoreShowLabel.style.display="inline-block";

    let scoreShow=document.getElementById("score");
    scoreShow.style.display="inline-block";

    let hideGoToEval=document.getElementById("confirmButton");
    hideGoToEval.style.display="inline-block";
} else {
    } 
};

function Fourteenhand14Choose2C4() {
    if(collection6.length<2){

    collection6.push(hand14[3]);
    collection.push(hand14[3]);

    document.getElementById("collectionAnchor27");
    let ah14c4=document.createElement("img");
    ah14c4.src= `cardGameImages/${hand14[3].suit}${hand14[3].value}.png`;
    collectionAnchor27.appendChild(ah14c4);
    ah14c4.setAttribute("style","width:180px;");
    ah14c4.setAttribute("style","height:240px;");
    ah14c4.setAttribute("style","padding:10px");
        document.getElementById("btn4").removeEventListener("click",Fourteenhand14Choose2C4);
        let GetHideBtn14=document.getElementById("getBtn14");
    GetHideBtn14.style.display="none";

} else if(collection6.length<3){
    collection6.push(hand14[3]);
    collection.push(hand14[3]);

    document.getElementById("collectionAnchor28");
    let ah13c5=document.createElement("img");
    ah13c5.src= `cardGameImages/${hand14[3].suit}${hand14[3].value}.png`;
    collectionAnchor28.appendChild(ah13c5);
    ah13c5.setAttribute("style","width:180px;");
    ah13c5.setAttribute("style","height:240px;");
    ah13c5.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Thirteenhand13Choose2C5);
        let showConfirm=document.getElementById("confirmButton");
        showConfirm.style.display="inline-block";
        
        let handTakeAway=document.getElementById("handAnchor");
        let buttonsHandTakeAway=document.getElementById("buttonsAnchor");
        let roundHandTakeAway=document.getElementById("round");
    
    
        while(handTakeAway.firstChild){
            handTakeAway.removeChild(handTakeAway.firstChild);
        }
    
        while(buttonsHandTakeAway.firstChild){
            buttonsHandTakeAway.removeChild(buttonsHandTakeAway.firstChild);
        }
    
        while(roundHandTakeAway.firstChild){
            roundHandTakeAway.removeChild(roundHandTakeAway.firstChild);
        }
    
        let scoreShowLabel=document.getElementById("scoreLabel");
        scoreShowLabel.style.display="inline-block";
    
        let scoreShow=document.getElementById("score");
        scoreShow.style.display="inline-block";
    
        let hideGoToEval=document.getElementById("confirmButton");
        hideGoToEval.style.display="inline-block";
} else {
    } 
};

function Fourteenhand14Choose2C5() {
    if(collection6.length<2){

    collection6.push(hand14[4]);
    collection.push(hand14[4]);

    document.getElementById("collectionAnchor27");
    let ah14c5=document.createElement("img");
    ah14c5.src= `cardGameImages/${hand14[4].suit}${hand14[4].value}.png`;
    collectionAnchor27.appendChild(ah14c5);
    ah14c5.setAttribute("style","width:180px;");
    ah14c5.setAttribute("style","height:240px;");
    ah14c5.setAttribute("style","padding:10px");
        document.getElementById("btn5").removeEventListener("click",Fourteenhand14Choose2C5);
            let GetHideBtn14=document.getElementById("getBtn14");
        GetHideBtn14.style.display="none";

    } else if(collection6.length<3){
        collection6.push(hand14[4]);
        collection.push(hand14[4]);

        document.getElementById("collectionAnchor28");
        let ah13c5=document.createElement("img");
        ah13c5.src= `cardGameImages/${hand14[4].suit}${hand14[4].value}.png`;
        collectionAnchor28.appendChild(ah13c5);
        ah13c5.setAttribute("style","width:180px;");
        ah13c5.setAttribute("style","height:240px;");
        ah13c5.setAttribute("style","padding:10px");
            document.getElementById("btn5").removeEventListener("click",Thirteenhand13Choose2C5);
            let showConfirm=document.getElementById("confirmButton");
            showConfirm.style.display="inline-block";
            let handTakeAway=document.getElementById("handAnchor");
    let buttonsHandTakeAway=document.getElementById("buttonsAnchor");
    let roundHandTakeAway=document.getElementById("round");


    while(handTakeAway.firstChild){
        handTakeAway.removeChild(handTakeAway.firstChild);
    }

    while(buttonsHandTakeAway.firstChild){
        buttonsHandTakeAway.removeChild(buttonsHandTakeAway.firstChild);
    }

    while(roundHandTakeAway.firstChild){
        roundHandTakeAway.removeChild(roundHandTakeAway.firstChild);
    }

    let scoreShowLabel=document.getElementById("scoreLabel");
    scoreShowLabel.style.display="inline-block";

    let scoreShow=document.getElementById("score");
    scoreShow.style.display="inline-block";

    let hideGoToEval=document.getElementById("confirmButton");
    hideGoToEval.style.display="inline-block";

} else {
    } 
};




function getValue1(){
    if(valuesTest1.length<2){
        valuesTest1.push("collectionAnchor1");
        valuesTest1.push("0");
        valuesTest1.push(collection[0]);
      
    } else if (valuesTest2.length<2){
        valuesTest2.push("collectionAnchor1");
        valuesTest2.push("0");
        valuesTest2.push(collection[0]);
} else {

}

    if(valuesTest1.length>1 && valuesTest2.length>1){
        let SwapShow=document.getElementById("makeSwitch");
        SwapShow.style.display="inline-block"
        let resetShow=document.getElementById("reset");
        resetShow.style.display="inline-block";
    } else{

    }

};

function getValue2(){

    if(valuesTest1.length<2){
        valuesTest1.push("collectionAnchor2");
        valuesTest1.push("1");
        valuesTest1.push(collection[1]);

       //document.getElementById("card1Sel").style.backgroundColor="red";
//document.body.style.backgroundColor="red";
       // btnColor.style.backgroundColor="red";
        //.style.text="white";
      
    } else if (valuesTest2.length<2){
        valuesTest2.push("collectionAnchor2");
        valuesTest2.push("1");
        valuesTest2.push(collection[1]);

} else {

}

if(valuesTest1.length>1 && valuesTest2.length>1){
    let SwapShow=document.getElementById("makeSwitch");
    SwapShow.style.display="inline-block";
    let resetShow=document.getElementById("reset");
    resetShow.style.display="inline-block";
} else{

}
};

function getValue3(){
    if(valuesTest1.length<2){
        valuesTest1.push("collectionAnchor3");
        valuesTest1.push("2");
        valuesTest1.push(collection[2]);

      
    } else if (valuesTest2.length<2){
        valuesTest2.push("collectionAnchor3");
        valuesTest2.push("2");
        valuesTest2.push(collection[2]);

} else {

}

if(valuesTest1.length>1 && valuesTest2.length>1){
    let SwapShow=document.getElementById("makeSwitch");
    SwapShow.style.display="inline-block"
    let resetShow=document.getElementById("reset");
    resetShow.style.display="inline-block";
} else{

}
};


function getValue4(){
    if(valuesTest1.length<2){
        valuesTest1.push("collectionAnchor4");
        valuesTest1.push("3");
        valuesTest1.push(collection[3]);

       
      
    } else if (valuesTest2.length<2){
        valuesTest2.push("collectionAnchor4");
        valuesTest2.push("3");
        valuesTest2.push(collection[3]);

} else {

}

if(valuesTest1.length>1 && valuesTest2.length>1){
    let SwapShow=document.getElementById("makeSwitch");
    SwapShow.style.display="inline-block"
    let resetShow=document.getElementById("reset");
    resetShow.style.display="inline-block";
} else{

}
};

function getValue5(){
    if(valuesTest1.length<2){
        valuesTest1.push("collectionAnchor5");
        valuesTest1.push("4");
        valuesTest1.push(collection[4]);

       
      
    } else if (valuesTest2.length<2){
        valuesTest2.push("collectionAnchor5");
        valuesTest2.push("4");
        valuesTest2.push(collection[4]);

} else {

}

if(valuesTest1.length>1 && valuesTest2.length>1){
    let SwapShow=document.getElementById("makeSwitch");
    SwapShow.style.display="inline-block"
    let resetShow=document.getElementById("reset");
    resetShow.style.display="inline-block";
} else{

}
};


function getValue6(){
    if(valuesTest1.length<2){
        valuesTest1.push("collectionAnchor6");
        valuesTest1.push("5");
        valuesTest1.push(collection[5]);

       
      
    } else if (valuesTest2.length<2){
        valuesTest2.push("collectionAnchor6");
        valuesTest2.push("5");
        valuesTest2.push(collection[5]);

} else {

}

if(valuesTest1.length>1 && valuesTest2.length>1){
    let SwapShow=document.getElementById("makeSwitch");
    SwapShow.style.display="inline-block"
    let resetShow=document.getElementById("reset");
    resetShow.style.display="inline-block";
} else{

}
};

function getValue7(){
    if(valuesTest1.length<2){
        valuesTest1.push("collectionAnchor7");
        valuesTest1.push("6");
        valuesTest1.push(collection[6]);

       
      
    } else if (valuesTest2.length<2){
        valuesTest2.push("collectionAnchor7");
        valuesTest2.push("6");
        valuesTest2.push(collection[6]);

} else {

}

if(valuesTest1.length>1 && valuesTest2.length>1){
    let SwapShow=document.getElementById("makeSwitch");
    SwapShow.style.display="inline-block"
    let resetShow=document.getElementById("reset");
    resetShow.style.display="inline-block";
} else{

}
}

function getValue8(){
    if(valuesTest1.length<2){
        valuesTest1.push("collectionAnchor8");
        valuesTest1.push("7");
        valuesTest1.push(collection[7]);

       
      
    } else if (valuesTest2.length<2){
        valuesTest2.push("collectionAnchor8");
        valuesTest2.push("7");
        valuesTest2.push(collection[7]);

} else {

}

if(valuesTest1.length>1 && valuesTest1.length>1){
    let SwapShow=document.getElementById("makeSwitch");
    SwapShow.style.display="inline-block"
    let resetShow=document.getElementById("reset");
    resetShow.style.display="inline-block";
} else{

}

}

function getValue9(){
    if(valuesTest1.length<2){
        valuesTest1.push("collectionAnchor9");
        valuesTest1.push("8");
        valuesTest1.push(collection[8]);

       
      
    } else if (valuesTest2.length<2){
        valuesTest2.push("collectionAnchor9");
        valuesTest2.push("8");
        valuesTest2.push(collection[8]);

} else {

}

if(valuesTest1.length>1 && valuesTest1.length>1){
    let SwapShow=document.getElementById("makeSwitch");
    SwapShow.style.display="inline-block"
    let resetShow=document.getElementById("reset");
    resetShow.style.display="inline-block";
} else{

}

}

function getValue10(){
    if(valuesTest1.length<2){
        valuesTest1.push("collectionAnchor10");
        valuesTest1.push("9");
        valuesTest1.push(collection[9]);

       
      
    } else if (valuesTest2.length<2){
        valuesTest2.push("collectionAnchor10");
        valuesTest2.push("9");
        valuesTest2.push(collection[9]);

} else {

}

if(valuesTest1.length>1 && valuesTest1.length>1){
    let SwapShow=document.getElementById("makeSwitch");
    SwapShow.style.display="inline-block"
    let resetShow=document.getElementById("reset");
    resetShow.style.display="inline-block";
} else{

}
}

function getValue11(){
    if(valuesTest1.length<2){
        valuesTest1.push("collectionAnchor11");
        valuesTest1.push("10");
        valuesTest1.push(collection[10]);
       
      
    } else if (valuesTest2.length<2){
        valuesTest2.push("collectionAnchor11");
        valuesTest2.push("10");
        valuesTest2.push(collection[10]);

} else {

}

if(valuesTest1.length>1 && valuesTest1.length>1){
    let SwapShow=document.getElementById("makeSwitch");
    SwapShow.style.display="inline-block"
    let resetShow=document.getElementById("reset");
    resetShow.style.display="inline-block";
} else{

}
}

function getValue12(){
    if(valuesTest1.length<2){
        valuesTest1.push("collectionAnchor12");
        valuesTest1.push("11");
        valuesTest1.push(collection[11]);

       
      
    } else if (valuesTest2.length<2){
        valuesTest2.push("collectionAnchor12");
        valuesTest2.push("11");
        valuesTest2.push(collection[11]);

} else {

}
if(valuesTest1.length>1 && valuesTest1.length>1){
    let SwapShow=document.getElementById("makeSwitch");
    SwapShow.style.display="inline-block"
    let resetShow=document.getElementById("reset");
    resetShow.style.display="inline-block";
} else{

}
}

function getValue13(){
    if(valuesTest1.length<2){
        valuesTest1.push("collectionAnchor13");
        valuesTest1.push("12");
        valuesTest1.push(collection[12]);

       
      
    } else if (valuesTest2.length<2){
        valuesTest2.push("collectionAnchor13");
        valuesTest2.push("12");
        valuesTest2.push(collection[12]);

} else {

}

if(valuesTest1.length>1 && valuesTest1.length>1){
    let SwapShow=document.getElementById("makeSwitch");
    SwapShow.style.display="inline-block"
    let resetShow=document.getElementById("reset");
    resetShow.style.display="inline-block";
} else{

}
}

function getValue14(){
    if(valuesTest1.length<2){
        valuesTest1.push("collectionAnchor14");
        valuesTest1.push("13");
        valuesTest1.push(collection[13]);

       
      
    } else if (valuesTest2.length<2){
        valuesTest2.push("collectionAnchor14");
        valuesTest2.push("13");
        valuesTest2.push(collection[13]);

} else {

}
if(valuesTest1.length>1 && valuesTest2.length>1){
    let SwapShow=document.getElementById("makeSwitch");
    SwapShow.style.display="inline-block"
    let resetShow=document.getElementById("reset");
    resetShow.style.display="inline-block";
} else{

}
}

function getValue15(){
    if(valuesTest1.length<2){
        valuesTest1.push("collectionAnchor15");
        valuesTest1.push("14");
        valuesTest1.push(collection[14]);

       
      
    } else if (valuesTest2.length<2){
        valuesTest2.push("collectionAnchor15");
        valuesTest2.push("14");
        valuesTest2.push(collection[14]);

} else {

}
if(valuesTest1.length>1 && valuesTest2.length>1){
    let SwapShow=document.getElementById("makeSwitch");
    SwapShow.style.display="inline-block"
    let resetShow=document.getElementById("reset");
    resetShow.style.display="inline-block";
} else{

}
}

function getValue16(){
    if(valuesTest1.length<2){
        valuesTest1.push("collectionAnchor16");
        valuesTest1.push("15");
        valuesTest1.push(collection[15]);

       
      
    } else if (valuesTest2.length<2){
        valuesTest2.push("collectionAnchor16");
        valuesTest2.push("15");
        valuesTest2.push(collection[15]);

} else {

}
if(valuesTest1.length>1 && valuesTest2.length>1){
    let SwapShow=document.getElementById("makeSwitch");
    SwapShow.style.display="inline-block"
    let resetShow=document.getElementById("reset");
    resetShow.style.display="inline-block";
} else{

}
}

function getValue17(){
    if(valuesTest1.length<2){
        valuesTest1.push("collectionAnchor17");
        valuesTest1.push("16");
        valuesTest1.push(collection[16]);

       
      
    } else if (valuesTest2.length<2){
        valuesTest2.push("collectionAnchor17");
        valuesTest2.push("16");
        valuesTest2.push(collection[16]);

} else {

}
if(valuesTest1.length>1 && valuesTest2.length>1){
    let SwapShow=document.getElementById("makeSwitch");
    SwapShow.style.display="inline-block"
    let resetShow=document.getElementById("reset");
    resetShow.style.display="inline-block";
} else{

}
}

function getValue18(){
    if(valuesTest1.length<2){
        valuesTest1.push("collectionAnchor18");
        valuesTest1.push("17");
        valuesTest1.push(collection[17]);

       
      
    } else if (valuesTest2.length<2){
        valuesTest2.push("collectionAnchor18");
        valuesTest2.push("17");
        valuesTest2.push(collection[17]);

} else {

}
if(valuesTest1.length>1 && valuesTest2.length>1){
    let SwapShow=document.getElementById("makeSwitch");
    SwapShow.style.display="inline-block"
    let resetShow=document.getElementById("reset");
    resetShow.style.display="inline-block";
} else{

}
}

function getValue19(){
    if(valuesTest1.length<2){
        valuesTest1.push("collectionAnchor19");
        valuesTest1.push("18");
        valuesTest1.push(collection[18]);

       
      
    } else if (valuesTest2.length<2){
        valuesTest2.push("collectionAnchor19");
        valuesTest2.push("18");
        valuesTest2.push(collection[18]);

} else {

}
if(valuesTest1.length>1 && valuesTest2.length>1){
    let SwapShow=document.getElementById("makeSwitch");
    SwapShow.style.display="inline-block"
    let resetShow=document.getElementById("reset");
    resetShow.style.display="inline-block";
} else{

}
}
function getValue20(){
    if(valuesTest1.length<2){
        valuesTest1.push("collectionAnchor20");
        valuesTest1.push("19");
        valuesTest1.push(collection[19]);

       
      
    } else if (valuesTest2.length<2){
        valuesTest2.push("collectionAnchor20");
        valuesTest2.push("19");
        valuesTest2.push(collection[19]);

} else {

}
if(valuesTest1.length>1 && valuesTest2.length>1){
    let SwapShow=document.getElementById("makeSwitch");
    SwapShow.style.display="inline-block"
    let resetShow=document.getElementById("reset");
    resetShow.style.display="inline-block";
} else{

}
}
function getValue21(){
    if(valuesTest1.length<2){
        valuesTest1.push("collectionAnchor21");
        valuesTest1.push("20");
        valuesTest1.push(collection[20]);

       
      
    } else if (valuesTest2.length<2){
        valuesTest2.push("collectionAnchor21");
        valuesTest2.push("20");
        valuesTest2.push(collection[20]);

} else {

}
if(valuesTest1.length>1 && valuesTest2.length>1){
    let SwapShow=document.getElementById("makeSwitch");
    SwapShow.style.display="inline-block"
    let resetShow=document.getElementById("reset");
    resetShow.style.display="inline-block";
} else{

}
}
function getValue22(){
    if(valuesTest1.length<2){
        valuesTest1.push("collectionAnchor22");
        valuesTest1.push("21");
        valuesTest1.push(collection[21]);

      
    } else if (valuesTest2.length<2){
        valuesTest2.push("collectionAnchor22");
        valuesTest2.push("21");
        valuesTest2.push(collection[21]);

} else {

}
if(valuesTest1.length>1 && valuesTest2.length>1){
    let SwapShow=document.getElementById("makeSwitch");
    SwapShow.style.display="inline-block"
    let resetShow=document.getElementById("reset");
    resetShow.style.display="inline-block";
} else{

}
}
function getValue23(){
    if(valuesTest1.length<2){
        valuesTest1.push("collectionAnchor23");
        valuesTest1.push("22");
        valuesTest1.push(collection[22]);

       
      
    } else if (valuesTest2.length<2){
        valuesTest2.push("collectionAnchor23");
        valuesTest2.push("22");
        valuesTest2.push(collection[22]);

} else {

}
if(valuesTest1.length>1 && valuesTest2.length>1){
    let SwapShow=document.getElementById("makeSwitch");
    SwapShow.style.display="inline-block"
    let resetShow=document.getElementById("reset");
    resetShow.style.display="inline-block";
} else{

}
}
function getValue24(){
    if(valuesTest1.length<2){
        valuesTest1.push("collectionAnchor24");
        valuesTest1.push("23");
        valuesTest1.push(collection[23]);

       
      
    } else if (valuesTest2.length<2){
        valuesTest2.push("collectionAnchor24");
        valuesTest2.push("23");
        valuesTest2.push(collection[23]);

} else {

}
if(valuesTest1.length>1 && valuesTest2.length>1){
    let SwapShow=document.getElementById("makeSwitch");
    SwapShow.style.display="inline-block"
    let resetShow=document.getElementById("reset");
    resetShow.style.display="inline-block";
} else{

}
}
function getValue25(){
    if(valuesTest1.length<2){
        valuesTest1.push("collectionAnchor25");
        valuesTest1.push("24");
        valuesTest1.push(collection[24]);
       
      
    } else if (valuesTest2.length<2){
        valuesTest2.push("collectionAnchor25");
        valuesTest2.push("24");
        valuesTest2.push(collection[24]);

} else {

}
if(valuesTest1.length>1 && valuesTest2.length>1){
    let SwapShow=document.getElementById("makeSwitch");
    SwapShow.style.display="inline-block"
    let resetShow=document.getElementById("reset");
    resetShow.style.display="inline-block";
} else{

}
}
function getValue26(){
    if(valuesTest1.length<2){
        valuesTest1.push("collectionAnchor26");
        valuesTest1.push("25");
        valuesTest1.push(collection[25]);
       
      
    } else if (valuesTest2.length<2){
        valuesTest2.push("collectionAnchor26");
        valuesTest2.push("25");
        valuesTest2.push(collection[25]);

} else {

}
if(valuesTest1.length>1 && valuesTest2.length>1){
    let SwapShow=document.getElementById("makeSwitch");
    SwapShow.style.display="inline-block"
    let resetShow=document.getElementById("reset");
    resetShow.style.display="inline-block";
} else{

}
}

function getValue27(){
    if(valuesTest1.length<2){
        valuesTest1.push("collectionAnchor27");
        valuesTest1.push("26");
        valuesTest1.push(collection[26]);
       
      
    } else if (valuesTest2.length<2){
        valuesTest2.push("collectionAnchor27");
        valuesTest2.push("26");
        valuesTest2.push(collection[26]);

} else {

}
if(valuesTest1.length>1 && valuesTest2.length>1){
    let SwapShow=document.getElementById("makeSwitch");
    SwapShow.style.display="inline-block"
    let resetShow=document.getElementById("reset");
    resetShow.style.display="inline-block";
} else{

}
}


function getValue28(){
    if(valuesTest1.length<2){
        valuesTest1.push("collectionAnchor28");
        valuesTest1.push("27");
        valuesTest1.push(collection[27]);

       
      
    } else if (valuesTest2.length<2){
        valuesTest2.push("collectionAnchor28");
        valuesTest2.push("27");
        valuesTest2.push(collection[27]);

} else {

}

if(valuesTest1.length>1 && valuesTest2.length>1){
    let SwapShow=document.getElementById("makeSwitch");
    SwapShow.style.display="inline-block"
    let resetShow=document.getElementById("reset");
    resetShow.style.display="inline-block";
} else{

}
}

function makeSwitchCards(){
    takeAway();
    switchAdd();
    switchCollection();
    resetSwap();
}

function takeAway(){
if ( valuesTest1[0] === valuesTest2[0]) {
    
} else{
    newSwitchA=document.getElementById(valuesTest1[0]);
    newSwitchA.removeChild(newSwitchA.lastElementChild);
    newSwitchB=document.getElementById(valuesTest2[0]);
    newSwitchB.removeChild(newSwitchB.lastElementChild);
}
   
}

function switchAdd(){
if ( valuesTest1[0]===valuesTest2[0]) {
} else {
    let addVar=document.getElementById(valuesTest1[0]);
let newSwitchAdd1=document.createElement("img");
newSwitchAdd1.src=`cardGameImages/${valuesTest2[2].suit}${valuesTest2[2].value}.png`;
addVar.appendChild(newSwitchAdd1);

let addVar2=document.getElementById(valuesTest2[0]);
let newSwitchAdd2=document.createElement("img");
newSwitchAdd2.src=`cardGameImages/${valuesTest1[2].suit}${valuesTest1[2].value}.png`;
addVar2.appendChild(newSwitchAdd2);}
}

function switchCollection(){
if (valuesTest1 === valuesTest2) {
    
} else {
    let temp=collection[valuesTest2[1]];
    collection[valuesTest2[1]]=collection[valuesTest1[1]];
    collection[valuesTest1[1]]=temp;
}


}

function resetSwap(){
    valuesTest1.pop();
    valuesTest1.pop();
    valuesTest1.pop();
    valuesTest2.pop();
    valuesTest2.pop();
    valuesTest2.pop(); 
let takeAway1=document.getElementById("reset");
takeAway1.style.display="none";
let takeAway2=document.getElementById("makeSwitch");
takeAway2.style.display="none";
};

/*function goToConfirmation(){

    let handTakeAway=document.getElementById("handAnchor");
    let buttonsHandTakeAway=document.getElementById("buttonsAnchor");
    let roundHandTakeAway=document.getElementById("round");


    while(handTakeAway.firstChild){
        handTakeAway.removeChild(handTakeAway.firstChild);
    }

    while(buttonsHandTakeAway.firstChild){
        buttonsHandTakeAway.removeChild(buttonsHandTakeAway.firstChild);
    }

    while(roundHandTakeAway.firstChild){
        roundHandTakeAway.removeChild(roundHandTakeAway.firstChild);
    }

    let scoreShowLabel=document.getElementById("scoreLabel");
    scoreShowLabel.style.display="inline-block";

    let scoreShow=document.getElementById("score");
    scoreShow.style.display="inline-block";

    let hideGoToEval=document.getElementById("confirm");
    hideGoToEval.style.display="inline-block";

   

 
}*/

function goToConfirmation(){

    document.getElementById("click1").removeEventListener("click", getValue1);
    document.getElementById("click2").removeEventListener("click", getValue2);
    document.getElementById("click3").removeEventListener("click", getValue3);
    document.getElementById("click4").removeEventListener("click", getValue4);
    document.getElementById("click5").removeEventListener("click", getValue5);
    document.getElementById("click6").removeEventListener("click", getValue6);
    document.getElementById("click7").removeEventListener("click", getValue7);
    document.getElementById("click8").removeEventListener("click", getValue8);
    document.getElementById("click9").removeEventListener("click", getValue9);
    document.getElementById("click10").removeEventListener("click", getValue10);
    document.getElementById("click11").removeEventListener("click", getValue11);
    document.getElementById("click12").removeEventListener("click", getValue12);
    document.getElementById("click13").removeEventListener("click", getValue13);
    document.getElementById("click14").removeEventListener("click", getValue14);
    document.getElementById("click15").removeEventListener("click", getValue15);
    document.getElementById("click16").removeEventListener("click", getValue16);
    document.getElementById("click17").removeEventListener("click", getValue17);
    document.getElementById("click18").removeEventListener("click", getValue18);
    document.getElementById("click19").removeEventListener("click", getValue19);
    document.getElementById("click20").removeEventListener("click", getValue20);
    document.getElementById("click21").removeEventListener("click", getValue21);
    document.getElementById("click22").removeEventListener("click", getValue22);
    document.getElementById("click23").removeEventListener("click", getValue23);
    document.getElementById("click24").removeEventListener("click", getValue24);
    document.getElementById("click25").removeEventListener("click", getValue25);
    document.getElementById("click26").removeEventListener("click", getValue26);
    document.getElementById("click27").removeEventListener("click", getValue27);
    document.getElementById("click28").removeEventListener("click", getValue28);
   
   
    //let evalHandS=document.getElementById("handEvaluation");
   // evalHandS.style.display="inline-block";
    
   // let evalBonusesS=document.getElementById("bonusEvaluation");
   // evalBonusesS.style.display="inline-block";

    let hideConfirm=document.getElementById("confirmButton");
    hideConfirm.style.display="none";

    let F1Show=document.getElementById("FinalEvaluation1");
    F1Show.style.display="inline-block";

    let F2Show=document.getElementById("FinalEvaluation2");
    F2Show.style.display="inline-block";

    let F3Show=document.getElementById("FinalEvaluation3");
    F3Show.style.display="inline-block";

    let F4Show=document.getElementById("FinalEvaluation4");
    F4Show.style.display="inline-block";

    let F5Show=document.getElementById("FinalEvaluation5");
    F5Show.style.display="inline-block";

    //let threeShow=document.getElementById("3Evaluation");
    //threeShow.style.display="inline-block";

    let BonusesShow=document.getElementById("BonusEvaluation");
    BonusesShow.style.display="inline-block";

    let Add=document.getElementById("AddItUp");
    Add.style.display="inline-block";

    evaluateSet1.push(collection[0]);     evaluateSet1.push(collection[1]); evaluateSet1.push(collection[2]);     evaluateSet1.push(collection[3]);     evaluateSet1.push(collection[4])
    console.log (evaluateSet1)

    evaluateSet2.push(collection[5]);     evaluateSet2.push(collection[6]);     evaluateSet2.push(collection[7]);  evaluateSet2.push(collection[8]);     evaluateSet2.push(collection[9]);
    console.log (evaluateSet2)

    evaluateSet3.push(collection[10]);     evaluateSet3.push(collection[11]);     evaluateSet3.push(collection[12]);  evaluateSet3.push(collection[13]);     evaluateSet3.push(collection[14]);
    console.log (evaluateSet3)


    evaluateSet4.push(collection[15]);     evaluateSet4.push(collection[16]);     evaluateSet4.push(collection[17]);  evaluateSet4.push(collection[18]);     evaluateSet4.push(collection[19]);    console.log (evaluateSet4)


    evaluateSet5.push(collection[20]);     evaluateSet5.push(collection[21]);     evaluateSet5.push(collection[22]);  evaluateSet5.push(collection[23]);     evaluateSet5.push(collection[24]);  
    console.log (evaluateSet5)

    end3.push(collection[25]);     end3.push(collection[26]);     

    end3.push(collection[27])
}



function OneSetEvaluate () {
    //let flushSuccess=[];
CheckClubs=evaluateSet1.filter(item=>item.suit==="Clubs");
if (CheckClubs.length===5) {Flush1.push("Flush")} else {};

CheckDiamonds=evaluateSet1.filter(item=>item.suit==="Diamonds") 
if (CheckDiamonds.length===5) {Flush1.push("Flush")} else {};

CheckSpades=evaluateSet1.filter(item=>item.suit==="Spades");
if (CheckSpades.length===5) {Flush1.push("Flush")} else {};

CheckHearts=evaluateSet1.filter(item=>item.suit==="Hearts");
if (CheckHearts.length===5) {Flush1.push("Flush")} else {};

CheckSwords=evaluateSet1.filter(item=>item.suit==="Swords");
if (CheckSwords.length===5) {Flush1.push("Flush")} else {};

CheckSkulls=evaluateSet1.filter(item=>item.suit==="Skulls");
if (CheckSkulls.length===5) {Flush1.push("Flush")} else {};

Check2=evaluateSet1.filter(item=>item.value===2);
if (Check2.length===2) {Pair1.push("Pair1")} else if (Check2.length===3){ThreeKind1.push("ThreeKind")} else if (Check2.length===4) {FourKind1.push("FourKind")} else {};

Check3=evaluateSet1.filter(item=>item.value===3);
if (Check3.length===2) {Pair1.push("Pair1")} else if (Check3.length===3){ThreeKind1.push("ThreeKind")} else if (Check3.length===4) {FourKind1.push("FourKind")} else {};

Check4=evaluateSet1.filter(item=>item.value===4);
if (Check4.length===2) {Pair1.push("Pair1")} else if (Check4.length===3){ThreeKind1.push("ThreeKind")} else if (Check4.length===4) {FourKind1.push("FourKind")} else {};

Check5=evaluateSet1.filter(item=>item.value===5);
if (Check5.length===2) {Pair1.push("Pair1")} else if (Check5.length===3){ThreeKind1.push("ThreeKind")} else if (Check5.length===4) {FourKind1.push("FourKind")} else {};

Check6=evaluateSet1.filter(item=>item.value===6);
if (Check6.length===2) {Pair1.push("Pair1")} else if (Check6.length===3){ThreeKind1.push("ThreeKind")} else if (Check6.length===4) {FourKind1.push("FourKind")} else {};

Check7=evaluateSet1.filter(item=>item.value===7);
if (Check7.length===2) {Pair1.push("Pair1")} else if (Check7.length===3){ThreeKind1.push("ThreeKind")} else if (Check7.length===4) {FourKind1.push("FourKind")} else {};

Check8=evaluateSet1.filter(item=>item.value===8);
if (Check8.length===2) {Pair1.push("Pair1")} else if (Check8.length===3){ThreeKind1.push("ThreeKind")} else if (Check8.length===4) {FourKind1.push("FourKind")} else {};

Check9=evaluateSet1.filter(item=>item.value===7);
if (Check9.length===2) {Pair1.push("Pair1")} else if (Check9.length===3){ThreeKind1.push("ThreeKind")} else if (Check9.length===4) {FourKind1.push("FourKind")} else {};

Check10=evaluateSet1.filter(item=>item.value===10);
if (Check10.length===2) {Pair1.push("Pair1")} else if (Check10.length===3){ThreeKind1.push("ThreeKind")} else if (Check10.length===4) {FourKind1.push("FourKind")} else {};

Check11=evaluateSet1.filter(item=>item.value===11);
if (Check11.length===2) {Pair1.push("Pair1")} else if (Check11.length===3){ThreeKind1.push("ThreeKind")} else if (Check11.length===4) {FourKind1.push("FourKind")} else {};

Check12=evaluateSet1.filter(item=>item.value===12);
if (Check12.length===2) {Pair1.push("Pair1")} else if (Check12.length===3){ThreeKind1.push("ThreeKind")} else if (Check12.length===4) {FourKind1.push("FourKind")} else {};

Check13=evaluateSet1.filter(item=>item.value===13);
if (Check13.length===2) {Pair1.push("Pair1")} else if (Check13.length===3){ThreeKind1.push("ThreeKind")} else if (Check13.length===4) {FourKind1.push("FourKind")} else {};

Check14=evaluateSet1.filter(item=>item.value===14);
if (Check14.length===2) {Pair1.push("Pair1")} else if (Check14.length===3){ThreeKind1.push("ThreeKind")} else if (Check14.length===4) {FourKind1.push("FourKind")} else {};

CheckVF=[]

    let Royal=[];
    for (i=0;i<evaluateSet1.length;i++) {
        if (evaluateSet1.value===10){ Royal.push("success")} else {};
        if (evaluateSet1.value===11){ Royal.push("success")} else {};
        if (evaluateSet1.value===12){ Royal.push("success")} else {};
        if (evaluateSet1.value===13){ Royal.push("success")} else {};
        if (evaluateSet1.value===14){ Royal.push("success")} else {};
        if (Royal.length===5) {Royal1.push("Royal")} else {}
    }

    if (evaluateSet1[1].value===evaluateSet1[0].value+1 && evaluateSet1[2].value===evaluateSet1[1].value+1 && evaluateSet1[3].value===evaluateSet1[2].value+1 && evaluateSet1[4].value===evaluateSet1[3].value+1) {Straight1.push("Straight")} else {}

    console.log("Pair1")

    console.log(Pair1)
}



function TwoSetEvaluate () {
    //let flushSuccess=[];
CheckClubs=evaluateSet2.filter(item=>item.suit==="Clubs");
if (CheckClubs.length===5) {Flush2.push("Flush")} else {};

CheckDiamonds=evaluateSet2.filter(item=>item.suit==="Diamonds");
if (CheckDiamonds.length===5) {Flush2.push("Flush")} else {};

CheckSpades=evaluateSet2.filter(item=>item.suit==="Spades");
if (CheckSpades.length===5) {Flush2.push("Flush")} else {};

CheckHearts=evaluateSet2.filter(item=>item.suit==="Hearts");
if (CheckHearts.length===5) {Flush2.push("Flush")} else {};

CheckSwords=evaluateSet2.filter(item=>item.suit==="Swords");
if (CheckSwords.length===5) {Flush2.push("Flush")} else {};

CheckSkulls=evaluateSet2.filter(item=>item.suit==="Skulls");
if (CheckSkulls.length===5) {Flush2.push("Flush")} else {};

Check2=evaluateSet2.filter(item=>item.value===2);
if (Check2.length===2) {Pair2.push("Pair1")} else if (Check2.length===3){ThreeKind2.push("ThreeKind")} else if (Check2.length===4) {FourKind2.push("FourKind")} else {};

Check3=evaluateSet2.filter(item=>item.value===3);
if (Check3.length===2) {Pair2.push("Pair1")} else if (Check3.length===3){ThreeKind2.push("ThreeKind")} else if (Check3.length===4) {FourKind2.push("FourKind")} else {};

Check4=evaluateSet2.filter(item=>item.value===4);
if (Check4.length===2) {Pair2.push("Pair1")} else if (Check4.length===3){ThreeKind2.push("ThreeKind")} else if (Check4.length===4) {FourKind2.push("FourKind")} else {};

Check5=evaluateSet2.filter(item=>item.value===5);
if (Check5.length===2) {Pair2.push("Pair1")} else if (Check5.length===3){ThreeKind2.push("ThreeKind")} else if (Check5.length===4) {FourKind2.push("FourKind")} else {};

Check6=evaluateSet2.filter(item=>item.value===6);
if (Check6.length===2) {Pair2.push("Pair1")} else if (Check6.length===3){ThreeKind2.push("ThreeKind")} else if (Check6.length===4) {FourKind2.push("FourKind")} else {};

Check7=evaluateSet2.filter(item=>item.value===7);
if (Check7.length===2) {Pair2.push("Pair1")} else if (Check7.length===3){ThreeKind2.push("ThreeKind")} else if (Check7.length===4) {FourKind2.push("FourKind")} else {};

Check8=evaluateSet2.filter(item=>item.value===8);
if (Check8.length===2) {Pair2.push("Pair1")} else if (Check8.length===3){ThreeKind2.push("ThreeKind")} else if (Check8.length===4) {FourKind2.push("FourKind")} else {};

Check9=evaluateSet2.filter(item=>item.value===7);
if (Check9.length===2) {Pair2.push("Pair1")} else if (Check9.length===3){ThreeKind2.push("ThreeKind")} else if (Check9.length===4) {FourKind2.push("FourKind")} else {};

Check10=evaluateSet2.filter(item=>item.value===10);
if (Check10.length===2) {Pair2.push("Pair1")} else if (Check10.length===3){ThreeKind2.push("ThreeKind")} else if (Check10.length===4) {FourKind2.push("FourKind")} else {};

Check11=evaluateSet2.filter(item=>item.value===11);
if (Check11.length===2) {Pair2.push("Pair1")} else if (Check11.length===3){ThreeKind2.push("ThreeKind")} else if (Check11.length===4) {FourKind2.push("FourKind")} else {};

Check12=evaluateSet2.filter(item=>item.value===12);
if (Check12.length===2) {Pair2.push("Pair1")} else if (Check12.length===3){ThreeKind2.push("ThreeKind")} else if (Check12.length===4) {FourKind2.push("FourKind")} else {};

Check13=evaluateSet2.filter(item=>item.value===13);
if (Check13.length===2) {Pair2.push("Pair1")} else if (Check13.length===3){ThreeKind2.push("ThreeKind")} else if (Check13.length===4) {FourKind2.push("FourKind")} else {};

Check14=evaluateSet2.filter(item=>item.value===14);
if (Check14.length===2) {Pair2.push("Pair1")} else if (Check14.length===3){ThreeKind2.push("ThreeKind")} else if (Check14.length===4) {FourKind2.push("FourKind")} else {};

CheckVF=[]

    let Royal=[];
    for (i=0;i<evaluateSet2.length;i++) {
        if (evaluateSet2.value===10){ Royal.push("success")} else {};
        if (evaluateSet2.value===11){ Royal.push("success")} else {};
        if (evaluateSet2.value===12){ Royal.push("success")} else {};
        if (evaluateSet2.value===13){ Royal.push("success")} else {};
        if (evaluateSet2.value===14){ Royal.push("success")} else {};
        if (Royal.length===5) {evaluateSet2.push("Royal")} else {}
    }

    if (evaluateSet2[1].value===evaluateSet2[0].value+1 && evaluateSet2[2].value===evaluateSet2[1].value+1 && evaluateSet2[3].value===evaluateSet2[2].value+1 && evaluateSet2[4].value===evaluateSet2[3].value+1) {Straight2.push("Straight")} else {}
console.log("222222")
console.log(Flush2)

}




function ThreeSetEvaluate () {
    //let flushSuccess=[];
CheckClubs=evaluateSet3.filter(item=>item.suit==="Clubs");
if (CheckClubs.length===5) {Flush3.push("Flush")};

CheckDiamonds=evaluateSet3.filter(item=>item.suit==="Diamonds");
if (CheckDiamonds.length===5) {Flush3.push("Flush")};

CheckSpades=evaluateSet3.filter(item=>item.suit==="Spades");
if (CheckSpades.length===5) {Flush3.push("Flush")};

CheckHearts=evaluateSet3.filter(item=>item.suit==="Hearts");
if (CheckHearts.length===5) {Flush3.push("Flush")};

CheckSwords=evaluateSet3.filter(item=>item.suit==="Swords");
if (CheckSwords.length===5) {Flush3.push("Flush")};

CheckSkulls=evaluateSet3.filter(item=>item.suit==="Skulls");
if (CheckSkulls.length===5) {Flush3.push("Flush")};

Check2=evaluateSet3.filter(item=>item.value===2);
if (Check2.length===2) {Pair3.push("Pair1")} else if (Check2.length===3){ThreeKind3.push("ThreeKind")} else if (Check2.length===4) {FourKind3.push("FourKind")} else {};

Check3=evaluateSet3.filter(item=>item.value===3);
if (Check3.length===2) {Pair3.push("Pair1")} else if (Check3.length===3){ThreeKind3.push("ThreeKind")} else if (Check3.length===4) {FourKind3.push("FourKind")} else {};

Check4=evaluateSet3.filter(item=>item.value===4);
if (Check4.length===2) {Pair3.push("Pair1")} else if (Check4.length===3){ThreeKind3.push("ThreeKind")} else if (Check4.length===4) {FourKind3.push("FourKind")} else {};

Check5=evaluateSet3.filter(item=>item.value===5);
if (Check5.length===2) {Pair3.push("Pair1")} else if (Check5.length===3){ThreeKind3.push("ThreeKind")} else if (Check5.length===4) {FourKind3.push("FourKind")} else {};

Check6=evaluateSet3.filter(item=>item.value===6);
if (Check6.length===2) {Pair3.push("Pair1")} else if (Check6.length===3){ThreeKind3.push("ThreeKind")} else if (Check6.length===4) {FourKind3.push("FourKind")} else {};

Check7=evaluateSet3.filter(item=>item.value===7);
if (Check7.length===2) {Pair3.push("Pair1")} else if (Check7.length===3){ThreeKind3.push("ThreeKind")} else if (Check7.length===4) {FourKind3.push("FourKind")} else {};

Check8=evaluateSet3.filter(item=>item.value===8);
if (Check8.length===2) {Pair3.push("Pair1")} else if (Check8.length===3){ThreeKind3.push("ThreeKind")} else if (Check8.length===4) {FourKind3.push("FourKind")} else {};

Check9=evaluateSet3.filter(item=>item.value===7);
if (Check9.length===2) {Pair3.push("Pair1")} else if (Check9.length===3){ThreeKind3.push("ThreeKind")} else if (Check9.length===4) {FourKind3.push("FourKind")} else {};

Check10=evaluateSet3.filter(item=>item.value===10);
if (Check10.length===2) {Pair3.push("Pair1")} else if (Check10.length===3){ThreeKind3.push("ThreeKind")} else if (Check10.length===4) {FourKind3.push("FourKind")} else {};

Check11=evaluateSet3.filter(item=>item.value===11);
if (Check11.length===2) {Pair3.push("Pair1")} else if (Check11.length===3){ThreeKind3.push("ThreeKind")} else if (Check11.length===4) {FourKind3.push("FourKind")} else {};

Check12=evaluateSet3.filter(item=>item.value===12);
if (Check12.length===2) {Pair3.push("Pair1")} else if (Check12.length===3){ThreeKind3.push("ThreeKind")} else if (Check12.length===4) {FourKind3.push("FourKind")} else {};

Check13=evaluateSet3.filter(item=>item.value===13);
if (Check13.length===2) {Pair3.push("Pair1")} else if (Check13.length===3){ThreeKind3.push("ThreeKind")} else if (Check13.length===4) {FourKind3.push("FourKind")} else {};

Check14=evaluateSet3.filter(item=>item.value===14);
if (Check14.length===2) {Pair3.push("Pair1")} else if (Check14.length===3){ThreeKind3.push("ThreeKind")} else if (Check14.length===4) {FourKind3.push("FourKind")} else {};

CheckVF=[]

    let Royal=[];
    for (i=0;i<evaluateSet3.length;i++) {
        if (evaluateSet3.value===10){ Royal.push("success")} else {};
        if (evaluateSet3.value===11){ Royal.push("success")} else {};
        if (evaluateSet3.value===12){ Royal.push("success")} else {};
        if (evaluateSet3.value===13){ Royal.push("success")} else {};
        if (evaluateSet3.value===14){ Royal.push("success")} else {};
        if (Royal.length===5) {evaluateSet2.push("Royal")} else {}
    }

    if (evaluateSet3[1].value===evaluateSet3[0].value+1 && evaluateSet3[2].value===evaluateSet3[1].value+1 && evaluateSet3[3].value===evaluateSet3[2].value+1 && evaluateSet3[4].value===evaluateSet3[3].value+1) {Straight3.push("Straight")} else {}
    
    console.log("3333333333")
    console.log(Pair3)

}



    


function FourSetEvaluate () {
    //let flushSuccess=[];
CheckClubs=evaluateSet4.filter(item=>item.suit==="Clubs");
if (CheckClubs.length===5) {Flush4.push("Flush")};

CheckDiamonds=evaluateSet4.filter(item=>item.suit==="Diamonds");
if (CheckDiamonds.length===5) {Flush4.push("Flush")};

CheckSpades=evaluateSet4.filter(item=>item.suit==="Spades");
if (CheckSpades.length===5) {Flush4.push("Flush")};

CheckHearts=evaluateSet4.filter(item=>item.suit==="Hearts");
if (CheckHearts.length===5) {Flush4.push("Flush")};

CheckSwords=evaluateSet4.filter(item=>item.suit==="Swords");
if (CheckSwords.length===5) {Flush4.push("Flush")};

CheckSkulls=evaluateSet4.filter(item=>item.suit==="Skulls");
if (CheckSkulls.length===5) {Flush4.push("Flush")};

Check2=evaluateSet4.filter(item=>item.value===2);
if (Check2.length===2) {Pair4.push("Pair1")} else if (Check2.length===3){ThreeKind4.push("ThreeKind")} else if (Check2.length===4) {FourKind4.push("FourKind")} else {};

Check3=evaluateSet4.filter(item=>item.value===3);
if (Check3.length===2) {Pair4.push("Pair1")} else if (Check3.length===3){ThreeKind4.push("ThreeKind")} else if (Check3.length===4) {FourKind4.push("FourKind")} else {};

Check4=evaluateSet4.filter(item=>item.value===4);
if (Check4.length===2) {Pair4.push("Pair1")} else if (Check4.length===3){ThreeKind4.push("ThreeKind")} else if (Check4.length===4) {FourKind4.push("FourKind")} else {};

Check5=evaluateSet4.filter(item=>item.value===5);
if (Check5.length===2) {Pair4.push("Pair1")} else if (Check5.length===3){ThreeKind4.push("ThreeKind")} else if (Check5.length===4) {FourKind4.push("FourKind")} else {};

Check6=evaluateSet4.filter(item=>item.value===6);
if (Check6.length===2) {Pair4.push("Pair1")} else if (Check6.length===3){ThreeKind4.push("ThreeKind")} else if (Check6.length===4) {FourKind4.push("FourKind")} else {};

Check7=evaluateSet4.filter(item=>item.value===7);
if (Check7.length===2) {Pair4.push("Pair1")} else if (Check7.length===3){ThreeKind4.push("ThreeKind")} else if (Check7.length===4) {FourKind4.push("FourKind")} else {};

Check8=evaluateSet4.filter(item=>item.value===8);
if (Check8.length===2) {Pair4.push("Pair1")} else if (Check8.length===3){ThreeKind4.push("ThreeKind")} else if (Check8.length===4) {FourKind4.push("FourKind")} else {};

Check9=evaluateSet4.filter(item=>item.value===7);
if (Check9.length===2) {Pair4.push("Pair1")} else if (Check9.length===3){ThreeKind4.push("ThreeKind")} else if (Check9.length===4) {FourKind4.push("FourKind")} else {};

Check10=evaluateSet4.filter(item=>item.value===10);
if (Check10.length===2) {Pair4.push("Pair1")} else if (Check10.length===3){ThreeKind4.push("ThreeKind")} else if (Check10.length===4) {FourKind4.push("FourKind")} else {};

Check11=evaluateSet4.filter(item=>item.value===11);
if (Check11.length===2) {Pair4.push("Pair1")} else if (Check11.length===3){ThreeKind4.push("ThreeKind")} else if (Check11.length===4) {FourKind4.push("FourKind")} else {};

Check12=evaluateSet4.filter(item=>item.value===12);
if (Check12.length===2) {Pair4.push("Pair1")} else if (Check12.length===3){ThreeKind4.push("ThreeKind")} else if (Check12.length===4) {FourKind4.push("FourKind")} else {};

Check13=evaluateSet4.filter(item=>item.value===13);
if (Check13.length===2) {Pair4.push("Pair1")} else if (Check13.length===3){ThreeKind4.push("ThreeKind")} else if (Check13.length===4) {FourKind4.push("FourKind")} else {};

Check14=evaluateSet4.filter(item=>item.value===14);
if (Check14.length===2) {Pair4.push("Pair1")} else if (Check14.length===3){ThreeKind4.push("ThreeKind")} else if (Check14.length===4) {FourKind4.push("FourKind")} else {};

CheckVF=[]

    let Royal=[];
    for (i=0;i<evaluateSet4.length;i++) {
        if (evaluateSet4.value===10){ Royal.push("success")} else {};
        if (evaluateSet4.value===11){ Royal.push("success")} else {};
        if (evaluateSet4.value===12){ Royal.push("success")} else {};
        if (evaluateSet4.value===13){ Royal.push("success")} else {};
        if (evaluateSet4.value===14){ Royal.push("success")} else {};
        if (Royal.length===5) {evaluateSet2.push("Royal")} else {}
    }

    if (evaluateSet4[1].value===evaluateSet4[0].value+1 && evaluateSet4[2].value===evaluateSet4[1].value+1 && evaluateSet4[3].value===evaluateSet4[2].value+1 && evaluateSet4[4].value===evaluateSet4[3].value+1) {Straight4.push("Straight")} else {}

    console.log("44444444")
    console.log(Pair4)

}



    
function FiveSetEvaluate () {
    //let flushSuccess=[];
CheckClubs=evaluateSet5.filter(item=>item.suit==="Clubs");
if (CheckClubs.length===5) {Flush4.push("Flush")};

CheckDiamonds=evaluateSet5.filter(item=>item.suit==="Diamonds");
if (CheckDiamonds.length===5) {Flush4.push("Flush")};

CheckSpades=evaluateSet5.filter(item=>item.suit==="Spades");
if (CheckSpades.length===5) {Flush4.push("Flush")};

CheckHearts=evaluateSet5.filter(item=>item.suit==="Hearts");
if (CheckHearts.length===5) {Flush4.push("Flush")};

CheckSwords=evaluateSet5.filter(item=>item.suit==="Swords");
if (CheckSwords.length===5) {Flush4.push("Flush")};

CheckSkulls=evaluateSet5.filter(item=>item.suit==="Skulls");
if (CheckSkulls.length===5) {Flush4.push("Flush")};

Check2=evaluateSet5.filter(item=>item.value===2);
if (Check2.length===2) {Pair5.push("Pair1")} else if (Check2.length===3){ThreeKind5.push("ThreeKind")} else if (Check2.length===4) {FourKind5.push("FourKind")} else {};

Check3=evaluateSet5.filter(item=>item.value===3);
if (Check3.length===2) {Pair5.push("Pair1")} else if (Check3.length===3){ThreeKind5.push("ThreeKind")} else if (Check3.length===4) {FourKind5.push("FourKind")} else {};

Check4=evaluateSet5.filter(item=>item.value===4);
if (Check4.length===2) {Pair5.push("Pair1")} else if (Check4.length===3){ThreeKind5.push("ThreeKind")} else if (Check4.length===4) {FourKind5.push("FourKind")} else {};

Check5=evaluateSet5.filter(item=>item.value===5);
if (Check5.length===2) {Pair5.push("Pair1")} else if (Check5.length===3){ThreeKind5.push("ThreeKind")} else if (Check5.length===4) {FourKind5.push("FourKind")} else {};

Check6=evaluateSet5.filter(item=>item.value===6);
if (Check6.length===2) {Pair5.push("Pair1")} else if (Check6.length===3){ThreeKind5.push("ThreeKind")} else if (Check6.length===4) {FourKind5.push("FourKind")} else {};

Check7=evaluateSet5.filter(item=>item.value===7);
if (Check7.length===2) {Pair5.push("Pair1")} else if (Check7.length===3){ThreeKind5.push("ThreeKind")} else if (Check7.length===4) {FourKind5.push("FourKind")} else {};

Check8=evaluateSet5.filter(item=>item.value===8);
if (Check8.length===2) {Pair5.push("Pair1")} else if (Check8.length===3){ThreeKind5.push("ThreeKind")} else if (Check8.length===4) {FourKind5.push("FourKind")} else {};

Check9=evaluateSet5.filter(item=>item.value===7);
if (Check9.length===2) {Pair5.push("Pair1")} else if (Check9.length===3){ThreeKind5.push("ThreeKind")} else if (Check9.length===4) {FourKind5.push("FourKind")} else {};

Check10=evaluateSet5.filter(item=>item.value===10);
if (Check10.length===2) {Pair5.push("Pair1")} else if (Check10.length===3){ThreeKind5.push("ThreeKind")} else if (Check10.length===4) {FourKind5.push("FourKind")} else {};

Check11=evaluateSet5.filter(item=>item.value===11);
if (Check11.length===2) {Pair5.push("Pair1")} else if (Check11.length===3){ThreeKind5.push("ThreeKind")} else if (Check11.length===4) {FourKind5.push("FourKind")} else {};

Check12=evaluateSet5.filter(item=>item.value===12);
if (Check12.length===2) {Pair5.push("Pair1")} else if (Check12.length===3){ThreeKind5.push("ThreeKind")} else if (Check12.length===4) {FourKind5.push("FourKind")} else {};

Check13=evaluateSet5.filter(item=>item.value===13);
if (Check13.length===2) {Pair5.push("Pair1")} else if (Check13.length===3){ThreeKind5.push("ThreeKind")} else if (Check13.length===4) {FourKind5.push("FourKind")} else {};

Check14=evaluateSet5.filter(item=>item.value===14);
if (Check14.length===2) {Pair5.push("Pair1")} else if (Check14.length===3){ThreeKind5.push("ThreeKind")} else if (Check14.length===4) {FourKind5.push("FourKind")} else {};

CheckVF=[]

    let Royal=[];
    for (i=0;i<evaluateSet5.length;i++) {
        if (evaluateSet5.value===10){ Royal.push("success")} else {};
        if (evaluateSet5.value===11){ Royal.push("success")} else {};
        if (evaluateSet5.value===12){ Royal.push("success")} else {};
        if (evaluateSet5.value===13){ Royal.push("success")} else {};
        if (evaluateSet5.value===14){ Royal.push("success")} else {};
        if (Royal.length===5) {Royal5.push("Royal")} else {}
    }

    if (evaluateSet5[1].value===evaluateSet5[0].value+1 && evaluateSet5[2].value===evaluateSet5[1].value+1 && evaluateSet5[3].value===evaluateSet5[2].value+1 && evaluateSet5[4].value===evaluateSet5[3].value+1) {Straight5.push("Straight")} else {}

    console.log("555555555")
console.log(Pair5)

}


        


function BonusChoices(){
    
let AllNew=evaluateSet1.concat(evaluateSet2).concat(evaluateSet3).concat(evaluateSet4).concat(evaluateSet5).concat(end3);
console.log("stats");


let filter11=AllNew.filter(item=>item.value===11);
if (filter11.length===6){finalCountBonuses.push("Jack")} else {finalCountBonuses.push("Fail")};

let filter12=AllNew.filter(item=>item.value===12);
if (filter12.length===6){finalCountBonuses.push("Queen")} else {finalCountBonuses.push("Fail")};

let filter13=AllNew.filter(item=>item.value===13);
if (filter13.length===6){finalCountBonuses.push("King")} else {finalCountBonuses.push("Fail")};

let filter14=AllNew.filter(item=>item.value===14);
if (filter14.length===6){finalCountBonuses.push("Ace")} else {finalCountBonuses.push("Fail")};

console.log(finalCountBonuses);
console.log(AllNew);
console.log(filter11);
console.log(filter12);
console.log(filter13);
console.log(filter14);
  
    }
    
function EvaluateHands(){
        if (Royal1.length===5 && Flush1.length===1){ score.push(80) } 
        else if (Straight1.length===1 && Flush1.length==1){score.push(60)} 
        else if (FourKind1.length===1) {score.push(50)} 
        else if (ThreeKind1.length===1 && Pair1.length===1){score.push(40)} 
        else if (Flush1.length === 1){score.push(35)} 
        else if (Straight1.length === 1){score.push(30)} 
        else if (ThreeKind1.length === 1){score.push(25)} 
        else if (Pair1.length === 2){score.push(15)} 
        else if (Pair1.length === 1){score.push(10)} 
        else{score.push(0)}

        if (Royal2.length===5 && Flush2.length===1){ score.push(80) } 
        else if (Straight2.length===1 && Flush2.length==1){score.push(60)} 
        else if (FourKind2.length===1) {score.push(50)} 
        else if (ThreeKind2.length===1 && Pair2.length===1){score.push(40)} 
        else if (Flush2.length === 1){score.push(35)} 
        else if (Straight2.length === 1){score.push(30)} 
        else if (ThreeKind2.length === 1){score.push(25)} 
        else if (Pair2.length === 2){score.push(15)} 
        else if (Pair2.length === 1){score.push(10)} 
        else{score.push(0)}

        if (Royal3.length===5 && Flush3.length===1){ score.push(80) } 
        else if (Straight3.length===1 && Flush3.length==1){score.push(60)} 
        else if (FourKind3.length===1) {score.push(50)} 
        else if (ThreeKind3.length===1 && Pair3.length===1){score.push(40)} 
        else if (Flush3.length === 1){score.push(35)} 
        else if (Straight3.length === 1){score.push(30)} 
        else if (ThreeKind3.length === 1){score.push(25)} 
        else if (Pair3.length === 2){score.push(15)} 
        else if (Pair3.length === 1){score.push(10)} 
        else{score.push(0)}

        if (Royal4.length===5 && Flush4.length===1){ score.push(80) } 
        else if (Straight4.length===1 && Flush4.length==1){score.push(60)} 
        else if (FourKind4.length===1) {score.push(50)} 
        else if (ThreeKind4.length===1 && Pair4.length===1){score.push(40)} 
        else if (Flush4.length === 1){score.push(35)} 
        else if (Straight4.length === 1){score.push(30)} 
        else if (ThreeKind4.length === 1){score.push(25)} 
        else if (Pair4.length === 2){score.push(15)} 
        else if (Pair4.length === 1){score.push(10)} 
        else{score.push(0)}


        if (Royal5.length===5 && Flush5.length===1){ score.push(80) } 
        else if (Straight5.length===1 && Flush5.length==1){score.push(60)} 
        else if (FourKind5.length===1) {score.push(50)} 
        else if (ThreeKind5.length===1 && Pair5.length===1){score.push(40)} 
        else if (Flush5.length === 1){score.push(35)} 
        else if (Straight5.length === 1){score.push(30)} 
        else if (ThreeKind5.length === 1){score.push(25)} 
        else if (Pair5.length === 2){score.push(15)} 
        else if (Pair5.length === 1){score.push(10)} 
        else{score.push(0)}

        if (finalCountBonuses[0] === "Jack" && finalCountBonuses[1] === "Queen" && finalCountBonuses[2] === "King" && finalCountBonuses[3] === "Ace")  {score.push(60)} else if (finalCountBonuses[0] === "Jack" && finalCountBonuses[1] === "Queen" && finalCountBonuses[2] === "King" ) {score.push(50)} else if (finalCountBonuses[0] === "Jack" && finalCountBonuses[1] === "Queen" ) {score.push(40)} else if (finalCountBonuses[0] === "Jack") {score.push(30)} else {score.push(0)};
       
        console.log("scores");

        console.log(score[0]);
        console.log(score[1]);
        console.log(score[2]);
        console.log(score[3]);
        console.log(score[4]);
        console.log(score[5]);




        let FinalScore=score[0] + score[1] + score[2] + score[3] + score[4] + score[5];
        window.alert("Your Final Score is " + FinalScore + " points");
        
        document.getElementById("scoreLabel").innerText= "Your Score " + FinalScore;
        
    }


/*



console.log("hand1");
console.log(hand1);

console.log("hand2");

console.log(hand2);

console.log("hand3");
console.log(hand3);

console.log("hand4");
console.log(hand4);

console.log("hand5");
console.log(hand5);

console.log("hand6");
console.log(hand6);

console.log("hand7");
console.log(hand7);

console.log("hand8");
console.log(hand8);

console.log("hand9");
console.log(hand9);

console.log("hand10");
console.log(hand10);

console.log("hand11");
console.log(hand11);

console.log("hand12");
console.log(hand12);

console.log("hand13");
console.log(hand13);

console.log("hand14");
console.log(hand14);

console.log(hand1);

console.log("collection1");

console.log(collection1);

console.log("collection2");

console.log(collection2);

console.log("collection3");

console.log(collection3);

console.log("collection4");

console.log(collection4);

console.log("collection5");

console.log(collection5);

console.log("collection6");

console.log(collection6);

console.log("collection");

console.log(collection);

console.log("valuesTest1");
console.log(valuesTest1);

console.log("valuesTest2");
console.log(valuesTest2);





console.log(deck);
*/