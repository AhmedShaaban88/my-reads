import React , {PureComponent} from 'react';
export default class ShelfChanger extends PureComponent{
    defaultShelf = "none";
    changeShelf = (e) => {
        return this.props.handleShelf(e,this.props.book)
    };
    render() {
        const {book, books} = this.props;
        for (let _book of books) {
            if (book.id === _book.id) {
                this.defaultShelf = _book.shelf;
                break;
            }
          }


        return(
            <div className="book-shelf-changer">
                <select defaultValue={this.defaultShelf} onChange={this.changeShelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}