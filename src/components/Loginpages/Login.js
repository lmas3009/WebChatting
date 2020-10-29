import React,{useEffect} from 'react'
import './Main.css'
import {Button} from 'react-bootstrap'
import {Link,browserHistory,IndexRoute,BrowserRouter as Router,Route,Switch} from 'react-router-dom';


export default class Login extends React.Component{

    constructor(props){
        super(props)
        this.state={
            signin:false,
            signup:false
        }
    }
    hideComponent(name) {
        switch (name) {
          case "Show":
            this.setState({ signin: !this.state.signin,signup: !this.state.signup });
            break;
          case "Hide":
            this.setState({ signup: !this.state.signup,signin: !this.state.signin });
            break;
        }
    }
      

    render(){
    return(
        <div>
        <div className="container1">
        {!this.state.signin && <div id="signinform" className="mainform signinform">
        <div className="row">
            <div className="col-6 signin1" >
                <center><li id="signin"  className="signin">SignIn</li></center>
            </div>
            <div className="col-6 signup1">
                <center><li id="signup" onClick={() => this.hideComponent("Hide")} className="signup">SignUp</li></center>
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
                    <Link className="link" to="/home"><a><button className="loginbtn">Login</button></a></Link>
                    </div>
                    <div className="form-group veri">
                        <h6 className="" id="forgotpassword">Forgot Password?</h6>
                    </div>
            </div>    
        </div>}
        {this.state.signup && <div id="signupform" className="mainform signupform" >
                    <div className="row">
                        <div className="col-6 signin2">
                            <center><li id="signin" onClick={() => this.hideComponent("Show")} className="signin_1">SignIn</li></center>
                        </div>
                        <div className="col-6 signup2">
                            <center><li id="signup" onclick="SignUp()" className="signup_1">SignUp</li></center>
                        </div>
                    </div>
                    <div className="form">
                        <form action="">
                            <div className="hidden1"></div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Username" name="username" id="username" required></input>                    </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email Id" name="email" id="email" required></input>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password" name="password" required></input>
                            </div>
                            <div className="form-group btn">
                            <Link className="link" to="/home"><button className="registerbtn">Register</button></Link>
                            </div>
                        </form>
                    </div>  
            </div>}
            </div>
        </div>
    );
}
}