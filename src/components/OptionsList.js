import React, {Component} from 'react'
import OptionsItemList from "./OptionsItemList";
import PropTypes from "prop-types";
import * as BooksAPI from "../BooksAPI";

class OptionsList extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
    };
    handleSelectChange = (value) => {
        this.props.onOptionSelect(value, this.props.book);

    };

    render() {
        return (
            <div className="book-shelf-changer">
                <select onChange={(event) => this.handleSelectChange(event.target.value)}>
                    <option value="move" disabled selected>Move to...</option>
                    <OptionsItemList value="currentlyReading" text="Currently Reading"/>
                    <OptionsItemList value="wantToRead" text="Want to Read"/>
                    <OptionsItemList value="read" text="Read"/>
                    <OptionsItemList value="none" text="None"/>
                </select>
            </div>
        );
    }
}

export default OptionsList;