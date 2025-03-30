const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
const imgArr = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const imgTxt = {
    one: 'Weird and old looking thing',
    two: 'Purple and white flowers',
    three: 'Ancient egiptian drawings',
    four: 'Big butterfly sitting on a leaf'
};

for(let img of imgArr){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${img}`);
    thumbBar.appendChild(newImage);
}


// newImage.setAttribute('alt', xxx);
// thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
