const Potion = require('./Potion');

function Enemy(name, weapon) {
    this.name = name;
    this.weapon = weapon;
    this.potion = new Potion();

    this.health = Math.floor(Math.random() * 10 + 85);
    this.strength = Math.floor(Math.random() * 5 + 5);
    this.agility = Math.floor(Math.random() * 5 + 5);
}

Enemy.prototype.getHealth = function() {
    return `The ${this.name}'s health is now ${this.health}`;
}

Enemy.prototype.isAlive = function() {
    return this.health === 0 ? false : true;
}

Enemy.prototype.getAttackValue = function() {
    const max = this.strength + 5;
    const min = this.strength - 5;

    return Math.floor(Math.random() * (max-min) + min);
}

Enemy.prototype.reduceHealth = function(dmg) {
    this.health = dmg > this.health
                ? 0
                : this.health - dmg
}

Enemy.prototype.getDescription = function() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
}

module.exports = Enemy;