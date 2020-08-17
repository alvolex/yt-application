import axios from 'axios';

const KEY = 'AIzaSyA0xZhvGmj4qZkTpJFEyP6m5fpXtS_X1D4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: `${KEY}`
    }
})