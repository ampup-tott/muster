import React from 'react';

import clsx from 'clsx';

import { makeStyles , useTheme } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CssBaseline from '@material-ui/core/CssBaseline';
import ClassIcon from '@material-ui/icons/Class';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import GroupIcon from '@material-ui/icons/Group';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MailIcon from '@material-ui/icons/Mail';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';






const drawerWidth = 240;
const drawerHeight = 63;

const useStyles = makeStyles(theme => ({
  root:{
    display: 'flex' ,
  
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: drawerHeight ,
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 10,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    height: drawerHeight,
    IconButton
  },
  IconCloseDrawer:{
    marginTop: 7,
    marginLeft:3,
  },
  AvatarLeft: {
    marginTop: 10,
    marginLeft: 10,
  }
  
}));



export default function MenuTopAdmin() {

  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openInforAccount = Boolean(anchorEl);
  const [openMenuleft, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    localStorage.clear();
    window.history.go('/Login')
  }

  const showMenu = (routeMenuAdmin) => {
    var result = null 
    if (routeMenuAdmin.length > 0) {
      result = routeMenuAdmin.map((route, index) => {
          return (
            <ListItem button key={route.primary}>
            <ListItemIcon>{route.icon}</ListItemIcon>
            <ListItemText primary={route.primary} />
            </ListItem>
          );
      });
    }
    return result;
  }
  

  return (
    <div className={classes.root}>
    <CssBaseline />
    <AppBar position="fixed" style={{ backgroundColor: "#34495e" }} 
      className={clsx(classes.appBar, {
      [classes.appBarShift]: openMenuleft,
    })}>
      <Toolbar>
        <IconButton onClick={handleDrawerOpen}
          style={{ outline: "0" }} edge="start"
          color="inherit" aria-label="menu" 
          className={clsx(classes.menuButton, {[classes.hide]: openMenuleft,})}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          PRESENCE
        </Typography>
        <Avatar alt="Admin" src="#" />
        <div>
          <b className='text-light'>Admin:</b>
         
        </div>
        <div>
          <IconButton style={{ outline: "0" }}
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <ArrowDropDownIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={openInforAccount}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={logOut}>Log out</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
    <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: openMenuleft,
                [classes.drawerClose]: !openMenuleft,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: openMenuleft,
                    [classes.drawerClose]: !openMenuleft,
                }),
            }}
        >
            <div className={classes.toolbar}> 
                <IconButton onClick={handleDrawerClose} 
                    style={{outline: '0'}}
                    className={classes.IconCloseDrawer}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </div>
            <Divider />
            <div className={classes.toolbar}> 
                 <Avatar alt='Admin' src="#" className={classes.AvatarLeft} />
                  {}
            </div>
            <Divider />
              <List className={classes.ListItemMenuLeft}>
                {showMenu(routeMenuAdminManager)}
              </List>
            <Divider />
              <List>
                {showMenu(routeMenuAdminProfile)}
              </List>
    </Drawer>

    </div>
  );
}


const routeMenuAdminManager = [
  {
    primary : 'Default' ,
    icon : <AccountBalanceIcon/>
  },
  {
    primary : 'Course' ,
    icon :  <BookmarksIcon/>
  },
  {
    primary: 'Class List',
    icon : <ClassIcon/>
  },
  {
    primary : 'Teacher List',
    icon :  <ListAltRoundedIcon/>
  },
  {
    primary : 'Students',
    icon : <GroupIcon/>
  }
]
const routeMenuAdminProfile = [
  {
    primary : 'all mail' ,
    icon : <InboxIcon /> 
  },
  {
    primary : 'Trash' ,
    icon : <MailIcon /> 
  }
]