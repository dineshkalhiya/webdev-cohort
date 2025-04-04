let fruits = ["apple", "cherry", "banana"]
console.log(fruits[0]);

let intFruits = new Array("kiwi", "avacado", "dragonfruit")

fruits[0] = "blueberry"
console.log(fruits[0]);
console.log(fruits.length);

fruits.push("new item");

fruits.unshift("old item")

//remove last element of array and return it
fruits.pop()
console.log(fruits.pop());

console.log(fruits);

