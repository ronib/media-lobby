import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class DropField extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)

        this.state = { errorText: '', value: 1 };
//        this.requiredValidator = (str)=>{
//            if (!str || str.length === 0){
//                this.setState({ errorText: 'Field is required' });
//            }
//        }
    }

    handleChange = (event, index, value) => {
        this.setState({value});
    }

    render() {
        return (
            <SelectField hintText="Currency" value={this.state.value} onChange={this.handleChange}>
                <MenuItem value={1} primaryText="Euro" />
                <MenuItem value={2} primaryText="Dollar" />
            </SelectField>
    )
  }
}

