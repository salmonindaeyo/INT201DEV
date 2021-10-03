
function rabbit (name,color,sound) {
    this.name = name;
    this.color = color;
    this.sound = sound;
    this.talk = () => name+sound;
}

let rabbit1 = new rabbit("wiwi","red","oung oung ");

console.log(rabbit1);

console.log(rabbit1.talk())


let eiei = ()=> 2;

console.log(eiei())