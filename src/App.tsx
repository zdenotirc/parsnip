import * as React from 'react';
import { connect } from 'react-redux';

import TaskPage from './components/TaskPage';
import { ITasksState } from './reducers';

import { createTask, ICreateTaskPayload, uniqueId } from './actions';

type IStateProps = ITasksState;

interface IAppProps {
  title: string;
}

interface IDispatchProps {
  onCreateTask: (newTask: ICreateTaskPayload) => void;
}

class App extends React.Component<IStateProps & IDispatchProps & IAppProps> {

  public render() {
    return (
      <div className="main-content">
        <TaskPage tasks={this.props.tasks} onCreateTask={this.onCreateTask} />
      </div>
    );
  }

  private onCreateTask = (taskPayload: ICreateTaskPayload) => {
    const newTask = {
      id: uniqueId(),
      title: taskPayload.title,
      description: taskPayload.description,
      status: 'Unstarted',
    }

    this.props.onCreateTask(newTask);
  };
}

export default connect<IStateProps, IDispatchProps, IAppProps>(
  (state: ITasksState) => state,
  (dispatch) => ({
    onCreateTask: newTask => dispatch(createTask(newTask))
  })
)(App);