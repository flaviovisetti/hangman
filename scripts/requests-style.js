const url = 'http://puzzle.mead.io/puzzle?wordCount=2'
const fetchPuzzle = async (wordCount) => {
  const response = await fetch(url)

  if (response.status === 200) {
    const data = await response.json()
    return data.puzzle

  } else {
    throw new Error('Unable to fetch data')
  }
}
