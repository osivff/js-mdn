const item = document.querySelector('#item');
const preview = document.querySelector('.preview');
const submit = document.querySelector('.submit');
const list = document.createElement('ul');
const deleteButton = document.createElement('button');
const itemValue = item.value;
const displayItem = document.createElement('li');


function addItem(){
    displayItem.textContent = itemValue;
    displayItem.style.margin = "1rem";
    deleteButton.textContent = "Delete";
    deleteButton.style.marginLeft = "1rem";

    displayItem.appendChild(deleteButton);
    list.appendChild(displayItem);
    preview.appendChild(list);


}

submit.addEventListener("click", addItem);

