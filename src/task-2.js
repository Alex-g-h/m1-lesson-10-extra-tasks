const hero = {
  name: "Batman",
  health: 100,
  heatEnemy: (enemy) => { enemy.health -= 10; }
};

const enemy = {
  name: "Joker",
  health: 100,
  heatHero: (hero) => { hero.health -= 10; }
};


startGame(hero, enemy);


/**
 * Game with hero and enemy. Return the result of battle.
 * @param {*} heroPlayer 
 * @param {*} enemyPlayer 
 */
function startGame(heroPlayer, enemyPlayer) {
  while (heroPlayer.health > 0 && enemyPlayer.health > 0) {
    getRandomZeroOne() ? enemyPlayer.heatHero(heroPlayer) : heroPlayer.heatEnemy(enemyPlayer);
  }

  const winner = (heroPlayer.health) ? heroPlayer : enemyPlayer;
  congratulateWinner(winner);
}


/**
 * Generate random value between 0 and 1.
 * @returns Random generated value 0 or 1
 */
function getRandomZeroOne() {
  return Math.floor(Math.random() * 2);
}


/**
 * Print congratulation for winner
 * @param {*} person Winner of the battle
 */
function congratulateWinner(person) {
  let {name, health} = person;
  alert(`${name} победил! У него осталось ${health} здоровья`);
}