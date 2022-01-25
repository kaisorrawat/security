import axios from 'axios';

const instance = axios.create({
    // .. where we make our configurations
        // baseURL: 'http://127.0.0.1:8000/api'
        // baseURL: 'http://10.110.23.231/backend/public/index.php/api'
        baseURL: 'http://192.168.100.220/dblpr/public/index.php/api'
});

// instance.defaults.headers.common['Authorization'] = localStorage.getItem('tokenFront');

export default instance;