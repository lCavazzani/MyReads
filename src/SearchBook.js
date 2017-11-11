import React, {Component} from 'react';
import {Link } from 'react-router-dom';


class SearchBook extends Component{
    state ={
        search: '',
        books:[],
        value: '', 
        type: ''
    }
    render(){
        return(
            <div className="search-books">
                <div className="search-books-bar">
                 <Link to='/'>
                  <a className="close-search">Close</a>
                 </Link>
                  <div className="search-books-input-wrapper">
                    {/*
                      NOTES: The search from BooksAPI is limited to a particular set of search terms.
                      You can find these search terms here:
                      https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                      However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                      you don't find a specific author or title. Every search is limited by search terms.
                    */}
                    <input type="text" placeholder="Search by title or author"  
                      value={this.state.search}
                      onChange={event => this.onInputChange(event.target.value)}/>
                  </div>
                </div>
                <div className="search-books-results">
                  <ol className="books-grid">
                    {this.props.searchedBooks.map(book=>
                                      <li key={book.id} >
                                               <div className="book">
                                                  <div className="book-top">
                                                    {book.imageLinks ? (
                                                    <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
                                                          ) : (
                                                          <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url('./icons/content.jpeg')`}}></div>
                                                      )
                                                    }
                                                    <div className="book-shelf-changer">
                                                      <select value={this.state.type} onChange={(e)=>{
                                                                book.shelf = e.target.value;
                                                                this.props.addToShelf(book, e.target.value)
                                                              //  console.log(e.target.value)
                                                            }}>
                                                        <option value="none" disabled>Move to...</option>
                                                        <option value="currentlyReading">Currently Reading</option>
                                                        <option value="wantToRead">Want to Read</option>
                                                        <option value="read">Read</option>
                                                        <option value="none">None</option>
                                                      </select>
                                                    </div>
                                                  </div>
                                                  <div className="book-title">{book.name}</div>
                                                 {book.imageLinks ? (
                                                  <div className="book-authors">{book.authors}</div>
                                                       ) : (
                                                    <div className="book-authors">{book.title}</div>
                                                   )}
                                                </div>
                                          </li>
                                         )}
                  </ol>
                </div>
            </div>

        )
    }
      onInputChange(search){
          if(search){
              this.setState({search})
              this.props.onSearchTermChange(search, 10)
          }else{
            this.setState({search})
              console.log('vazio')
          }
    }
}
export default SearchBook;
