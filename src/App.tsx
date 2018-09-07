import * as React from 'react';
import { connect } from 'react-redux';

import TaskPage from './components/TaskPage';
import { ITasksState } from './reducers';

type IStateProps = ITasksState;

interface IAppProps {
  title: string;
}

class App extends React.Component<IStateProps & IAppProps> {
  public render() {
    return (
      <div className="main-content">
        <TaskPage tasks={this.props.tasks} />
      </div>
    );
  }
}

function mapStateToProps(state: ITasksState){
  return state;
}

export default connect(mapStateToProps) (App);