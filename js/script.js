//1. Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati.
// var bombe = 16;
// var tentativi = 0;
// Creo la funzione random e stampo in console il numero
var numberListCPU = [];
function randomN(nmin, nmax) {
  var randomNumber = Math.floor(Math.random() * nmax + nmin);
  return randomNumber;
}
var randomNumber = randomN(1, 100);
console.log(randomNumber);

// funzione che dato un array ed un numero controlla che il numero non sia già presente nell'array
function check(array, num) {
  var output = true;
  if (array.includes(num)) {
    return output = true;
  } else {
    return output = false;
  }
}
var checkNumCPU = check(numberListCPU, randomNumber);
console.log(checkNumCPU);

//se non è prente, lo inserisco nell'array

var i = 0;
while (i < 10) {
  randomNumber;
  if (checkNumCPU == false) {
    numberListCPU.push(randomNumber);
    console.log(numberListCPU);
  }
  randomNumber;
  i++
}

// numberList.length != 16

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50
