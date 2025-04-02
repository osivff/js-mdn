const preview = document.querySelector('.preview');
let paraOne = document.createElement('p');
let paraTwo = document.createElement('p');
let paraThree = document.createElement('p');
let paraFour = document.createElement('p');

const cat = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
    greeting: function() {
      console.log(`Hello, said ${this.name} the ${this.breed}`);
    }
};

const catTwo = {
    name : 'Ipkins',
    breed : 'Turkish Angora',
    color : 'white',
    greeting: function() {
      console.log(`Hello, said ${this.name} the ${this.breed}`);
    }
};

const catName = cat['name'];
cat.color = 'black';
cat.greeting();

const catNameTwo = catTwo['name'];
catTwo.color = 'gray';
catTwo.greeting();

paraOne.textContent = `The cat's name is ${catName}`;
paraTwo.textContent = `The cat's color is ${cat.color}`;
paraThree.textContent = `The cat's name is ${catNameTwo}`;
paraFour.textContent = `The cat's color is ${catTwo.color}`;

preview.appendChild(paraOne);  
preview.appendChild(paraTwo);
preview.appendChild(paraThree);
preview.appendChild(paraFour);