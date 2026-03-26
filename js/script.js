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
