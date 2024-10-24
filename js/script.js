const listNumbers = document.getElementById("numbers-list");
const countdown = document.getElementById("countdown");
const instructions = document.getElementById("instructions");
const answersForm = document.getElementById("answers-form");

let randomNumbers = [];





generateRandomNumbers();
viewNumbers();
startCountdown();

function generateRandomNumbers() {
    let randomNumbers = [];

    for (let i = 0; i < 5; i++) {
        randomNumbers.push(Math.floor(Math.random() * 50) + 1);
    }
    console.log(randomNumbers);
    return randomNumbers;
}


function viewNumbers() {
    for (let i = 0; i < randomNumbers.length; i++) {
        const liElement = document.createElement("li");
        liItem.innerHTML = randomNumbers[i];
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


viewNumbers();

