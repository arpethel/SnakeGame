import GameObject from '/GameObject.js';
import Snake from '/Snake.js';

export default class GameBoard {
	constructor(canvas) {
		this.canvas = canvas;
		this.canvasContext = canvas.getContext('2d');
		this.boardHeight = canvas.height;
		this.boardWidth = canvas.width;
		this.snake = new Snake(canvas.width/2,canvas.height/2,5,5,"#0000FF",1,0);
		this.targetObject = this.CreateTarget(5,5,"#000000");
		this.gameState = "stop";
		this.score = 0;
	}

	DrawBoard() {
	}

	DrawRectangularCell(gameObject) {
		this.canvasContext.beginPath();
		this.canvasContext.rect(gameObject.x, gameObject.y, gameObject.objectWidth, gameObject.objectHeight);
		this.canvasContext.fillStyle = gameObject.objectColor;
		this.canvasContext.fill();
	}

	CreateTarget(width,height,color) {
	}

	CheckCollision(x,y) {
		return (CheckTargetCollision(x,y) || CheckSnakeCollision(x,y));
	}

	CheckTargetCollision(x,y) {

	}

	CheckSnakeCollision(x,y) {

	}
}