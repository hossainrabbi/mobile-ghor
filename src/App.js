import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './globalStyle';
import CartDetails from './pages/CartDetails';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

const App = () => (
    <Router>
        <GlobalStyle />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/product/:productId" component={ProductDetails} />
            <Route path="/cart" component={CartDetails} />
        </Switch>
    </Router>
);

export default App;
