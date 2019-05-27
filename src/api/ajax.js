import axios from 'axios'
import store from '@/store/store'
import { Indicator } from 'mint-ui';

const service = axios.create({
    baseURL: 'https://web-gateway.newbeescm.com/b2b-app-web',
    withCredentials: true,
    timeout: 200000
})
service.interceptors.request.use(
    config => {
        Indicator.open();
        if(store.state.token) {
            config.headers.token = store.state.token
        }
        return config;
    },
    error => {
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        Indicator.close();
        console.log(response)
    }
)

export default service;