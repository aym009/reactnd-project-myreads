import React from 'react'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import Dashboard from './Dashboard'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path='/' component={Dashboard} />
        <Route path='/search' component={SearchBooks} />
      </div>
    )
  }
}

export default BooksApp
