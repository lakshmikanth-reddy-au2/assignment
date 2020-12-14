import axios, { AxiosRequestConfig } from 'axios';

const post = <TModel>(request: { url: string; method?: string; config?: {} }, payload: unknown):
    Promise<{ data?: TModel; error?: unknown; headers?: unknown }> => {
    if (!request.method) {
        request.method = 'get';
    }
    return new Promise(resolve => {
        axios(request.url, {
            method: request.method ,
            data: request.method === 'post' ? payload : null,
            params: request.method !== 'post' ? payload : null,
            ...request.config
        } as AxiosRequestConfig)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .then((response: any ) => {
                resolve({ data: response.data, headers: response.headers });
            })
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .catch((reason: any) => {
                resolve({ error: reason });
            });
    });
};

export default post;