// Array

const arr= [1,2,3,4,5,6,7,8,9];
// arr.push(45);
// arr.unshift(0);
// arr.shift();
// arr.pop();
// console.log(arr);

// slice , splice

// const arr1 = arr.slice(2,5)

// console.log(arr1);
// console.log("B", arr1 );

// const arr2 = arr.splice(2,5);
// console.log("C", arr );
// console.log(arr2);

// const marvel_heroes = ["Ironman", "Spiderman", "Hulk", "Thor", "Black Panther"];
// const dc_heroes = ["Batman", "Superman", "Wonder Woman", "Flash", "Aquaman"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);

// const all_heroes = marvel_heroes.concat(dc_heroes);
// console.log(marvel_heroes);
// console.log(all_heroes);

// const all_new_heroes = [...marvel_heroes, ...dc_heroes];
// console.log(all_new_heroes);

// const another_array = [1,2,3[4,5,6],7,[6,7,[4,5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)

console.log(Array.isArray("Sumit"));
console.log(Array.from("Sumit"));

console.log(Array.from({name: "Sumit"}))  // interesting


let score1= 100 ;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));  // interesting
