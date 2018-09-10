let game

const renderPage = () => {
  const puzzle = document.querySelector('.puzzle')
  const puzzleStatus = document.querySelector('.my-status')

  puzzle.textContent = ''
  puzzleStatus.textContent = ''

  puzzle.textContent = `Puzzle: ${game.puzzle}`
  puzzleStatus.textContent = `${game.statusMessage}`
}

window.addEventListener('keypress', function(e){
  const newGuess = String.fromCharCode(e.charCode)
  game.makeGuess(newGuess)
  renderPage()
})

const startGame = async () => {
  const puzzle = await fetchPuzzle().then((data) => {
    return data
  })

  game = new Hangman(puzzle, 8)
  renderPage()
}

document.querySelector('.reset-game').addEventListener('click', startGame)

startGame()
