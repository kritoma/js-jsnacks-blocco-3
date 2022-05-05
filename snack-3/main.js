const red = document.querySelector(".red");
const green = document.querySelector(".green");

const numbers = [];

for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100) + 1);

    if( numbers[i] % 2 == 0){
        green.innerHTML = numbers[i]
    } else{
        red.innerHTML = numbers[i]
    }
    
    
}

console.log(numbers)