const listNumbers = document.getElementById("numbers-list");
const countdown = document.getElementById("countdown");
const instructions = document.getElementById("instructions");
const answersForm = document.getElementById("answers-form");
const checkButton = document.querySelector("button.btn");
const inputsGroup = document.getElementById("input-group");
const inputs = inputsGroup.querySelectorAll("input");
const message = document.getElementById("message");

let randomNumbers = [];


function generateRandomNumbers() {
    randomNumbers = [];

    for (let i = 0; i < 5; i++) {
        randomNumbers.push(Math.floor(Math.random() * 50) + 1);
    }
    return randomNumbers;
}


function viewNumbers() {
    for (let i = 0; i < randomNumbers.length; i++) {
        const liElement = document.createElement("li");
        liElement.innerHTML = randomNumbers[i];
        listNumbers.appendChild(liElement);
    }
}


function startCountdown() {
    let timer = 30;

    const interval = setInterval(() => {
        countdown.innerHTML = timer;
        timer--;

        if (timer == 0) {
            clearInterval(interval);

            //rimuovo il countdown
            countdown.textContent = "";

            //rimuovo i li e cambio testo del paragrafo
            listNumbers.innerHTML = "";
            instructions.textContent = "Inserisci i numeri che hai memorizzato";

            //mostro il form
            answersForm.classList.remove("d-none");
        }
    }, 1000);
}


generateRandomNumbers();
viewNumbers();
startCountdown();


checkButton.addEventListener("click", function (event) {
    event.preventDefault();

    const userNumbers = [];
    for (let i = 0; i < inputs.length; i++) {
        userNumbers.push(parseInt(inputs[i].value));
    }
    console.log(userNumbers);

    const correctNumbers = [];
    for (let i = 0; i < randomNumbers.length; i++) {
        if (userNumbers.includes(randomNumbers[i])) {
            correctNumbers.push(randomNumbers[i]);
        }
    }
    console.log(correctNumbers);

    if (correctNumbers.length > 0) {
        message.innerHTML = `Hai indovinato i seguenti numeri: ${correctNumbers.join(", ")}`;
    } else {
        message.innerHTML = `Non hai indovinato nessun numero`;
    }
});