import React from 'react';
import ReactDOM from 'react-dom';
import axiosGlobalConfig from './config/axios-config';
import * as serviceWorker from './serviceWorker';

import Dashboard from './components/dashboard/dashboard-view';

axiosGlobalConfig();

ReactDOM.render(
   <Dashboard />,
   document.getElementById('root')
 );

 serviceWorker.unregister();