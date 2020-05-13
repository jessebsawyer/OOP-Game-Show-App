
const game = new Game();

// Start game when clicked
document.getElementById('btn__reset').addEventListener('click', () => game.startGame());

// Run handleInteraction() when a letter is clicked
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('click', (e) => game.handleInteraction(e.target));
});

// Run handleInteraction when a letter is typed
function enable() {
    document.onkeydown = function(e) {
        return true;
    }
}

function disable() {
    document.onkeydown = function(e) {
        return false;
    }
}

const overlay = document.getElementById('overlay');
document.addEventListener('keydown', (e) => {
    if (overlay.className === 'win' || overlay.className === 'lose') {
        enable();
    }else {
        game.handleInteraction(e);
        disable();
    }
});
