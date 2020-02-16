import React from 'react';
import './MenuTop.css';
import $ from 'jquery' ;
import { Switch } from 'react-router-dom';
import Login from '../pages/LoginPage/Login';
import {BrowserRouter as Router ,Route , Link} from 'react-router-dom';
import Home from '../pages/HomePage/Home';
import Logo from '../assets/logotitle.png';




function MenuTop(){
    return (
        <div className="MenuTop">
            
            <nav>
                
                <label className="logo"><img src={Logo}/>PRESENCE</label>
                <ul>
                    <li ><Link to="/" className="active link">Home</Link></li>

                    <li><Link className="link" to="#">About</Link></li>
                   

                    <li><Link className="link" to="#">Services</Link></li>
                    <li><Link className="link" to="#">Contact</Link></li>
                    <li><Link className="link" to="/Login">Login</Link></li>
                </ul>

                <label id="icon">
                    <i className="fas fa-bars"></i>
                </label>
            </nav>
            <Switch>
                    <Route exect path="/Login">
                        <Login/>
                    </Route>
                    <Route exect path="/">
                        <Home/>
                    </Route>
                
            </Switch>
        </div>
        
        
    );
}

    $(document).ready(function(){
        $('#icon').click(function(){
           $('ul').toggleClass('show');
        });           
   });



export default MenuTop;