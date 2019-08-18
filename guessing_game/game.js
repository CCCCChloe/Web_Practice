// create secret number
var secretNumber = 4;

// ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

// check if guess is right
if (guess === secretNumber) {
    alert("You got it right!");
}

// check if guess is higher
else if (guess > secretNumber) {
    alert("Too high, guess again.");
}

// check if guess is lower
else {
    alert("Too low, guess again.");
}

console.log("Print all numbers between -10 and 19");

var num = -10;

while (num < 20) {
    console.log(num);
    num++;
}

console.log("Print all even numbers between 10 and 40");

var num = 10;

while (num < 41) {
    if (num % 2 === 0) {
        console.log(num);
    }
    num++;
}

console.log("Print all odd numbers between 300 and 333");

var num = 300;

while (num < 333) {
    if (num % 2 !== 0) {
        console.log(num);
    }
    num++;
}

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");

var num = 5;

while (num < 51) {
    if (num % 5 === 0 && num % 3 ===0) {
        console.log(num);
    }
    num++;
}