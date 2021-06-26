import React from 'react';
import Incident from './components/Incidents/Incidents'
import Summary from './components/Summary/Summary'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    NavLink
} from "react-router-dom";


function App() {


    return (
        <div className="App">
            <main className="container">
                <Router>
                    <div className='row'>

                        <div className='col global-tabs-container '>
                            <NavLink activeClassName='activec-cls' to="/">Summary</NavLink>
                        </div>
                        <div className='col global-tabs-container '>
                            <NavLink activeClassName='active-cls' to="/incident">Incident</NavLink>
                        </div>
                    </div>
                    <Switch>
                        <Route exact path="/" >
                            <Redirect to="/summary" />
                        </Route>
                        <Route path="/incident">
                            <Incident />
                        </Route>
                        <Route path="/summary">
                            <Summary />
                        </Route>

                    </Switch>
                </Router>

            </main>
        </div>
    );
}

export default App;
