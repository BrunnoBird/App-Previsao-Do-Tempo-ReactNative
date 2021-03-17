import axios from 'axios';

//https://api.hgbrasil.com/weather?key=3eb6da6e&lat=-23.682&lon=-46.875

export const key = '3eb6da6e';

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com'
});

export default api;
