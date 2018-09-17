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

    onCreateTask: (task: { title: string; description: string }) => void;
}

interface IState {
    showNewCardForm: boolean;
    title: string;
    description: string;
}

export default class TaskPage extends React.Component<ITaskPageProps, IState> {
    constructor(props: ITaskPageProps) {
        super(props);

        this.state = {
            showNewCardForm: false,
            title: '',
            description: '',
        };
    }

    public render() {
        return (
            <div className="tasks">
                <div className="task-list">
                    <div className="task-list-header">
                        <button className="button button-default" onClick={this.toggleForm} >+ New task</button>
                    </div>
                    {this.state.showNewCardForm && (
                        <form className="task-list-form" onSubmit={this.onCreateTask}>
                            <input className="full-width-input" onChange={this.onTitleChange} value={this.state.title} type="text" placeholder="title" />
                            <input className="full-width-input" onChange={this.onDescriptionChange} value={this.state.description} type="text" placeholder="description" />
                            <button className="button" type="submit" > Save </button>
                        </form>
                    )}
                    <div className="task-lists">
                        {this.renderTaskLists()}
                    </div>
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

    private onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ title: e.currentTarget.value });
    }

    private onDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ description: e.currentTarget.value });
    }

    private onCreateTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        this.props.onCreateTask({
            title: this.state.title,
            description: this.state.description
        });

        this.resetForm();
    }

    private resetForm() {
        this.setState({
            showNewCardForm: false,
            title: '',
            description: '',
        });
    }

    private toggleForm = () => {
        this.setState({ showNewCardForm: !this.state.showNewCardForm });
    }
}