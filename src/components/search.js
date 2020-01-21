import React, {PureComponent} from 'react';
import {Link} from "react-router-dom";
import {search} from '../BooksAPI';
import ShelfChanger from './shelfChanger';
export default class Search extends PureComponent{
    state = {
        books: [],
        results: false
    };
    search = (e) => {
        const query = e.target.value.trim();
        if(query){
            search(query).then(books => {
                if(books && books.length > 0){
                    this.setState({
                        results: true,
                        books
                    })
                } else {
                    this.setState({
                        results: false,
                        books: []
                    })
                }
            })
        } else{
            this.setState({
                results: false,
                books: []
            })
        }

    };
    render(){
        const {books, handleShelf} = this.props;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <button className="close-search">Close</button>
                    </Link>

                    <div className="search-books-input-wrapper">

                        <input onChange={this.search} type="text" placeholder="Search by title or author"/>

                    </div>
                </div>
                {this.state.results ?
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {this.state.books.map((book) =>
                                <li key={book.id}>
                                    <div className="book">
                                        <div className="book-top">
                                            {book.imageLinks &&
                                            <div className="book-cover" style={{
                                                width: 128,
                                                height: 193,
                                                backgroundImage: `url(${book.imageLinks.thumbnail})`
                                            }}></div>
                                            }
                                           <ShelfChanger book={book} books={books} handleShelf={handleShelf}/>
                                        </div>
                                        <div className="book-title">{book.title}</div>

                                        <React.Fragment>
                                            {book.authors &&  book.authors.map((author, index)=> (
                                                <div className="book-authors" key={index}>{author}</div>
                                            ))}
                                        </React.Fragment>
                                    </div>
                                </li>
                            )}
                        </ol>
                    </div> : null
                }
            </div>
        )
    }
}