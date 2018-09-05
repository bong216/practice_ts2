import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { IndexContainer, NotFoundContainer } from './containers';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact={true} path="/" component={IndexContainer} />
                        <Route component={NotFoundContainer} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
