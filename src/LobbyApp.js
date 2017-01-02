import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../css/App.css';
import BalanceDialog from './components/BalanceDialog';
import logo from '../images/logo.jpg';
import ActionButton from './components/ActionButton.js';

injectTapEventPlugin(); // workaround for react/material warning

class LobbyApp extends Component {

    state = {
        openDialog: false,
        buttonText: 'login77'
    };

    handleOpen = () => {
        this.setState({openDialog: true});
    };

    handleClose = () => {
        this.setState({openDialog: false});
    };

    render() {
        return (
        <MuiThemeProvider>
          <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="App-header">
                <h2>Welcome to the Netomedia</h2>
                <ActionButton handleOpen={this.handleOpen} text={this.state.buttonText}/>
                <BalanceDialog open={this.state.openDialog} handleClose={this.handleClose}></BalanceDialog>
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
