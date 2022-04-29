import React from 'react';
import ReactDOM from 'react-dom/client';

import Who from './Who';
import {Provider} from 'react-redux';
import { store } from './store/store';

import 'antd/dist/antd.min.css'
import './index.css';

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

