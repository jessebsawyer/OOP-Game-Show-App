
const game = new Game();

// Start game when clicked
document.getElementById('btn__reset').addEventListener('click', () => game.startGame());

// Run handleInteraction() when a letter is clicked
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('click', (e) => game.handleInteraction(e.target));
});

// Run handleInteraction when a letter is typed
keys.forEach(key => {
    key.addEventListener('keyup', (e) => game.handleInteraction(e));
})