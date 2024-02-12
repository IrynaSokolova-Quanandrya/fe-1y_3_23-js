/*
 * Работа с колекцією (масивом об"ектів)
 */
// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: false },
//     { name: 'Ajax', online: false },
//   ];

//  for (const friend of friends) {
//   //  console.log(friend.name);
//    friend.property = 10;   
//  }

// console.table(friends);

  
  // Додаємо властивість до кожного об"єкта за допомогою циклу


  /*
   * Шукаємо друга по імені
   */
  
  // const friends = [
  //   { name: 'Mango', online: false },
  //   { name: 'Kiwi', online: true },
  //   { name: 'Poly', online: false },
  //   { name: 'Ajax', online: false },
  // ];

  // console.table(friends);




  // console.log(findFriendByName(friends, 'Poly'));
  // console.log(findFriendByName(friends, 'Chelsy'));
  
  /*
   * Отримуємо імена всіх друзів
   */
  
  
  // console.log(getAllNames(friends));
  
  /*
   * Отримуємо імена тільки тих друзів які онлайн
   */
  
//   const getOnlineFriends = function () {
//  }
  
  // const getOfflineFriends = function () {};
  
  // створити 2 масива онлайн і офлайн?
  // якщо тру - в перший, якщо ні - в другий
  
  const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: false },
    { name: 'Ajax', online: false },
  ];

const getFriendsByStatus = function (friends) {
  const friendByStatus = {
    onlineFriends: [],
    offlineFriends: []
  }

  for (const friend of friends) {
    if (friend.online) {
      friendByStatus.onlineFriends.push(friend.name)
    } else {
      friendByStatus.offlineFriends.push(friend.name)
    }
  }  
  return friendByStatus
  };  

  console.log(getFriendsByStatus(friends));