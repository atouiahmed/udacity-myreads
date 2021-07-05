import React, {Component} from 'react'
import PropTypes from "prop-types";

class OptionsList extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
    };
    handleSelectChange = (value) => {
        this.props.onOptionSelect(value, this.props.book);

    };

    render() {
        const {book} = this.props;
        return (
            <div className="book-shelf-changer">
                <select value={book.shelf} onChange={(event) => this.handleSelectChange(event.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading" >Currently Reading</option>
                    <option value="wantToRead" >Want to Read</option>
                    <option value="read" >Read</option>
                    <option value="none" >None</option>
                </select>
            </div>
        );
    }
}

export default OptionsList;