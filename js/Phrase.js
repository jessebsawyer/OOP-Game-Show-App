// Set class 
class Phrase {
     constructor(phrase) {
         this.phrase = phrase.toLowerCase();
    }
     // Adds a new phrsase on the board
     addPhraseToDisplay() {
       const split = this.phrase.split('');
       const ul = document.querySelector('.section ul');
       const re = /^[a-zA-Z]$/;
       split.forEach(char => {
           const li = document.createElement('li');
           li.textContent = char;
           if (!re.test(char)) {
               li.className = 'space';
           }else {
               li.className = 'letter';
           }
           ul.appendChild(li);
        }); 
    }
     // Checks if letter guessed matches a letter in the phrase
     checkLetter(letter) {
        this.letter = letter;
        if (this.phrase.includes(this.letter)) {
          return true;
        }else {
            return false;
        }
    }   
     // Shows the matched letter on the board
     showMatchedLetter(letter) {
        const lis = document.querySelectorAll('.letter');
        lis.forEach(li => {
            if (li.textContent === letter) {
                li.className = 'show';
            }
        })
    }

     
}