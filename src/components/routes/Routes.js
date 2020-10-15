import React from 'react'
import {Switch,BrowserRouter as Router,Route,browserHistory} from 'react-router-dom'
import Home from '../MainPages/Home'

export default function Routers(){
    return(
        <Router browserHistory>
            <Switch>
                <Route exact path='/' component={Home}/>
            </Switch>
        </Router>
    )
}