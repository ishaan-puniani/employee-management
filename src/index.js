import App from 'App';
import React from 'react';
import ReactDOM from 'react-dom';
import { unregister } from 'registerServiceWorker';
import { i18n } from 'i18n';

(async function () {
    document.title = i18n('app.title');
    applyTheme('default');
    ReactDOM.render(
        <App />,
        document.getElementById('root'),
    );

    /**
     * It may cause cache issues when developing, so, after your app is ready,
     * change those lines
     */
    unregister();
    // registerServiceWorker();
})();
function applyTheme(color) {
    const oldLink = document.getElementById('theme-link');

    const link = document.createElement('link');
    link.setAttribute('id', 'theme-link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute(
        'href',
        `${process.env.PUBLIC_URL}/theme/dist/${color}.css`,
    );

    if (oldLink) {
        document
            .getElementsByTagName('head')
            .item(0)
            .replaceChild(oldLink, link);
    } else {
        document
            .getElementsByTagName('head')
            .item(0)
            .appendChild(link);
    }
}
