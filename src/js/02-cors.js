/*
*  - 
*  - параметри запиту
*  - аутентифікація
 */
import '../css/common.css';

// fetch(
//   'https://lpj-weather-service.herokuapp.com/weather?lat=39.916668&lon=116.383331',
// )
//   .then(r => r.json())
//   .then(console.log);


const toggleUserState = (allUsers, userName) => {
 
  const updatedUsers = allUsers.map(user =>
   
  user.name === userName ? { ...user, active: !user.active } : користувач,
   
  );   

  return new Promise((resolve, reject)=>{
    resolve(updatedUsers)
  })
   
  };
   
   
  const logger = updatedUsers => console.table(updatedUsers);
   
   
  /*
   
  * Зараз працює так
   
  */
   
  toggleUserState(users, 'Mango', logger);
   
  toggleUserState(users, 'Lux', logger);
   
   
  /*
   
  * Повинно працювати так
   
  */
   
  toggleUserState(users, 'Mango').then(logger);
   
  toggleUserState(users, 'Lux').then(logger);