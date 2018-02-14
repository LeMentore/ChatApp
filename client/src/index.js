import React from 'react';
import ReactDOM from 'react-dom';
import ChatComponent from 'components/Chat';
import registerServiceWorker from 'registerServiceWorker';
import 'assets/styles/style.css'

const rootElement = document.getElementById('root');
localStorage.removeItem('auth');

ReactDOM.render(<ChatComponent />, rootElement);
registerServiceWorker();

if (module.hot) {
    module.hot.accept('components/Chat', () => {
        const NextApp = require('components/Chat').default
        ReactDOM.render(
            <NextApp />,
            rootElement
        )
    })
}