import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Form from './components/Form'
import List from './components/List'
import Navbar from './components/Navbar'

const App = () => {

    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" >
                        <Form />
                    </Route>
                    <Route path="/list" >
                        <List />
                    </Route>
                </Switch>

            </Router>
        </>
    )
}

export default App
