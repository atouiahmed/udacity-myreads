import React from 'react'
import './App.css'
import {Route} from "react-router-dom";
import Search from "./Search";
import Home from "./Home";
import * as BooksAPI from "./BooksAPI";
import PageNotFound from "./components/PageNotFound";
import {Switch} from 'react-router-dom';

class BooksApp extends React.Component {
    state = {
        lists: {
            currentlyReading: [],
            wantToRead: [],
            read: [],
        }

    };

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setBooks(books);
        })
    }

    handleSelectOptionChange = (list, book) => {
        BooksAPI.update(book, list);
        this.addBook(list, book);
    };

    setBooks = (books) => {
        this.setState(() => ({
            lists: {
                currentlyReading: books.filter(b => b.shelf === 'currentlyReading'),
                wantToRead: books.filter(b => b.shelf === 'wantToRead'),
                read: books.filter(b => b.shelf === 'read'),
            }
        }))
    };
    addBook = (list, book) => {
        this.removeBookFromLists(book);
        if (list !== 'none') {
            this.setState((currentState) => ({
                lists: {
                    ...currentState.lists,
                    [list]: [...currentState.lists[list], book],
                }
            }))
        }
    };
    removeBookFromLists = (book) => {
        this.setState((currentState) => ({
            lists: {
                currentlyReading: currentState.lists.currentlyReading.filter(b => b.id !== book.id),
                wantToRead: currentState.lists.wantToRead.filter(b => b.id !== book.id),
                read: currentState.lists.read.filter(b => b.id !== book.id),
            }
        }))
    };

    render() {
        return (
            <div className="app">
                <Switch>
                    <Route exact path='/' render={({history}) => (
                        <Home onGoSearch={() => {
                            history.push('/search');
                        }} onOptionSelect={this.handleSelectOptionChange} lists={this.state.lists}/>
                    )}/>
                    <Route path='/search' render={({history}) => (
                        <Search onCloseSearch={() => {
                            history.push('/');
                        }} onOptionSelect={this.handleSelectOptionChange}  lists={this.state.lists}/>
                    )}/>
                    <Route component={PageNotFound}/>
                </Switch>

            </div>
        )
    }
}

export default BooksApp
