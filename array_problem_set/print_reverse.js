var input = [1, 2, 3, 4];
var input1 = [1, 1, 1, 1];

if (input !== []) {
    //print reverse
    console.log("print reverse");
    console.log(printReverse(input));

    //is uniform
    console.log("isUniform");
    console.log(isUniform(input));
    console.log(isUniform(input1));

    //sumArray
    console.log("sumArray");
    console.log(sumArray(input));
    console.log(sumArray(input1));

    //max
    console.log("max");
    console.log(max(input));
    console.log(max(input1));
}


function printReverse(array) {
    var reversed = [];
    for (i=array.length-1; i>=0; i--) {
        reversed.push(array[i]);
    }
    return reversed;
}

function isUniform(array) {
    var total = 0;
    for (i=1; i<array.length; i++) {
        if (array[0] === array[i]) {
            total+=1;
        }
    }
    if (total === array.length-1) {
        return true;
    } else {
        return false;
    }
}

function sumArray(array) {
    var sum = 0;
    for (i=0; i<array.length; i++) {
        sum+=array[i];
    }
    return sum;
}

function max(array) {
    var max = array[0];
    for (i=1; i<array.length; i++) {
        if (array[i]>max) {
            max = array[i];
        }
    }
    return max;
}