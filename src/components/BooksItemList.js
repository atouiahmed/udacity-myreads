import React, {Component} from 'react'
import PropTypes from "prop-types";
import OptionsList from "./OptionsList";

class BooksItemList extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        onOptionSelect: PropTypes.func.isRequired,

    };

    render() {
        const {book, onOptionSelect} = this.props;
        const {title, authors, imageLinks} = book;
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${imageLinks ? imageLinks.thumbnail : ''})`
                        }}></div>
                        <OptionsList onOptionSelect={onOptionSelect} book={book}/>

                    </div>
                    <div className="book-title">{title}</div>
                    {(authors && (
                        <div className="book-authors">{authors.join(' , ')}</div>
                    ))}

                </div>
            </li>
        );
    }
}

export default BooksItemList;