




class Card {
    constructor(suit,value){
        this.suit=suit;
        this.value=value;
    }
}


let card1= new Card("Spades", 14);
console.log(card1);

let card2= new Card("Spades", 13);
console.log(card2);

let card3= new Card("Spades", 12);
console.log(card3);

let card4=new Card("Spades", 11);
console.log(card4);

let card5= new Card("Spades", 10);
console.log(card5);




let card6= new Card("Spades", 13);
console.log(card1);

let card7= new Card("Spades", 12);
console.log(card1);

let card8= new Card("Spades", 11);
console.log(card1);

let card9= new Card("Spades", 10);
console.log(card1);

let card10= new Card("Spades", 9);
console.log(card1);




let card11= new Card("Spades", 13);
console.log(card11);

let card12= new Card("Hearts", 13);
console.log(card12);

let card13= new Card("Hearts", 13);
console.log(card13);

let card14= new Card("Spades", 13);
console.log(card14);

let card15= new Card("Spades", 12);
console.log(card15);





let card16= new Card("Spades", 13);
console.log(card16);
let card17= new Card("Diamonds", 13);
console.log(card17);
let card18= new Card("Spades", 13);
console.log(card18);
let card19= new Card("Hearts", 9);
console.log(card19);
let card20= new Card("Spades", 9);
console.log(card20);


let card21= new Card("Queen", 11);
console.log(card21);
let card22= new Card("Spades", 10);
console.log(card22);
let card23= new Card("Spades", 9);
console.log(card23);
let card24= new Card("Diamonds", 8);
console.log(card24);
let card25= new Card("Spades", 7);
console.log(card25);

let card26= new Card("Spades", 13);
console.log(card1);
let card27= new Card("Diamonds", 3);
console.log(card1);
let card28= new Card("Spades", 8);
console.log(card1);

let end3=[];
let evaluateSet1=[];
let evaluateSet2=[];
let evaluateSet3=[];
let evaluateSet4=[];
let evaluateSet5=[];
let score=0;
console.log("evaluateSet1")

console.log(evaluateSet1)

//function push(){
    
    evaluateSet1.push(card1);
    evaluateSet1.push(card2);
    evaluateSet1.push(card3);
    evaluateSet1.push(card4);
    evaluateSet1.push(card5);

   

    evaluateSet2.push(card6);
    evaluateSet2.push(card7);
    evaluateSet2.push(card8);
    evaluateSet2.push(card9);
    evaluateSet2.push(card10);

    evaluateSet3.push(card11);
    evaluateSet3.push(card12);
    evaluateSet3.push(card13);
    evaluateSet3.push(card14);
    evaluateSet3.push(card15);

    evaluateSet4.push(card16);
    evaluateSet4.push(card17);
    evaluateSet4.push(card18);
    evaluateSet4.push(card19);
    evaluateSet4.push(card20);

    evaluateSet5.push(card21);
    evaluateSet5.push(card22);
    evaluateSet5.push(card23);
    evaluateSet5.push(card24);
    evaluateSet5.push(card25);

    end3.push(card26);
    end3.push(card27);
    end3.push(card28);

    let collection=evaluateSet1.concat(evaluateSet2, evaluateSet3, evaluateSet4, evaluateSet5, end3)
    console.log("this is the collection");
    console.log("HIIIIIIIIIIIII")
        console.log(`This is evaluate set 1 value${evaluateSet1[1].value}`)
        console.log(`This is evaluate set 1 value${evaluateSet1[0].value}`)
    console.log(collection);


    
    console.log(collection);
    console.log(evaluateSet1);
    console.log(evaluateSet2);
    console.log(evaluateSet3);
    console.log(evaluateSet4);
    console.log(evaluateSet5);
    console.log(end3);

    //evaluateFullyGlobal.push(collection);
    //evaluateFullyGlobal.push(evaluateSet1);
    //evaluateFullyGlobal.push(evaluateSet2);
    //evaluateFullyGlobal.push(evaluateSet3);
    //evaluateFullyGlobal.push(evaluateSet4);
    //evaluateFullyGlobal.push(evaluateSet5);
   // evaluateFullyGlobal.push(end3);

   // console.log(evaluateFullyGlobal);





//}

function checkHand1(collectionToEvaluate){
       let checkHand=collectionToEvaluate.filter(item=>item.suit==="Spades");
       if (checkHand.length===5){window.alert('you got a flush')} else{};
    
}

function pressEvaluate(){
    //checkevaluateSet1()
   // window.alert(score)
    checkevaluateSet2()
    window.alert(score)
    checkevaluateSet3()
    window.alert(score)
    checkevaluateSet4()
    window.alert(score)
    checkevaluateSet5()
    window.alert(score)
    checkend3()
    window.alert(score)
    Bonuses()
    window.alert(score)
}

