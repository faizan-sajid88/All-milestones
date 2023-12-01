document.addEventListener('DOMContentLoaded', function() {

let deck = []
let suits = ["♣","♦","♥","♠"]
let values = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"]

// create a deck

    for(let suite of suits){
        for(let value of values){
            deck.push({ suite, value })
        }
    }
    

// shuffel deck

function shuffleDeck(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffleDeck(deck)

// players card

let player1 = deck.pop()
let player2 = deck.pop()

// player 1 card

let player1Info = document.getElementById("player1")

player1Info.innerHTML = `<p class="card-num">${player1.value}</p>
<h3 class="card-type">${player1.suite}</h3>
<h1>player 1</h1>`

// player 2 card

let player2Info = document.getElementById("player2")

player2Info.innerHTML = `<p class="card-num">${player2.value}</p>
<h3 class="card-type">${player2.suite}</h3>
<h1>player 2</h1>`

// checking winner 
let btn = document.getElementById("winner-btn")

btn.addEventListener( "click" ,function (){

    let player1Index = values.indexOf(player1.value)
    let player2Index = values.indexOf(player2.value)
    

 if(player1Index > player2Index){
    
    document.getElementById("winner-div").innerHTML = "<h1>player 1 is a winner</h1>"
    document.getElementById("winner-div").style.display = "block"

    }
else if (player1Index < player2Index){

    document.getElementById("winner-div").innerHTML = "<h1>player 2 is a winner</h1>"
    document.getElementById("winner-div").style.display = "block"

    }

 else{
        document.getElementById("winner-div").innerHTML = "<h1> Match is Tie</h1>"
        document.getElementById("winner-div").style.display = "block"
  }

})

})