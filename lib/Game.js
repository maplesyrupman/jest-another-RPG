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
        console.log(this.currentEnemy.getDescription());

        this.battle();
    }

    battle() {
        if (this.isPlayerTurn) {
            inquirer.prompt({
                type: 'list',
                message: 'What would you like to do?',
                name: 'action',
                choices: ['Attack', 'Use potion']
            })
            .then(({ action }) => {
                if (action === 'Use potion') {
                    if (!this.player.getInventory()) return console.log('You don\'t have any potions!');
                    
                    inquirer.prompt({
                        type: 'list', 
                        message: 'Which potion would you like to use?',
                        name: 'action',
                        choices: this.player.getInventory().map((item, index) => `${index + 1}: ${item.name}`)
                    })
                    .then(( {action} ) => {
                        const potionDetails = action.split(': ');

                        this.player.usePotion(potionDetails[0] -1);
                        console.log(`You used a ${potionDetails[1]} potion.`);
                    })
                } else {
                    const damage = this.player.getAttackValue();
                    this.currentEnemy.reduceHealth(damage);

                    console.log(`You attacked the ${this.currentEnemy.name}`);
                    console.log(this.currentEnemy.getHealth());
                }
            })

        } else {
            const damage = this.currentEnemy.getAttackValue();
            this.player.reduceHealth(damage);

            console.log(`You were attacked by the ${this.currentEnemy.name}`);
            console.log(this.player.getHealth());
        }
    }
}

module.exports = Game