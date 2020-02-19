import React, { Component }  from 'react';
import './Login.css';
import ReactDOM from 'react-dom';
class Login extends Component {
    render() {
    return (
        <div className="Login">
            <div className="form-box">
                <div className="button-box">
                    <div id="btn"></div>
                    <button type="button" className="btn" onClick={ClickUser}>User</button>
                    <button type="button" className="btn" onClick={ClickAdmin}>Admin</button>
                </div>
                <form id="user" className="input-group">
                    <input type="text" className="input-field" placeholder="Username" required />
                    <input type="password" className="input-field" placeholder="Password" required />
                    <input type="checkbox" className="check-box"/><span>Remember Password</span>
                    
                    <button type="submit" className="submit-btn">Log In</button>
                </form>
                <form id="admin" className="input-group">
                    <input type="text" className="input-field" placeholder="ID Admin" required />
                    <input type="password" className="input-field" placeholder="Password" required />
                    <input type="checkbox" className="check-box"/><span>Remember Password</span>
                    
                    <button type="submit" className="submit-btn">Log In</button>
                </form>


                <div className="social-icons">
                    <i className="fab fa-facebook-square "  ></i>
                    <i className="fab fa-twitter-square" ></i>
                    <i className="fab fa-google-plus-square" ></i>
                </div>
                
            </div>
        </div>
    );
    
    }

}


    

function ClickAdmin(){
    var x = document.getElementById("user")
    var y = document.getElementById("admin")
    var z = document.getElementById("btn")
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left ="110px";
    
}
function ClickUser(){
    var x = document.getElementById("user")
    var y = document.getElementById("admin")
    var z = document.getElementById("btn")
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left ="0px";
    
}



export default Login;