function checkevaluateSet1(){
        
        let flushSuccess=[];
        let flushQSp=evaluateSet1.filter(item=>item.suit==="Spades");
        let flushQH=evaluateSet1.filter(item=>item.suit==="Hearts");
        let flushQD=evaluateSet1.filter(item=>item.suit==="Diamonds");
        let flushQC=evaluateSet1.filter(item=>item.suit==="Clubs");
        let flushQSw=evaluateSet1.filter(item=>item.suit==="Swords");
        let flushQSk=evaluateSet1.filter(item=>item.suit==="Skulls");
        if (flushQSp.length===5||flushQH.length===5||flushQD.length===5||flushQC.length===5||flushQSw.length===5||flushQSk.length===5){flushSuccess.push("success")} else{};

        let royalQ=[];
        if(evaluateSet1[0].value===15||14||13||11||10){royalQ.push(evaluateSet1[0].value)} else{};
        if(evaluateSet1[1].value===15||14||13||11||10){royalQ.push(evaluateSet1[1].value)} else{};
        if(evaluateSet1[2].value===15||14||13||11||10){royalQ.push(evaluateSet1[2].value)} else{};
        if(evaluateSet1[3].value===15||14||13||11||10){royalQ.push(evaluateSet1[3].value)} else{};
        if(evaluateSet1[4].value===15||14||13||11||10){royalQ.push(evaluateSet1[4].value)} else{};
        
        let straightQ=[];
        if(evaluateSet1[1].value===evaluateSet1.value[0]+1){straightQ.push("success")} else{};
        if(evaluateSet1[2].value===evaluateSet1.value[1]+1){straightQ.push("success")} else{};
        if(evaluateSet1[3].value===evaluateSet1.value[2]+1){straightQ.push("success")} else{};
        if(evaluateSet1[4].value===evaluateSet1.value[3]+1){straightQ.push("success")} else{};
        console.log("HIIIIIIIIIIIII")
        console.log(`This is evaluate set 1 value${evaluateSet1[1].value}`)
        console.log(`This is evaluate set 1 value${evaluateSet1[0].value}`)

        let fourOfKindSuccess=[];
        let valueFilter2=evaluateSet1.filter(item=>item.value===2);
        let valueFilter3=evaluateSet1.filter(item=>item.value===3);
        let valueFilter4=evaluateSet1.filter(item=>item.value===4);
        let valueFilter5=evaluateSet1.filter(item=>item.value===5);
        let valueFilter6=evaluateSet1.filter(item=>item.value===6);
        let valueFilter7=evaluateSet1.filter(item=>item.value===7);
        let valueFilter8=evaluateSet1.filter(item=>item.value===8);
        let valueFilter9=evaluateSet1.filter(item=>item.value===9);
        let valueFilter10=evaluateSet1.filter(item=>item.value===10);
        let valueFilter11=evaluateSet1.filter(item=>item.value===11);
        let valueFilter12=evaluateSet1.filter(item=>item.value===12);
        let valueFilter13=evaluateSet1.filter(item=>item.value===13);
        let valueFilter14=evaluateSet1.filter(item=>item.value===14);
        let valueFilter15=evaluateSet1.filter(item=>item.value===15);
        if(valueFilter2.length>=4||valueFilter3.length>=4||valueFilter4.length>=4||valueFilter5.length>=4||valueFilter6.length>=4||valueFilter7.length>=4||valueFilter8.length>=4||valueFilter9.length>=4||valueFilter10.length>=4||valueFilter11.length>=4||valueFilter12.length>=4||valueFilter13.length>=4||valueFilter14.length>=4||valueFilter15.length>=4){fourOfKindSuccess.push("success")} else {};

        let fullHouseSuccess2=[];
        let fullHouseSuccess3=[];
        let onePairSuccess=[];
        let twoPairSuccess=[];
        let threeKindSuccess=[];

        if(valueFilter2.length===3||valueFilter3.length===3||valueFilter4.length===3||valueFilter5.length===3||valueFilter6.length===3||valueFilter7.length===3||valueFilter8.length===3||valueFilter9.length===3||valueFilter10.length===3||valueFilter11.length===3||valueFilter12.length===3||valueFilter13.length===3||valueFilter14.length===3||valueFilter15.length===3){fullHouseSuccess3.push("success") && threeKindSuccess.push("success")} else {};


        if(valueFilter2.length===2||valueFilter3.length===2||valueFilter4.length===2||valueFilter5.length===2||valueFilter6.length===2||valueFilter7.length===2||valueFilter8.length===2||valueFilter9.length===2||valueFilter10.length===2||valueFilter11.length===2||valueFilter12.length===2||valueFilter13.length===2||valueFilter14.length===2||valueFilter15.length===2){fullHouseSuccess2.push("success") && onePairSuccess.push("success") && twoPairSuccess.push("success")} else {};

        if(valueFilter2.length===2||valueFilter3.length===2||valueFilter4.length===2||valueFilter5.length===2||valueFilter6.length===2||valueFilter7.length===2||valueFilter8.length===2||valueFilter9.length===2||valueFilter10.length===2||valueFilter11.length===2||valueFilter12.length===2||valueFilter13.length===2||valueFilter14.length===2||valueFilter15.length===2){twoPairSuccess.push("success") } else {};

        
        if(royalQ.length===5 && straightQ.length===4) { score + 80} else if (flushSuccess>=1 && straightQ.length===4) { score + 60} else if (fourOfKindSuccess.length===1) { score + 50} else if (fullHouseSuccess2.length===1 && fullHouseSuccess3.length===1) { score + 40} else if (flushSuccess.length>=1) { score + 30} else if (straightQ.length===4) { score + 25} else if (threeKindSuccess.length===1) { score + 15} else if (twoPairSuccess.length===2) { score + 10} else if (onePairSuccess.length===1) { score + 5} else {}

        window.alert(score)

        
    }

    function checkevaluateSet2(){

        let flushSuccess=[];
        let flushQSp=evaluateSet2.filter(item=>item.suit==="Spades");
        let flushQH=evaluateSet2.filter(item=>item.suit==="Hearts");
        let flushQD=evaluateSet2.filter(item=>item.suit==="Diamonds");
        let flushQC=evaluateSet2.filter(item=>item.suit==="Clubs");
        let flushQSw=evaluateSet2.filter(item=>item.suit==="Swords");
        let flushQSk=evaluateSet2.filter(item=>item.suit==="Skulls");
        if (flushQSp.length===5||flushQH.length===5||flushQD.length===5||flushQC.length===5||flushQSw.length===5||flushQSk.length===5){flushSuccess.push("success")} else{};

        let royalQ=[];
        if(evaluateSet2[0].value===15||14||13||11||10){royalQ.push(evaluateSet2[0].value)} else{};
        if(evaluateSet2[1].value===15||14||13||11||10){royalQ.push(evaluateSet2[1].value)} else{};
        if(evaluateSet2[2].value===15||14||13||11||10){royalQ.push(evaluateSet2[2].value)} else{};
        if(evaluateSet2[3].value===15||14||13||11||10){royalQ.push(evaluateSet2[3].value)} else{};
        if(evaluateSet2[4].value===15||14||13||11||10){royalQ.push(evaluateSet2[4].value)} else{};
        if(evaluateSet2[5].value===15||14||13||11||10){royalQ.push(evaluateSet2[5].value)} else{};
        
        let straightQ=[];
        if(evaluateSet2[1].value===evaluateSet2.value[0]+1){straightQ.push("success")} else{};
        if(evaluateSet2[2].value===evaluateSet2.value[1]+1){straightQ.push("success")} else{};
        if(evaluateSet2[3].value===evaluateSet2.value[2]+1){straightQ.push("success")} else{};
        if(evaluateSet2[4].value===evaluateSet2.value[3]+1){straightQ.push("success")} else{};

        let fourOfKindSuccess=[];
        let valueFilter2=evaluateSet2.filter(item=>item.value===2);
        let valueFilter3=evaluateSet2.filter(item=>item.value===3);
        let valueFilter4=evaluateSet2.filter(item=>item.value===4);
        let valueFilter5=evaluateSet2.filter(item=>item.value===5);
        let valueFilter6=evaluateSet2.filter(item=>item.value===6);
        let valueFilter7=evaluateSet2.filter(item=>item.value===7);
        let valueFilter8=evaluateSet2.filter(item=>item.value===8);
        let valueFilter9=evaluateSet2.filter(item=>item.value===9);
        let valueFilter10=evaluateSet2.filter(item=>item.value===10);
        let valueFilter11=evaluateSet2.filter(item=>item.value===11);
        let valueFilter12=evaluateSet2.filter(item=>item.value===12);
        let valueFilter13=evaluateSet2.filter(item=>item.value===13);
        let valueFilter14=evaluateSet2.filter(item=>item.value===14);
        let valueFilter15=evaluateSet2.filter(item=>item.value===15);
        if(valueFilter2.length>=4||valueFilter3.length>=4||valueFilter4.length>=4||valueFilter5.length>=4||valueFilter6.length>=4||valueFilter7.length>=4||valueFilter8.length>=4||valueFilter9.length>=4||valueFilter10.length>=4||valueFilter11.length>=4||valueFilter12.length>=4||valueFilter13.length>=4||valueFilter14.length>=4||valueFilter15.length>=4){fourOfKindSuccess.push("success")} else {};

        let fullHouseSuccess2=[];
        let fullHouseSuccess3=[];
        let onePairSuccess=[];
        let twoPairSuccess=[];
        let threeKindSuccess=[];

        if(valueFilter2.length===3||valueFilter3.length===3||valueFilter4.length===3||valueFilter5.length===3||valueFilter6.length===3||valueFilter7.length===3||valueFilter8.length===3||valueFilter9.length===3||valueFilter10.length===3||valueFilter11.length===3||valueFilter12.length===3||valueFilter13.length===3||valueFilter14.length===3||valueFilter15.length===3){fullHouseSuccess3.push("success") && threeKindSuccess.push("success")} else {};


        if(valueFilter2.length===2||valueFilter3.length===2||valueFilter4.length===2||valueFilter5.length===2||valueFilter6.length===2||valueFilter7.length===2||valueFilter8.length===2||valueFilter9.length===2||valueFilter10.length===2||valueFilter11.length===2||valueFilter12.length===2||valueFilter13.length===2||valueFilter14.length===2||valueFilter15.length===2){fullHouseSuccess2.push("success") && onePairSuccess.push("success") && twoPairSuccess.push("success")} else {};

        if(valueFilter2.length===2||valueFilter3.length===2||valueFilter4.length===2||valueFilter5.length===2||valueFilter6.length===2||valueFilter7.length===2||valueFilter8.length===2||valueFilter9.length===2||valueFilter10.length===2||valueFilter11.length===2||valueFilter12.length===2||valueFilter13.length===2||valueFilter14.length===2||valueFilter15.length===2){twoPairSuccess.push("success") } else {};

        
        if(royalQ.length===5 && straightQ.length===4) { score + 80} else if (flushSuccess>=1 && straightQ.length===4) { score + 60} else if (fourOfKindSuccess.length===1) { score + 50} else if (fullHouseSuccess2.length===1 && fullHouseSuccess3.length===1) { score + 40} else if (flushSuccess.length>=1) { score + 30} else if (straightQ.length===4) { score + 25} else if (threeKindSuccess.length===1) { score + 15} else if (twoPairSuccess.length===2) { score + 10} else if (onePairSuccess.length===1) { score + 5} else {}
        
    }

    function checkevaluateSet3(){
        let flushSuccess=[];
        let flushQSp=evaluateSet3.filter(item=>item.suit==="Spades");
        let flushQH=evaluateSet3.filter(item=>item.suit==="Hearts");
        let flushQD=evaluateSet3.filter(item=>item.suit==="Diamonds");
        let flushQC=evaluateSet3.filter(item=>item.suit==="Clubs");
        let flushQSw=evaluateSet3.filter(item=>item.suit==="Swords");
        let flushQSk=evaluateSet3.filter(item=>item.suit==="Skulls");
        if (flushQSp.length===5||flushQH.length===5||flushQD.length===5||flushQC.length===5||flushQSw.length===5||flushQSk.length===5){flushSuccess.push("success")} else{};;

        let royalQ=[];
        if(evaluateSet3[0][0].value===15||14||13||11||10){royalQ.push(evaluateSet3[0][0].value)} else{};
        if(evaluateSet3[0][1].value===15||14||13||11||10){royalQ.push(evaluateSet3[0][1].value)} else{};
        if(evaluateSet3[0][2].value===15||14||13||11||10){royalQ.push(evaluateSet3[0][2].value)} else{};
        if(evaluateSet3[0][3].value===15||14||13||11||10){royalQ.push(evaluateSet3[0][3].value)} else{};
        if(evaluateSet3[0][4].value===15||14||13||11||10){royalQ.push(evaluateSet3[0][4].value)} else{};
        if(evaluateSet3[0][5].value===15||14||13||11||10){royalQ.push(evaluateSet3[0][5].value)} else{};
        
        let straightQ=[];
        if(evaluateSet3[0][1].value===evaluateFullyGlobal.value[0][0]+1){straightQ.push("success")} else{};
        if(evaluateSet3[0][2].value===evaluateFullyGlobal.value[0][1]+1){straightQ.push("success")} else{};
        if(evaluateSet3[0][3].value===evaluateFullyGlobal.value[0][2]+1){straightQ.push("success")} else{};
        if(evaluateSet3[0][4].value===evaluateFullyGlobal.value[0][3]+1){straightQ.push("success")} else{};

        let fourOfKindSuccess=[];
        let valueFilter2=evaluateSet3.filter(item=>item.value===2);
        let valueFilter3=evaluateSet3.filter(item=>item.value===3);
        let valueFilter4=evaluateSet3.filter(item=>item.value===4);
        let valueFilter5=evaluateSet3.filter(item=>item.value===5);
        let valueFilter6=evaluateSet3.filter(item=>item.value===6);
        let valueFilter7=evaluateSet3.filter(item=>item.value===7);
        let valueFilter8=evaluateSet3.filter(item=>item.value===8);
        let valueFilter9=evaluateSet3.filter(item=>item.value===9);
        let valueFilter10=evaluateSet3.filter(item=>item.value===10);
        let valueFilter11=evaluateSet3.filter(item=>item.value===11);
        let valueFilter12=evaluateSet3.filter(item=>item.value===12);
        let valueFilter13=evaluateSet3.filter(item=>item.value===13);
        let valueFilter14=evaluateSet3.filter(item=>item.value===14);
        let valueFilter15=evaluateSet3.filter(item=>item.value===15);
        if(valueFilter2.length>=4||valueFilter3.length>=4||valueFilter4.length>=4||valueFilter5.length>=4||valueFilter6.length>=4||valueFilter7.length>=4||valueFilter8.length>=4||valueFilter9.length>=4||valueFilter10.length>=4||valueFilter11.length>=4||valueFilter12.length>=4||valueFilter13.length>=4||valueFilter14.length>=4||valueFilter15.length>=4){fourOfKindSuccess.push("success")} else {};

        let fullHouseSuccess2=[];
        let fullHouseSuccess3=[];
        let onePairSuccess=[];
        let twoPairSuccess=[];
        let threeKindSuccess=[];

      
        
    }

    function checkevaluateSet4(){
       
        let flushSuccess=[];
        let flushQSp=evaluateSet4.filter(item=>item.suit==="Spades");
        let flushQH=evaluateSet4.filter(item=>item.suit==="Hearts");
        let flushQD=evaluateSet4.filter(item=>item.suit==="Diamonds");
        let flushQC=evaluateSet4.filter(item=>item.suit==="Clubs");
        let flushQSw=evaluateSet4.filter(item=>item.suit==="Swords");
        let flushQSk=evaluateSet4.filter(item=>item.suit==="Skulls");
        if (flushQSp.length===5||flushQH.length===5||flushQD.length===5||flushQC.length===5||flushQSw.length===5||flushQSk.length===5){flushSuccess.push("success")} else{};;

        let royalQ=[];
        if(evaluateSet4[0].value===15||14||13||11||10){royalQ.push(evaluateSet4[0].value)} else{};
        if(evaluateSet4[1].value===15||14||13||11||10){royalQ.push(evaluateSet4[1].value)} else{};
        if(evaluateSet4[2].value===15||14||13||11||10){royalQ.push(evaluateSet4[2].value)} else{};
        if(evaluateSet4[3].value===15||14||13||11||10){royalQ.push(evaluateSet4[3].value)} else{};
        if(evaluateSet4[4].value===15||14||13||11||10){royalQ.push(evaluateSet4[4].value)} else{};
        if(evaluateSet4[5].value===15||14||13||11||10){royalQ.push(evaluateSet4[5].value)} else{};
        
        let straightQ=[];
        if(evaluateSet4[1].value===evaluateSet4.value[0]+1){straightQ.push("success")} else{};
        if(evaluateSet4[2].value===evaluateSet4.value[1]+1){straightQ.push("success")} else{};
        if(evaluateSet4[3].value===evaluateSet4.value[2]+1){straightQ.push("success")} else{};
        if(evaluateSet4[4].value===evaluateSet4.value[3]+1){straightQ.push("success")} else{};

        let fourOfKindSuccess=[];
        let valueFilter2=evaluateSet4.filter(item=>item.value===2);
        let valueFilter3=evaluateSet4.filter(item=>item.value===3);
        let valueFilter4=evaluateSet4.filter(item=>item.value===4);
        let valueFilter5=evaluateSet4.filter(item=>item.value===5);
        let valueFilter6=evaluateSet4.filter(item=>item.value===6);
        let valueFilter7=evaluateSet4.filter(item=>item.value===7);
        let valueFilter8=evaluateSet4.filter(item=>item.value===8);
        let valueFilter9=evaluateSet4.filter(item=>item.value===9);
        let valueFilter10=evaluateSet4.filter(item=>item.value===10);
        let valueFilter11=evaluateSet4.filter(item=>item.value===11);
        let valueFilter12=evaluateSet4.filter(item=>item.value===12);
        let valueFilter13=evaluateSet4.filter(item=>item.value===13);
        let valueFilter14=evaluateSet4.filter(item=>item.value===14);
        let valueFilter15=evaluateSet4.filter(item=>item.value===15);
        if(valueFilter2.length>=4||valueFilter3.length>=4||valueFilter4.length>=4||valueFilter5.length>=4||valueFilter6.length>=4||valueFilter7.length>=4||valueFilter8.length>=4||valueFilter9.length>=4||valueFilter10.length>=4||valueFilter11.length>=4||valueFilter12.length>=4||valueFilter13.length>=4||valueFilter14.length>=4||valueFilter15.length>=4){fourOfKindSuccess.push("success")} else {};

        let fullHouseSuccess2=[];
        let fullHouseSuccess3=[];
        let onePairSuccess=[];
        let twoPairSuccess=[];
        let threeKindSuccess=[];

        if(valueFilter2.length===3||valueFilter3.length===3||valueFilter4.length===3||valueFilter5.length===3||valueFilter6.length===3||valueFilter7.length===3||valueFilter8.length===3||valueFilter9.length===3||valueFilter10.length===3||valueFilter11.length===3||valueFilter12.length===3||valueFilter13.length===3||valueFilter14.length===3||valueFilter15.length===3){fullHouseSuccess3.push("success") && threeKindSuccess.push("success")} else {};


        if(valueFilter2.length===2||valueFilter3.length===2||valueFilter4.length===2||valueFilter5.length===2||valueFilter6.length===2||valueFilter7.length===2||valueFilter8.length===2||valueFilter9.length===2||valueFilter10.length===2||valueFilter11.length===2||valueFilter12.length===2||valueFilter13.length===2||valueFilter14.length===2||valueFilter15.length===2){fullHouseSuccess2.push("success") && onePairSuccess.push("success") && twoPairSuccess.push("success")} else {};

        if(valueFilter2.length===2||valueFilter3.length===2||valueFilter4.length===2||valueFilter5.length===2||valueFilter6.length===2||valueFilter7.length===2||valueFilter8.length===2||valueFilter9.length===2||valueFilter10.length===2||valueFilter11.length===2||valueFilter12.length===2||valueFilter13.length===2||valueFilter14.length===2||valueFilter15.length===2){twoPairSuccess.push("success") } else {};

        
        if(royalQ.length===5 && straightQ.length===4) { score + 80} else if (flushSuccess>=1 && straightQ.length===4) { score + 60} else if (fourOfKindSuccess.length===1) { score + 50} else if (fullHouseSuccess2.length===1 && fullHouseSuccess3.length===1) { score + 40} else if (flushSuccess.length>=1) { score + 30} else if (straightQ.length===4) { score + 25} else if (threeKindSuccess.length===1) { score + 15} else if (twoPairSuccess.length===2) { score + 10} else if (onePairSuccess.length===1) { score + 5} else {}
        
    }

    function checkevaluateSet5(){

        let flushSuccess=[];
        let flushQSp=evaluateSet5.filter(item=>item.suit==="Spades");
        let flushQH=evaluateSet5.filter(item=>item.suit==="Hearts");
        let flushQD=evaluateSet5.filter(item=>item.suit==="Diamonds");
        let flushQC=evaluateSet5.filter(item=>item.suit==="Clubs");
        let flushQSw=evaluateSet5.filter(item=>item.suit==="Swords");
        let flushQSk=evaluateSet5.filter(item=>item.suit==="Skulls");
        if (flushQSp.length===5||flushQH.length===5||flushQD.length===5||flushQC.length===5||flushQSw.length===5||flushQSk.length===5){flushSuccess.push("success")} else{};;

        let royalQ=[];
        if(evaluateSet5[0].value===15||14||13||11||10){royalQ.push(evaluateSet5[0].value)} else{};
        if(evaluateSet5[1].value===15||14||13||11||10){royalQ.push(evaluateSet5[1].value)} else{};
        if(evaluateSet5[2].value===15||14||13||11||10){royalQ.push(evaluateSet5[2].value)} else{};
        if(evaluateSet5[3].value===15||14||13||11||10){royalQ.push(evaluateSet5[3].value)} else{};
        if(evaluateSet5[4].value===15||14||13||11||10){royalQ.push(evaluateSet5[4].value)} else{};
        if(evaluateSet5[5].value===15||14||13||11||10){royalQ.push(evaluateSet5[5].value)} else{};
        
        let straightQ=[];
        if(evaluateSet5[1].value===evaluateSet5.value[0]+1){straightQ.push("success")} else{};
        if(evaluateSet5[2].value===evaluateSet5.value[1]+1){straightQ.push("success")} else{};
        if(evaluateSet5[3].value===evaluateSet5.value[2]+1){straightQ.push("success")} else{};
        if(evaluateSet5[4].value===evaluateSet5.value[3]+1){straightQ.push("success")} else{};

        let fourOfKindSuccess=[];
        let valueFilter2=evaluateSet5.filter(item=>item.value===2);
        let valueFilter3=evaluateSet5.filter(item=>item.value===3);
        let valueFilter4=evaluateSet5.filter(item=>item.value===4);
        let valueFilter5=evaluateSet5.filter(item=>item.value===5);
        let valueFilter6=evaluateSet5.filter(item=>item.value===6);
        let valueFilter7=evaluateSet5.filter(item=>item.value===7);
        let valueFilter8=evaluateSet5.filter(item=>item.value===8);
        let valueFilter9=evaluateSet5.filter(item=>item.value===9);
        let valueFilter10=evaluateSet5.filter(item=>item.value===10);
        let valueFilter11=evaluateSet5.filter(item=>item.value===11);
        let valueFilter12=evaluateSet5.filter(item=>item.value===12);
        let valueFilter13=evaluateSet5.filter(item=>item.value===13);
        let valueFilter14=evaluateSet5.filter(item=>item.value===14);
        let valueFilter15=evaluateSet5.filter(item=>item.value===15);
        if(valueFilter2.length>=4||valueFilter3.length>=4||valueFilter4.length>=4||valueFilter5.length>=4||valueFilter6.length>=4||valueFilter7.length>=4||valueFilter8.length>=4||valueFilter9.length>=4||valueFilter10.length>=4||valueFilter11.length>=4||valueFilter12.length>=4||valueFilter13.length>=4||valueFilter14.length>=4||valueFilter15.length>=4){fourOfKindSuccess.push("success")} else {};

        let fullHouseSuccess2=[];
        let fullHouseSuccess3=[];
        let onePairSuccess=[];
        let twoPairSuccess=[];
        let threeKindSuccess=[];

        if(valueFilter2.length===3||valueFilter3.length===3||valueFilter4.length===3||valueFilter5.length===3||valueFilter6.length===3||valueFilter7.length===3||valueFilter8.length===3||valueFilter9.length===3||valueFilter10.length===3||valueFilter11.length===3||valueFilter12.length===3||valueFilter13.length===3||valueFilter14.length===3||valueFilter15.length===3){fullHouseSuccess3.push("success") && threeKindSuccess.push("success")} else {};


        if(valueFilter2.length===2||valueFilter3.length===2||valueFilter4.length===2||valueFilter5.length===2||valueFilter6.length===2||valueFilter7.length===2||valueFilter8.length===2||valueFilter9.length===2||valueFilter10.length===2||valueFilter11.length===2||valueFilter12.length===2||valueFilter13.length===2||valueFilter14.length===2||valueFilter15.length===2){fullHouseSuccess2.push("success") && onePairSuccess.push("success") && twoPairSuccess.push("success")} else {};

        if(valueFilter2.length===2||valueFilter3.length===2||valueFilter4.length===2||valueFilter5.length===2||valueFilter6.length===2||valueFilter7.length===2||valueFilter8.length===2||valueFilter9.length===2||valueFilter10.length===2||valueFilter11.length===2||valueFilter12.length===2||valueFilter13.length===2||valueFilter14.length===2||valueFilter15.length===2){twoPairSuccess.push("success") } else {};

        
        if(royalQ.length===5 && straightQ.length===4) { score + 80} else if (flushSuccess>=1 && straightQ.length===4) { score + 60} else if (fourOfKindSuccess.length===1) { score + 50} else if (fullHouseSuccess2.length===1 && fullHouseSuccess3.length===1) { score + 40} else if (flushSuccess.length>=1) { score + 30} else if (straightQ.length===4) { score + 25} else if (threeKindSuccess.length===1) { score + 15} else if (twoPairSuccess.length===2) { score + 10} else if (onePairSuccess.length===1) { score + 5} else {}
        
    }

