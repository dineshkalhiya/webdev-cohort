// server call rainy,cloudy,sunny

let weather = "sunny"
let result = weather === "rainy"

if (weather === "rainy") {
    console.log("Take Umbrella");
} else if (weather === "cloudy") {
    console.log("Take Jacket");
} else if (weather === "sunny") {
    console.log("its sunny today")
}
console.log(weather === "sunny")


if (result) {
    console.log("It's raining, carry umbrella");

} else if (weather === "cloudy") {
    console.log("It's cloudy, carry jacket")
} else {
    console.log("It's Sunny");
}