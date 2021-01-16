import {json2qs} from './ApiUtils';

export const API = {
    get: <TResponse>(url: string, params?: any): Promise<TResponse> => {
        return fetch(params ? `${url}?${json2qs(params)}` : url).then((response) => response.json());
    },
    post: <TResponse, TBody = unknown>(url: string) => (body?: TBody): Promise<TResponse> =>
        fetch(url, {body: JSON.stringify(body), method: 'POST'}).then((response) => response.json()),
};
