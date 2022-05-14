function play(value) {
    let compu = Math.random();
    let user = null;
    let result = document.getElementById("result");
    let choiceOne = document.getElementById("choice1");
    let choiceTwo = document.getElementById("choice2");
    let choiceThree = document.getElementById("choice3");
    let usu = document.getElementById("user");
    let pc = document.getElementById("pc");
    let audio = document.getElementById("audiu")
    let again = document.querySelector(".cont-again");
    let rockS = document.getElementById("rock-s");
    let paperS = document.getElementById("paper-s");
    let scissorsS = document.getElementById("scissors-s");
    

    if (compu < 0.33) {
        compu = "rock";
        choiceOne.classList.add("show");
        choiceTwo.classList.remove("show");
        choiceThree.classList.remove("show");
    } else if (compu < 0.66) {
        compu = "paper";
        choiceTwo.classList.add("show");
        choiceOne.classList.remove("show");
        choiceThree.classList.remove("show");
    } else if (compu < 1) {
        compu = "scissors";
        choiceThree.classList.add("show");
        choiceOne.classList.remove("show");
        choiceTwo.classList.remove("show");
    }

    switch(value) {
        case "rock":
            user = "rock"
            rockS.play()
            paperS.pause()
            paperS.currentTime = 0
            scissorsS.pause()
            scissorsS.currentTime = 0
            break;
        case "paper":
            user = "paper"
            paperS.play()
            scissorsS.pause()
            scissorsS.currentTime = 0
            rockS.pause()
            rockS.currentTime = 0
            break;
        case "scissors":
            user = "scissors"
            scissorsS.play()
            rockS.pause()
            rockS.currentTime = 0
            paperS.pause()
            paperS.currentTime = 0
            break;
    }

    if (user === compu) {
        result.innerHTML = "it's a tie " + user + " can't defeat " + compu;
    } else if (user === "rock" && compu === "scissors" || user === "paper" && compu === "rock" || user === "scissors" && compu === "paper") {
        u++;
        usu.innerHTML = u;
        result.innerHTML = user + " wins";
    } else {
        i++;
        pc.innerHTML = i;
        result.innerHTML = compu + " wins";
    }

    
    

    if (u === 5) {
        again.classList.add("come")
        again.innerHTML = '<h3>You lose!</h3> <img src="img/self.gif" alt=""> <button id="again" onclick="again()">Play Again</button>'
        audio.play()
        rockS.pause()
        rockS.currentTime = 0
        paperS.pause()
        paperS.currentTime = 0
        scissorsS.pause()
        scissorsS.currentTime = 0
    } else if (i === 5) {
        again.classList.add("come")
        again.innerHTML = '<h3>You lose!</h3> <img src="img/kaiji-cry.gif" alt=""> <button id="again" onclick="again()">Play Again</button>'
        audio.play()
        rockS.pause()
        rockS.currentTime = 0
        paperS.pause()
        paperS.currentTime = 0
        scissorsS.pause()
        scissorsS.currentTime = 0
    }
}

let u = 0;
let i = 0;

function again() {
    let usu = document.getElementById("user");
    let pc = document.getElementById("pc");
    let again = document.querySelector(".cont-again");
    var audio = document.getElementById("audiu")
    u = 0
    i = 0
    usu.innerHTML = u;
    pc.innerHTML = i;
    again.classList.remove("come")
    audio.pause()
    audio.currentTime = 0;
}