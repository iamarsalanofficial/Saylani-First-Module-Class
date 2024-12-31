// 1.

let city = prompt("Enter city name: ");
if (city === "Karachi") {
  console.log("Welcome to city of lights");
} else {
  console.log("Welcome to " + city);
}

// 2. 


let gender = prompt("Enter your gender (male/female): ");
if (gender === "male") {
  console.log("Good Morning Sir");
} else if (gender === "female") {
  console.log("Good Morning Ma’am");
} else {
  console.log("Invalid gender");
}

// 3. 

let color = prompt("Enter color of road traffic signal: ");
if (color === "Red") {
  console.log("Must Stop");
} else if (color === "Yellow") {
  console.log("Ready to move");
} else if (color === "Green") {
  console.log("Move now");
} else {
  console.log("Invalid color");
}

// 4.

let fuel = parseFloat(prompt("Enter remaining fuel in car (in litres): "));
if (fuel < 0.25) {
  console.log("Please refill the fuel in your car");
} else {
  console.log("Fuel is sufficient");
}

// 5
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}
if (true) {
  alert("True");
}
if (false) {
  alert("False");
}
if ("car" < "cat") {
  alert("car is smaller than cat");
}
