const preview = document.querySelector('.preview');
let paraOne = document.createElement('p');
let paraTwo = document.createElement('p');


const cat = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
    greeting: function() {
      console.log('Meow!');
    }
  }

  const catName = cat['name'];
  cat.greeting();
  cat.color = 'black';


paraOne.textContent = `The cat's name is ${catName}`;
paraTwo.textContent = `The cat's color is ${cat.color}`;
preview.appendChild(paraOne);  
preview.appendChild(paraTwo);
