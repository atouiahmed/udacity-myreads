import React, {Component} from 'react'
import PropTypes from "prop-types";

class OptionsItemList extends Component {

    static propTypes = {
        value: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,

    };

    render() {
        const {value, text} = this.props;
        return (
            <option value={value}>{text}</option>
        );
    }
}

export default OptionsItemList;