// Functions
//.1 random number function;
function randomN(nmin, nmax) {
  var randomNumber = Math.floor(Math.random() * nmax + nmin);
  return randomNumber;
}

//.2 function check if a number is present in an array, if yes return true;
function checkIf(array, num) {
  if (array.includes(num)) {
    return true;
  } else {
    return false;
  }
}

// //.3 function push number in array;
// function pushIf(condition, number, array) {
//   if (condition == false) {
//     array.push(number)
//   }
// }

//4. function that check range of a number and isNaN;
function checkNumber(number, nmin, nmax) {
  if ((number < nmin) || (number > nmax)) {
    alert("Il numero inserito dev'essere tra 1 e 100.");
  } else if (isNaN(number)) {
    alert("Inserisci un numero.");
  }
}

//Esercizio
//1. Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati.
var listaBombe = [];

do {
  var randomNumber = randomN(1, 100);
  var checkNumCPU = checkIf(listaBombe, randomNumber);
  if (checkNumCPU == false) {
    listaBombe.push(randomNumber)
  };
} while (listaBombe.length != 16);
console.log(listaBombe);

//2.1 Chiedi all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
var numberListG = [];
while (numberListG.length != 5) {
  var numberG = parseInt(prompt("Inserisci un numero da 1 a 100"));
  var numberGRange = checkNumber(numberG, 1, 100);
  //2.2 // Controlla che il numero inserito non sia duplicato nell'array utente. Se no pushalo.
  if (checkNumG1 = checkIf(numberListG, numberG)) {
    alert("Inserisci un numero che non hai già selezionato.")
  } else {
    numberListG.push(numberG);
    console.log(numberListG);
  }
  //2.3
}


//2.1 Controlla se il numero inserito dall'utente è presente nella lista delle bombe;
// var numberListG = [];
// var checkNumGBomb = check(listaBombe, numberG);
//
// while ((numberListG.length != 5) && (checkNumGBomb == false)) {
//   var numberG;
//   var checkNumGBomb = check(listaBombe, numberG);
//   var checkNumG1 = check(numberListG, numberG);
//   if (check(listaBombe, numberG) == true) {
//     break;
//     alert("Bomba");
//   } else {
//     if (check(numberListG, numberG) == true) {
//       alert("Hai inserito un numero già scelto.")
//     };
//   numberListG.push(numberG);
// }
// }
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50
