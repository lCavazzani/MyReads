import React from 'react'
 import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './Shelf'
import SearchBook from './SearchBook'
import { Route, Link } from 'react-router-dom';



class BooksApp extends React.Component {
  state = {
    books: [],
      searched_books: []
  }
  componentDidMount(){
        BooksAPI.getAll().then((books) => {
            this.setState({books: books})
        //    console.log(books)
        })
    }
  render()  {
    return (
      <div className="app">
        <Route path='/search'  render={()=>(
            <SearchBook 
            onSearchTermChange={this.bookSearch}/>
                )}> 
            </Route>
          <Route exact path='/'  render={()=>(
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf
                books={this.state.books}
                type_title='Currently Reading'
                type_filter='currentlyReading'
                changeShelf={this.changeShelf} />
                <Shelf
                books={this.state.books} 
                type_title='Want to Read'
                type_filter='wantToRead'
                changeShelf={this.changeShelf}/>
                <Shelf
                books={this.state.books}
                type_title='Read'
                type_filter='read'
                changeShelf={this.changeShelf} />
              </div>
            </div>
            <Link className='open-search'
                       to='/search'>
             <div className="open-search">
              <a>Add a book</a>
            </div>
             </Link> 
          </div>
                )}></Route>
      </div>
    )
  }
    changeShelf = (book, shelf) => {
        let newBooks = this.state.books;
        let index = newBooks.findIndex(el => el.id === book.id);
        newBooks[index] = book;       
        console.log('book',newBooks);
        console.log('shelf',shelf);
        this.setState((prevState) => ({
            books: newBooks
        }))
        BooksAPI.update(book, shelf)
    }
     bookSearch = (query, maxResults) => {
      BooksAPI.search(query, maxResults).then(() => {
        })
  }
}

export default BooksApp
