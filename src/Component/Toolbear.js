import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import App from '../App.js'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {AccountCircle,Dashboard,AllOut} from '@material-ui/icons';
import Home from '@material-ui/icons/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import createHistory from 'history/createBrowserHistory'
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu'
import Dashome from './Dashboard'
import Containers from './Containers'
import Images from './Images';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    //marginLeft: -12,
    //marginRight: 20,
    
  },
};

// Get the current location.
class Toolbear extends Component {
  
 
  render() {
       
    return (
      <div className="App">
        <AppBar position="static" color="secondary">
        <Toolbar>
        <Typography  color="inherit" style={{ flex: 1 }}>
    </Typography>
        <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
       
        </Toolbar>
      </AppBar>
      <Router>
    <Route render={({ location, history }) => (
      <React.Fragment>
            <SideNav
                onSelect={(selected) => {
                    const to = '/' + selected;
                    if (location.pathname !== to) {
                        history.push(to);
                    }
                }}
            >
                <SideNav.Toggle />
    <SideNav.Nav defaultSelected="dasboard">
        <NavItem eventKey="dasboard">
            <NavIcon>
            <IconButton color="inherit">
            <Dashboard />
          </IconButton>
            </NavIcon>
            <NavText>
                Dashboard
            </NavText>
        </NavItem>
        <NavItem eventKey="charts">
            <NavIcon>
            <IconButton color="inherit">
            
            <AllOut />
          </IconButton>
            </NavIcon>
            <NavText>
                Docker
            </NavText>
            <NavItem eventKey="images">
                <NavText>
                    Images
                </NavText>
            </NavItem>
            <NavItem eventKey="containers">
                <NavText>
                    Containers
                </NavText>
            </NavItem>
        </NavItem>
    </SideNav.Nav>
    </SideNav>
    <main>
                <Route path="/images" component={props => <Images />} />
                <Route path="/containers" component={props => <Containers />} />
                <Route path="/dasboard" component={props => <Dashome />} />

            </main>
    </React.Fragment>
     )}
     />
 </Router>
</div>

    );
  }
}

export default Toolbear;
