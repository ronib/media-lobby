import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {EURO, DOLLAR} from '../utils/Consts'

export default class DropField extends Component {
    constructor(props) {
        super(props);
        this.onFieldChange = this.onFieldChange.bind(this)

        this.state = {errorText: ''};
        // TODO: check that field selected instead of default 1
    }

    onFieldChange = (event, index, value) => {
        this.setState({value});
        this.props.onChange(event);
    }

    render() {
        if (!this.props.isVisible){
            return null;
        }
        return (
            <SelectField hintText="Currency" value={this.state.value} onChange={this.onFieldChange}>
                <MenuItem value={1} primaryText={EURO} />
                <MenuItem value={2} primaryText={DOLLAR} />
            </SelectField>
        )
    }
}

