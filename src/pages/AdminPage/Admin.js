import React, { Component }  from 'react';
import MenuAdmin from '../../components/MenuAdmin/MenuAdmin.js';
import { Redirect } from 'react-router-dom';




class Admin extends Component { 
    render() {
        var {location} = this.props
        var {match} = this.props
        console.log( location ,match)
        if(localStorage.length === 0){
            return <Redirect to='/Login'/>
        }
        return(
            <div className="Admin"> 
                <div>
                    <MenuAdmin />
                </div> 
            </div>   
        );
    }
}

export default Admin;