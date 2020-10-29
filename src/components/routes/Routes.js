import React from 'react'
import {Switch,BrowserRouter as Router,Route,browserHistory} from 'react-router-dom'
import Landing from '../MainPages/Landing'
import Login from '../Loginpages/Login'
import Home from '../MainPages/Home'

export default function Routers(){
    return(
        <Router browserHistory>
            <Switch>
                <Route exact path='/' component={Landing}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/home' component={Home}/>
            </Switch>
        </Router>
    )
}