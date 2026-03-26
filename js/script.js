'use strict'
//1: creo una lista di email inviate
//2: chiedo all'utente di inserire la sua email
//3: creo una variabile che mi dice se ho trovato l'email all'inizio e la imposto  false
//4: scorro tutte le email della lista con un ciclo for
    // se l'email inserita dall'utente è uguale all'email corrente della lista imposto la variabile true

// finito il ciclo
// se la variabile è true
    // stampa "accesso consentito"
    
// altrimenti
    // stampo "accesso negato"

const listaEmail = [
    'marco@gmail.com', 
    'giovanni@gmail.com', 
    'giuseppe@gmail.com', 
    'alfredo@gmail.com', 
    'fernando@gmail.com', 
    'ettore@gmail.com', 
    'franco@gmail.com',
    'mario@gmail.com',
    'giancarlo@gmail.com',
    'gianni@gmail.com' ];   
    
// chiedo all'utente di inserire la sua email e salvo il valore in una variabile    
    const userEmail = prompt('inserisci la tua email');

// creo una variabile booleana che mi servirà per capire se l'email è presente nella lista ( inizialmente è false)
    let emailFound = false;

// ciclo che scorre tutte le email dell'array
    for (let i = 0; i < listaEmail.length; i++){
        if (userEmail === listaEmail[i]) { // controllo se l'email dell'utente è uguale a una delle email presenti nell'array
            emailFound = true; // se è uguale imposto la variabile a true
        }
    }
    // verifico se l'email è stata trovata nella lista degli invitati
    if (emailFound === true){
        console.log('Accesso consentito');// se trovata permetto l'accesso
    } else {
        console.log('Accesso negato');// se non trovata nego l'accesso
    }


// =======================================================================================================================     
// GIOCO DEI DADI
// =======================================================================================================================

// genero un numero casuale da i a 6 per il giocatore
const playerNumber = Math.floor(Math.random() * 6) + 1;
// genero un numero casuale da 1 a 6 per il computer
const computerNumber = Math.floor(Math.random() * 6) +1;

// stampo i numeri
console.log('Giocatore:', playerNumber);
console.log('Giocatore:', computerNumber);

// confronto i numeri generati per determinare il vincitore
if (playerNumber > computerNumber){
    console.log('Ha vinto il giocatore');// se il numero del giocatore è maggiore, vince il giocatore  
}
else if (playerNumber < computerNumber){
    // se il numero del computer è maggiore, vince il computer
    console.log('Ha vinto il computer');
}
else  {
    // se i numeri sono uguali, pareggio
    console.log('Pareggio');
    
}
