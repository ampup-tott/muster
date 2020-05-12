import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index' 

class AddList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Grid className = 'ml-2 mt-3'>
                <Button
                    style = {{backgroundColor : '#64dd17' , outline : '0' }}
                    variant = "contained"
                    color = "secondary"
                    className = 'addStudent mr-3'
                    startIcon = {<PersonAddIcon />}
                >
                    Add Students
                </Button>
                <Button
                    style = {{backgroundColor : '#01579b' , outline : '0' }}
                    variant = "contained"
                    color = "secondary"
                    className = 'addClass'
                    startIcon = {<PlaylistAddIcon />}
                    onClick = {this.props.onShowModalAddClasses}
                >
                    ADD CLASSES
                </Button>
            </Grid>
        )
    }
}

const mapDispatchToProps = (dispatch , props) => {
    return {
        onShowModalAddClasses : () => {
            dispatch(actions.showModalAddClasses());
        }
    }
}

export default connect( null, mapDispatchToProps )(AddList);