import React, { PureComponent } from 'react'
import propTypes from 'prop-types'

class Book extends PureComponent {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.props.onBookShelfChange(this.props.book, e.target.value)
  }

  render() {
    const { book } = this.props
    const bookImage = book.imageLinks ? book.imageLinks['thumbnail'] : ''
    const defaultShelfValue = book.shelf ? book.shelf : 'none'

    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookImage})` }}>
              {!bookImage && <span style={{ display: 'inline-block', textAlign: 'center', padding: 10 }}>No Image Available</span>}
            </div>
            <div className="book-shelf-changer">
              <select onChange={this.handleChange} defaultValue={defaultShelfValue}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">
            {book.authors && book.authors.map((author) => <span key={author} style={{ display: 'block' }}>{author}</span>)}
          </div>
        </div>
      </li>
    )  
  }
}

Book.propTypes = {
  book: propTypes.object,
  onBookShelfChange: propTypes.func.isRequired
}

export default Book