function checkend3(){

    let valueFilter2=end3.filter(item=>item.value===2);
    let valueFilter3=end3.filter(item=>item.value===3);
    let valueFilter4=end3.filter(item=>item.value===4);
    let valueFilter5=end3.filter(item=>item.value===5);
    let valueFilter6=end3.filter(item=>item.value===6);
    let valueFilter7=end3.filter(item=>item.value===7);
    let valueFilter8=end3.filter(item=>item.value===8);
    let valueFilter9=end3.filter(item=>item.value===9);
    let valueFilter10=end3.filter(item=>item.value===10);
    let valueFilter11=end3.filter(item=>item.value===11);
    let valueFilter12=end3.filter(item=>item.value===12);
    let valueFilter13=end3.filter(item=>item.value===13);
    let valueFilter14=end3.filter(item=>item.value===14);
    let valueFilter15=end3.filter(item=>item.value===15);

    let twoSuccess=[];
    let threeSuccess=[];

    if(valueFilter2.length===3||valueFilter3.length===3||valueFilter4.length===3||valueFilter5.length===3||valueFilter6.length===3||valueFilter7.length===3||valueFilter8.length===3||valueFilter9.length===3||valueFilter10.length===3||valueFilter11.length===3||valueFilter12.length===3||valueFilter13.length===3||valueFilter14.length===3||valueFilter15.length===3){twoSuccess.push("success")} else {};


    if(valueFilter2.length===2||valueFilter3.length===2||valueFilter4.length===2||valueFilter5.length===2||valueFilter6.length===2||valueFilter7.length===2||valueFilter8.length===2||valueFilter9.length===2||valueFilter10.length===2||valueFilter11.length===2||valueFilter12.length===2||valueFilter13.length===2||valueFilter14.length===2||valueFilter15.length===2){threeSuccess.push("success")} else {};

    if (threeKindSuccess.length===1) { score + 15} else if (twoPairSuccess.length===2) { score + 10} else {};
}

