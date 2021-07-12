import React, { Component } from 'react'
import propTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {
  handleUpdateBookShelf = (book, shelf) => {
    this.props.updateBooks(book, shelf)
  }

  render() {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book) => (
              <Book key={book.id} book={book} onBookShelfChange={this.handleUpdateBookShelf} />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

BookShelf.propTypes = {
  title: propTypes.string.isRequired,
  books: propTypes.array.isRequired,
  updateBooks: propTypes.func.isRequired
}

export default BookShelf
