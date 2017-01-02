import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class ActionButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <RaisedButton label={this.props.text} onTouchTap={this.props.handleOpen} />
        )
    }
}

