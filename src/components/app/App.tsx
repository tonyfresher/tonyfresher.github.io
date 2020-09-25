import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {YMInitializer} from 'react-yandex-metrika';

import Home from '../Home';

import './App.css';

export default function App() {
    return (
        <Router>
            <YMInitializer
                accounts={[47324241]}
                options={{webvisor: true}}
                version="2"
            />
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}
