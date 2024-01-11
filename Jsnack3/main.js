/* -------------------------------------------------------------------

Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.

------------------------------------------------------------------- */

// funzione che genera un numero casuale compreso tra min e max
function randomNumber(min, max) {
    return Math.floor((Math.random() * max - min + 1) + min);
}

function isThere(value, array) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
        if ( value === element ) {
            return true;
        }
    }

    return false;
}

// lista dei nomi
const names = [
    "Giacomo",
    "Andrea",
    "Luca",
    "Carlo",
    "Enrico"
]

// lista dei cognomi
const surnames = [
    "Rossi",
    "Bianchi",
    "Conti",
    "Del Vecchio",
    "Vinci"
]

// lista ospiti
// let guests = [];
// let flagNames = [false, false, false, false, false];
// let flagSurnames = [false, false, false, false, false];

// for (let i = 0; i < names.length; i++) {
//     let randomName = randomNumber(0, names.length-1);
//     let randomSurname = randomNumber(0, surnames.length-1);
    
//     while (flagNames[randomName] == true) {
//         randomName = randomNumber(0, names.length-1);
//     }

//     flagNames[randomName] = true;

//     while (flagSurnames[randomSurname] == true) {
//         randomSurname = randomNumber(0, surnames.length-1);
//     }

//     flagSurnames[randomSurname] = true;

//     guests[i] = `${names[randomName]} ${surnames[randomSurname]}`;
// }

// console.log(guests)




