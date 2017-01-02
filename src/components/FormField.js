import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import {REQUIRED, LENGTH, NAME, AMOUNT} from '../utils/Consts'
import {REQUIRED_MSG, LENGTH_MSG, NAME_MSG, AMOUNT_MSG} from '../utils/Consts'


export default class FormField extends Component {
  constructor(props) {
        super(props);
        this.onFieldChange = this.onFieldChange.bind(this);

        this.state = { errorText: '', value: props.value };

        this.nameRegex = '^[a-zA-Z ]+$';
        this.amountRegex = '^[0-9]+$';

        this.requiredValidator = (str)=>{
            if (!str || str.length === 0){
                this.setState({ errorText: REQUIRED_MSG });
            }
        }

        this.lengthValidator = (str)=>{
            if (str.length > 15){
                this.setState({ errorText: LENGTH_MSG });
            }
        }

        this.nameValidator = (str)=>{
            if (str.length > 0 && !str.match(this.nameRegex)){
                this.setState({ errorText: NAME_MSG })
            }
        }

        this.amountValidator = (str)=>{
            if (str.length > 0 && !str.match(this.amountRegex)){
                this.setState({ errorText: AMOUNT_MSG })
            }
        }
    }

    onFieldChange(event) {
        let value = event.target.value;
        this.setState({ errorText: '' })
        this.props.validators.forEach(validity=>{
            if (validity === REQUIRED){
                this.requiredValidator(value);
            } else if (validity === LENGTH){
                this.lengthValidator(value);
            } else if (validity === NAME){
                this.nameValidator(value);
            } else if (validity === AMOUNT){
                this.amountValidator(value);
            }
        });
        this.props.onChange(event);
    }


  render() {

    const textProps = Object.assign({}, this.props);
    delete textProps.validators;

    return (
      <TextField
        {...textProps}
        errorText={this.state.errorText}
        onChange={this.onFieldChange}
      />
    )
  }
}