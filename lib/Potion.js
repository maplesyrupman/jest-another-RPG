function Potion(name) {
    let types = ['strength', 'agility', 'health'];
    this.name = name || types[Math.floor(Math.random() * types.length)];

    if (this.name === 'health') this.value = Math.floor(Math.random() * 10 + 30);
    else this.value = Math.floor(Math.random() * 5 + 7);
}

module.exports = Potion;