const arrNames = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];
const para = document.createElement('p');
const preview = document.querySelector('.preview');

function chooseName(){
    const randomNum = Number(Math.floor((Math.random() * (arrNames.length))));
    para.textContent = arrNames[randomNum];
}

preview.appendChild(para);