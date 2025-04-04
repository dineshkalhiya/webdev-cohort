// JavaScript DataTypes

// Keywords to declare variables
// both are bloce scope
// let-> it can be change/overwrite
// Const-> it means constant, can't be changed

//Primitive DataTypes
// 1)String
let name = "dinesh";

// 2)Number
let age = 21.5;

// 3)Boolean
let isPaid = true;

// 4)Null - it's empty but intentionally
let favouriteClass = null;

// 5)Undefined - not defined but will use it later
let cityName;

// 6) Symbol
let sym = Symbol();

// 7) BigInt - to declare big integers values
let integer = BigInt(-1231451235123);

//Non-Primitive DataTypes
// 8) Arrays
let skills = ["html", "css", "js", "git", "problem-solving"];

// 9) Objects - to store key-value pairs
let Profile = {
    name: "dinesh",
    age: 21.5,
    isPaid :true,
    favouriteClass : null
}

console.log(typeof cityName)
console.log(typeof skills)