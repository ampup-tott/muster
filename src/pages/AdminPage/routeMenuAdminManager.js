import React from 'react';
import Default from './Default/Default';
import ClassList from './ClassList/ClassList'
import ErrorPage from './ErrorPage/ErrorPage'

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
      path : '/admin/:name',
      link : '',
      exact : true,
      main: ({ match, location }) => <Default match = {match} location = {location}/>
    },
    {
      primary : 'Course' ,
      icon :  <BookmarksIcon/> ,
      path : `/admin/:name/course`,
      link : `/course`,
      exact : true,
      main: () => <Default />
    },
    { 
      primary: 'Class List',
      icon : <ClassIcon/> ,
      path : `/admin/:name/classlist`,
      link : '/classlist',
      exact : true,
      main: ({ match, location }) => <ClassList match = {match} location = {location}/>
    },
    {
      primary : 'Teacher List',
      icon :  <ListAltRoundedIcon/>,
      path : `/admin/:name/teacherslist`,
      link : '/teacherslist',
      exact : true,
      main: () => <Default />
    },
    {
      primary : 'Students',
      icon : <GroupIcon/>,
      path : `/admin/:name/students`,
      link : '/students',
      exact : true,
      main: () => <Default />
    },
    {
      path : `/admin/:name/:error`,
      exact : false,
      main: ({match}) => <ErrorPage match ={match} />
    },
]

export default routeMenuAdminManager;