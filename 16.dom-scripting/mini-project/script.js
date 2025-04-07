const item = document.querySelector('#item');
const preview = document.querySelector('.preview');
const submit = document.querySelector('.submit');
const list = document.createElement('ul');


function addItem(){
    const itemValue = item.value;
    const displayItem = document.createElement('li');
    const deleteButton = document.createElement('button');
    
    deleteButton.setAttribute('class', 'delete');
    displayItem.textContent = itemValue;
    deleteButton.textContent = "Delete";

    displayItem.appendChild(deleteButton);
    list.appendChild(displayItem);
    preview.appendChild(list);

    deleteButton.addEventListener("click", () => {
        list.removeChild(displayItem);
    });
}

submit.addEventListener("click", addItem);
submit.addEventListener("click", () => {
    item.value = '';
})
