import React, { Component } from 'react';
import Default from './Default.js';

import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import GroupIcon from '@material-ui/icons/Group';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import ClassIcon from '@material-ui/icons/Class';
import BookmarksIcon from '@material-ui/icons/Bookmarks';

export const admin = localStorage.getItem('admin')

const routeMenuAdminManager = [
    {
      primary : 'Default' ,
      icon : <AccountBalanceIcon/>,
      path : `/admin/${admin}`,
      exact : false,
      main: ({ match, location }) => <Default match = {match} location = {location}/>
    },
    {
      primary : 'Course' ,
      icon :  <BookmarksIcon/> ,
      path : `/admin/${admin}/course`,
      exact : false,
      main: () => <Default />
    },
    { 
      primary: 'Class List',
      icon : <ClassIcon/> ,
      path : `/admin/${admin}/classLiss`,
      exact : false,
      main: () => <Default />
    },
    {
      primary : 'Teacher List',
      icon :  <ListAltRoundedIcon/>,
      path : `/admin/${admin}/teachersLish`,
      exact : false,
      main: () => <Default />
    },
    {
      primary : 'Students',
      icon : <GroupIcon/>,
      path : `/admin/${admin}/students`,
      exact : false,
      main: () => <Default />
    },
]

export default routeMenuAdminManager;