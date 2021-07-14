import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends Component {
  state = {
    searchQuery: '',
    results: []
  }

  handleInputChange = (e) => {
    this.setState({
      searchQuery: e.target.value
    })

    this.searchBooks(e.target.value)
  }

  searchBooks = (query) => {
    const trimedQuery = query.trim()

    if (trimedQuery.length > 0) {
      BooksAPI.search(trimedQuery)
        .then((results) => {
          results.map((resultBook) => {
            const bookInShelf = this.props.books.find(book => book.id === resultBook.id)
            resultBook.shelf = bookInShelf ? bookInShelf.shelf : 'none'

            return resultBook
          })
          this.setState(() => ({
            results
          }))
        })
        .catch(err => {
          this.setState({
            results: [],
            error: 'There is an error for searching.'
          })
        })
    } else {
      this.setState(() => ({
        results: []
      }))
    }
  }

  handleUpdateBookShelf = (book, shelf) => {
    this.props.updateBooks(book, shelf)
  }

  render() {
    const { searchQuery, results, error } = this.state

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" value={searchQuery} onChange={this.handleInputChange} placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {results.length
              ? results.map((book) => (
                <Book key={book.id} book={book} onBookShelfChange={this.handleUpdateBookShelf} />
              )): error && <p>There is an error for searching</p>}
          </ol>
        </div>
      </div>
    )
  }
}

SearchBooks.propTypes = {
  updateBooks: propTypes.func.isRequired
}

export default SearchBooks
