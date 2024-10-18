// Синтаксис async/await
// Послідовні операції
// Паралельні операції з Promise.all()
// try...catch

function getFruit(name) {
  const fruits = {
    strawberry: '🍓',
    kiwi: '🥝 ',
    apple: '🍎',
  };

  return Promise.resolve(fruits[name]);
}

// console.log(getFruit('strawberry'));

async function makeSmoothie() {

  try {
    const strawberryResult = await getFruit('strawberry');
    const kiwiResult = await getFruit('kiwi');
    const appleResult = await getFruit('apple');
  } catch {
    console.log('Error');
  }

  return {strawberryResult, kiwiResult, appleResult}
}

console.log(makeSmoothie());





// async function fn () {}

// const fn  = async function () {}

// const arr = async () => {}

// const x = {
//   async getname () {}
// }

// class X {
//   async getName () {}
// }
