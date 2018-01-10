import * as React from 'react';

export interface TaskModel {
    id: number;
    title: string;
    description: string;
}

interface TaskProps {
    task: TaskModel;
}

export const Task = (props: TaskProps) => {
    return (
        <div className="task">
            <div className="task-header">
                <div>{props.task.title}</div>
            </div>
            <hr />
            <div className="task-body">{props.task.description}</div>
        </div>
    );
};