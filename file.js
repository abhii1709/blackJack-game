const gendeck = ()=>{
    const deck =[];

    const suits =["Hearts","Clubs","Spades","Diamonds"];
    const cards =[
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "Jack",
        "Queen",
        "King",
        "Ace",
    ];
    for(const card of cards){
        console.log(card);
        for(const suit of suits){
            deck.push({card: card , suit:suit});
        }
    }
    return deck;
};






const drawcard = (deck)=>{
   const randomindex =Math.floor(Math.random() *deck.length);
    const card = deck[randomindex];
    deck.splice(randomindex,1);
    return card;
};

const mydeck = gendeck();
const playerhand =[];
const dealerhand = [];
const mycard =drawcard(mydeck);
const checkscore = (hand)=>{
    let total =0;
    for(const cardobject of hand){
        if(cardobject.card === 'King'){
            total +=10;
        }
   
    else if(cardobject.card === 'Queen'){
        total +=10;
    }
   else if(cardobject.card === 'Jack'){
        total +=10;
    }
    else if(cardobject.card === 'Ace'){
        total +=1;
    }
    else{
        total += Number(cardobject.card);
    }
}


    return total;
};


playerhand.push(drawcard(mydeck));
playerhand.push(drawcard(mydeck));
dealerhand.push(drawcard(mydeck));
dealerhand.push(drawcard(mydeck));

console.log("STARTING PLAYER HAND :", playerhand);
 console.log("STARTING PLAYER SCORE:",checkscore(playerhand));
 console.log("STARTING DEALER HAND :", dealerhand);
 console.log("STARTING DEALER SCORE:",checkscore(dealerhand));

console.log(playerhand);
//console.log(dealerhand);



checkscore(playerhand);

while(true){
    playerhand.push(drawcard(mydeck));
    
    const playerscore = checkscore(playerhand);
    const dealerscore =checkscore(dealerhand);
   
    if(playerscore>21){
        console.log(`YOU LOSE!! your score is ${playerscore} while
         the dealer had score ${dealerscore}`)
         break;
    }

    if(playerscore === 21){
        console.log(`you WON!!!...........   `)
        break;
    }
    
    dealerhand.push(drawcard(mydeck));

    

    if(dealerscore>21){
        console.log(`you WON!!!...........   `)
    }

    if(dealerscore === 21){
        console.log(`YOU LOSE!! your score is ${playerscore} while
         the dealer had score ${dealerscore}`)
         break;
    }
}
 console.log("ENDING PLAYER HAND :", playerhand);
 console.log("ENDING PLAYER SCORE:",checkscore(playerhand));
 console.log("ENDING DEALER HAND :", dealerhand);
 console.log("ENDING DEALER SCORE:",checkscore(dealerhand));