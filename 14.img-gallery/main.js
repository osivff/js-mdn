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

thumbBar.addEventListener('click', (e) => {
    displayedImage.setAttribute('src', `${e.target.src}`);
    displayedImage.setAttribute('alt', `${e.target.alt}`);
});



btn.addEventListener('click', () => {
    if(overlay.style.backgroundColor === 'rgba(0, 0, 0, 0.5)'){
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    } else {
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
});
