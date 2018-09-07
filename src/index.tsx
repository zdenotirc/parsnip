import * as React from 'react';

import * as ReactDOM from 'react-dom';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

import './index.css';

import { createStore } from 'redux';

import { Provider } from 'react-redux';

import tasks from './reducers';

const store = createStore(tasks);

ReactDOM.render(
  <Provider store={store}>
    <App title="App" />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
