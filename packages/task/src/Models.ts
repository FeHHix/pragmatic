/**
* @generated
*/
export interface ITaskFilter {
    id?: string,
    assignee?: string,
    summary?: string,
    content?: string,
    tags?: string[],
    status?: string,
    statusHistoryDateFrom?: string,
    statusHistoryDateTo?: string,
    statusHistoryStatus?: string,
}

/**
 * @generated
 */
export interface ITask {
    assignee: string;
    content: string;
    id: string;
    summary: string
}

/**
 * @generated
 */
export interface ITaskStatus {
    id: string;
    name: string;
}
