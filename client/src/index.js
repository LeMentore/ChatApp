import React from 'react';
import ReactDOM from 'react-dom';
import ChatComponent from 'components/Chat';
import registerServiceWorker from 'registerServiceWorker';

import 'assets/styles/style.css'

ReactDOM.render(<ChatComponent />, document.getElementById('root'));
registerServiceWorker();
