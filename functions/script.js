function isEven(num) {
    // if (num % 2 === 0) {
    //     return true;
    // }
    // return false;

    return num % 2 === 0;
}

function factorial(num) {
    // if (num === 0) {
    //     return 1;
    // }
    // if (num < 0) {
    //     return false;
    // }
    // if (num > 0) {
    //     var outcome = 1;
    //     for (i = num; i > 1; i--) {
    //         var outcome = outcome * i;
    //     }
    //     return outcome;
    // }

    var result = 1;
    for (var i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

function kebabToSnake(str) {
    // if (str.indexOf("-") = -1) {
    //     return str;
    // } else {
    //     return str.replace("-", "_");
    // }

    return str.replace(/-/g, "_");
}

