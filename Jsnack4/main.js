/* -------------------------------------------------------------------

Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

------------------------------------------------------------------- */

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let numbers = [];
let sum = 0;
const numberListHtml = document.getElementById('numberList');

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

for (i = 0; i < numbers.length; i++){
    if (i % 2 != 0) {
        numberListHtml.innerHTML += `<li style="color: red;">Posizione ${i}: ${numbers[i]}</li>`;
    } else {
        numberListHtml.innerHTML += `<li>Posizione ${i}: ${numbers[i]}</li>`;
    }
}

document.body.innerHTML += `<p>La somma dei numeri in posizione dispari è pari a: <strong>${sum}</strong></p>`;