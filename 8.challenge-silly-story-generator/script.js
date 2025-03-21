const customName = document.getElementById("customname");
const randomizeButton = document.querySelector(".randomize");
const usTemp = document.getElementById("us");
const ukTemp = document.getElementById("uk");
let storyText = document.querySelector(".story");

function randomElementInArray(array){
    let randomNumber = Number(Math.floor(Math.random() * array.length));
    return array[randomNumber];
}

function toCelsius(num){
    let formula = (num - 32) * 5/9;
    return Number(formula.toFixed(2));
}

function toFahrenheit(num){
    let formula = (num * 9/5) + 32;
    return Number(formula.toFixed(2));
}