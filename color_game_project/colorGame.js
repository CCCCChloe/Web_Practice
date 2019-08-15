var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        resetButton.textContent = "New colors";
    }
    messageDisplay.textContent = "";
})

easyButton.addEventListener("click", function(){
    resetBackground()
    easyButton.style.color = "white";
    hardButton.style.color = "steelblue";
    numSquares = 3;
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i=0; i<squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
})

hardButton.addEventListener("click", function(){
    resetBackground()
    hardButton.style.color = "white";
    easyButton.style.color = "steelblue";
    numSquares = 6;
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i=0; i<squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "correct";
            resetButton.textContent = "Play again?";
            changeColors(pickedColor);
            h1.style.backgroundColor = pickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "wrong";
        }
    })
}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    //pick a random number
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = [];
    //add num random colors to array
    for (var i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor())
    }
    //return that array
    return arr;
}

function randomColor() {
    //pick red, green, blue from 0 to 255
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    var color = "rgb(" + red + ", " + green + ", " + blue + ")"
    return color
}

function resetBackground() {
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New colors";
    messageDisplay.textContent = "";
}