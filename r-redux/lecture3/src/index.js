
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import {createRoot}from 'react-dom';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
)
