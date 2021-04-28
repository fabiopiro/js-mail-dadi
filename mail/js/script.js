// 1 - Mail
// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.

// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"



// Chiedi all'utente la sua email
var userEmail = prompt ("Qual è la tua email? [rosso/verde/blu/giallo/arancione@mail.com]");
console.log(userEmail);

// Lista
var listaEmail = ["rosso@mail.com" , "verde@mail.com" , "blu@mail.com" , "giallo@mail.com" , "arancione@mail.com"];
console.log(listaEmail);

// controlla che sia nella lista di chi può accedere
var message = "EMAIL " + userEmail + " NOT FOUND";

for (i = 0 ; i < listaEmail.length ; i++) {

    // console.log("Iterazione #", i , listaEmail[i]);
    if (userEmail == listaEmail[i]) {
        // console.log("EMAIL " + userEmail + " FOUND");
        message = "EMAIL " + userEmail + " FOUND";
    } else {
        // console.log("EMAIL " + userEmail + " NOT FOUND");
    }
}

// stampa un messaggio appropriato sull'esito del controllo
console.log(message);
document.getElementById("email").innerHTML = message;