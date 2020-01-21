import React, {PureComponent} from 'react';
import {Link} from "react-router-dom";
import Shelf from './shelf';

const shelfs = [
    {
        title: 'Currently Reading',
        shelf: 'currentlyReading',
        id: 1
    },
    {
        title: 'Want to Read',
        shelf: 'wantToRead',
        id: 2
    },
    {
        title: 'Read',
        shelf: 'read',
        id: 3
    }
];
export default class Home extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        const {books, handleShelf} = this.props;
        return (

            (this.props.books.length > 0) ?
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">

                        <div>
                            {shelfs.map((shelf)=>{
                                 const shelf_Books = books.filter((book) => book.shelf === shelf.shelf);
                                         return (
                                <div className="bookshelf" key={shelf.id}>
                                <h2 className="bookshelf-title">{shelf.title}</h2>
                                <Shelf shelfBooks={shelf_Books} handleShelf={handleShelf}/>

                                </div>
                                     )
                            }
                            )}
                        </div>
                    </div>
                    <Link to={{pathname:'/search'}}>
                        <div className="open-search">
                            <button>Add a book</button>
                        </div>
                    </Link>
                </div>
                : <h1>Loading</h1>


        )
    }
}