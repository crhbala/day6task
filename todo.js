// Define a variable
var greeting = "Hello, World!";

// Display the value of the variable
console.log(greeting);

// Define two variables
var num1 = 10;
var num2 = 5;

// Perform arithmetic operations
var sum = num1 + num2;
var difference = num1 - num2;
var product = num1 * num2;
var quotient = num1 / num2;

// Display the results
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);

// Define two string variables
var firstName = "John";
var lastName = "Doe";

// Concatenate and display the full name
var fullName = firstName + " " + lastName;
console.log("Full Name:", fullName);

// Get user input
var userName = prompt("Enter your name:");

// Display a personalized greeting
console.log("Hello, " + userName + "!");

// Define a variable
var age = 18;

// Check if the person is eligible to vote
if (age >= 18) {
  console.log("You are eligible to vote!");
} else {
  console.log("You are not eligible to vote yet.");
}

// Use a loop to display numbers from 1 to 5
for (var i = 1; i <= 5; i++) {
  console.log(i);
}

// Define an array
var fruits = ["Apple", "Banana", "Orange", "Mango"];

// Display each element in the array
for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Define a function that adds two numbers
function addNumbers(num1, num2) {
  return num1 + num2;
}

// Use the function and display the result
var result = addNumbers(3, 7);
console.log("Result:", result);
