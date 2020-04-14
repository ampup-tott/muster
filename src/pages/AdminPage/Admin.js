import React, { Component }  from 'react';
import $ from 'jquery'
import MenuAdmin from '../../components/MenuAdmin/MenuAdmin.js';

import routeMenuAdminManager from './routeMenuAdminManager';
import * as routeAdmin from './routeMenuAdminManager';

import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import { Switch } from 'react-router-dom'

import { connect } from 'react-redux';
import * as actions from './../../redux/actions/index' 


class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : {},
        }
    }

    showContentAdmin = (routeMenuAdminManager) => {
        var result = null;
        if (routeMenuAdminManager.length > 0) {
            result = routeMenuAdminManager.map((route, index) => {
                return (
                    <Route 
                        key = { index } 
                        path = { route.path } 
                        exact = { route.exact } 
                        component = { route.main }  
                    />
                );
            });
        }
        return result;
      }

    async componentWillMount() {
        let token = localStorage.getItem('token');
        const options = {
            method: 'GET',
            url: 'http://localhost:8080/user',
            headers: {
                authorization: `Bearer ${token}`
            }
        }

        axios(options)
            .then(res => {
                let dataAdmin = res.data.data
                this.setState({
                    data : dataAdmin,
                    name : dataAdmin.name
                })
                localStorage.setItem('admin' , dataAdmin.name)
            })
            .catch(error => {
                console.log(error.message);
            })
        
    }
    
    render() {
        if(routeAdmin.admin === null && localStorage.token !== 'undefined' ){
            window.location.reload()
        }
        if(localStorage.token === null || localStorage.token === 'undefined' || !localStorage.token ){
            return <Redirect to = '/login'/>
        }
        
        return(
            <Router>
            <div className = "Admin"> 
                <div>   
                    <MenuAdmin admin = {this.state.name} />  
                    <div style = {{ marginLeft: '72px' , marginTop: '72px' , marginRight : '8px' }} >
                        <div>
                            <Switch>
                                { this.showContentAdmin(routeMenuAdminManager) }
                            </Switch>
                        </div> 
                    </div>
                </div> 
            </div>
           </Router>
        );
    }
}

const mapStateToProps = (state) => {
    return {
       dataAdmin : state.dataAdmin
    }
};

const mapDispatchToProps = (dispatch , props) => {
    return {
        onAddAdmin : (admin) => {
            dispatch(actions.addAdmin(admin));
        }
    }
}

export default connect(mapStateToProps ,mapDispatchToProps)(Admin);