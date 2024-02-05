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
  
  // console.log(
<<<<<<< Updated upstream
  //   playlist.name,
  //   playlist.rating,
  //   playlist.trackCount,
  //   playlist.tracks
  // );

// const { name } = playlist;
// const { trackCount } = playlist;


// console.log(name);














  // const { name, rating, tracks, trackCount, author = "vghcg" } = playlist;

  // // console.log(
  // //   name,
  // //   rating,
  // //   tracks,
  // //   trackCount,
  // //   author
  // // );
=======
  //   
  // );

  

  // console.log(
  //   
  // );
>>>>>>> Stashed changes

  
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
  
  // // СПОСІБ 1

<<<<<<< Updated upstream
  const { name, tag, location, avatar, stats } = profile;

  // console.log( name, location, stats);

  const { followers, likes, views } = stats;
  // console.log(followers, likes);
  

  // // СПОСІБ 2
  
  // const { 
  //   name, 
  //   tag, 
  //   location, 
  //   avatar, 
  //   stats: {followers, likes, views} 
  // } = profile;

  // console.log(followers);
  
  // /*
  //  * Деструктуризаці масивів
  //  */
  
  // const rgb = [255, 100, 80];

  // const [red, , blue] = rgb;  
  
  // console.log(red, blue);
  
=======
  

  // СПОСІБ 2
  
  

  /*
   * Деструктуризаці масивів
   */
  
  // const rgb = [255, 100, 80];

  // const [red, , blue] = rgb;  
  
  // console.log(red, blue);
  
>>>>>>> Stashed changes
  // const authors = {
  //   kiwi: 4,
  //   poly: 7,
  //   ajax: 9,
  //   mango: 6,
<<<<<<< Updated upstream
=======
  // };
  
  // const entries = Object.entries(authors);
  
  // // console.log(entries);
  
  // // for (const [name, rating] of entries) {
  // //   // ур2
  // //   // const [name, rating] = entry;
  
  // //   // ур1
  // //   // const name = entry[0];
  // //   // const rating = entry[1];
  
  // //   console.log(name, rating);
  // // }
  
  /*
   * Операция rest (сбор)
   */
  // const profile = {
  //   name: 'Jacques Gluke',
  //   tag: 'jgluke',
  //   location: 'Ocho Rios, Jamaica',
  //   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  //   stats: {
  //     followers: 5603,
  //     views: 4827,
  //     likes: 1308,
  //   },
>>>>>>> Stashed changes
  // };
  
  // const entries = Object.entries(authors);
  
  // // console.log(entries);
  
  // // for (const [name, rating] of entries) {
  // //   // ур2
  // //   // const [name, rating] = entry;
  
  // //   // ур1
  // //   // const name = entry[0];
  // //   // const rating = entry[1];
  
  // //   console.log(name, rating);
  // // }
  
  // /*
  //  * Операция rest (сбор)
  //  */
  // // const profile = {
  // //   name: 'Jacques Gluke',
  // //   tag: 'jgluke',
  // //   location: 'Ocho Rios, Jamaica',
  // //   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  // //   stats: {
  // //     followers: 5603,
  // //     views: 4827,
  // //     likes: 1308,
  // //   },
  // // };
  
  // // const { name, tag, location, ...restProps } = profile;
  
  // // console.log(name, tag, location);
  // // console.log(restProps);
  // // console.log(profile);
  
  // /*
  //  * Паттерн «Обьект настроек»
  //  * - деструктуризация параметра-обьекта в подписи функции
  //  * - rest при деструктуризации в подписи
  //  */
  
  // const showProfileInfo = function (userProfile) {
  //   const { name, tag, location, ...restProps } = userProfile;
  
  //   // console.log(name, tag, location, avatar, followers, views, likes);
  //   // console.log(restProps);
  // };
  
  // // const profile = {
  // //   name: 'Jacques Gluke',
  // //   tag: 'jgluke',
  // //   location: 'Ocho Rios, Jamaica',
  // //   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  // //   stats: {
  // //     followers: 5603,
  // //     views: 4827,
  // //     likes: 1308,
  // //   },
  // // };
  
  // // showProfileInfo(profile);