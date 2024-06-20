let userScore = 0;
let compScore = 0;

let user_score = document.getElementById("user-score");
let comp_score = document.getElementById("comp-score");
const choices = document.querySelectorAll('.choice');

const compChoice = () => {
    let compIdx = Math.floor(Math.random()*3);
    return compIdx;
}

const displayScore = (choice,userIdx,compIdx,userWin,draw) => {
    let mssg = document.getElementById("message")
    if(draw){
        mssg.innerHTML = `Draw!!!`
    }
    else if(userWin){
        mssg.innerText = `You chose ${choice[userIdx]}
        Computer chose ${choice[compIdx]}
        You won!!!`
    }
    else{
        mssg.innerText = `You chose ${choice[userIdx]}
        Computer chose ${choice[compIdx]}
        You lose!!!`
    }
}

const playGame = (userChoice) => {
    let userWin,draw;
    const choice = ["rock", "paper", "scissor"]
    let userIdx = choice.indexOf(userChoice);
    console.log(userIdx + " " + choice[userIdx]);
    let compIdx = compChoice();
    console.log(compIdx + " " + choice[compIdx]);
    if(compIdx == userIdx){
        console.log("Tie");
        draw = 1;
    }
    else if(userIdx==0 && compIdx==2){
        userScore++;
        user_score.innerHTML = userScore;
        userWin = true;
    }
    else if(userIdx==2 && compIdx==0){
        compScore++;
        comp_score.innerHTML = compScore;
        userWin = false;
    }
    else if(compIdx > userIdx){
        compScore++;
        comp_score.innerHTML = compScore;
        userWin = false;
    }
    else{
        userScore++;
        user_score.innerHTML = userScore;
        userWin = true;
    }
    displayScore(choice,userIdx,compIdx,userWin,draw)
}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})