// * get details knowladge about some and from
// * some is a methode that return boolean if it meet the requirment

const numbers = [1, 5, 3, 7, 5];

const hasEvenNumber = numbers.some((numbers) => numbers % 2 === 0); // ! check if there is a single even number on the array if found return true or false. Now it will return "false". Science there is no even number
console.log(hasEvenNumber);

const currentUserRoles = ["user", "editor", "admin"];

const featureAccessRoles = ["admin", "manager"];

const canAccess = currentUserRoles.some((role) =>
  featureAccessRoles.includes(role)
); // ! check if the admin or manager is on the current userRoles if found it will return true. Scienc currenUserRoles has anmin as will as in the featureAccessRoles it will return true.

console.log(canAccess);

// * to create a array out of thin air we use "From methode"

const arr = Array.from({ length: 5 }); // ! this will create a array of 5 element that is undefined
console.log(arr);

const arr2 = Array.from({ length: 5 }).fill(0); // ! here the array will be fill with 5, "0" element insted of undefined like previous function
console.log(arr2);

const arr3 = Array.from(numbers, (value, i) => value * value); // ! here we are taking a array name{number} and createing new array by multipluing it's value.

console.log(arr3);
