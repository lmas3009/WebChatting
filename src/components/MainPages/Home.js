import React from 'react'
import './Home.css'
import Topnav from './Topnav'
import Notress from '../../images/not-responding.png'
import {Button} from 'react-bootstrap'

export default function Home(){
    return(
        <div>
            <div className="web">
                <Topnav/>
            <div className="main">
                <div className="row">
                    <div className="col-sm-6 maininfo">
                        <h1>Web Chatting Application</h1>
                        <div className="divider"></div>
                        <div className="info col-sm-10">    
                            <p>This is the web application. Where your can
                                chat with other, make a phone or video
                                conference calls for communications.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 mainvideo">
                        <img src="https://freedomboatclub.fr/wp-content/plugins/ninja-forms/assets/img/no-image-available-icon-6.jpg" className="video"></img>
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