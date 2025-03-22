const customName = document.getElementById("customname");
const randomizeButton = document.querySelector(".randomize");
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


//Logic

function randomElementInArray(array){
    let randomNumber = Number(Math.floor(Math.random() * array.length));
    return array[randomNumber];
}

function result(){
    let newStory = storyText;
    let xItem = randomElementInArray(insertX);
    let yItem = randomElementInArray(insertY);
    let zItem = randomElementInArray(insertZ);
    let userName = document.getElementById("customname").value;
    const us = document.getElementById("us").checked;
    const uk = document.getElementById("uk").checked;

    newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replaceAll(':inserty:', yItem);
    newStory = newStory.replaceAll(':insertz:', zItem);

    if(userName){
        newStory = newStory.replaceAll('Bob', userName);
    }
    
    if(uk){
        newStory = newStory.replace('94 fahrenheit', Math.round((94 - 32) * 5/9) + " centigrade");
        newStory = newStory.replace('300 pounds', Math.round(300/14) + " stone");
    }

    story.textContent = newStory;
    story.style.visibility = "initial";
}

// Add event listener

randomizeButton.addEventListener("click", result);