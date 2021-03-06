import React from 'react'
import './App.css'
import * as BooksAPI from "./BooksAPI"
import BooksItemList from "./components/BooksItemList";
import PropTypes from "prop-types";

class Search extends React.Component {

    static propTypes = {
        onOptionSelect: PropTypes.func.isRequired,
        lists: PropTypes.object.isRequired,
    };
    state = {
        query: '',
        books: [],
    };
    closeSearch = () => {
        this.props.onCloseSearch();
    };

    handleInputChange = (value) => {
        this.setState(() => ({
            query: value
        }));
        if (value) {
            this.doSearch(value);
        } else {
            this.emptyBooks();
        }
    };
    setBooks = (books) => {
        this.setState(() => ({
            books: books
        }));
    };
    emptyBooks = () => {
        this.setBooks([]);
    };

    doSearch(str) {
        BooksAPI.search(str).then((response) => {
            if (response && !response.error) {
                this.setBooks(response)
            } else {
                this.emptyBooks();
            }
        })
    }

    render() {
        const {lists} = this.props;
        return (
            <div className="app">
                <div className="search-books">
                    <div className="search-books-bar">
                        <button className="close-search"
                                onClick={this.closeSearch}>Close
                        </button>
                        <div className="search-books-input-wrapper">
                            <input onKeyUp={(event) => this.handleInputChange(event.target.value)} type="text"
                                   placeholder="Search by title or author"/>

                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {this.state.books.map(book => {
                                book.shelf = 'none';
                                if (lists.currentlyReading.filter(b => b.id === book.id).length) {
                                    book.shelf = 'currentlyReading';
                                } else if (lists.wantToRead.filter(b => b.id === book.id).length) {
                                    book.shelf = 'wantToRead';
                                } else if (lists.read.filter(b => b.id === book.id).length) {
                                    book.shelf = 'read';
                                }
                                return (
                                    <BooksItemList key={book.id} book={book}
                                                   onOptionSelect={this.props.onOptionSelect}/>
                                )
                            })}
                        </ol>
                    </div>
                </div>

            </div>
        )
    }
}

export default Search
