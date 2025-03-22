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
    let newStory = "";
    let xItem = randomElementInArray(insertX);
    let yItem = randomElementInArray(insertY);
    let zItem = randomElementInArray(insertZ);
    let userName = document.getElementById("customname").value;
    const usTemp = document.getElementById("us").checked;
    const ukTemp = document.getElementById("uk").checked;


    if(usTemp){
        if(userName){
            newStory = `It was 94 fahrenheit outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. ${userName} saw the whole thing, but was not surprised — ${xItem} weighs 300 pounds, and it was a hot day.`;
        } else {
            newStory = `It was 94 fahrenheit outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. Bob saw the whole thing, but was not surprised — ${xItem} weighs 300 pounds, and it was a hot day.`;            
        }
    } else if(ukTemp){
        if(userName){
            newStory = `It was ${Math.round((94 - 32) * 5/9)} centigrade outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. ${userName} saw the whole thing, but was not surprised — ${xItem} weighs ${Math.round(300/14)} stone, and it was a hot day.`;
        } else {
            newStory = `It was ${Math.round((94 - 32) * 5/9)} centigrade outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. Bob saw the whole thing, but was not surprised — ${xItem} weighs ${Math.round(300/14)}, and it was a hot day.`;         
        }
    }
    story.textContent = newStory;
    story.style.visibility = "initial";
}

// Add event listener

randomizeButton.addEventListener("click", result);