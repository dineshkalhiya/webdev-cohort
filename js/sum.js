let myArray = [1, 2, 4, 52, 35, 1]

function sumfac(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum=sum +numbers[i]
    }
    return sum;
}

let result = sumfac(myArray)
console.log(result);

let anotherResult = sumfac([1, 1, 1, 1, 1, 1])
console.log(anotherResult)

