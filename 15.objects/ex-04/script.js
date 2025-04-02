
function Cat(name, breed, color){
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.greeting = function(){
        console.log(`Hello, said ${this.name} the ${this.breed}.`);
        
    }
};

const ipkins = new Cat('Ipkins', 'Turkish Angora', 'gray');
const bertie = new Cat('Bertie', 'Cymric', 'black');