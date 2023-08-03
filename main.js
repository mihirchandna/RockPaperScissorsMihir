function getComputerChoice()
{
    let arr=["Rock","Paper","Scissor"];
    return arr[(Math.floor(Math.random()*arr.length))];
}

function decision(comp,player)
{
    if(player==comp)
    {
        return "Tie";
    }
    else if((player=="Rock" && comp=="Paper")|| (player=="Scissor" && comp=="Rock")||(player=="paper" && comp=="Scissor"))
    {
        return "Computer Wins"
    }
    else{
        return "Player Wins";
    }
}

// const comp=getComputerChoice();
// console.log("Computer Choice "+comp);
// console.log(decision(comp,plyrchoice));

function game()
{
    let playerwin=0;
    let computerwin=0;
    let tie=0;
    for (let index = 0; index < 5; index++) {
        let comp=getComputerChoice();
        const playerchoice=window.prompt("Enter the choice","Rock, Paper, Scissor");
        let st=decision(comp,playerchoice);
        if(st=="Computer Wins")
        {
            console.log("Computer Wins Round "+(index+1));
            computerwin=computerwin+1;
        }
        else if(st=="Player Wins")
        {
            console.log("Player Wins Round "+(index+1));
            playerwin=playerwin+1;
        }
        else{
            console.log("Tie in Round "+(index+1));
            tie=tie+1;
        }
    }
    if(computerwin>playerwin)
    {
        console.log("Computer Wins");
    }
    else{
        console.log("Player Wins");
    }
}
game();