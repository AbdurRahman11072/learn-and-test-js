// ! Time complexity

// * If we use a (for loop ) or map it use  O(n) time
// * If we use a ( nested for loop ) or map it use  O(n^2) time

// * if a function is taking expected time everytime it use O(1). Means constent time

// * To see how much time a function take we use performanc methode.

const startTime = performance.now();

const arr = ["apple", "mango", "banana", "apple"];

// * set implementation on array
const removeDublicate = (arr) => {
  const set = new Set(arr);

  return Array.from(set); // * array.from create a new array form a array
};
const endTime = performance.now();

console.log(endTime - startTime);
