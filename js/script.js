//1. Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati.

//1.1 Creo la funzione random e stampo in console il numero;
var listaBombe = [];
function randomN(nmin, nmax) {
  var randomNumber = Math.floor(Math.random() * nmax + nmin);
  return randomNumber;
}
var randomNumber = randomN(1, 100);

//1.2 Creo la funzione dato un array ed un numero controlla che il numero non sia già presente nell'array..
function check(array, num) {
  if (array.includes(num)) {
    return true;
  } else {
    return false;
  }
}
var checkNumCPU = check(listaBombe, randomNumber);

//1.3 ..se non è prente inseriscilo nell'array con un ciclo;
while (listaBombe.length != 16) {
  var randomNumber = randomN(1, 100);
  if (check(listaBombe, randomNumber) == false) {
    listaBombe.push(randomNumber);
  }
}
console.log(listaBombe);

//2. In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
var numberG = parseInt(prompt("Inserisci un numero da 1 a 100"));

//2.1 Controlla se il numero inserito dall'utente è presente nella lista delle bombe;
var numberListG = [];
var checkNumGBomb = check(listaBombe, numberG);

while ((numberListG.length != 5) && (checkNumGBomb == false)) {
  var numberG;
  var checkNumGBomb = check(listaBombe, numberG);
  var checkNumG1 = check(numberListG, numberG);
  if (check(listaBombe, numberG) == true) {
    break;
    alert("Bomba");
  } else {
    if (check(numberListG, numberG) == true) {
      alert("Hai inserito un numero già scelto.")
    };
  numberListG.push(numberG);
}
}
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50
