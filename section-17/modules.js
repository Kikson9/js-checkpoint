// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(shippingCost);
// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing module');
import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('bread', 5);

import add from './shoppingCart.js';
add('pizza', 2);

////////////////////////////////
// Top-level await [ES-2022]

// console.log('Start fetching');
// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// const data = await res.json();
// console.log(data);
// console.log('Finish fetching');

const getLastPost = async function () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  console.log(data);
  return { title: data.at(-1).title, text: data.at(-1).body };
};
const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
