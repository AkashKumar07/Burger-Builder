import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-4c53d.firebaseio.com/'
});

export default instance;