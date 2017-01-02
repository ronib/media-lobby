import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import FormField from './FormField';
import DropField from './DropField';

/**
 * Dialog to set balance of user
 */

export default class BalanceDialog extends React.Component {


    handleSubmit(event) {
        this.props.someActionForm();
        event.preventDefault();
        var author = this.state.author.trim();
        var text = this.state.text.trim();
        if (!text || !author) {
          return;
        }
        // TODO: send request to the server
        this.setState({author: '', text: ''});
      };

    render() {
        const actions = [
          <FlatButton
            label="Submit"
            primary={true}
            keyboardFocused={true}
            onTouchTap={this.props.handleClose}
          />
        ];

        return (
          <div>

            <Dialog
              title={<div> <span >Set your Balance</span> <IconButton style={{float: 'right'}}><NavigationClose  onClick={this.props.handleClose}/></IconButton></div>}
              actions={actions}
              modal={true}
              open={this.props.open}
              onRequestClose={this.props.handleClose}
            >

              <form onSubmit={this.handleSubmit}>
                  <FormField hintText="Name"
                             floatingLabelText="Name"
                             name="Name"
                             validators={['required', 'name', 'length']}/>
                  <br/>
                  <FormField hintText="Amount"
                              floatingLabelText="Amount"
                              name="Amount"
                              validators={['required', 'amount', 'length']}/>
                  <br/>
                  <DropField/>

                </form>
            </Dialog>
          </div>
        );
    }
}