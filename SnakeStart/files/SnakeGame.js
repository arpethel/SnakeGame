import GameBoard from '/GameBoard.js';

let buttonPressed = {"LEFT" : false, "UP" : false, "RIGHT" : false, "DOWN" : false, "N" : false, "P" : false};

export default class SnakeGame {
	constructor(canvas) {
		this.board = new GameBoard(canvas);
		this.ConfigureKeyPressed();
	}

	ConfigureKeyPressed() {
		document.onkeydown = function(e) {
			if(e.keyCode == 37) buttonPressed.LEFT = true;
			if(e.keyCode == 38) buttonPressed.UP = true;
			if(e.keyCode == 39) buttonPressed.RIGHT = true;
			if(e.keyCode == 40) buttonPressed.DOWN = true;
			if(e.keyCode == 78) buttonPressed.N = true;
			if(e.keyCode == 80) buttonPressed.P = true;
		}

		document.onkeyup = function(e) {
			if(e.keyCode == 37) buttonPressed.LEFT = false;
			if(e.keyCode == 38) buttonPressed.UP = false;
			if(e.keyCode == 39) buttonPressed.RIGHT = false;
			if(e.keyCode == 40) buttonPressed.DOWN = false;
			if(e.keyCode == 78) buttonPressed.N = false;
			if(e.keyCode == 80) buttonPressed.P = false;
		}
	}

	UpdateBoard() {

	}

	KeyPressedHandler() {

	}

	UploadScore() {
		
	}
}