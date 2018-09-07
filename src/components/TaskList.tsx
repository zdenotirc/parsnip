import * as React from 'react';
import { ITaskModel, Task } from './Task';

interface ITaskListProps {
    tasks: ITaskModel[];
    status: string;
}

export const TaskList = (props: ITaskListProps) => {
    return (
        <div className="task-list">
            <div className="task-list-title">
                <strong>{props.status}</strong>
            </div>
            {props.tasks.map(task => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
};