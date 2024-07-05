import user from './data'
import { user as user1 } from './methods';

console.log(user);
console.log(user1);

const greetsFunc = () => {
  console.log(`hello, ${user.name}`);
}

greetsFunc()