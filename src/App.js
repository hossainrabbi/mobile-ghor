import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './globalStyle';
import Home from './pages/Home';

const App = () => (
    <Router>
        <GlobalStyle />
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    </Router>
);

export default App;
