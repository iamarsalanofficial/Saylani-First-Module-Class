var a = 1, b = 2, c = 3;
console.log(a, b, c);


// Legal
var myName = "John";
var my_age = 25;
var $myName = "John";
var myName1 = "John";
var myName_ = "John";

// Illegal
// var 1myName = "John";
// var my-Name = "John";
// var my Name = "John";
// var my.Name = "John";
// var my#Name = "John";

document.write("<h1>Rules for naming JS variables</h1>");
document.write("Variable names can only contain numbers, $, and _. For example $my_1stVariable<br>");
document.write("Variables must begin with a letter, $, or _. For example $name, _name or name<br>");
document.write("Variable names are case sensitive<br>");
document.write("Variable names should not be JS keywords<br>");