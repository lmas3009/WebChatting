import React from 'react'
import './Home.css'
import Topnav from './Topnav'
import Notress from '../../images/not-responding.png'
import {Button} from 'react-bootstrap'

export default function Home(){
    return(
        <div>
            <div classname="web">
                <Topnav/>
                <div className="main container">
                    <div classname="row">
                    <div className="col-sm">
                        <h1>Web Chatting Application</h1>
                        <div className='divider'/>
                    </div>
                    <div className="col-sm">
                        <h1>Web Chatting Application</h1>
                        <div className='divider'/>
                    </div>
                    </div>
                </div>
            </div>
            <div className="mobile">
                <img src={Notress} className="img404" />
                <h2>This will be not working in mobile view</h2>
            </div>
        </div>
    )
}