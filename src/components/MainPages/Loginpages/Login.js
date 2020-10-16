import React from 'react'
import './Main.css'
import {Button} from 'react-bootstrap'


export default function Login(){
    return(
        <div>
        <div className="container1">
        <div id="signinform" className="mainform signinform">
                <div className="row">
                    <div className="col-6 signin1">
                        <center><a id="signin" className="signin">SignIn</a></center>
                    </div>
                    <div className="col-6 signup1">
                        <center><a a id="signup" className="signup">SignUp</a></center>
                    </div>
                </div>
                    <div className="form sigin">
                        <div className="hidden1"></div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email Id" name="email" id="email" required></input>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password" name="password" required></input>
                             </div>
                            <div className="form-group btn">
                                <a href="../MainScreens/Home.html"><button className="loginbtn">Login</button></a>
                            </div>
                            <div className="form-group veri">
                                <h6 className="" id="forgotpassword">Forgot Password?</h6>
                            </div>
                    </div>    
        </div>
        <div id="signupform" className="mainform signupform">
            <div className="row">
                <div className="col-6 signin2">
                    <center><a id="signin" onclick="SignIn()" className="signin_1">SignIn</a></center>
                </div>
                <div className="col-6 signup2">
                    <center><a a id="signup" onclick="SignUp()" className="signup_1">SignUp</a></center>
                </div>
            </div>
            <div className="form">
                <form action="">
                    <div className="hidden1"></div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Username" name="username" id="username" required></input>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email Id" name="email" id="email" required></input>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" name="password" required></input>
                     </div>
                    <div className="form-group btn">
                        <button className="registerbtn">Register</button>
                    </div>
                </form>
            </div>  
    </div>
    </div>
        </div>
    );
}