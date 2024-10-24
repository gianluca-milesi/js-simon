function generateNumbers() {
    let randomNumbers = [];

    for (let i = 0; i < 5; i++) {
        randomNumbers.push(Math.floor(Math.random() * 50) + 1);
    }
    console.log(randomNumbers);
}

generateNumbers();