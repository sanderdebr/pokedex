import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Overview from './pages/Overview';
import Details from './pages/Details';

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
            <Router>
                <Switch>
                    <Route path="/pokemon/:pokemonId">
                        <Details />
                    </Route>
                    <Route path="/">
                        <Overview />
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);