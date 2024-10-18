# Monty Hall Problem Simulator

This project is a web application built with Vite, React, and TypeScript that simulates the famous [Monty Hall problem](https://en.wikipedia.org/wiki/Monty_Hall_problem).

[Check out the live preview.](https://jrbarnhart.github.io/monty-hall/)

## Description

The Monty Hall problem is a probability puzzle where the player is presented with three doors. Behind one door is a prize, and behind the other two are monsters. After an initial choice, one of the remaining doors with a monster is revealed. The player then has the option to switch their choice to the other unopened door.

## Features

- Simulates the Monty Hall problem with interactive door selection.
- Tracks wins, losses, and calculates win rate.
- Provides informative logs during gameplay.
- Allows switching of door choices based on game strategy.

## Usage

1. Choose a door initially.
2. Decide whether to switch doors after one monster door is revealed.
3. Track your win rate as you play multiple rounds.

## Installation

To run the project locally:

1. Clone this repository
   ```sh
   git clone https://github.com/jrbarnhart/monty-hall.git
   ```
3. Install dependencies
   ```sh
   npm install
   ```
5. Start the development server
   ```sh
   npm run dev
   ```
7. Open your browser and navigate to `http://localhost:5173` or whatever port you configure Vite's dev server to use.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
