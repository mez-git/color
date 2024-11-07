Color Matching Game
Description
The Color Matching Game is an interactive web-based game built with React. In this game, the player must guess a randomly generated color from a set of options. If the player selects the correct color, they are redirected to a "success" page, otherwise, they are redirected to a "try again" page. The game provides feedback and a loading state during the color selection process.

This project was created using React and React Router for page navigation.

Features
Random Color Generation: A random color is generated at the start, and the user must match it by clicking on one of the color buttons.
Loading State: During the game processing (when the player selects a color), a loading state disables the buttons to prevent multiple clicks.
Success/Failure Pages: The game redirects the player to a success page if they guessed the correct color, or to a try-again page if they were incorrect.
Responsive Design: The game is responsive and looks great on both desktop and mobile devices.
Screenshots
(Optional: Include a few screenshots of your game interface here)

Tech Stack
React: For building the user interface.
React Router: For page navigation (Success and Try Again pages).
Tailwind CSS: For styling and creating a responsive layout.
JavaScript (ES6+): For the logic of the game.
Installation
Prerequisites
Ensure that you have Node.js and npm installed on your machine.

Steps
Clone the repository:

bash
Copy code
git clone https://github.com/mez-git/color-matching-game.git
Navigate to the project directory:

bash
Copy code
cd color-matching-game
Install dependencies:

Run the following command to install the necessary dependencies:

bash
Copy code
npm install
Run the development server:

Start the app locally using the following command:

bash
Copy code
npm start
This will open the game in your default web browser, usually at http://localhost:3000.

Usage
Once the game is running:

A random color will be displayed at the top of the screen.
The player must choose the correct color from a set of color options presented as buttons.
After selecting a color, the buttons are disabled temporarily (loading state).
If the selected color matches the randomly generated color, the user will be redirected to the "Success" page.
If the selected color does not match, the user will be redirected to the "Try Again" page.
The player can click the "Try New" button to generate a new color to guess.
Game Logic
The app randomly selects one color from an array of six colors (yellow, green, red, blue, orange, gray).
The player selects a color, and the app compares the selected color to the randomly generated color.
If they match, the app navigates to the /success page. If they don't, it navigates to the /tryagain page.
A loading state prevents the user from clicking the buttons multiple times while the game processes their selection.
Folder Structure
bash
Copy code
/color-matching-game
│
├── /src
│   ├── /components
│   │   └── Game.js              # Main game logic component
│   ├── App.js                   # Main entry point of the app
│   ├── index.js                 # React entry file
│   └── /styles
│       └── index.css            # Global styles (TailwindCSS)
│
├── /public
│   ├── index.html               # HTML file
│   └── /assets
│
├── package.json                 # Project metadata and dependencies
└── README.md                    # This file
Contributing
Fork the repository.
Create a new branch (git checkout -b feature-name).
Make your changes and commit (git commit -am 'Add new feature').
Push to the branch (git push origin feature-name).
Open a Pull Request to the main branch.
License
This project is open-source and available under the MIT License.

Acknowledgments
Thanks to React, TailwindCSS, and React Router for providing the tools to easily build and style this game.

