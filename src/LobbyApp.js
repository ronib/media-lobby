import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../css/App.css';
import BalanceDialog from './components/BalanceDialog';
import RaisedButton from 'material-ui/RaisedButton';
import logo from '../images/logo.jpg';

injectTapEventPlugin(); // workaround for react/material warning

class LobbyApp extends Component {

    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        return (
        <MuiThemeProvider>
          <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="App-header">
                <h2>Welcome to the Netomedia</h2>
                <RaisedButton label="Login" onTouchTap={this.handleOpen} />
                <BalanceDialog open={this.state.open} handleClose={this.handleClose}></BalanceDialog>
            </div>

            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        </MuiThemeProvider>
        );
    }
}

export default LobbyApp;
