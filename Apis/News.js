import axios from 'axios'

export default axios.create({
    baseURL: 'https://newsapi.org/v2/'
})


// https://newsapi.org/v2/top-headlines?country=us&apiKey=72d2a0865ac740eb860785c920c9f54e
