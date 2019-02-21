import axios from 'axios';

const KEY = 'AIzaSyATK2ZkfADh37rcPSp9xjuBok-lUkbq6T0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,

    }
});

