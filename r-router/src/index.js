

import { BrowserRouter } from "react-router-dom";
import App from './App';
import {createRoot} from 'react-dom';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>  
);