import React from 'react';
import _ from 'lodash';

export default class Alert extends React.Component {
    render() {
        return (
            <div className="alert">
                {this.props.message}
            </div>
        );
    }
}
