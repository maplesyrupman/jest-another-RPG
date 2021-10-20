function Potion(name) {
    let types = ['strength', 'agility', 'health'];
    this.name = name || types[Math.floor(Math.random() * types.length)];



    if (this.name === 'health') this.value = Math.floor(Math.random() * 10 + 30);
    else this.value = Math.floor(Math.random() * 5 + 7);
}


let potion1 = new Potion();
let potion2 = new Potion();
let potion3 = new Potion();

console.log(potion1, potion2, potion3);

module.exports = Potion;