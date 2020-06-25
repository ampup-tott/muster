import React, { Component } from 'react';

import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {connect} from 'react-redux';
import * as actions from '../../../redux/actions/index'; 

class ControlList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : 'All Department'
        }
    }

    handleChange = (event, newValue) => {
        this.setState({
            value: newValue
        })
    };

    handleSelectDropDown = (id) => {
        this.setState({
            title : id
        })
        this.props.onKeyFilter(id)
    }

    reTitle = () => {
        this.setState = ({
            title : 'All Department'
        })
    }

    render() {
        return (
            <div className = 'ControlList'>
                <Nav className="row" justify defaultActiveKey="ALL" style={{outline : '0'}}>
                    <Nav.Item className="col-xl-12 col-sm-12" onClick={() => this.handleSelectDropDown('All Department')}>
                        <Nav.Link eventKey="ALL">
                            <b>All Classes</b>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="col-xl-12 col-sm-12">
                        <b>
                        <NavDropdown title={this.state.title} id="nav-dropdown">
                        <NavDropdown.Item 
                                eventKey="ALL" 
                                onClick={() => this.handleSelectDropDown('All Department')}
                            >
                                All Department
                            </NavDropdown.Item>
                            <NavDropdown.Item 
                                eventKey="IT" 
                                onClick={() => this.handleSelectDropDown('Information Technology')}
                            >
                                Information Technology
                            </NavDropdown.Item>
                            <NavDropdown.Item 
                                eventKey="BAF"
                                onClick={() => this.handleSelectDropDown('Banking and Finance')}
                            >
                                Banking and Finance
                            </NavDropdown.Item>
                        </NavDropdown>
                        </b>
                    </Nav.Item>
                    <Nav.Item className="col-xl-12 col-sm-12 ">
                        <b>
                        <NavDropdown title='Classes' id="nav-dropdown">
                            <NavDropdown.Item >

                            </NavDropdown.Item>
                        </NavDropdown>
                        </b>
                    </Nav.Item>
                </Nav>
            </div >
        )
    }
}

const mapDispatchToProps = (dispatch , props) => {
    return {
        onAddKeyControlClasses : (keyControl) => {
            dispatch(actions.keyControlClassList(keyControl));
        },
        onKeyFilter : (keyFilter) => {
            dispatch(actions.keyFilter(keyFilter));
        }
    }
}

export default connect(null, mapDispatchToProps)(ControlList);
