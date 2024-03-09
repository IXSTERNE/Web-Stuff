const output = document.getElementById('output');
const input = document.getElementById('input');

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const command = input.value.trim();
    input.value = '';
    processCommand(command);
  }
});

function processCommand(command) {
  const newLine = document.createElement('div');
  newLine.textContent = `> ${command}`;
  output.appendChild(newLine);

  // Process the command and update the output
  if (command === 'help') {
    const filesLine = document.createElement('div');
    filesLine.textContent = 'You are beyond salvation...';
    output.appendChild(filesLine);
  } else {
    const errorLine = document.createElement('div');
    errorLine.textContent = `Command not found: ${command}`;
    output.appendChild(errorLine);
  }
}