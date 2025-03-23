let season = 'summer';
let response;

// Add your code here
if(season === 'summer'){
    response = "Hot summer, have your swimgear ready!";
}else if (season === 'winter'){
    response = "It is the freeze winter, ready to get your coats out!";
}else {
    response = "We don't quite know what season is yet."
}
// Don't edit the code below here!

const section = document.querySelector('section');

let para1 = document.createElement('p');
para1.textContent = response;
section.appendChild(para1);