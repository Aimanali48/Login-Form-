import React from 'react'
import ReactDOM from 'react-dom'

import First from './components/first'
import Second from './components/second'

import { Router, Route } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory()

const App = () => {
    return (
        <Router history={history} >
            <div>
            {/* <Route exact path="/" render={() => <First history={history} />} /> */}
                <Route history={history} exact path="/" component={First} />
                <Route history={history} path="/second" component={Second} />
            </div>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))