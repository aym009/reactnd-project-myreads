import React from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'
import BookShelf from './BookShelf'

const Dashboard = props => {
  const { books, updateBooks } = props

  return(
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            title='Currently Reading'
            books={books.filter((book) => book.shelf ==='currentlyReading')}
            updateBooks={updateBooks} />
          <BookShelf
            title='Want To Read'
            books={books.filter((book) => book.shelf ==='wantToRead')}
            updateBooks={updateBooks} />
          <BookShelf
            title='Read'
            books={books.filter((book) => book.shelf ==='read')}
            updateBooks={updateBooks} />
        </div>
      </div>
      <div className="open-search">
        <Link to='/search'>Add a book</Link>
      </div>
    </div>
  )
}

Dashboard.propTypes = {
  books: propTypes.array.isRequired,
  updateBooks: propTypes.func.isRequired
}

export default Dashboard
