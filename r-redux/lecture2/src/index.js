import React from 'react';
import {Provider}from 'react-redux';
import App from './App';
import action from './actions';
import {createRoot} from 'react-dom/client';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <Provider store={action}>
    <App/>
  </Provider>
)