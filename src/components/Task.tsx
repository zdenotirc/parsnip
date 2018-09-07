import * as React from 'react';

export interface ITaskModel {
    id: number;
    title: string;
    description: string;
}

interface ITaskProps {
    task: ITaskModel;
}

export const Task = (props: ITaskProps) => {
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