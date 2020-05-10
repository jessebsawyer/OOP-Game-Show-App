
class Phrase {
     constructor(phrase) {
         this.phrase = phrase.toLowerCase();
    }

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

     checkLetter(letter) {
        this.letter = letter;
        if (this.phrase.starsWith(this.letter)) {
            console.log(this.letter);
            return this.letter;
        }
        
    }

     showMatchedLetter(letter) {
        
    }

     
}
