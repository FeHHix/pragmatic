export const API = {
    get: <TResponse>(url: string): Promise<TResponse> => fetch(url).then((response) => response.json()),
    post: <TResponse, TBody = unknown>(url: string) => (body?: TBody): Promise<TResponse> =>
        fetch(url, {body: JSON.stringify(body), method: 'POST'}).then((response) => response.json()),
};
