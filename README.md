# Tic-Tac-Toe

## Problem Statement 

Design a command-line based, 3x3 grid Tic-Tac-Toe game that can be played by 2-players.

## Requirements 

### Board 

3x3 grid board with the following naming convention for squares of the grid

```
A1    A2    A3
B1    B2    B3
C1    C2    C3
```

### Players 

Game has 2 players. Every player has a name and a character. The character is by default, “X” and “O” for player 1 and 2, but players can pick their own characters. Both players must not have the same character. 

### Game 

- Game starts with Player 1 inserting their character on one of the boxes 
- Players get alternative turns, and insert their characters on boxes 
- On every turn, take command line input of which box to place character
- After every turn show state of game 
- After every turn, one of 4 conditions can happen 
  - Player specifies wrong box (already has been used);  
    In this case, same player will try again 
  - Placing the character results in game winning condition (specified below);  
    in this case end the game and declare winner 
  - Player specifies correct box, but doesn’t win game;  
    Give turn to other player and continue game  
  - Board is full (this was last entry), and no winner;  
    Declare game draw and end game 
- Winning conditions:   
  Same character in all boxes of: 
    - any row
    - Any column
    - Any diagonal 

## Data Format

### Initialise Game & Players 

```
Enter Player 1 Name: 
> John 
Enter Player 1 Character (X):
> ❎
Enter Player 2 Name:
> Jane 
Enter Player 2 Character (O):
> 🛑
``` 

> Note: If player doesn’t enter character, the code defaults to X and O 


### Gameplay 

```
Board: 
_  _  _
_  _  _
_  _  _

Player 1: Enter box: 
> A1 


Board: 
❎ _  _
_  _  _
_  _  _

Player 2: Enter box: 
> A2 

Board: 
❎ 🛑 _
_  _  _
_  _  _

Player 2: Enter box: 
> 
```

