import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import BalanceDialog from './components/BalanceDialog';
import RaisedButton from 'material-ui/RaisedButton';

injectTapEventPlugin();

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
