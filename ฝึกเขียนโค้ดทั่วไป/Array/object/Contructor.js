
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


function product (id,name,color,price,stock) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.price = price;
    this.stock = stock;
}

let rabbit1 = new rabbit("wiwi","red","oung oung");
