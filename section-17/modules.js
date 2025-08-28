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

////////////////////////////////////
// The module pattern
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product}  added to cart`);
  };

  const addToStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);

//////////////////////////////////
// CommmonJS Modules
// Export
// will not work here but just for reference as it is used in Node.js
// export.addToCart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(`${quantity} ${product}  added to cart`);
// };

// Import
const { addToCart } = require('./shoppingCart.js'); // just for reference used in node.js

///////////////////////////////////
// Introduction to NPM
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;

console.log(stateClone);
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

/////////////////////////////////////
// Configuring Babel and Polyfilling
class Person {
  #greeting = 'Hey';

  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}

const jonas = new Person('Jonas');
console.log('jonas' ?? null);

// console.log(state.cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(res => console.log(res));

import 'core-js/stable';
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

// For polyfilling async functions
import 'regenerator-runtime/runtime';
