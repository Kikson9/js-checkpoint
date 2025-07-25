'use strict';

// Working with strings - 3

// Split and Join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = [firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);

  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(897656436578));
console.log(maskCreditCard(98072561));
console.log(maskCreditCard('1753686289372725273936'));

// Repeat
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🎢'.repeat(n)}`);
};
planesInLine(2);
planesInLine(5);
planesInLine(12);

///////////////////////////////////
// Working with strings -  2

const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'joNAS';
const passengerName = passenger.toLowerCase();
const passengerCorrect =
  passengerName[0].toUpperCase() + passengerName.slice(1);
console.log(passengerCorrect);

// Comparing email
const email = 'hellojonas@io';
const loginEmail = '  Hello@JOnas.Io \n';
const normalizedEMail = loginEmail.toLowerCase().trim();
console.log(normalizedEMail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

// Using regular expression
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('A'));

if (plane.startsWith('Airbus') && plane.endsWith('neo'))
  console.log('Part of the NEW AIRBUS family');

// practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food, and a pocket Knife');
checkBaggage('socks and camera');
checkBaggage('Got some sncaks and a gun for protection');

///////////////////////////////////

// Working with strings - 1

const airline1 = 'TAP Air Portugal';
const plane1 = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(plane.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(4));
console.log(airline.slice(4));
console.log(airline.slice(-1));

const checkMiddleSeat = function (seat) {
  // B AND E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log("You've got the middle seat");
  else console.log('You got lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('12C');
