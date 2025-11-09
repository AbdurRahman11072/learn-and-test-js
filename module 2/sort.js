// * get details knowladge about sort

const Number = [40, 60, 6, 2, 8, 90, 1];
const fruits = ["banana", "Cherry", "Orange", "apple"];

const sortNumber = Number.sort(); // ! here the the numbet is sorted in default Lexicographical. Means it will sort by first letter of the number as you can see 1 on the array if the array content 10 it will show next to the 1. because on number 10 its first letter is 1. like you can see it on 6 and 60
console.log(sortNumber);

const sortNumber2 = Number.sort((a, b) => a - b); // ! Number is sorted in logical order
console.log(sortNumber2);

const sortFruits = fruits.sort(); // ! sort by Alphabatic latter Like First Capitall latter will show then Small latter will show
console.log(sortFruits);
const sortFruits2 = fruits.sort((a, b) => a.localeCompare(b)); // ! sort data in Alphabatic order

console.log(sortFruits2);
