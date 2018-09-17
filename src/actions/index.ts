let id = 1;
export function uniqueId() {
    return id++;
}

export interface ICreateTaskAction {
    type: 'CREATE_TASK';
    payload: ICreateTaskPayload;
}

export interface ICreateTaskPayload {
    id: number;
    title: string;
    description: string;
    status: string;
}

export function createTask(payload: ICreateTaskPayload): ICreateTaskAction {

    return {
        type: 'CREATE_TASK',
        payload
    };
}