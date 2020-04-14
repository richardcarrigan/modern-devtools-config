import _ from 'lodash';
import * as Sentry from '@sentry/browser';
import './style.css';
import Icon from './icon.png';
import printMe from './print';

function component() {
    Sentry.init({dsn: "https://7b413bc5e2bb4c83a776296021d6e7cd@o376527.ingest.sentry.io/5197448"});

    const element = document.createElement('div');
    const btn = document.createElement('button');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    // Add the image to our existing div
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());