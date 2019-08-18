var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var number = [];

for (var i = 0; i < 20; i ++) {
    number.push(i);
}

for (var i = 0; i < number.length; i++) {
    if (number[i] % 3 === 0) {
        console.log(number[i]);
    }
}