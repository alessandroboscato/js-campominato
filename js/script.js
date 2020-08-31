// Functions
//.1 random number function;
function randomN(nmin, nmax) {
  var randomNumber = Math.floor(Math.random() * nmax) + nmin;
  return randomNumber;
}


//.2 function check if a number is present in an array, if yes return true;
function checkIf(array, element) {
  if (array.includes(element)) {
    return true;
  } else {
    return false;
  }
};

// Se volessi fare la funzione manualmente..
// function inArray(array, elemento) {
//   var trovato = false;
//
//   for (var i = 0; i < listabombe.length; i++) {
//     if(array[i] == elemento) {
//       trovato = true
//     }
//   }
//   return trovato;
// }
// questa funzione mi permette di scorrere tutto l'array e di modificare la variabile trovato da false a true quanto trova la corrispondenza array[i] == elemento;


//.3 function that check range of a number and isNaN;
function checkNumber(number, nmin, nmax) {
  if ((number < nmin) || (number > nmax)) {
    alert("Il numero inserito dev'essere tra 1 e " + nmax);
  };
}

//4. function that remove NaN from array
// function removeIfNaN(array) {
//   array = array.filter(removeIfNaN(element)) {
//     return element !== inNaN(element);
//   };
// }

//Bonus scelta difficoltà
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50

var choseDifficulty = prompt("Scegli la difficoltà del gioco scrivendo facile, medio o difficile. Se non scrivi niente il gioco partirà in modalità facile");
var rangeBomb = 100;

  // if (choseDifficulty == "medio") {
  //   rangeBomb = 80;
  // } else if (choseDifficulty == "difficile") {
  //   rangeBomb = 50;
  // };

switch (choseDifficulty) {
  case "facile":
    rangeBomb = 100;
    break;
  case "medio":
    rangeBomb = 80;
    break;
  case "difficile":
    rangeBomb = 50;
    break;
  default:
    rangeBomb = 100;
}
//Esercizio
//1. Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati.
var listaBombe = [];

do {
  var randomNumber = randomN(1, rangeBomb);
  var checkNumCPU = checkIf(listaBombe, randomNumber);
  if (checkNumCPU == false) {
    listaBombe.push(randomNumber)
  };
} while (listaBombe.length != 16);

//2.1 Chiedi all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
var numberListG = [];
var haiPerso = false;
while ((numberListG.length != (rangeBomb - listaBombe.length)) && (haiPerso == false)) {
  var numberG = parseInt(prompt("Inserisci un numero da 1 a " + rangeBomb));
  var numberGRange = checkNumber(numberG, 1, rangeBomb);
  //2.2 Controlla che il numero inserito non sia duplicato nell'array utente. Se no pushalo.
  if (checkNumG1 = checkIf(numberListG, numberG)) {
    alert("Inserisci un numero che non hai già selezionato.")
  } else if (isNaN(numberG)) {
    alert("Inserisci un numero.");
  } else {
    numberListG.push(numberG);
  };

// TENTATIVO FILTER
  // numberListG = numberListG.filter(function(numberG)) {
  //   return numberG !== isNaN(numberG);
  // }
  // var filteredList = numberListG.filter(!isNaN(numberListG));

  //2.3 Controlla se il numero inserito dall'utente è presente nella lista bombe; se si termina il ciclo comunicando all'utente il punteggio.
  var checkNumGBomb = checkIf(listaBombe, numberG);
  if (checkNumGBomb == true) {
  alert("Hai perso! Il tuo punteggio è di " + (numberListG.length - 1));
    haiPerso = true;
  };
  if (numberListG.length == (rangeBomb - listaBombe.length)) {
    alert("Complimenti! Hai vinto il campominato!")
  }
}
