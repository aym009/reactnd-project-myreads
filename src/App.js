import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import Dashboard from './Dashboard'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  async componentDidMount() {
    const books = await BooksAPI.getAll()
    this.setState({ books })
  }

  updateBooks = (book, shelf) => {
    book.shelf = shelf

    this.setState((currentState) => ({
      books: currentState.books.filter((item) => item.id !== book.id).concat([book])
    }))
    
    BooksAPI.update(book, shelf)
  }

  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Dashboard books={books} updateBooks={this.updateBooks} />
        )} />
        <Route path='/search' render={() => (
          <SearchBooks books={books} updateBooks={this.updateBooks} />
        )} />
      </div>
    )
  }
}

export default BooksApp
