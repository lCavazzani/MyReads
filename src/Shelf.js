import React, {Component} from 'react';
//import PropTypes from 'prop-types';
//import escapeRegExp from 'escape-string-regexp';
//import { Link } from 'react-router-dom';
//import sortBy from 'sort-by'

class Shelf extends Component{
    state ={
    }
    render(){
        return(

          <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.type_title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
              {console.log(this.props.books)}

                 {this.props.books.filter(books => books.shelf === this.props.type_filter).map(book=>
                                      <li key={book.id} >
                                               <div className="book">
                                                  <div className="book-top">
                                                    <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
                                                    <div className="book-shelf-changer">
                                                      <select>
                                                        <option value="none" disabled>Move to...</option>
                                                        <option value="currentlyReading">Currently Reading</option>
                                                        <option value="wantToRead">Want to Read</option>
                                                        <option value="read">Read</option>
                                                        <option value="none">None</option>
                                                      </select>
                                                    </div>
                                                  </div>
                                                  <div className="book-title">{book.name}</div>
                                                  <div className="book-authors">{book.authors.join(", ")}</div>
                                                </div>
                                          </li>
                                         )}
              </ol>
            </div>
          </div>

        )
    }
}

export default Shelf;
