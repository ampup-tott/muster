import React, { Component } from 'react'

import './Default.css'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';



class Default extends Component {
    constructor(props) {
        super(props);
        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        this.state = {
            date: date,
            data: {}
        }

        this.data = [
            {
                id: 123,
                class: 'CD18LW(CLC1)',
                NoS: 20,
                subjects: 'IOT',
                teacher: 'Gia Bao',
                attendance: false,
                date: '2020-4-24'
            },
            {
                id: 124,
                class: 'CD18LW(CLC2)',
                NoS: 25,
                subjects: 'CCNA',
                teacher: 'TAN DUNG',
                attendance: false,
                date: '2020-4-24'
            },
        ]
    }

    showTableDefault = (data) => {
        var result = null
        if (data.length > 0 ) {
            result = data.map((data, index) => {
                if(data.date === this.state.date){
                return (
                    <TableRow key={data.id}>
                        <TableCell component="th" scope="row">
                            {data.class}
                        </TableCell>
                        <TableCell align="right">{data.NoS}</TableCell>
                        <TableCell align="right">{data.subjects}</TableCell>
                        <TableCell align="right">{data.teacher}</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                );
                }
            });
        }
        return result;
    }


    render() {
        return (
            <div className='DefaultAdmin'>
                <Grid container spacing={1} style={{ backgroundColor: 'white', boxShadow: '0.1em 0.1em 0.2em 0.1em' }} >
                    <Grid item xs={12}>
                        <h5 style={{ color: '#34495e' }}> Default </h5>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={12} >
                        <Card className='card DM bg-danger text-light' >
                            <CardContent>
                                <Typography className='text-center' gutterBottom variant="h5" >
                                    Department
                                </Typography>
                            </CardContent>
                            <CardContent>
                                <Typography className='text-center' gutterBottom variant="h1" >
                                    0
                                </Typography>
                            </CardContent>
                            <CardActions >
                                <Button className='bg-light text-danger' style={{ outline: 'none' }} size="small" >
                                    <b>See Details</b>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={12}>
                        <Card className='card SL bg-primary text-light'>
                            <CardContent>
                                <Typography className='text-center' gutterBottom variant="h5" >
                                    Specialized
                                </Typography>
                            </CardContent>
                            <CardContent>
                                <Typography className='text-center' gutterBottom variant="h1" >
                                    0
                                </Typography>
                            </CardContent>
                            <CardActions >
                                <Button className='bg-light text-primary' style={{ outline: 'none' }} size="small" >
                                    <b> See Details </b>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={12}>
                        <Card className='card CL bg-success text-light'>
                            <CardContent>
                                <Typography className='text-center' gutterBottom variant="h5" >
                                    Class
                                    </Typography>
                            </CardContent>
                            <CardContent>
                                <Typography className='text-center' gutterBottom variant="h1" >
                                    0
                                </Typography>
                            </CardContent>
                            <CardActions >
                                <Button className='bg-light text-success' style={{ outline: 'none' }} size="small" >
                                    <b> See Details </b>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={12}>
                        <Card className='card TC bg-warning text-light'>
                            <CardContent>
                                <Typography className='text-center' gutterBottom variant="h5" >
                                    Teachers
                                    </Typography>
                            </CardContent>
                            <CardContent>
                                <Typography className='text-center' gutterBottom variant="h1" >
                                    0
                                    </Typography>
                            </CardContent>
                            <CardActions >
                                <Button className='bg-light text-warning' style={{ outline: 'none' }} size="small" >
                                    <b> See Details </b>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container spacing={1} style={{ backgroundColor: 'white', boxShadow: '0.1em 0.1em 0.2em 0.1em', marginTop: '10px' }} >
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <h4 style={{ color: '#34495e' }} className='text-center mt-2'>
                            <b>ATTENDANCE CLASSES TODAY ({this.state.date})</b>
                        </h4>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <TableContainer component={Paper}>
                            <Table className='table' aria-label="customized table">
                                <TableHead>
                                    <TableRow className='titleTable' style={{ backgroundColor: '#34495e' }}>
                                        <TableCell className='TableCell' >CLASS</TableCell>
                                        <TableCell className='TableCell' align="right">NUMBER OF STUDENT</TableCell>
                                        <TableCell className='TableCell' align="right">SUBJECTS</TableCell>
                                        <TableCell className='TableCell' align="right">TEACHER</TableCell>
                                        <TableCell className='TableCell' align="right">ATTENDED</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody >
                                    {/* {rows.map((row) => ( */}
                                    {this.showTableDefault(this.data)}
                                    {/* ))} */}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Default 