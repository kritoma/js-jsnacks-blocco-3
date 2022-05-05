const n = Number(prompt("inserisci un numero"));
let nArray

for (let i = 0; i < n; i++) {
    nArray = new Array();
    
    for (let i = 0; i < 10; i++) {
        nArray.push(Math.floor(Math.random() * 100) + 1);            
    }


    console.log(nArray)
}

