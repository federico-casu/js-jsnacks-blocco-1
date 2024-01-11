/* -------------------------------------------------------------------

Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.

------------------------------------------------------------------- */

// funzione che genera un numero casuale compreso tra min e max
function randomNumber(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

// funzione che controlla se un valore è presente nell'array
function isThere(value, array) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
        if ( value === element ) {
            return true;
        }
    }

    return false;
}

// funzione ricorsiva che restituisce l'indice della posizione di un nome non ancora stato estratto
function randomName() {
    let x = randomNumber(0, names.length-1);
    
    if (flagNames[x] === false) {
        flagNames[x] = true;
        return x;
    } else {
        return randomName();
    }
}

// funzione ricorsiva che restituisce l'indice della posizione di un cognome non ancora stato estratto
function randomSurname() {
    let x = randomNumber(0, surnames.length-1);
    
    if (flagSurnames[x] === false) {
        flagSurnames[x] = true;
        return x;
    } else {
        return randomSurname();
    }
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

// lista degli ospiti
let guests = [];

// array booleani di controllo per il vettore names
let flagNames = [false, false, false, false, false];
// array booleani di controllo per il vettore surnames
let flagSurnames = [false, false, false, false, false];

// recupero dal DOM gli elementi da manipolare
const nameListHtml = document.getElementById('names');
const surnameListHtml = document.getElementById('surnames');
const guestListHtml = document.getElementById('guests');

// inserisco nella ul con id names gli li contenenti gli elementi dell'array names
for (let i = 0; i < names.length; i++) {
    nameListHtml.innerHTML += `<li>${names[i]}</li>`;
}

// inserisco nella ul con id surnames gli li contenenti gli elementi dell'array surnames
for (let i = 0; i < surnames.length; i++) {
    surnameListHtml.innerHTML += `<li>${surnames[i]}</li>`;
}

console.log(guests)

// fintanto che la lunghezza della lista degli ospiti è minore della lunghezza della lista dei nomi (ma poteva essere anche dei cognomi), allora..
while (guests.length < names.length) {
    // estraggo l'indice della posizione di un nome che non è ancora stato estratto
    const x = randomName();
    // estraggo l'indice della posizione di un cognome che non è ancora stato estratto
    const y = randomSurname();


    console.log(x, y);

    // aggiungo alla lista degli ospiti il nome e il cognome estratti
    guests.push(`${names[x]} ${surnames[y]}`);
    console.log(guests.length)
}


 console.log(guests)


// inserisco nella ul con id guests gli li contenenti gli elementi dell'array guests
for (let i = 0; i < guests.length; i++) {
    guestListHtml.innerHTML += `<li>${guests[i]}</li>`;
}