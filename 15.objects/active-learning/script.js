//Creating Objects

const person = {
    name: {
        first: 'Bob',
        last: 'Smith'
    },
    age: 31,
    bio(){
        console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`);
    },
    introduceSelf(){
        console.log(`Hi I am ${this.name.first}`);
    }
};

function logProperty(propertyName){
    console.log(person[propertyName]);
}

person.farewell = function(){
    console.log("Bye everyone!");
}

const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;

// Introduction to constructors

//Creating a function
function createPerson(personName) {
    const obj = {};
    obj.personName = personName;
    obj.introduceSelf = function () {
        console.log(`Hi my name is ${this.personName}`);
    }
    return obj;
}

//Using a constructor pre-ES6 (plain javascript)
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.introduceSelf = function (){
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
    }
}

//Keyword --> "new" creates an object

const silvia = new Person("Silvia", 89);
const leonard = new Person("Leonard", 59);
