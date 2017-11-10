import React from 'react'
 import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './Shelf'
import { Route, Link } from 'react-router-dom';



class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     **/
    books: [],
    showSearchPage: false
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
            <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>)}> 
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
}

export default BooksApp
