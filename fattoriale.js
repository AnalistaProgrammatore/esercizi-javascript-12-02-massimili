/**
* Scrivere qui il codice della funzione fattoriale(n)
**/
let n = 10
let prodotto = 1
function fattoriale(x) {
    if (x === 1) {
        return prodotto
    }
    else {
        prodotto = prodotto * x
        return fattoriale(x - 1)
    }
}
console.log(fattoriale(n))