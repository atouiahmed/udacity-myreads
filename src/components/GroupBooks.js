import React, {Component} from 'react'
import PropTypes from "prop-types";
import BooksItemList from "./BooksItemList";

class GroupBooks extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        books: PropTypes.string.array,
        onOptionSelect: PropTypes.func.isRequired,

    };

    render() {
        const {title, books, onOptionSelect} = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map(book => (
                            <BooksItemList onOptionSelect={onOptionSelect} key={book.id} book={book}/>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default GroupBooks;