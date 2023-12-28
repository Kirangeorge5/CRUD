import {AppBar, Toolbar, styled} from '@mui/material';

import { NavLink } from 'react-router-dom';


//to the component in which we have to insert css
const Header= styled(AppBar)`              
background: #111111;
position: static;
`;

const Tabs =styled(NavLink)`
font-size: 20px;
margin-right: 20px;
color: inherit;
text-decoration: none;
`;


const navbar=()=>{
    return(
        <Header>
            <Toolbar>
                <Tabs to='/'>Code for Interview</Tabs>
                <Tabs to='/all'>All Users</Tabs>
                <Tabs to='/add'>Add Users</Tabs>
            </Toolbar>
        </Header>
    
    )
}

export default navbar;