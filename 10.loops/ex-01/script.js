const myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
const list = document.createElement('ul');
const preview = document.querySelector('.preview');

for(let i = 0; i <= myArray.length - 1; i++){
    const item = document.createElement('li');
    item.textContent = myArray[i];
    list.appendChild(item);
}

preview.appendChild(list);