function Fighter(obj) {

    const TOTAL_HP = obj.hp;
    let hp = obj.hp,
        wins = 0,
        losses = 0;

    function attack(defender) {
        const MAX_CHANCE = 100,
            probabilityOfSuccess = MAX_CHANCE - (defender.getStrength() + defender.getAgility());

        if (Math.floor(Math.random() * MAX_CHANCE) < probabilityOfSuccess) {
            defender.dealDamage(this.getDamage());
            console.log(`${this.getName()} makes ${this.getDamage()} to ${defender.getName()}.`);
        } else {
            console.log(`${this.getName()} attack missed`);
        }
    }

    function heal(receivedHeal) {
        hp + receivedHeal > TOTAL_HP ? hp = TOTAL_HP : hp += receivedHeal;
    }

    function dealDamage(receivedDamage) {
        hp - receivedDamage < 0 ? hp = 0 : hp -= receivedDamage;
    }
    return {
        getName: () => obj.name,
        getDamage: () => obj.damage,
        getStrength: () => obj.strength,
        getAgility: () => obj.agility,
        getHealth: () => hp,
        attack,
        logCombatHistory: () => console.log(`Name: ${obj.name}, Wins: ${wins}, Losses: ${losses}`),
        heal,
        dealDamage,
        addWin: () => wins++,
        addLoss: () => losses++
    }
}

function battle(fighter1, fighter2) {

    if (fighter1.getHealth() && fighter2.getHealth() > 0) {
        let activeFighter = 0;
        while (fighter1.getHealth() && fighter2.getHealth() > 0) {
            arguments[activeFighter].attack(arguments[1 - activeFighter]);
            activeFighter = 1 - activeFighter;
        }
        if (fighter1.getHealth()) {
            fighter1.addWin();
            fighter2.addLoss();
            console.log(`${fighter1.getName()} has won!`);
        } else if (fighter2.getHealth()) {
            fighter2.addWin();
            fighter1.addLoss();
            console.log(`${fighter2.getName()} has won!`);
        }

        fighter1.logCombatHistory();
        fighter2.logCombatHistory();
    } else {
        if (fighter1.getHealth()) {
            console.log(`${fighter1.getName()} is dead and can't fight.`);
        } else {
            console.log(`${fighter2.getName()} is dead and can't fight.`);
        }
    }
}