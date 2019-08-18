console.log("print all numbers between -10 and 19");

for (var num = -10; num < 20; num ++) {
    console.log(num);
}

console.log("print all even numbers between 10 and 40");

for (var num = 10; num < 41; num ++) {
    if (num % 2 === 0) {
        console.log(num);
    }
}

console.log("print all odd numbers between 300 and 333");

for (var num = 300; num < 334; num ++) {
    if (num % 2 !== 0) {
        console.log(num);
    }
}

console.log("print all numbers divisible by 5 and 3 between 5 and 50");

for (var num = 5; num < 51; num ++) {
    if (num % 5 === 0 && num % 3 === 0) {
        console.log(num);
    }
}