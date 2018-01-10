import * as React from 'react';
import { TaskList } from './TaskList';

const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed'];

export interface TaskPageModel {
    id: number;
    title: string;
    description: string;
    status: string;
}

interface TaskPageProps {
    tasks: TaskPageModel[];
}

export default class TaskPage extends React.Component<TaskPageProps, {}> {
    renderTaskLists() {
        const { tasks } = this.props;
        return TASK_STATUSES.map(status => {
            const statusTasks = tasks.filter(task => task.status === status);
            return <TaskList key={status} status={status} tasks={statusTasks} />;
        });
    }

    render() {
        return (
            <div className="tasks">
                <div className="task-lists">
                    {this.renderTaskLists()}
                </div>
            </div>
        );
    }
}