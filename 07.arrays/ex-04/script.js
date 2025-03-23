const birds = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ];
let eBirds = [];
const indexOfEagle = birds.indexOf("Eagles");

birds.splice(indexOfEagle, 1);

for(let bird of birds){
    if(bird.startsWith("E")){
        eBirds.push(bird);
    }
}

console.log(eBirds);