// Set class
class Game {
     constructor() {
         this.missed = 0;
         this.phrases = ['To be or not to be', 
         'A piece of cake', 
         'Back to square one', 
         'Chip on your shoulder', 
         'Barking up the wrong tree'];
         this.activePhrase = null;
     }

   
     
     // Hides the overlay when called
     startGame() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        this.activePhrase = new Phrase(this.getRandomPhrase());
        this.activePhrase.addPhraseToDisplay();
     }

     enableKeyboard() {
       
        
     }

     // Returns a random phrase
     getRandomPhrase() {
        const randomNum = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomNum];
     }
     
     // Handles game logic
     handleInteraction(e) {
        const keys = document.querySelectorAll('.key');
       if (this.activePhrase.checkLetter(e.innerText) === true || this.activePhrase.checkLetter(e.key) === true) {
           this.activePhrase.showMatchedLetter(e.innerText);
           this.activePhrase.showMatchedLetter(e.key);
           e.className = 'chosen';
           e.disabled = true;
           keys.forEach(key => {
               if (e.key === key.textContent && this.activePhrase.checkLetter(e.key) === true) {
                   console.log('Right letter');
                   key.className = 'chosen';
                   key.disabled = true;
                }
            })
           this.checkForWin();
       }else {
           e.className = 'wrong';
           e.disabled = true;
           keys.forEach(key => {
                if (e.key === key.textContent && this.activePhrase.checkLetter(e.key) === false) {
                    key.className = 'wrong';
                    key.disabled = true;
                    console.log('Wrong letter');
                }
           })
           console.log(e);
           console.log(this.activePhrase);
           this.removeLife();
           console.log(this.missed);
       }
    }

     // Removes heart and adds to the missed count
     removeLife() {
        const hearts = document.querySelector('img[src="images/liveHeart.png"]');
        this.missed += 1;
        hearts.src= 'images/lostHeart.png';
         if (this.missed === 5) {
            this.gameOver();
        }
     }
     // Checks to see if the phrase is all filled out and ends the game 
     checkForWin() {
        const lisShow = document.querySelectorAll('.show').length;
        const lisTotal = document.querySelectorAll('#phrase li').length;
        const lisSpace = document.querySelectorAll('.space').length;
        const phraseLength = lisTotal - lisSpace;
       if (phraseLength === lisShow) {
            this.gameOver(true);
        }
     }
     // Sets style for end game result and resets the game
     gameOver(game) {
        const overlay = document.getElementById('overlay');
        const h2 = document.getElementById('game-over-message');
        const lisTotal = document.querySelectorAll('#phrase li');
        const keyChosen = document.querySelectorAll('.chosen');
        const keyWrong = document.querySelectorAll('.wrong');
        const hearts = document.querySelectorAll('#scoreboard img');
        if (game === true) {
            console.log('win');
            h2.textContent = 'Congrats, you win!';
            overlay.style.display = '';
            overlay.className = 'win';
            lisTotal.forEach(li => li.remove());
            keyChosen.forEach(key => key.disabled = false);
            keyWrong.forEach(key => key.disabled = false);
            keyChosen.forEach(key => key.className = 'key');
            keyWrong.forEach(key => key.className = 'key');
            this.missed = 0;
            hearts.forEach(heart => heart.src = 'images/liveHeart.png');
            
        }else {
            console.log('lose');
            h2.textContent = 'Looks like you ran out of hearts :( ';
            overlay.style.display = '';
            overlay.className = 'lose';
            lisTotal.forEach(li => li.remove());
            keyChosen.forEach(key => key.disabled = false);
            keyWrong.forEach(key => key.disabled = false);
            keyChosen.forEach(key => key.className = 'key');
            keyWrong.forEach(key => key.className = 'key');
            this.missed = 0;
            hearts.forEach(heart => heart.src = 'images/liveHeart.png');
        }
     }
 }

 