import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/antd.css';
import './index.css';

import Who from './Who';
import {Provider} from 'react-redux';
import { store } from './store/store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Who />
    </Provider>
  </React.StrictMode>
);

