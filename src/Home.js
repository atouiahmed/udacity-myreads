import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import GroupBooks from "./components/GroupBooks";
import {Route} from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import PropTypes from "prop-types";

class Home extends React.Component {

    static propTypes = {
        lists: PropTypes.array.isRequired,
    };
    goSearch = () => {
        this.props.onGoSearch();
    };

    render() {
        const {currentlyReading, wantToRead, read} = this.props.lists;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <GroupBooks title="Currently Reading" books={currentlyReading}
                                    onOptionSelect={this.props.onOptionSelect}/>
                        <GroupBooks title="Want to Read" books={wantToRead}
                                    onOptionSelect={this.props.onOptionSelect}/>
                        <GroupBooks title="Read" books={read}
                                    onOptionSelect={this.props.onOptionSelect}/>

                    </div>
                </div>
                <div className="open-search">
                    <button onClick={this.goSearch}>Add a book</button>
                </div>
            </div>
        )
    }
}

export default Home;
