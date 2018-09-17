import { ICreateTaskAction, uniqueId } from '../actions';

const mockTasks = [
    {
        id: uniqueId(),
        title: 'Learn Redux',
        description: 'The store, actions, and reducers, oh my!',
        status: 'In Progress',
    },
    {
        id: uniqueId(),
        title: 'Peace on Earth',
        description: 'No big deal.',
        status: 'In Progress',
    },
    {
        id: uniqueId(),
        title: 'Grokking Algorithms',
        description: 'Learn Algorithms and DS',
        status: 'Unstarted',
    },
    {
        id: uniqueId(),
        title: 'Professional C#',
        description: 'Learn C#',
        status: 'Completed',
    },
];

// Use Array<T> or instead Array<{}> - anonymous type
export interface ITasksState {
    tasks: Array<{
        id: number;
        title: string;
        description: string;
        status: string;
    }>
}

export default function tasks(state: ITasksState = { tasks: mockTasks }, action: ICreateTaskAction) {
    if (action.type === 'CREATE_TASK') {
        return { tasks: state.tasks.concat(action.payload) };
    }

    return state;
}