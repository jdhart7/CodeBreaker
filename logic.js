/* *******************************************************************************
// Program by John DeHart, July 09, 2020.										//
//																				//
// Program based off the board game "Mastermind" created in 1970. The object	//
// of the game is to guess a randomly generated code. With each guess, the		//
// player recieves hints, telling them how close they are. For a better			//
// explanation, see the rules in the HTML file.									//
//																				//
// The program works by printing numbers on the Circles in the player's			//
// control area (where the circles can be clicked to change colors). The		//
// numbers are completely invisible to the player as they're the same color		//
// as the circles themselves. The numbers correspond to the circle's color. The // 
// player's array is then compared to the CPU's code.							//
// if the arrays are the same, the player wins. If not, they player gets some	//
// hints and the game continues. See the comments below for more info.			//
******************************************************************************* */


function changeColor(obj) {		//changes the color of the clicked circle in the player's control area.
	
	var innerText = parseInt(obj.textContent);		//store the circle's text. Each circle has text inside it (invisible to the player) that represents the color it currently is
	
	switch (innerText) {							//moves the circle's color to the next color.
		case 0:										//0 represents green. The next color is blue, so if the inner text is 0, change the color of the circle to blue.
			obj.style.backgroundColor = '#6FC6F7';
			obj.style.color = '#6FC6F7';
			obj.textContent = 1;
			break;
		case 1:
			obj.style.backgroundColor = '#ED6B7F';		//same thing. Change the blue circle to red.
			obj.style.color = '#ED6B7F';
			obj.textContent = 2;
			break;
		case 2:
			obj.style.backgroundColor = '#FADD5F';	//and so on
			obj.style.color = '#FADD5F';
			obj.textContent = 3;
			break;
		case 3:
			obj.style.backgroundColor = 'black';	//and so forth.
			obj.style.color = 'black';
			obj.textContent = 4;
			break;
		case 4:
			obj.style.backgroundColor = '#C866F2';
			obj.style.color = '#C866F2';
			obj.textContent = 5;				//you also have to change the number inside the circle so, if it's clicked again, the program knows what color it is.
			break;
		case 5:
			obj.style.backgroundColor = '#67E06F';
			obj.style.color = '#67E06F';
			obj.textContent = 0;
			break;
	}		
};

function alterCPU() {			//changes the grey circles at the top of the screen to show the correct code.
	
	switch (arr[0]) {			//switch statement finds the value for the color in the first entry.
		case 0:
			document.getElementById("ans1").style.backgroundColor = "#67E06F";	//0 in the array represents green
			break;
		case 1:
			document.getElementById("ans1").style.backgroundColor = "#6FC6F7";	//1 represents blue
			break;
		case 2:
			document.getElementById("ans1").style.backgroundColor = "#ED6B7F";		//and so on
			break;
		case 3:
			document.getElementById("ans1").style.backgroundColor = "#FADD5F";	//and so forth.
			break;
		case 4:
			document.getElementById("ans1").style.backgroundColor = "black";	//ans1 is the first grey circle in the play area, of course.
			break;
		case 5:
			document.getElementById("ans1").style.backgroundColor = "#C866F2";
			break;
	}
	
	switch (arr[1]) {
		case 0:
			document.getElementById("ans2").style.backgroundColor = "#67E06F";	//does the same thing as the first switch statement, but for the second circle.
			break;
		case 1:
			document.getElementById("ans2").style.backgroundColor = "#6FC6F7";
			break;
		case 2:
			document.getElementById("ans2").style.backgroundColor = "#ED6B7F";
			break;
		case 3:
			document.getElementById("ans2").style.backgroundColor = "#FADD5F";
			break;
		case 4:
			document.getElementById("ans2").style.backgroundColor = "black";
			break;
		case 5:
			document.getElementById("ans2").style.backgroundColor = "#C866F2";
			break;
	}
	
	switch (arr[2]) {
		case 0:
			document.getElementById("ans3").style.backgroundColor = "#67E06F";	//I'm sure there's an easier way to do this, but I couldn't figure it out.
			break;
		case 1:
			document.getElementById("ans3").style.backgroundColor = "#6FC6F7";
			break;
		case 2:
			document.getElementById("ans3").style.backgroundColor = "#ED6B7F";
			break;
		case 3:
			document.getElementById("ans3").style.backgroundColor = "#FADD5F";
			break;
		case 4:
			document.getElementById("ans3").style.backgroundColor = "black";
			break;
		case 5:
			document.getElementById("ans3").style.backgroundColor = "#C866F2";
			break;
	}
	
	switch (arr[3]) {
		case 0:
			document.getElementById("ans4").style.backgroundColor = "#67E06F";		//one more time.
			break;
		case 1:
			document.getElementById("ans4").style.backgroundColor = "#6FC6F7";
			break;
		case 2:
			document.getElementById("ans4").style.backgroundColor = "#ED6B7F";
			break;
		case 3:
			document.getElementById("ans4").style.backgroundColor = "#FADD5F";
			break;
		case 4:
			document.getElementById("ans4").style.backgroundColor = "black";
			break;
		case 5:
			document.getElementById("ans4").style.backgroundColor = "#C866F2";
			break;
	}
	
		
};

