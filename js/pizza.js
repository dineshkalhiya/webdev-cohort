// which pizzasize is required ??
let numberOfGuest = 5;

let pizzaSize;

// small <= 2
// medium <= 5
// large > 5

if (numberOfGuest <= 2) {
    pizzaSize = "small"
} else if (numberOfGuest <= 5) {
    pizzaSize = "medium"
} else{
    pizzaSize = "large"
}

console.log(pizzaSize)