const item = document.querySelector('#item');
const preview = document.querySelector('.preview');
const submit = document.querySelector('.submit');
const list = document.createElement('ul');

function addItem(){
    const itemValue = item.value;
    const displayItem = document.createElement('li');
    
    displayItem.textContent = itemValue;
    list.appendChild(displayItem);
    preview.appendChild(list);
}


submit.addEventListener("click", addItem);

