let num1 = 10;
document.write("The Value of a is : " + num1 + "<br>" + "<br>");

document.write("The Value of ++a is : " + ++num1 + "<br>");
document.write("Now the value of a is " + num1 + "<br>" + "<br>");

document.write("The Value of ++a is : " + num1++ + "<br>");
document.write("Now the value of a is " + num1 + "<br>" + "<br>");

document.write("The Value of ++a is : " + --num1 + "<br>");
document.write("Now the value of a is " + num1 + "<br>" + "<br>");

document.write("The Value of ++a is : " + num1-- + "<br>");
document.write("Now the value of a is " + num1 + "<br>" + "<br>");



var a = 2, b = 1;
// Explain the output at each stage:
--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--;
var result = --a - --b + ++b + b--;

document.write("a is : " + a + "<br>");
document.write("b is : " + b + "<br>");
document.write("result is : " + result + "<br> <br>");

// Prompt the user to enter their name
var userName = prompt("Please enter your name:");

// Greet the user with an alert box
document.write("Hello, " + userName + "! Welcome to our website.");


// Prompt the user to enter a number
var number = +prompt("Enter a number to display its multiplication table (default is 5):");

// Check if the input is empty or invalid
if (!number || isNaN(number)) {
  number = 5; // Default to 5
}

document.write("<h3>Multiplication Table of " + number + ":</h3>");
for (var i = 1; i <= 10; i++) {
  document.write(number + " x " + i + " = " + (number * i) + "<br>");
}
