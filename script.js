// function card(value) {
//     if (value == "rock") {
//         return alert("You have selected: " + value)
//     } else if (value === "paper") {
//         return alert("You have selected: " + value)
//     } else if (value === "scissors") {
//         return alert(Math.random());
//     } else {
//         return alert(Math.random());
//     }
// }

// function computerPlay() {
//     let compu = Math.random();
//     let count = document.getElementsByClassName("count");

//     const rock = document.getElementsByClassName("rock");
//     const paper = document.getElementsByClassName("paper");
//     const scissors = document.getElementsByClassName("scissors");

//     if (compu < 0.33) {
//         return alert("rock");
//     } else if (compu < 0.66) {
//         return alert("paper");
//     } else if (compu < 1) {
//         return alert("scissors");
//     }
// }

function play(value) {
    let compu = Math.random();
    let user = null;
    let result = document.getElementById("result");
    let choiceOne = document.getElementById("choice1");
    let choiceTwo = document.getElementById("choice2");
    let choiceThree = document.getElementById("choice3");
    let usu = document.getElementById("user");
    let pc = document.getElementById("pc");

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
            break;
        case "paper":
            user = "paper"
            break;
        case "scissors":
            user = "scissors"
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
        alert("BASTA PELOUDO, NO TE DAS CUENTA QUE GANASTE?");cd
    } else if (i === 5) {
        alert("BASTA PELOUDO, NO TE DAS CUENTA QUE PERDISTE?");
    }
}

let u = 0;
let i = 0;