const person = {
    name: ['Bob', 'Smith'],
    age: 31,
    bio(){
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf(){
        console.log(`Hi I am ${this.name[0]}`);
    }
};