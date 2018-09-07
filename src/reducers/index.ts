const mockTasks = [
    {
        id: 1,
        title: 'Learn Redux',
        description: 'The store, actions, and reducers, oh my!',
        status: 'In Progress',
    },
    {
        id: 2,
        title: 'Peace on Earth',
        description: 'No big deal.',
        status: 'In Progress',
    },
    {
        id: 3,
        title: 'Grokking Algorithms',
        description: 'Learn Algorithms and DS',
        status: 'Unstarted',
    },
    {
        id: 4,
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

export default function tasks(state: ITasksState = { tasks: mockTasks }, action: any) {
    return state;
}