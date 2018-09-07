import * as React from 'react';
import TaskPage from './components/TaskPage';

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

export default class App extends React.Component {
  public render() {
    return (
      <div className="main-content">
        <TaskPage tasks={mockTasks} />
      </div>
    );
  }
}