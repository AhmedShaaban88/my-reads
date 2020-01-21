import React, {PureComponent} from 'react';
import ShelfChanger from "./shelfChanger";

export default class Shelf extends PureComponent{
    render(){
        const {shelfBooks, handleShelf} = this.props;
        return (
        <div className="bookshelf-books">
            <ol className="books-grid">
                {shelfBooks.map((book) =>
                    <li key={book.id}>
                        <div className="book">
                            <div className="book-top">
                                {book.imageLinks &&
                                <div className="book-cover" style={{
                                    width: 128,
                                    height: 193,
                                    backgroundImage: `url(${book.imageLinks.thumbnail})`
                                }}></div>}
                                <ShelfChanger book={book} books={shelfBooks} handleShelf={handleShelf}/>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <React.Fragment>
                                {book.authors && book.authors.map((author, index)=> (
                                    <div className="book-authors" key={index}>{author}</div>
                                ))}
                            </React.Fragment>

                        </div>
                    </li>
                )}


            </ol>
        </div>
        )
    }
}
