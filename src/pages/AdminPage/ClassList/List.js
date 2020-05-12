import React, { Component } from 'react'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

import InfoIcon from '@material-ui/icons/Info';
import DeleteIcon from '@material-ui/icons/Delete';

import { connect } from 'react-redux';



class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
           classList : [],

        }
    }
    
    addKeyControl = (element) => {
        let {keyControl} = this.props
        if( keyControl.substring(0,3) === 'All' ){
            return element
        }else { 
            return (
                element.department == keyControl || element.specialized == keyControl
            )
        }    
    }

    render() {
        let {classes} = this.props
        let {keyFilter} = this.props
        let {classList} = this.state    
        let classControl = classes.filter(this.addKeyControl)

        if(!keyFilter){
        classList.splice( 0 , classList.length)
            for( let  i in classControl){
                classList.push(classControl[i])
            }
        }
        
        if( keyFilter){
            classList.splice( 0 , classList.length) 
            let k = Array.from(keyFilter)
            
            for( let i in classes ){
                if( ((Array.from(classes[i].className)).slice(0, k.length)).join('') == keyFilter ){
                    classList.push(classes[i])
                }else if( ((Array.from(classes[i].department)).slice(0, k.length)).join('') == keyFilter ){
                    classList.push(classes[i])
                }else if( ((Array.from(classes[i].specialized)).slice(0, k.length)).join('') == keyFilter ){
                    classList.push(classes[i])
                }
            }
        }
        return (
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <TableContainer component = {Paper}>
                    <Table className='table' aria-label="customized table">
                        <TableHead>
                            <TableRow className = 'titleTable' style = {{ backgroundColor: '#607d8b' }}>
                                <TableCell className='TableCell' >CLASS</TableCell>
                                <TableCell className='TableCell' align="center">NUMBER OF STUDENT</TableCell>
                                <TableCell className='TableCell' align="left">DEPARTMENT</TableCell>
                                <TableCell className='TableCell' align="left">SPECIALIZED</TableCell>
                                <TableCell className='TableCell' align="center">ACTION</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {classList.map((classes , index) => (
                                <TableRow key = {index}>
                                    <TableCell className='TableCell' >{classes.className}</TableCell>
                                    <TableCell className='TableCell' align="center">{classes.NoN}</TableCell>
                                    <TableCell className='TableCell' align="left">{classes.department}</TableCell>
                                    <TableCell className='TableCell' align="left">{classes.specialized}</TableCell>
                                    <TableCell className='TableCell' align="center">                               
                                        <InfoIcon className = 'text-success mr-1' />
                                        <DeleteIcon className = 'text-danger' />               
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => { 
    return {
        classes : state.addClasses,
        keyControl : state.controlClassList,
        keyFilter :state.filter
    }
}
export default connect(mapStateToProps , null)(List);