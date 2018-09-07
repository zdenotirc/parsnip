import * as React from 'react';
import { TaskList } from './TaskList';

const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed'];

export interface ITaskPageModel {
    id: number;
    title: string;
    description: string;
    status: string;
}

interface ITaskPageProps {
    tasks: ITaskPageModel[];
}

export default class TaskPage extends React.Component<ITaskPageProps, {}> {
    public render() {
        return (
            <div className="tasks">
                <div className="task-lists">
                    {this.renderTaskLists()}
                </div>
            </div>
        );
    }

    private renderTaskLists() {
        const { tasks } = this.props;
        return TASK_STATUSES.map(status => {
            const statusTasks = tasks.filter(task => task.status === status);
            return <TaskList key={status} status={status} tasks={statusTasks} />;
        });
    }
}