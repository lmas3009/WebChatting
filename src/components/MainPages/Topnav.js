import React from 'react'
import {Link,browserHistory,IndexRoute,BrowserRouter as Router,Route,Switch} from 'react-router-dom';

export default function Topnav(){
    return(
        <div>
            <div className="web">
                <ul className="topnav">
                    <div className="logo">    
                        <li><a>Web Chatting</a></li>
                    </div>
                    <div className="login">
                    <Link className="link" to="/login"><li><a className="loginbtn">Login</a></li></Link>
                    </div>
                    <div className="screens">    
                        <li><a>Documentation</a></li>
                        <li><a>Home</a></li>
                    </div>
                </ul>
            </div>
        </div>
    )
}