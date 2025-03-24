const arrNames = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];
const para = document.createElement('p');
const preview = document.querySelector('.preview');

function randomNum(min, max){
    const random = Number(Math.floor(Math.random() * (max - min + 1)) + min);
    return random;
}

function chooseName(arr){
    const arrLength = arr.length-1;
    const random = randomNum(0, arrLength);
    return arr[random];
}

para.textContent = chooseName(arrNames);
preview.appendChild(para);