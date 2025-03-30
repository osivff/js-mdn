const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
const imgArr = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const imgTxt = {
    1: 'Closeup of human eye',
    2: 'Weird and old looking thing',
    3: 'Purple and white flowers',
    4: 'Ancient egiptian drawings',
    5: 'Big butterfly sitting on a leaf'
};

for(let i  = 0; i <= imgArr.length - 1; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${imgArr[i]}`);
    newImage.setAttribute('alt', `${imgTxt[i + 1]}`);
    thumbBar.appendChild(newImage);
}



// newImage.setAttribute('alt', xxx);
// thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
