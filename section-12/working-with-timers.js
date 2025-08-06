'use strict';

///////////////////////////
// setTImeout
const ingredients = ['olives', 'spinach'];

const pizzaTImer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
  3000,
  ...ingredients
);
console.log('waiting....');

if (ingredients.includes('spinach')) clearTimeout(pizzaTImer);

////////////////////////////////
// setInterval
setInterval(function () {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  console.log(`${hours}:${minutes}:${seconds}`);
}, 60000);
