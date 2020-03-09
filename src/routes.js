import React from 'react';

import Login from './pages/LoginPage/Login';
import Home from './pages/HomePage/Home';
import Admin from './pages/AdminPage/Admin';

const routes = [
    {   
        name: 'HOME',
        path: '/',
        exact : true,
        main : () => <Home />
    },
    {   
        name: 'ABOUT',
        path: '/about',
        exact : true,
        main : () => <Home />
    },
    {
        name: 'SERVICES',
        path: '/services',
        exact : true,
        main : () => <Home />
    },
    {
        name: 'CONTACT',
        path: '/contact',
        exact : true,
        main : () => <Home />
    },
    {   
        name: 'LOGIN',
        path: '/Login',
        exact: false ,
        main: ({location , match}) => <Login location={location} match={match} />
    },
    {
        path: '/Admin/:name',
        exact: false ,
        main: ({ match, location }) => <Admin match={match} location={location} />
    }
]
export default routes 