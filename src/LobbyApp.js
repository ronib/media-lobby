import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../css/App.css';
import logo from '../images/logo.jpg';
import BalanceDialog from './components/BalanceDialog';
import ActionButton from './components/ActionButton';
import {WELCOME, LOGIN, BALANCE, EURO} from './utils/Consts';

injectTapEventPlugin(); // workaround to disable react/material warning message

export default class LobbyApp extends Component {

    state = {
        isDialogOpen: false,
        buttonText: LOGIN,
        data: {},
        lobbyText: WELCOME
    };

    handleOpenDialog = () => {
        this.setState({isDialogOpen: true});
    };

    handleCloseDialog = () => {
        this.setState({isDialogOpen: false});
    };

    submitBalance = (data) => {
        let currencySign = (data.currency === EURO ? '€' : '$');
        let lobbyText = `welcome back ${data.name}, your balance is: ${data.amount}${currencySign}`;
        this.setState({data, buttonText: BALANCE, lobbyText});
    };

    render() {
        return (
        <MuiThemeProvider>
          <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="App-header">
                <h2>{this.state.lobbyText}</h2>
                <ActionButton handleOpenDialog={this.handleOpenDialog} buttonText={this.state.buttonText}/>
                <BalanceDialog
                    isDialogOpen={this.state.isDialogOpen}
                    handleCloseDialog={this.handleCloseDialog}
                    submitBalance={this.submitBalance}
                    isDisplayAllFields={this.state.lobbyText===WELCOME}>
                </BalanceDialog>
            </div>
          </div>
        </MuiThemeProvider>
        );
    }
}
