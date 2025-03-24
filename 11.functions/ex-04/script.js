const arrNames = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];
const para = document.createElement('p');
const preview = document.querySelector('.preview');

isShort = arr => {return arr.length < 5};

const shortNames = arrNames.filter(isShort);

para.textContent = shortNames;
preview.appendChild(para);
