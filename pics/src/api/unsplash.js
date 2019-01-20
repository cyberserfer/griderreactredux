import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 5fc081cb16a5c574c75f9d0ae8dab248e711ea418af97b226d92ded7e85b146d'
    }
});