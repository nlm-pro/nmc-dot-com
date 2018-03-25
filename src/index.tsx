import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import JssProvider from 'react-jss/lib/JssProvider';
import expand from 'jss-expand';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from 'material-ui/styles';

const jss = create({ plugins: [...jssPreset().plugins, expand()] });
const generateClassName = createGenerateClassName();

const el = document.querySelector('#root');

ReactDOM.render(
    (
        <JssProvider jss={jss} generateClassName={generateClassName}>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </JssProvider>
    ),
    el
);
