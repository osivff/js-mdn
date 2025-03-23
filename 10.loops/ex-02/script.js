const userName = 'Mustafa';
const nameDisplay = document.createElement('p');
const numDisplay = document.createElement('p');
const preview = document.querySelector('.preview');
const phonebook = [
    { name : 'Chris', number : '1549' },
    { name : 'Li Kang', number : '9634' },
    { name : 'Anne', number : '9065' },
    { name : 'Francesca', number : '3001' },
    { name : 'Mustafa', number : '6888' },
    { name : 'Tina', number : '4312' },
    { name : 'Bert', number : '7780' },
    { name : 'Jada', number : '2282' },
  ]

  for(let phone in phonebook){
    nameSearch = phonebook[phone].name;
    numberSearch = phonebook[phone].number;

    if(nameSearch === userName){
        nameDisplay.textContent = `Name: ${userName}`;
        numDisplay.textContent = `Number: ${numberSearch}`;
        break;
    }else {
        nameDisplay.textContent = `Name not found`;
        numDisplay.textContent = `Number not found`;
    }
  }

preview.appendChild(nameDisplay);
preview.appendChild(numDisplay);
