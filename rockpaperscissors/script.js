"Use strict"
const buttons = document.querySelector("#buttons");
const texts = document.querySelector("#texts");
let playerChoice = "";
let machineChoice ="";
console.log(buttons);

clickButton();

function clickButton() {
buttons.querySelectorAll("button").forEach(button=>{
    button.addEventListener("click", startRound);

    function startRound(event) {
        
        console.log(event); 
        if (event.target.classList.contains("rock")) {
            playerChoice = "rock";
        }
        else if (event.target.classList.contains("paper")) {
            playerChoice = "paper";
        }
        else {
            playerChoice = "scissors";
        }
        let randomChoice = Math.floor(Math.random() * 3);
        console.log(randomChoice);
    
    if (randomChoice == 0) {
        machineChoice = "rock";
    }
    else if (randomChoice == 1) {
        machineChoice = "paper"; 
    }
    else {
        machineChoice = "scissors";  
    }
    console.log(playerChoice);  
    console.log(machineChoice);
    
    animateHands();
    }
})  
}



function animateHands() {
    document.querySelector("#player1").classList.add("shake");
    document.querySelector("#player2").classList.add("shake");
    document.querySelector("#player1").addEventListener("animationend",showHands);
    document.querySelector("#player2").addEventListener("animationend",showHands);
}

function showHands() {
    document.querySelector("#player1").classList.replace("shake", playerChoice);
    document.querySelector("#player2").classList.replace("shake", machineChoice);
    decideWinner();
}

function decideWinner(){
    
    if (playerChoice == "rock" && machineChoice == "paper") {
        document.querySelector("#lose").classList.remove("hidden");
    }
    else if (playerChoice == "rock" && machineChoice == "scissors") {
        document.querySelector("#win").classList.remove("hidden");
    }
    else if (playerChoice == "rock" && machineChoice == "rock") {
        document.querySelector("#draw").classList.remove("hidden");
    }
    else if (playerChoice == "paper" && machineChoice == "rock") {
        document.querySelector("#win").classList.remove("hidden");
    }
    else if (playerChoice == "paper" && machineChoice == "scissors") {
        document.querySelector("#lose").classList.remove("hidden");
    }
    else if (playerChoice == "paper" && machineChoice == "paper") {
        document.querySelector("#draw").classList.remove("hidden");
    }
    else if (playerChoice == "scissors" && machineChoice == "rock") {
        document.querySelector("#lose").classList.remove("hidden");
    }
    else if (playerChoice == "scissors" && machineChoice == "paper") {
        document.querySelector("#win").classList.remove("hidden");
    }
    else if (playerChoice == "scissors" && machineChoice == "scissors") {
        document.querySelector("#draw").classList.remove("hidden");
    }
    console.log("jebiga");
    window.addEventListener("click", reset);
}

function reset() {
    document.querySelector("#player1").classList.remove(playerChoice);
    document.querySelector("#player2").classList.remove(machineChoice);
    texts.querySelectorAll("div").forEach(txt=>{
        txt.classList.add("hidden");
    }
        )
    clickButton();
}
