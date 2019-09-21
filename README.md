# SnakeGame
Inspired by Nokia's infamous Snake game

![example screenshot image](https://github.com/Abtar/SnakeGame/blob/master/Screenshot.JPG "Snake Game Screenshot")



### Snake Game Repository Folders

- [SnakeStart](https://github.com/Abtar/SnakeGame/tree/master/SnakeStart) -> A challenge activity geared towards learning how the snake game was built 
- [SnakeComplete](https://github.com/Abtar/SnakeGame/tree/master/SnakeComplete) -> The fully functional snake game (see the [README](https://github.com/Abtar/SnakeGame/blob/master/SnakeStart/README) for help)



### Snake Game Software Requirements

    • The game must start in a state of “stop”
    • The player can start the game using the n key setting the game state to “play” 
    • The player can pause a game in “play” state using the p key setting the game state to “pause”
    • The player can resume a game in “pause” state using the p key setting the game state to “play”
    • The player controls a snake using the arrow keys (←,→,↑,↓) to eat objects
    • A score variable displays the number of objects consumed by the snake
    • The snake must die if it hits the border or runs into itself which sets the game state to “upload”
    • If the game is in a state of “upload” then a stub method should be called to upload the score variable to a database*
*See [Integrating Azure Cosmos DB into Azure Functions](https://docs.microsoft.com/en-us/azure/azure-functions/functions-integrate-store-unstructured-data-cosmosdb?tabs=csharp) for more information on how to save the score on the Azure cloud


### Snake Game Class Diagram

![class diagram image](https://github.com/Abtar/SnakeGame/blob/master/SnakeComplete/SnakeGameClassDiagram.jpg "Snake Game Class Diagram")

