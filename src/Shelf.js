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
                                      <li key={book.id} className='contact-list-item'>
                                              <div>
                                                  <p>{book.title}</p>
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
