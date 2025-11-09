// ? learn dataSturcture of set
//  * set doesn't content dublicate data it store unique data

const set = new Set();
// * to add value use set.add method
set.add("apple");
set.add("banana");
set.add("mango");
set.add("apple");
set.add("pineapple");

// * use (set.clear) to romove all the element

// * use(set.delete) to remove sepecific element form the set
console.log(set.delete("apple"));

// * use (set.entries() ) to see all the element with there index like here [ 'banana', 'banana' ],. The banana has its index name as banana
console.log(set.entries());

// * use (set.has("string")) to see a specifc element exist in the set if exist it will return "true" else "false"
console.log(set.has("mango"));

// * use to see the index. This is a iterator
console.log(set.keys());

// * use to see how the number of element set content
console.log(set.size);

const arr = ["apple", "mango", "banana", "apple"];

// * set implementation on array
const removeDublicate = (arr) => {
  const set = new Set(arr);

  return Array.from(set); // * array.from create a new array form a array
};

console.log(removeDublicate(arr));