function Bonuses(){
    
    let valueFilter11=collection.filter(item=>item.value===11);
    let valueFilter12=collection.filter(item=>item.value===12);
    let valueFilter13=collection.filter(item=>item.value===13);
    let valueFilter14=collection.filter(item=>item.value===14);
    let valueFilter15=collection.filter(item=>item.value===15);

    if(valueFilter11.length === 6) { score + 15 } else {};
    if(valueFilter11.length === 6 && valueFilter12.length === 6 ) { score + 30 } else {};
    if(valueFilter11.length === 6 && valueFilter12.length === 6 && valueFilter13.length === 6 ) { score + 30 } else {};
    if(valueFilter11.length === 6 && valueFilter12.length === 6 && valueFilter13.length === 6 && valueFilter14.length === 6) { score + 40 } else {};
    if(valueFilter11.length === 6 && valueFilter12.length === 6 && valueFilter13.length === 6 && valueFilter14.length === 6 && valueFilter15.length === 6) { score + 50 }  else {};
     
    }
    

function checkStraight(collection2){
    let straightPlaceholder=[]
    if (collection2[1].value===collection2[0].value+1){
        straightPlaceholder.push('success')
    } else {}

    if (collection2[2].value===collection2[1].value+1){
        straightPlaceholder.push('success')
    } else {}

    if (collection2[3].value===collection2[2].value+1){
        straightPlaceholder.push('success')
    } else {}

    if (collection2[4].value===collection2[3].value+1){
        straightPlaceholder.push('success')
    } else {}
    
    if (straightPlaceholder.length===4){
        evaluateSet1.push('straight')
    } else {}
}

