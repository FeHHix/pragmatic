import {API as Api} from '@pragmatic/ui-core';

export const getTasks = (): Promise<any> => Api.get(`${API_URL}/tasks`);
