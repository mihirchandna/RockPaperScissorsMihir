function getComputerChoice() {
    let arr = ["Rock", "Paper", "Scissor"];
    return arr[(Math.floor(Math.random() * arr.length))]; // Return string choice, not index
}

function decision(comp, player) {
    if (player === comp) {
        return "Tie";
    } else if ((player === "Rock" && comp === "Paper") || (player === "Scissor" && comp === "Rock") || (player === "Paper" && comp === "Scissor")) {
        return "Computer Wins";
    } else {
        return "Player Wins";
    }
}

function game() {
    let comp;
    let choice;
    let win=[0,0,0];
    let round=0;
    // Rock-Rock Paper Paper Scissor Scissor
    const rock = document.querySelector(".rock");
    rock.onclick = () => {
        round=round+1;
        comp = getComputerChoice();
        choice = "Rock";
        win=playGame(comp, choice, win, round);
    };

    const paper = document.querySelector(".paper");
    paper.onclick = () => {
        round=round+1;
        comp = getComputerChoice();
        choice = "Paper"; // Convert choice to string
        win=playGame(comp, choice, win, round);
    };

    const scissor = document.querySelector(".scissor");
    scissor.onclick = () => {
        round=round+1;
        comp = getComputerChoice();
        choice = "Scissor"; // Convert choice to string
        win=playGame(comp, choice, win, round);
    };
}

function playGame(comp, choice,win) {
    let st = decision(comp, choice);
    let cmpch=document.getElementById("comp");
    let scr=document.getElementById("score")
    let resultele=document.getElementById("result");
    console.log(`Computer choice: ${comp}`);
    if (st === "Computer Wins") {
        cmpch.textContent="Computer Choice: "+comp;
        resultele.textContent="Computer Wins";
        win[0]=win[0]+1;
        console.log("Computer Wins");
    } else if (st === "Player Wins") {
        cmpch.textContent="Computer Choice: "+comp;
        resultele.textContent="Player Wins";
        win[1]=win[1]+1;
        console.log("Player Wins");
    } else {
        cmpch.textContent="Computer Choice: "+comp;
        resultele.textContent="Tie";
        win[2]=win[2]+1;
        console.log("Tie");
    }
    scr.textContent="Computer Wins: "+win[0]+" Player Wins: "+win[1]+" Tie: "+win[2];
    if(win[0]==5)
    {
        scr.textContent="Computer Wins Game";
        win=[0,0,0];
        return win;
    }
    else if(win[1]==5)
    {
        scr.textContent="Player Wins Game";
        win=[0,0,0];
        return win;
    }
    return win;
}
document.addEventListener("DOMContentLoaded", () => {
    game();
});

