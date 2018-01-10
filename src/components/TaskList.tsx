import * as React from 'react';
import { Task, TaskModel } from './Task';

interface TaskListProps {
    tasks: TaskModel[];
    status: string;
}

export const TaskList = (props: TaskListProps) => {
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