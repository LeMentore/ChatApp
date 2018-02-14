import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ChatComponent from './components/chat';

import './assets/styles/style.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ChatComponent />, document.getElementById('root'));
registerServiceWorker();
