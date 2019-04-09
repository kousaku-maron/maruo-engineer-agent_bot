import * as twitter from 'twitter'
import config from './config/twitter'

const client = new twitter(config)
const params = { q: 'unity', lang: 'ja', locate: 'ja' }
client.get('search/tweets', params, (error, tweets, response) => {
  if(!error) {
    console.log(tweets)
  }
  else {
    console.log(error)
  }
})
