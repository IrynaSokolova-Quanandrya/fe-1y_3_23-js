const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: true },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: false },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: false },
    { id: 'player-4', name: 'Ajax', timePlayed: 190, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: false },
  ];
  
  /*
   * Array.prototype.every()
   * - Поелементо перебирає оригінальний масив
   * - Повертає true якщо всі елементи масива задовільняють умову
   */
  
const anyHardcorePlayers = players.every((player) => {
    return player.timePlayed > 100
  })

console.log(anyHardcorePlayers);  
  
  /*
   * Array.prototype.some()
   * - Поелементо перебирає оригінальний масив
   * - Повертає true якщо хоча б один елемент масива задовільняє умову
   */
  
const isAnyOnline = players.some(player => player.online)

  console.log('isAnyOnline: ', isAnyOnline); //true
  
  
// console.log('anyHardcorePlayers: ', anyHardcorePlayers);
  

const arow = param1 => {}