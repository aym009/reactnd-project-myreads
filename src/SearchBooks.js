import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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

    this.searchBooks(this.state.searchQuery)
  }

  searchBooks = (query) => {
    if (this.state.searchQuery.length > 1) {
      BooksAPI.search(query)
        .then((results) => {
          this.setState(() => ({
            results
          }))
        })
    }
  }

  handleUpdateBookShelf = (book, shelf) => {
    this.props.updateBooks(book, shelf)
  }

  render() {
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
            <input type="text" value={this.state.searchQuery} onChange={this.handleInputChange} placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.results.map((book) => (
              <Book key={book.id} book={book} onBookShelfChange={this.handleUpdateBookShelf} />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
