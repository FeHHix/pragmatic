import {API as Api} from '@pragmatic/ui-core';
import {ITask, ITaskFilter, ITaskStatus} from './Models';

/**
 * @generated
 */
export const getTasks = (filter?: ITaskFilter): Promise<ITask[]> => Api.get(`${API_URL}/tasks`);

/**
 * @generated
 */
export const getTask = (id: string): Promise<ITask> => Api.get(`${API_URL}/tasks/${id}`);

/**
 * @generated
 */
export const getTaskStatuses = (): Promise<ITaskStatus[]> => Api.get(`${API_URL}/taskStatuses`);
