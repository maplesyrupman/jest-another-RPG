const inquirer = require('inquirer');
const Player = require('./Player');
const Enemy = require('./Enemy');

class Game {
    constructor() {
        this.roundNumber = 0;
        this.isPlayerTurn = false;
        this.enemies = [];
        this.currentEnemy;
        this.player;
    }

    initializeGame() {
        this.enemies.push(new Enemy('goblin', 'sword'));
        this.enemies.push(new Enemy('orc', 'mace'));
        this.enemies.push(new Enemy('skeleton', 'axe'));

        this.currentEnemy = this.enemies[0];

        inquirer.prompt({
            type: 'text',
            name: 'name', 
            message: 'What is your name?'
        })
        .then(({ name }) => {
            this.player = new Player(name);

            this.startNewBattle();
        })
    }

    startNewBattle() {
        this.isPlayerTurn = this.player.agility > this.currentEnemy.agility ? true : false;

        console.log('Your stats are as follows:');
        console.table(this.player.getStats());
    }
}

module.exports = Game