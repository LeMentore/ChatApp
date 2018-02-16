import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App';
import registerServiceWorker from 'registerServiceWorker';
import 'assets/styles/style.css'

const rootElement = document.getElementById('root');
localStorage.removeItem('auth');

ReactDOM.render(<App />, rootElement);
registerServiceWorker();

if (module.hot) {
    module.hot.accept('containers/App', () => {
        const NextApp = require('containers/App').default
        ReactDOM.render(
            <NextApp />,
            rootElement
        )
    })
}