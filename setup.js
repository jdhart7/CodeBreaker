var arr = [];			//array for the CPU's code. Global variable because it will never be edited and is required for a lot of functions.
var guesses = 0;		//how many times the player has guessed. Global because it has to be available every time the button is pressed.
for (i = 0; i < 4; i++) {		//selects random numbers (0-5) for the computer's code. These numbers will correspond to colors.
	test = Math.floor(Math.random() * 5);
	arr[i] = test;							//puts the random number into the array.
}