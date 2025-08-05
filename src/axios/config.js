import axios from 'axios';

const blogFetch = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})


export default blogFetch;