import React, { Component } from 'react';
import ControlList from './ControlList'
import List from './List'
import AddList from './AddList'
import ModalAddClass from './ModalAddClass'
import Filter from './Filter'

import Grid from '@material-ui/core/Grid';

class ClassList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className = 'ClassList'>
                <Grid container spacing = {1} style = {{ backgroundColor: 'white', boxShadow: '0.1em 0.1em 0.2em ' }} >
                    <Grid item xs = {12}>
                        <h5 style={{ color: '#34495e' }}> Class List </h5>
                        <Filter />
                    </Grid>
                    <Grid item lg={8} md={7} sm={12} xs={12}>
                        <ControlList />
                    </Grid>
                    <Grid item lg={4} md={5} sm={12} xs={12} style = {{Zindex : '0'}}>
                        <AddList />
                    </Grid>
                </Grid>
                <Grid className='mt-2' container spacing={1} style = {{ backgroundColor: 'white', boxShadow: '0.1em 0.1em 0.2em' }} >
                    <List />
                </Grid>
                <ModalAddClass/>
            </div>
        )
    }
}

export default ClassList;