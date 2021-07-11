import React, { Component } from 'react'
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

export default BookShelf
