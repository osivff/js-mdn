const customName = document.getElementById("customname");
const randomizeButton = document.querySelector(".randomize");
const usTemp = document.getElementById("us");
const ukTemp = document.getElementById("uk");
let story = document.querySelector(".story");
// Text variables
let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."
let insertX = [
    "Willy the Goblin",
    "Big Daddy",
    "Father Christmas"
];
let insertY = [
    "the soup kitchen",
    "Disneyland",
    "the White House"
];
let insertZ = [
    "spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away"
];



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

function result(){
    let newStory = "";
    let xItem = randomElementInArray(insertX);
    let yItem = randomElementInArray(insertY);
    let zItem = randomElementInArray(insertZ);

    newStory = `It was 94 fahrenheit outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. Bob saw the whole thing, but was not surprised — ${xItem} weighs 300 pounds, and it was a hot day.`
    story.textContent = newStory;
    story.style.visibility = "initial";
}


// Text

randomizeButton.addEventListener("click", result);