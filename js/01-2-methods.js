/*
 * Методи об"екту і this при звернені до властивостей в методах
 *
 * http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg
 *
 * - changeName
 * - addTrack
 * - updateRating
 * - getTrackCount
 */
const playlist = {
      name: 'Плейлист',
      rating: 5,
      tracks: ['трек-1', 'трек-2', 'трек-3'],
      changeName(newName){
       return this.name = newName
      },
      addTrack(track){
        this.tracks.push(track)
      }
      
        
}
console.log(playlist);

playlist.changeName('Супер плейлист');
playlist.addTrack('трек-4')

console.log(playlist);

// const logItems = function(array){
//   console.log('hello');
//   for(let i = 1; i < array.length; i += 1){
//           console.log(i);
//       }
// }

// logItems(['Mango', 'Poly', 'Ajax'])



// const playlist = {
//     name: 'Плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
    
//     changeName(newName) {
//     // console.log("this: ", this);
//       this.name = newName;
//     },

//     addTrack(newTrack){
//       this.tracks.push(newTrack)
//     },

//   };

//   playlist.addTrack('track-4')
//   // array.push('')
// console.log(playlist);
  
//   console.log(playlist.changeName("Новий плейлист"));

//   console.log(playlist);