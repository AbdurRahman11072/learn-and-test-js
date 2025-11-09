// * flat is a methode to get nested arrary into single array. suppose you have [1,2,[3,4]] it will convert it to [1,2,3,4]

const data = [1, 2, [3, 4]];

const flatData = data.flat(Infinity);

console.log(flatData);

const tagsFromPosts = [
  ["javascript", "react", "css"],
  ["node", "express"],
  ["css", "html", "react"],
];

const getUniquePost = [...new Set(tagsFromPosts.flat(Infinity))]; // ! get unique tag with out nested array

console.log(getUniquePost);
