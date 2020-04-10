import axios from 'axios';

 const instance = axios.create({
    baseURL: 'https://burger-f7647.firebaseio.com/'
});

export default instance