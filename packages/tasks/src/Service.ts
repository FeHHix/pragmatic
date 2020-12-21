import {API as Api} from '@pragmatic/ui-core';
import {ITask} from './Models';

/**
 * @generated
 */
export const getTasks = (): Promise<ITask[]> => Api.get(`${API_URL}/tasks`);

/**
 * @generated
 */
export const getTask = (id: string): Promise<ITask> => Api.get(`${API_URL}/tasks/${id}`);
