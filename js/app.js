
const game = new Game();

// Start game when clicked
document.getElementById('btn__reset').addEventListener('click', () => game.startGame());

// Run handleInteraction() when a letter is clicked
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('click', (e) => game.handleInteraction(e.target));
});

// Run handleInteraction when a letter is typed
const overlay = document.getElementById('overlay');
document.addEventListener('keydown', (e) => game.handleInteraction(e));
