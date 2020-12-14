import axios from 'axios';

const axiosGlobalConfig = (): void => {
    axios.interceptors.request.use(function (config) {
        // config.url = Config.webServiceUrl + config.url;

        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    // Add a response interceptor
    axios.interceptors.response.use(function (response) {
        return response;
    }, function (error) {        
        return Promise.reject(error);
    });
};

export default axiosGlobalConfig;