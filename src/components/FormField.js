import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

export default class FormField extends Component {
  constructor(props) {
        super(props);
        this.onFieldChange = this.onFieldChange.bind(this);

        this.state = { errorText: '', value: props.value };

        this.nameRegex = '^[a-zA-Z ]+$';
        this.amountRegex = '^[0-9]+$';

        this.requiredValidator = (str)=>{
            if (!str || str.length === 0){
                this.setState({ errorText: 'Field is required' });
            }
        }

        this.lengthValidator = (str)=>{
            if (str.length > 15){
                this.setState({ errorText: 'Field length is 15 chars maximum' });
            }
        }

        this.nameValidator = (str)=>{
            if (str.length > 0 && !str.match(this.nameRegex)){
                this.setState({ errorText: 'Field must contain only english chars or spaces' })
            }
        }

        this.amountValidator = (str)=>{
            if (str.length > 0 && !str.match(this.amountRegex)){
                this.setState({ errorText: 'Field must contain only numbers' })
            }
        }
    }

    onFieldChange(event) {
        let value = event.target.value;
        this.setState({ errorText: '' })
        this.props.validators.forEach(validity=>{
            if (validity === 'required'){
                this.requiredValidator(value);
            } else if (validity === 'length'){
                this.lengthValidator(value);
            } else if (validity === 'name'){
                this.nameValidator(value);
            } else if (validity === 'amount'){
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