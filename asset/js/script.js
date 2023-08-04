

let input1 = document.getElementById("inputcantidad");

let input2 = document.getElementById("inputcolor");

let scoreAmount = document.getElementById("scoreAmount");

let scorePrice = document.getElementById("scorePrice")

let scorecolor = document.getElementById ("scorecolor")
 
let sale = document.getElementById("price");

const price = parseInt(sale.textContent);
 
let result = 0;

console.log (price);


function multiply(){
 result = input1.value * price;
 console.log(result);
}

function  myMethod(){
console.log( Number(price));
scorecolor.style.backgroundColor = input2.value;
scoreAmount.textContent = input1.value
multiply();
scorePrice.textContent = result
}

document.querySelector("button").addEventListener("click", myMethod)
