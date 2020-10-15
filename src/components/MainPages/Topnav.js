import React from 'react'

export default function Topnav(){
    return(
        <div>
            <div className="web">
                <ul className="topnav">
                    <div className="logo">    
                        <li><a>Web Chatting</a></li>
                    </div>
                    <div className="login">
                        <li><a className="loginbtn">Login</a></li>
                    </div>
                    <div className="screens">    
                        <li><a>Documentation</a></li>
                        <li><a>Get Started</a></li>
                        <li><a>Home</a></li>
                    </div>
                </ul>
            </div>
        </div>
    )
}