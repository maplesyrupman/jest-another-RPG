const Potion = require('../lib/Potion');

function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);

    this.inventory = [new Potion('health'), new Potion()];
}

Player.prototype.getInventory = function() {
    if (this.inventory.length) return this.inventory;
    else return false;
}

Player.prototype.getStats = function() {
    return {
        potions: this.potions,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    }
}

Player.prototype.getHealth = function() {
    return `${this.name}'s health is now ${this.health}`;
}

Player.prototype.isAlive = function() {
    return this.health === 0 ? false : true;
}

Player.prototype.reduceHealth = function(dmg) {
    this.health = dmg > this.health 
                ? 0
                : this.health - dmg;
}

module.exports = Player;