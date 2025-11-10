# Rock Paper Scissors Console Game

A classic implementation of Rock Paper Scissors game that runs in the browser's console. Challenge the computer in this simple yet entertaining game of chance and strategy!

## How to Play

1. Open `index.html` in your web browser
2. Open the browser's Developer Console:
   - Press F12 or
   - Right-click and select "Inspect" then click "Console" tab
3. The game will prompt you for your choice
4. Type one of these options when prompted (case insensitive):
   - rock
   - paper
   - scissors
5. The game consists of 5 rounds
6. After each round, the console will display both choices and announce the winner
7. At the end of 5 rounds, your final score will be displayed

## Game Logic

The game follows the traditional rules of Rock Paper Scissors:

- Rock beats Scissors
- Scissors beats Paper
- Paper beats Rock
- Same choices result in a tie

### Technical Implementation Details

The game uses the following core functions:

- `getComputerChoice()`: Generates a random choice using `Math.random()`
- `getHumanChoice()`: Gets player input through browser's `prompt()`
- `playRound()`: Determines the winner of each round
- `playGame()`: Manages the 5-round game and keeps score

### Scoring System

- Win: +1 point
- Lose: 0 points
- Tie: 0 points

## Console Output

The game provides feedback in the console for:
- Your choice
- Computer's choice
- Round winner
- Current score
- Final results after 5 rounds

## Requirements

- Any modern web browser (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- Access to browser's Developer Console

## Project Structure

```
root/
├── index.html      # Game page
├── script.js       # Game logic
└── README.md       # Documentation
```