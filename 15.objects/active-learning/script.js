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