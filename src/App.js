import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
}
    from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import Page from './components/Page'
import Signin from './components/Signin'
import Signup from './components/Signup'

function Main() {
    return (
        <Router>
            <>
                <Switch>
                    <Route exact path="/"  component={Home} />
                    <Route exact path="/signin" component={Signin} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/:detail_id" component={Details} />
                    <Route exact path="/page/:pageid" component={Page} />
                </Switch>
            </>
        </Router>
    )
}
export default Main;