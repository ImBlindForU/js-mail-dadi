// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

let x = Math.floor((Math.random() * 6) + 1);
console.log(x);
let y = Math.floor((Math.random() * 6) + 1);
console.log(y);

if (x > y){
    result = alert("congratulazioni! hai vinto")
} else {
   if (x === y){
    result = alert("hai pareggiato")
   } else {
    result = alert("hai perso")
   }
}

console.log(result)