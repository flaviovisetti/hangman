class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
  }

  get puzzle() {
    let puzzle = ''
    this.word.forEach((letter) =>{
      if(this.guessedLetters.includes(letter) || letter === ' ') {
        puzzle += letter
      } else {
        puzzle += '*'
      }
    })

    return puzzle
  }

  makeGuess(guess) {
    guess = guess.toLowerCase()

    const isUnique = !this.guessedLetters.includes(guess)
    const badGuessed = !this.word.includes(guess)

    if (isUnique) {
      this.guessedLetters.push(guess)
    }

    if (isUnique && badGuessed) {
      this.remainingGuesses--
    }
  }

  getStatus() {
    const isFinished = this.word.every((letter) =>{
      return this.guessedLetters.includes(letter) || letter === ' '
    })

    if(this.remainingGuesses <= 0) {
      return 'failed'
    } else if(isFinished) {
      return 'finished'
    } else {
      return 'playing'
    }
  }

  get statusMessage() {
    switch (this.getStatus()) {
      case 'failed':
        return `Nice try! The word was ${this.word.join('').toUpperCase()}`
      case 'playing':
        return `Guesses left: ${this.remainingGuesses}`
      case 'finished':
        return 'Great work! You guessed the word'
    }
  }
}
