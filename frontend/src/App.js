import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthComponent from './components/AuthComponent';
import HealthDataComponent from './components/HealthDataComponent';
import WebSocketComponent from './components/WebSocketComponent';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/auth" component={AuthComponent} />
                <Route path="/health-data" component={HealthDataComponent} />
                <Route path="/websocket" component={WebSocketComponent} />
            </Switch>
        </Router>
    );
}

export default App;
