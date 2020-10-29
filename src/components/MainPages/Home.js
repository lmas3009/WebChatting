import React from 'react'
import {Button} from 'react-bootstrap'
import {Link,browserHistory,IndexRoute,BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './Home.css'
export default function Home(){
    return(
        <div>
        <div className="header1">
            <div className="title">
                <h1>Web Chatting</h1>
            </div>
            <div className="userinfo">
                <div className="userinfo1">
                    <h1>Admin@gmail.com</h1>
                    <button className='btn btn-warning'>Logout</button>
                </div>
            </div>
        </div>

        <div className="mainscreen">
            <div className="row">
                <div className="col-sm-2 center">
                    <div className="friendlist">
                        <h3>Friends List</h3>
                    </div>
                </div>
                <div className="col-sm-8 center">
                    <div className="chatsession">
                        <h3>Chat session</h3>
                    </div>
                </div>
                <div className="col-sm-2 center">
                    <div className="others">
                        <h3>others</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}