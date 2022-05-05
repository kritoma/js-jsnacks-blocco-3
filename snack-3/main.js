const red = document.querySelector(".red");
const green = document.querySelector(".green");

const numbers = [];

for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100) + 1);
    let element = document.createElement("div")
    element.innerHTML = numbers[i]


    if( numbers[i] % 2 == 0){
        green.append(element)
    } else{
        red.append(element)
    }
    
    
}

console.log(numbers)