/* -------------------------------------------------------------------

Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

------------------------------------------------------------------- */

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let numbers = [];
let sum = 0;

for (let i = 0; i < 20; i++) {
    numbers.push(randomNumber(0, 100));
}

for (let i = 0; i < 20; i++) {
    if (i % 2 != 0) {
        console.log(i);
        console.log(numbers[i]);
        sum += numbers[i];
    }
}

console.log(sum);


