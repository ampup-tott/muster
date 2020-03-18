import React, { Component }  from 'react';
import MenuAdmin from '../../components/MenuAdmin/MenuAdmin.js';
import { Redirect } from 'react-router-dom';




class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        var {location} = this.props
        var {match} = this.props
        console.log(location)
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