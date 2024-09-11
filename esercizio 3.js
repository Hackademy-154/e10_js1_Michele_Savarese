
// Esercizio 3 - magica numeri
let input1 = prompt (`Scegli un numero`);
let number1 = parseInt(input1);
if (!isNaN(number1)){
    let input2 = prompt (`Scegli un secondo numero`);
    let number2 = parseInt(input2);
if (!isNaN(number2)){
   let a = number1+number2;
   let b = number1-number2;
   let c = number1*number2;
   let d = number1/number2;
   let e = number1**number2;
   alert(`Con i numeri da te scelti (${number1} e ${number2}) , i risultati delle varie operazioni sono: somma (${a}), sottrazione (${b}) moltiplicazione (${c}), divisione (${d}), potenza (${e}) .`)
}
else{
    alert(`${input2} non è un valore consentito. Inserisci solamente un numero.`)
}

}
else{
    alert(`${input1} non è un valore consentito. Inserisci solamente un numero.`)
}


