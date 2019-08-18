var answer = prompt("Are we there yet");
var correct_1 = "yes";
var correct_2 = "yeah";

while (answer.indexOf(correct_1) === -1 && answer.indexOf(correct_2) === -1) {
    answer = prompt("Are we there yet");
}

alert("Yay, we finally made it!");