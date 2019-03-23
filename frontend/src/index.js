import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import Main from './Main';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Main />,
  document.getElementById('root'));

serviceWorker.unregister();

if (module.hot) {
  module.hot.accept();
}
