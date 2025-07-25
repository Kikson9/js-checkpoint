'use strict';

// Sets
const italianFoods = new Set([
  'pasta',
  'gnocci',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection: ', commonFoods);
console.log([...commonFoods]);

const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log('Union: ', italianMexicanFusion);

const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log('Difference:', uniqueItalianFoods);

const uniqueItalianAndMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianAndMexicanFoods);

console.log(italianFoods.isDisjointFrom(mexicanFoods));
const ordersSet = new Set(['Pizza', 'Pizza', 'Pasta', 'Risotto', 'Risotto']);
console.log(ordersSet);
console.log(new Set('Jonas'));
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));

ordersSet.add('Garlic bread');
ordersSet.delete('Risotto');
console.log(ordersSet);

// looping thorugh a set
for (const order of ordersSet) {
  console.log(order);
}

// example
const staff = ['waiter', 'Chef', 'Waiter', 'manager'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set('jonasschemdtmann').size);
