'use strict';

// Working with numbers

console.log(23 === 23.0);

// Conevrsion of strings to numbers
console.log(Number('23'));
console.log(+'23');

// Parsing
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('30px', 10));

console.log(Number.parseFloat('2.5rem'));

// Check if value is not a number
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

// Checking if value is number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));

// Check if value is an integer
console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 11, 2));

console.log(Math.min(5, 18, 23, 11, 2));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

// Random numbers
console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomInt(10, 20));

// Rounding integers
console.log(Math.trunc(23.3));

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor(23.9));

console.log(Math.floor(-23.1));
console.log(Math.floor(-23.1));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

// Rounding decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));

/////////////////////////
// The Remainder operator

console.log(5 % 2);
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3);
console.log(8 / 3); // 8 = 2 * 3 + 2

console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

// the remainder operator is good for doing things every and any nth time
labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});

//////////////////////////
// Numeric separators
const diameter = 287_460_000_000;
console.log(diameter);

const priceCents = 345_99;
console.log(priceCents);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.14_15;
console.log(PI);

console.log(Number('230000'));
console.log(parseInt('230_000'));

// Working with BigInt
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

console.log(43089766982782857647856786896293658962359n);
console.log(BigInt(4308976698278));

// operations
console.log(10000n + 10000n);
console.log(278748589486982789278957n * 10000000n);

const huge = 203895784785689387893798n;
const num1 = 23;
console.log(huge * BigInt(num1));

// Exceptions of the BigInt
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == '20');
// console.log(Math.sqrt(16n)); // does not work

console.log(huge + ' is REALLLY big!!!');

// Divisions
console.log(11n / 3n);
console.log(10 / 3);

///////////////////////////////////
// Create a date
const now = new Date();
console.log(now);

console.log(new Date('Mon Aug 04 2025 19:11:15'));
console.log(new Date('Dec 25 2015'));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with Dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142228180000));

console.log(Date.now());

future.setFullYear(2040);
console.log(future);

const futureDate = new Date(2037, 10, 19, 15, 23);
console.log(+futureDate);
const calcDaysPassed = (date1, date2) =>
  Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

const days1 = calcDaysPassed(
  new Date(2037, 3, 4),
  new Date(2037, 3, 14, 10, 8)
);
console.log(days1);

///////////////////////////////////////
// Internationalizing Numbers (Intl)

const num = 3884764.23;

const options = {
  style: 'currency', // unit, percent, currency
  unit: 'celsius',
  currency: 'EUR',
  // useGrouping: false,
};

console.log(
  'US:            ',
  new Intl.NumberFormat('en-US', options).format(num)
);
console.log(
  'Germany:            ',
  new Intl.NumberFormat('de-DE', options).format(num)
);
console.log(
  'Syria:            ',
  new Intl.NumberFormat('ar-SY', options).format(num)
);
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
);
