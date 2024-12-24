// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br>");

// 2. Repeat task1 for subtraction, multiplication, division & modulus.

var sub = num1 - num2;
document.write("Subtraction of " + num1 + " and " + num2 + " is " + sub + "<br>");

var mul = num1 * num2;
document.write("Multiplication of " + num1 + " and " + num2 + " is " + mul + "<br>");

var div = num1 / num2;
document.write("Division of " + num1 + " and " + num2 + " is " + div + "<br>");

var mod = num1 % num2;
document.write("Modulus of " + num1 + " and " + num2 + " is " + mod + "<br>");

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.

var a;
document.write("Value after variable declaration is: " + a + "<br>");

// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.

a = 5;
document.write("Initial value: " + a + "<br>");

// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.

a++;
document.write("Value after increment is: " + a + "<br>");

// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.

a += 7;
document.write("Value after addition is: " + a + "<br>");

// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.

a--;
document.write("Value after decrement is: " + a + "<br>");

// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.

a %= 3;
document.write("The remainder is: " + a + "<br>");

// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.

var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write("Total cost to buy 5 tickets to a movie is " + totalCost + "PKR<br>");

// 5. Write a script to display multiplication table of any number in your browser.

var num = 4;
document.write("Table of " + num + "<br>");

for (var i = 1; i <= 10; i++) {
    document.write(num + " x " + i + " = " + num * i + "<br>");
}

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.

var celsius = 25;
var fahrenheit = (celsius * 9 / 5) + 32;
document.write(celsius + "°C is " + fahrenheit + "°F<br>");

// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

var fahrenheit = 70;
var celsius = (fahrenheit - 32) * 5 / 9;
document.write(fahrenheit + "°F is " + celsius + "°C<br>");

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables:
// a. Price of item 1

var priceItem1 = 650;

// b. Price of item 2

var priceItem2 = 100;

// c. Ordered quantity of item 1

var quantityItem1 = 3;

// d. Ordered Quantity of item 2

var quantityItem2 = 7;

// e. Shipping charges

var shippingCharges = 100;

// Compute the total cost & show the receipt in your browser.

var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;
document.write("Price of item 1 is " + priceItem1 + "<br>");
document.write("Quantity of item 1 is " + quantityItem1 + "<br>");
document.write("Price of item 2 is " + priceItem2 + "<br>");
document.write("Quantity of item 2 is " + quantityItem2 + "<br>");
document.write("Shipping charges " + shippingCharges + "<br><br>");
document.write("Total cost of your order is " + totalCost + "<br>");


// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser.

var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%<br>");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.

var usDollars = 10;
var saudiRiyals = 25;
var totalCurrency = (usDollars * 104.80) + (saudiRiyals * 28);
document.write("Total Currency in PKR: " + totalCurrency + "<br>");

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:

var num = 10;
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var result = ((num + 5) * 10) / 2;
document.write("Result: " + result + "<br>");

// 11. The Age Calculator: Forgot how old someone is? Calculate it!

// a. Store the current year in a variable.

var currentYear = 2020;

// b. Store their birth year in a variable.

var birthYear = 1998;


// c. Calculate their 2 possible ages based on the stored values.

var age1 = currentYear - birthYear;
var age2 = age1 - 1;

// Output : “They are either NN or NN years old”.

document.write("They are either " + age1 + " or " + age2 + " years old<br>");


// 12. The Geometrizer: Calculate properties of a circle.

// a. Store a radius into a variable.

var radius = 20;

// b. Calculate the circumference based on the radius, and output “The circumference is NN”.

var circumference = 2 * 3.142 * radius;
document.write("The circumference is " + circumference + "<br>");


// Calculate the area based on the radius, and output “The area is NN”.

var area = 3.142 * radius * radius;
document.write("The area is " + area + "<br>");

// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.

// a. Store your favorite snack into a variable.

var snack = "chocolate chip";

// b. Store your current age into a variable.

var age = 22;

// c. Store a maximum age into a variable.

var maxAge = 65;

// d. Store an estimated amount per day (as a number).

var amountPerDay = 3;

// e. Calculate how many would you eat total for the rest of your life.

var total = (maxAge - age) * amountPerDay;
document.write("You will need " + total + " " + snack + " to last you until the ripe old age of " + maxAge + "<br>");

// Chapter 5 End











