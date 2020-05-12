import React, { Component }  from 'react';

import './Admin.css'
import MenuAdmin from '../../components/MenuAdmin/MenuAdmin.js';
import routeMenuAdminManager from './routeMenuAdminManager';

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

    async UNSAFE_componentWillMount() {
        let token = localStorage.getItem('token');
        const options = {
            method: 'GET',
            url: 'http://ec2-54-161-212-167.compute-1.amazonaws.com:8080/profile',
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
    
    render() {
        let {match} = this.props
        if(localStorage.token === null || localStorage.token === 'undefined' || !localStorage.token ){
            return <Redirect to = '/login'/>
        }
        if(match.params.name !== localStorage.admin ){
            return <Redirect to ={ `/admin/${localStorage.admin}/error` } />
        }
        return(  
            <Router>
                <div className = "Admin"> 
                    <MenuAdmin url = {this.state.name}/>
                    <div className ='adminPage' >
                        <Switch>
                            { this.showContentAdmin(routeMenuAdminManager) }
                        </Switch>
                    </div>   
                </div>
            </Router>
        );
    }
}

const mapStateToProps = (state) => {
    return {
       
    }
};

const mapDispatchToProps = (dispatch , props) => {
    return {
        
    }
}

export default connect(mapStateToProps ,mapDispatchToProps)(Admin);