/*
 * Array.prototype.find()
 * - Поелементо перебирає оригінальний масив
 * - Повертає перший елемент який задовольняє умову пошуку або undefined
 */

const numbers = [5, 10, 15, 20, 25, 15];

const number = numbers.find((number)=> {
  return number === 15
})

// console.log(number);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];
/*
 * Шукаємо гравця по id
 */

const findPlayerById = function(allPlayers, playerId) {
  // const allPlayers = players
  // const playerId = 'player-1'

  return allPlayers.find((player) => {return player.id === playerId});

}

findPlayerById(players, 'player-1');

console.log(findPlayerById(players, 'player-1'));
console.log(findPlayerById(players, 'player-4'));
console.log(findPlayerById(players, 'player-10'));

/*
 * Шукаємо гравця по імені
 */

// console.log(playerWithName);