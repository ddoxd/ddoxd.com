const terminalOutput = document.getElementById('output');
const terminalInput = document.getElementById('input');
const backgroundCanvas = document.getElementById('backgroundCanvas');
const canvasContext = backgroundCanvas.getContext('2d');
const loginButton = document.getElementById('loginButton');

// Function to draw 1s and 0s on the canvas (basic animation)
function drawBackground() {
  canvasContext.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Transparent black for fading effect
  canvasContext.fillRect(0, 0, backgroundCanvas.width, backgroundCanvas.height);

  canvasContext.fillStyle = 'green'; // Green color for 1s and 0s
  canvasContext.font = '20px monospace'; 

  for (let i = 0; i < 10; i++) { // Draw 10 random 1s and 0s
    const x = Math.random() * backgroundCanvas.width;
    const y = Math.random() * backgroundCanvas.height;
    const digit = Math.random() < 0.5 ? '1' : '0';
    canvasContext.fillText(digit, x, y);
  }
}

// Function to handle user input
function handleInput(event) {
  const command = event.target.value.trim();
  terminalInput.value = ''; // Clear the input field

  switch (command) {
    case 'help':
      terminalOutput.innerHTML += "<br>Available commands: help, info, skills, projects, code, random, joke, socials, project, home<br>";
      break;
    case 'info':
      terminalOutput.innerHTML += "<br>About Me:  I'm a web developer with a passion for creating innovative and user-friendly websites. I love exploring new technologies and pushing the boundaries of what's possible in the digital world. <br>";
      break;
    case 'skills':
      terminalOutput.innerHTML += "<br>Skills: HTML, CSS, JavaScript, Python, React, Node.js, SQL <br>";
      break;
    case 'projects':
      terminalOutput.innerHTML += "<br>Projects: ... (List your projects here) ... <br>";
      break;
    case 'code':
      terminalOutput.innerHTML += "<br>Code:  (Insert a code example or prompt for a code challenge) ... <br>";
      break;
    case 'random':
      terminalOutput.innerHTML += "<br>Random: Did you know that the first website was created in 1991?  <br>"; // Replace with your own fact/quote
      break;
    case 'joke':
      terminalOutput.innerHTML += "<br>Joke:  Why don't programmers like to work on weekends? Because they get paid by the hour! <br>"; // Replace with your own joke or API call
      break;
    case 'socials':
      terminalOutput.innerHTML += "<br>Socials: Discord: ... (Your Discord link here) ... | Twitter/X: ... (Your Twitter/X link here) ... <br>";
      break;
    case 'project':
      terminalOutput.innerHTML += "<br>Currently working on PashLabs! ... <br>";
      break;
    case 'home':
      terminalOutput.innerHTML += "<br>Back to the main menu. ... <br>";
      break;
    default:
      terminalOutput.innerHTML += "<br>Invalid command. Type 'help' for a list of commands. <br>";
  }
}

// Event listener for user input
terminalInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    handleInput(event);
  }
});

// Start drawing the animated background
setInterval(drawBackground, 50);

// Login Button Event Listener
loginButton.addEventListener('click', () => {
  window.location.href = 'login.html';
});
