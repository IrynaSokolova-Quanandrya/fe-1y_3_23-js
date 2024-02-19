/*
 * Деструктуризація об'єкту
 * - Значення за замовчуванням
 * - Ім'я змінної яке відрізняється від імені властивості
 */

const playlist = {
    name: 'Мій супер плейлист',
    rating: 5,
    tracks: ['трек-1', 'трек-2', 'трек-3'],
    trackCount: 3,
};
  
const {name, rating} = playlist
  
console.log(
  name,
  rating,  
  );
  
 
  // /*
  //  * Глибока деструктуризація 
  //  */
  
  const profile = {
    name: 'Jacques Gluke',
    tag: 'jgluke',
    location: 'Ocho Rios, Jamaica',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308,
    },
  };
   
  // // СПОСІБ 1 окремо
// const { name, tag, location, avatar, stats } = profile
// console.log(stats);

// const { followers, views, likes } = stats;
// console.log(followers, views, likes);


  // // СПОСІБ 2 вкладено
  // const { name, tag, location, avatar, stats: {followers, views, likes} } = profile
  
  
  // /*
  //  * Деструктуризаці масивів
  //  */
  
  const rgb = [255, 100, 80];

  const [red, green, blue] = rgb;  
  
  console.log(red, blue);
  
 