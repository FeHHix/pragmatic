export const API = {
    get: <TResponse>(url: string): Promise<TResponse> => fetch(url).then((response) => response.json()),
};
