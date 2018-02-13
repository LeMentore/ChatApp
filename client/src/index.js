import React from 'react';
import ReactDOM from 'react-dom';
import ChatComponent from 'components/Chat';
import registerServiceWorker from 'registerServiceWorker';

import ws from 'util/ws';
import 'assets/styles/style.css'

window.ws = ws;

ReactDOM.render(<ChatComponent />, document.getElementById('root'));
registerServiceWorker();
