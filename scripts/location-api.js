const ipUrl = 'http://ipinfo.io/json?token=eb5b90bb77d46a'

const getLocation = () => {
  return fetch(ipUrl, {}).then((response) => {
    switch(response.status) {
      case 200:
        return response.json()
      default:
        throw new Error('Unable to fetch data')
    }
  })
}

getLocation().then((data) => {
  console.log(`City: ${data.city}`)
  console.log(`Region: ${data.region}`)
  console.log(`Country: ${data.country}`)
}).catch((err) => {
  console.log(err)
})

