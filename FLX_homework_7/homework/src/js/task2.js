let number, randomNumber;
let max = 5, attempt = 3, Prize = 0, Bonus = 10;
if (confirm(`‘Do you want to play a game?’`)) {
    randomNumber = Math.ceil(Math.random() * max);
    while (attempt > 0) {
        number = parseFloat(prompt(`Enter a number from 0 to ${max}\nAttempts left: ${attempt}
Total prize: ${Prize}$\nPossible prize on current attempt: ${Bonus}$`));
        if (number === randomNumber) {
            Prize += Bonus;
            alert(`‘Congratulation!   Your prize is: ${Prize}$`);
            if (confirm(`‘Do you want to continue?’`)) {
                max = 10;
                randomNumber = Math.ceil(Math.random() * max);
                attempt = 4;
                Bonus = 30;
            } else {
                break;
            }
        } else {
            Bonus = Math.floor(Bonus / 2);
        }
        attempt -= 1;
    }
    if (attempt === 0 && randomNumber !== number) {
        Bonus = 0;
    }
    alert(`‘Thank you for a game. Your prize is: ${Prize}$`);
} else {
    alert(`'You did not become a millionaire, but can.'`);
}