/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// const phrase = new Phrase();

 class Game {
     constructor() {
         this.missed = 0;
         this.phrases = ['To be or not to be', 'A piece of cake', 'Back to square one', 'Chip on your shoulder', 'Barking up the wrong tree'];
         this.activePhrase = null;
     }

     
     // Hides the overlay when called
     startGame() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        const phrase = new Phrase(this.activePhrase);
        return phrase.addPhraseToDisplay();
        
     }

     // Returns a random phrase
     getRandomPhrase() {
        const randomNum = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomNum];
     }

     handleInteraction(e) {
       
     }

     removeLife() {

     }

     checkForWin() {

     }

     gameOver() {

     }
 }

 const test = new Game();
 console.log(test.handleInteraction());