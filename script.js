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

    if (compu < 0.33) {
        compu = "rock";
    } else if (compu < 0.66) {
        compu = "paper";
    } else if (compu < 1) {
        compu = "scissors";
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
        return alert("it's a tie " + user + " can't defeat " + compu);
    } else if (user === "rock" && compu === "scissors" || user === "paper" && compu === "rock" || user === "scissors" && compu === "paper") {
        return alert(user + " wins");
    } else {
        alert(compu + " wins")
    }
}