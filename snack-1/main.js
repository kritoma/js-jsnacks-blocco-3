const numbers = [];

let total = 0
let i = 0

 do {
    numbers.push(Number(prompt("inserisci un numero")));
    total += numbers[i]
    i++
} while ( total < 50 )

console.log (total)