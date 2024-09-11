
// Esercizio 2

// let Annocorrente = 2024;
// let nascita = prompt (`In che anno sei nato?`);
// let eta = Annocorrente - nascita;
// let centenario = 100 - eta;
// alert(`Hai ${eta} anni. Ti mancano ${centenario} anni per raggiungere i 100 anni.`);

// esercizio 2 - smart


let Annocorrente = 2024;
let nascita = prompt(`In che anno sei nato?`);
if (!isNaN(nascita)) {
    let eta = Annocorrente - nascita;

    if (eta >= 100) {
        alert("Complimenti, sei ultracentenario!");
    } else {
        let centenario = 100 - eta;
        alert(`Hai ${eta} anni. Ti mancano ${centenario} anni per raggiungere i 100 anni.`);
    }

} else {
    alert(`${nascita} non è un valore consentito. Inserisci semplicemente il numero che rappresenta il tuo anno di nascita in questo formato: AAAA`);
}



