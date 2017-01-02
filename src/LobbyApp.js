import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../css/App.css';
import logo from '../images/logo.jpg';
import BalanceDialog from './components/BalanceDialog';
import ActionButton from './components/ActionButton.js';

injectTapEventPlugin(); // workaround for react/material warning

export default class LobbyApp extends Component {

    state = {
        isDialogOpen: false,
        buttonText: 'login',
        data: {}
    };

    handleOpenDialog = () => {
        this.setState({isDialogOpen: true});
    };

    handleCloseDialog = () => {
        this.setState({isDialogOpen: false});
    };

    submitBalance = (data) => {
        this.setState({data, buttonText: 'change balance'});
    };

    render() {
        return (
        <MuiThemeProvider>
          <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="App-header">
                <h2>Welcome to the Netomedia</h2>
                <ActionButton handleOpenDialog={this.handleOpenDialog} buttonText={this.state.buttonText}/>
                <BalanceDialog isDialogOpen={this.state.isDialogOpen} handleCloseDialog={this.handleCloseDialog} submitBalance={this.submitBalance}></BalanceDialog>
            </div>

            <p className="App-intro">
            </p>
          </div>
        </MuiThemeProvider>
        );
    }
}
