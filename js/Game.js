
class Game {
     constructor() {
         this.missed = 0;
         this.phrases = ['To be or not to be', 'A piece of cake', 'Back to square one', 'Chip on your shoulder', 'Barking up the wrong tree'];
         this.activePhrase = null;
     }

    //  get phraseClass () {
    //      this.activePhrase = this.getRandomPhrase();
    //      const phrase = new Phrase(this.activePhrase);
    //      return phrase;
    //  }
     
     // Hides the overlay when called
     startGame() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        this.activePhrase = new Phrase(this.getRandomPhrase());
        this.activePhrase.addPhraseToDisplay();
        
     }

     // Returns a random phrase
     getRandomPhrase() {
        const randomNum = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomNum];
     }

     handleInteraction(e) {
       if (this.activePhrase.checkLetter(e.innerText) === e.textContent) {
           this.activePhrase.showMatchedLetter(e);
           console.log(e);
           e.className = 'chosen';
       }else {
           e.className = 'wrong';
       }
    }

     removeLife() {

     }

     checkForWin() {

     }

     gameOver() {

     }
 }

 