// correct password
const correctPassword = "password123";
// user input holder
let userInput = "";

// do while loop to prompt the user to enter their password
do {
    userInput = prompt("Enter your password:");

    if (userInput !== correctPassword) {
        console.log("Incorrect, try again.");
    }
} while (userInput !== correctPassword);
// access granted
console.log("Access granted.");
