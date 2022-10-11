// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const accessAllow = ["zack@gmail.com", "marco@gmail.com"," gianni@gmail.com", "giorgiO@gmail.com"]


const mail = prompt("qual e la tua email?")
console.log(mail);

let access = false;

for (let i = 0; i < accessAllow.length; i++) {
  const element = accessAllow[i];

  if (element === mail) {
    access = true;
  } 
  console.log(access)
}

if (access) {
    alert("Congratulazione! hai ottenuto l'accesso")
  } else {
    alert("Ci dispiace tanto, ma non abbiamo trovato la sua mail all'interno della nostra lista riprovi con un altra mail.")
  }

//   manca ancoera la validazione mail