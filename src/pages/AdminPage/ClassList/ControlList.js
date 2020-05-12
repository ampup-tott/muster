import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import {connect} from 'react-redux';
import * as actions from '../../../redux/actions/index'; 

class ControlList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            specialized: [
                {
                    key: 'All Department',
                    optionSpec : [
                        'All Specialized'
                    ]
                },
                {
                    key: 'Information Technology',
                    optionSpec : [
                        'All Specialized',
                        'Website Programming',
                        'Graphic Design',
                        'Network Engineering Technology'
                    ]
                },
                {
                    key: 'Banking And Finance',
                    optionSpec : [
                        'All Specialized',
                        'Accountant',
                        'Business Management',
                    ]
                }
            ],

            buttons: [
                {
                    id: 'Department',
                    color: 'primary',
                    open: false,
                    selectedIndex: 0,
                    option: ['All Department', `Information Technology`, 'Banking And Finance'],
                },
                {
                    id: 'Specialized',
                    color: 'secondary',
                    open: false,
                    selectedIndex: 0,
                    option: ['ALL SPECIALIZED'],
                }
            ],
        }
    }

    handleClick = () => {
        // console.info(`You clicked ${this.options[this.state.selectedIndex]}`);
    };
    handleMenuItemClick = (id, index) => {
        this.setState(prevState => ({
            buttons: prevState.buttons.map(
                btn => btn.id === id ? { ...btn, open: false } : btn ,
            )
        }
        ))
        for (let i in this.state.buttons) {
            if (id === this.state.buttons[i].id) {
                this.state.buttons[i].selectedIndex = index;
                this.props.onAddKeyControlClasses(this.state.buttons[i].option[index])
            }
        }
        for (let i in this.state.buttons[0].option) {
            if(id === 'Department' && this.state.specialized[i].key === this.state.buttons[0].option[index] ){
                this.state.buttons[1].option = this.state.specialized[i].optionSpec
                this.state.buttons[1].selectedIndex = 0;
            }
        }
    };

    handleToggle = (id, event) => {
        this.setState(prevState => ({
            buttons: prevState.buttons.map(
                btn => btn.id === id ? { ...btn, open: true } : { ...btn, open: false }
            )
        }
        ))
        this.setState({
            anchorEl: event.currentTarget
        })
    };

    handleClose = () => {
        for (let i = 0; i < this.state.buttons.length; i++) {
            if (this.state.buttons[i].open == true) {
                this.state.buttons[i].open = false
            }
        }
        this.setState({
            anchorEl : null
        })
    };

    render() {
        return (
            <div className = 'ControlList'>
                <Grid className = 'ml-2 mt-3'>
                    {this.state.buttons.map((button, index) => {
                        const name = button.id
                        return (
                            <ButtonGroup
                                key = {index}
                                id = {button.id}
                                className = 'mr-2'
                                variant = "contained"
                                color = {button.color}
                                ref = {name}
                                aria-label = "split button"
                            >
                                <Button
                                    style = {{ outline: '0' }}
                                    onClick = {this.handleClick}
                                >
                                    {button.option[button.selectedIndex]}
                                </Button>
                                <Button
                                    style = {{ outline: '0' }}
                                    color = {button.color}
                                    size = "small"
                                    aria-controls = {button.open ? `${button.id}` : undefined}
                                    aria-expanded = {button.open ? 'true' : undefined}
                                    aria-label = "select merge strategy"
                                    aria-haspopup = "menu"
                                    onClick={(event) => this.handleToggle(button.id, event)}
                                >
                                    <ArrowDropDownIcon />
                                </Button>
                            </ButtonGroup>
                        )
                    })}
                </Grid>

                {this.state.buttons.map((button, index) => (
                    <Popper key={index} open={button.open} anchorEl={this.state.anchorEl} role={undefined} transition>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style = {{
                                    transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                                }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway = { () => this.handleClose(button.open) }>
                                        <MenuList id = {button.id} >
                                            {button.option.map((option, index) => (
                                                <MenuItem
                                                    key = {index}
                                                    selected = {index === option.selectedIndex}
                                                    onClick = { () => this.handleMenuItemClick(button.id, index) }
                                                >
                                                    <i style = {{ color: '#34495e' }}>{option}</i>
                                                </MenuItem>
                                            ))}
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                ))}
            </div >
        )
    }
}

const mapDispatchToProps = (dispatch , props) => {
    return {
        onAddKeyControlClasses : (keyControl) => {
            dispatch(actions.keyControlClassList(keyControl));
        }
    }
}

export default connect(null, mapDispatchToProps)(ControlList);
