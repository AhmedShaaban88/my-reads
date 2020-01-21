import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/home';
import Search from './components/search';
import {update, getAll} from "./BooksAPI";
class BooksApp extends React.Component {
    constructor(props){
        super(props);
        this.changeShelf = this.changeShelf.bind(this);
        this.state = {
            books: []
        }
    }
    componentDidMount(){
        getAll().then(books =>
            this.setState({
                books,
            })
        )
    }
    changeShelf(e, book){
        const shelf = e.target.value;
        book.shelf = shelf;
        update(book, shelf).then(() => {
            this.setState((prevState) => ({
                books: prevState.books.filter(b => b.id !== book.id).concat(book)
            }));
        });
    };
  render() {
    return (
        <Router>
            <Switch>
          <Route path='/' exact={true}>
               <Home books={this.state.books} handleShelf={this.changeShelf}/>
          </Route>
            <Route path='/search' exact={true}>
                <Search books={this.state.books} handleShelf={this.changeShelf}/>
            </Route>
            </Switch>
        </Router>
    )
  }
}

export default BooksApp
