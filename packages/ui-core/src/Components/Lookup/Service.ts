import { API } from '../../Service';

export const lookup = (url: string) => (id: string): Promise<any> => API.get(`${url}/${id}`);
