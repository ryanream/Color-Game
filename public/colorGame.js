// November 9, 2018 - Friday

// keep track of number of squares (hard/easy mode). Default is 6
var numSquares = 6;
// array of random colors to display. Runs the generator to set the colors[]
var colors = [];
// chooses a random index from the colors[]
var colorToFind;
// puts the element for each square in an array 
var squares = document.querySelectorAll(".square");
// rgb text in h1 telling user what they're looking for
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	// modeButton event listeners
	setupModeButtons();
	setupSquares();

	reset();
}

function setupModeButtons(){
		for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			// how many suqares to show
			// pick new colors
			// pick a new colorToFind
			// update page to reflect changes
			reset();
		});
	}
}

function setupSquares(){
		for (var i = 0; i < squares.length; i++) {
	// add click listeners to squares
		squares[i].addEventListener("click", function(){
		// grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			// compare to colorToFind color
			if (clickedColor === colorToFind) {
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}

		});
	}
}

function reset(){
	// replace colors[] with new colors
 	colors = generateRandomColors(numSquares);
	// reset colorToFind
	colorToFind = pickColor();
	// change colorDisplay to match new colorToFind
	colorDisplay.textContent = colorToFind;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	// change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	
}

resetButton.addEventListener("click", function(){
	reset();
});

// change the color of all squares to match colorToFind
function changeColors(color){
	// loop through squares
	for (var i = 0; i < squares.length; i++) {
		// match color to given color
		squares[i].style.backgroundColor = color;
	}
}

// select a random index of the colors[]
function pickColor(){
	// pick a random number between 1 and length of colors array
	var random = Math.floor(Math.random() * colors.length);
	// return a random index
	return colors[random];
}

// returns an array of colors
// uses randomColor() to build the colors as rgb strings
// pushes them into the array
function generateRandomColors(num) {
	// create an empty array
	var colorArray = [];
	// call randomColor num times, push result into colorArray
	for (var i = 0; i < num; i++) {
		colorArray.push(randomColor());
	}
	return colorArray;
}

// returns an rgb string with proper spacing - "rgb(63, 108, 14)"
// string is used to set square color, spacing is vital
function randomColor(){
	// generate 3 random numbers from 1-255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	// string them together will proper spacing (had a bug (typo) here, obviously)
	return "rgb(" + r + ", " + g + ", " + b +")";
}

