import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import store from './redux/store';
import App from './App';

import './index.css';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ee1515'
        }
    }
});

render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);