//function checkHand1 (handVar, callback ){

    //callback(handVar);
    
//}


/*
function checkevaluateSet1(){
    let evaluateFullyGlobal=evaluateSet1.slice(0,5);
    let flushSuccess=[];
    let flushQSp=evaluateFullyGlobal.filter(item=>item.suit==="Spades");
    let flushQH=evaluateFullyGlobal.filter(item=>item.suit==="Hearts");
    let flushQD=evaluateFullyGlobal.filter(item=>item.suit==="Diamonds");
    let flushQC=evaluateFullyGlobal.filter(item=>item.suit==="Clubs");
    let flushQSw=evaluateFullyGlobal.filter(item=>item.suit==="Swords");
    let flushQSk=evaluateFullyGlobal.filter(item=>item.suit==="Skulls");
    if (flushQSp.length===5||flushQH.length===5||flushQD.length===5||flushQC.length===5||flushQSw.length===5||flushQSk.length===5){flushSuccess.push("success")};

    let royalQ=[];
    if(evaluateFullyGlobal[0][0].value===15||14||13||11||10){royalQ.push(evaluateFullyGlobal[0][0].value)} else{};
    if(evaluateFullyGlobal[0][1].value===15||14||13||11||10){royalQ.push(evaluateFullyGlobal[0][1].value)} else{};
    if(evaluateFullyGlobal[0][2].value===15||14||13||11||10){royalQ.push(evaluateFullyGlobal[0][2].value)} else{};
    if(evaluateFullyGlobal[0][3].value===15||14||13||11||10){royalQ.push(evaluateFullyGlobal[0][3].value)} else{};
    if(evaluateFullyGlobal[0][4].value===15||14||13||11||10){royalQ.push(evaluateFullyGlobal[0][4].value)} else{};
    if(evaluateFullyGlobal[0][5].value===15||14||13||11||10){royalQ.push(evaluateFullyGlobal[0][5].value)} else{};
    
    let straightQ=[];
    if(evaluateFullyGlobal[0][1]===evaluateFullyGlobal[0][0]){straightQ.push("success")} else{};
    if(evaluateFullyGlobal[0][2]===evaluateFullyGlobal[0][1]+1){straightQ.push("success")} else{};
    if(evaluateFullyGlobal[0][3]===evaluateFullyGlobal[0][2]+1){straightQ.push("success")} else{};
    if(evaluateFullyGlobal[0][4]===evaluateFullyGlobal[0][3]+1){straightQ.push("success")} else{};

    let fourOfKindSuccess=[];
    let valueFilter2=evaluateFullyGlobal.filter(item=>item.value===2);
    let valueFilter3=evaluateFullyGlobal.filter(item=>item.value===3);
    let valueFilter4=evaluateFullyGlobal.filter(item=>item.value===4);
    let valueFilter5=evaluateFullyGlobal.filter(item=>item.value===5);
    let valueFilter6=evaluateFullyGlobal.filter(item=>item.value===6);
    let valueFilter7=evaluateFullyGlobal.filter(item=>item.value===7);
    let valueFilter8=evaluateFullyGlobal.filter(item=>item.value===8);
    let valueFilter9=evaluateFullyGlobal.filter(item=>item.value===9);
    let valueFilter10=evaluateFullyGlobal.filter(item=>item.value===10);
    let valueFilter11=evaluateFullyGlobal.filter(item=>item.value===11);
    let valueFilter12=evaluateFullyGlobal.filter(item=>item.value===12);
    let valueFilter13=evaluateFullyGlobal.filter(item=>item.value===13);
    let valueFilter14=evaluateFullyGlobal.filter(item=>item.value===14);
    let valueFilter15=evaluateFullyGlobal.filter(item=>item.value===15);
    if(valueFilter2.length>=4||valueFilter3.length>=4||valueFilter4.length>=4||valueFilter5.length>=4||valueFilter6.length>=4||valueFilter7.length>=4||valueFilter8.length>=4||valueFilter9.length>=4||valueFilter10.length>=4||valueFilter11.length>=4||valueFilter12.length>=4||valueFilter13.length>=4||valueFilter14.length>=4||valueFilter15.length>=4){fourOfKindSuccess.push("success")} else {};

    let fullHouseSuccess2=[];
    let fullHouseSuccess3=[];
    let onePair=[];

    if(valueFilter2.length===3||valueFilter3.length===3||valueFilter4.length===3||valueFilter5.length===3||valueFilter6.length===3||suiteFilter7.length===3||valueFilter8.length===3||valueFilter9.length===3||valueFilter10.length===3||valueFilter11.length===3||valueFilter12.length===3||valueFilter13.length===3||valueFilter14.length===3||valueFilter15.length===3){fullHouseSuccess3.push("success")} else {};
    if(valueFilter2.length===2||valueFilter3.length===2||valueFilter4.length===2||valueFilter5.length===2||valueFilter6.length===2||valueFilter7.length===2||valueFilter8.length===2||valueFilter9.length===2||valueFilter10.length===2||valueFilter11.length===2||valueFilter12.length===2||valueFilter13.length===2||valueFilter14.length===2||valueFilter15.length===2){fullHouseSuccess2.push("success") && fullHouseSuccess2.push("success") } else {};

*/