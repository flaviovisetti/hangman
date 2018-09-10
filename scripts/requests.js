// Callback Approach
const getPuzzleAsync = (wordCount, callback) => {
  const request = new XMLHttpRequest()
  request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText)
      callback(undefined, data.puzzle)
    } else if (e.target.readyState === 4 && e.target.status === 400) {
      const data = JSON.parse(e.target.responseText)
      callback(data.error, undefined)
    }
  })

  request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
  request.send()
}

const getPuzzleSync = ()  => {
  const request = new XMLHttpRequest()
  request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=2', false)
  request.send()

  if (request.readyState === 4 && request.status === 200) {
    const data = JSON.parse(request.responseText)
    return data.puzzle
  } else if(request.readyState === 4 && request.status === 400) {
    throw new Erro('Something was wrong.')
  }
}

// Promise Approach

const getPuzzlePromise = (wordCount) => new Promise((resolve, reject) => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText)
      resolve(data.puzzle)

    } else if(e.target.readyState === 4 && e.target.status === 400) {
      const data = JSON.parse(e.target.responseText)
      reject(data.error)
    }
  })

  request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
  request.send()
})
