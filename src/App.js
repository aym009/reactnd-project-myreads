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

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  updateBooks = (book, shelf) => {
    book.shelf = shelf

    this.setState((currentState) => ({
      books: currentState.books.filter((item) => item.id !== book.item).concat([book])
    }))
    
    BooksAPI.update(book, shelf)
  }

  render() {
    const { books } = this.state

    return (
      <div className="app">{console.log(books)}
        {console.log(this.state.books)}
        <Route exact path='/' render={() => (
          <Dashboard books={books} updateBooks={this.updateBooks} />
        )} />
        <Route path='/search' component={SearchBooks} />
      </div>
    )
  }
}

export default BooksApp
