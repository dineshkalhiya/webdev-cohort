console.log("hello world");

//function to print hello
function printHello() {
    console.log("hello world");
}

//function to bring brush
function bringBrush(numberOfBrush) {
    //wrong approach
    // console.log("Hanji, le aaya brush", numberOfBrush);

    //correct approach
    console.log(`Hanji, le aaya ${numberOfBrush} brush`);
}

//function to add 2 numbers
function addTwoNumber(num1, num2) {
   return num1 + num2;
}

//function to multiply 2 numbers
function multipleTwoNumber(num1, num2) {
    return num1 * num2;
}

printHello();
bringBrush(4);

//it wont' work because instruction of print was not given
addTwoNumber(22, 323);

console.log(addTwoNumber(2, 2));
console.log(multipleTwoNumber(11, 8));