function checkAnswer() {		//this function gets the player's guess and places it into plArr.
	var plArr = [];
	
	obj1 = document.getElementById("pl1");		//the first circle (in the control area) is read. There are invisible number inside the circles that represent what color
	plArr[0] = parseInt(obj1.innerText);		//they are. 
	
	obj2 = document.getElementById("pl2");
	plArr[1] = parseInt(obj2.innerText);
	
	obj3 = document.getElementById("pl3");
	plArr[2] = parseInt(obj3.innerText);
	
	obj4 = document.getElementById("pl4");
	plArr[3] = parseInt(obj4.innerText);
	
	return plArr;
	
};

function checkWhite(plArr) {		//function checks how many circles are the correct color. Subtracting by the amount of circles in the correct spot will give us the correct
	var white = 0;					//hint. The white variable is named for the board game; before I selected orange as a better color for this program.
	for (i = 0; i < 4; i++) {
		for (j = 0; j < 4; j++) {		//these for loops go through both the CPU's arr and the player's guess array.
			if (arr[i] == plArr[j]) {	//if the guess and the CPU's color is the same...
				white++;				//increase white, then change the player's array to 10 in that position so it isn't counted again.
				plArr[j] = 10;
				break;
			}
		}
	}
	return white;			//return the amount of circles that are the correct color.
};

function printGuess(plArr, black, white) {
	var newCircles = "<center><div>";						//initialize a string that will be used to print the new circles to the play area.
	var gameSpace = document.getElementById('space');		//get the game space from the document. The submited answer will be printed above it.
	for (i = 0; i < 4; i++) {							//for loop adds a new circle to the string for each element in the player's array.
		switch (plArr[i]) {			//like above, 0 = green, 1 = blue, etc.
			case 0:
				newCircles += "<div class = 'symbols'></div>";
				break;
			case 1:
				newCircles += "<div class = 'symbols' style = 'background-color: #6FC6F7;'></div>";
				break;
			case 2:
				newCircles += "<div class = 'symbols' style = 'background-color: #ED6B7F;'></div>";
				break;
			case 3:
				newCircles += "<div class = 'symbols' style = 'background-color: #FADD5F;'></div>";
				break;
			case 4:
				newCircles += "<div class = 'symbols' style = 'background-color: black;'></div>";
				break;
			case 5:
				newCircles += "<div class = 'symbols' style = 'background-color: #C866F2;'></div>";
				break;
		}
	}
	
	for (i = 0; i < black; i++) {
		newCircles += "<div class = 'clue' style = 'background-color: black;'></div>";		//adds a new black square to the string for each number in "black"
	}
	for (i = 0; i < white; i++) {
		newCircles += "<div class = 'clue' style = 'background-color: orange;'></div>";		//adds an orange square for each number in "white"
	}
	if (black + white < 4) {
		for (i = black + white; i < 4; i++) {
			newCircles += "<div class = 'clue' style = 'background-color: #EBAA79; border-color: white;'></div>"	//adds a white square until all the squares add up to 4
		}																										//so everything lines up nice.
	}
	
	newCircles += "</div></center>";								//add the end tags to the string.
	document.getElementById("guessSpace").innerHTML += newCircles;	//print the string to the document, creating the circles.
	//console.log(plArr);

}

function checkArrays() {
	var plArr = checkAnswer();		//calls a function that reads the player's input and stores it in an array.
	var black = 0;					//variable to store how many circles are the correct color in the correct position.
	for (i = 0; i < 4; i++) {		//for loop determines how many circles are the correct color in the correct position and stores that number in "black."
		if (plArr[i] == arr[i]) {
			//console.log(true);
			black++;
		} else {
			//console.log("Not the same");		//for testing purposes.
		}
	};
	if (black == 4) {										//if there are 4 correct colors in the correct position, the code is correct.
		//console.log("They're the same");
		alterCPU();											//calls a function to alter the grey circles at the top of the screen.
		document.getElementById("btn").disabled = true;		//disable the "submit guess" button so the player can't alter the play field anymore.
		guesses++;											//count this as the last guess.
		window.alert("You Win! It took " +guesses+ " guesses to solve.");	//tell the user they won and show how many guesses they made.
		location.reload();													//reload the screen
	} else {
		var white = checkWhite(plArr) - black;		//"white" stores the amount of orange squares that need to be printed if the guess is incorrect. The variable is named for
		guesses++;									//the board game, rather than this because I hadn't selected a color yet. They're subtracted because the checkWhite()
		//console.log("black: " +black);			//function only determines if there are circles of the same color.
		//console.log("white: " +white);
		obj1 = document.getElementById("pl1");
		plArr = checkAnswer();						//calls checkAnswer() again because apparently plArr is a global variable?
		printGuess(plArr, black, white);			//print the guess to the game area.
	};
};