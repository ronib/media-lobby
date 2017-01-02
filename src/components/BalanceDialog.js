import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import FormField from './FormField';
import DropField from './DropField';
import {REQUIRED, LENGTH, NAME, AMOUNT} from '../utils/Consts'

/**
 * Dialog to set balance of user
 */

export default class BalanceDialog extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onAmountChange = this.onAmountChange.bind(this);
        this.onCurrencyChange = this.onCurrencyChange.bind(this);
        this.isSubmitButtonDisabled = this.isSubmitButtonDisabled.bind(this);

        this.state = {name: '', amount: '', currency: ''};
    }

    isSubmitButtonDisabled() {
        if (this.state.name.length > 0 &&
            this.state.amount.length > 0 &&
            this.state.currency.length > 0){
            return false;
        }else{
            return true;
        }

        // todo: check if there are validation errors
    }

    handleSubmit(event) {

        this.props.submitBalance({name: this.state.name, amount: this.state.amount, currency: this.state.currency});
        this.props.handleCloseDialog();
        event.preventDefault();

    };

    onNameChange(event) {
        let value = event.target.value;
        this.setState({name: value});
    };

    onAmountChange(event) {
        let value = event.target.value;
        this.setState({amount: value});
    };

    onCurrencyChange(event) {
        let value = event.target.textContent;
        this.setState({ currency: value});
    };

    render() {

        let isSubmitDisabled = this.isSubmitButtonDisabled();
        const actions = [
          <FlatButton
            label="Submit"
            primary={true}
            disabled={isSubmitDisabled}
            keyboardFocused={true}
            onTouchTap={this.handleSubmit} />
        ];
        let titleElem =
            <div>
                <span>
                    Set your Balance
                </span>
                <IconButton style={{float: 'right'}}>
                    <NavigationClose onClick={this.props.handleCloseDialog}/>
                </IconButton>
            </div>;

        return (
            <Dialog title={titleElem}
                    actions={actions}
                    modal={true}
                    open={this.props.isDialogOpen}
                    onRequestClose={this.props.handleCloseDialog}>

                  <form onSubmit={this.handleSubmit} >
                      <FormField hintText="Name"
                                 floatingLabelText="Name"
                                 name="Name"
                                 value={this.state.name}
                                 onChange={this.onNameChange}
                                 validators={[REQUIRED, NAME, LENGTH]}/>
                      <br/>
                      <FormField hintText="Amount"
                                  floatingLabelText="Amount"
                                  name="Amount"
                                  onChange={this.onAmountChange}
                                  validators={[REQUIRED, AMOUNT, LENGTH]}/>
                      <br/>
                      <DropField onChange={this.onCurrencyChange}/>
                  </form>
            </Dialog>
        );
    }
}