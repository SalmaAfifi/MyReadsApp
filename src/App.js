import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import {Link, Route } from 'react-router-dom'
import Search from './Search'

class BooksApp extends React.Component {
  state = {books:[]}

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }
  shelfUpdate = (book, shelf) => {BooksAPI.update(book, shelf).then(()=>{
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  })}
  
  
  
  render() {return (
    <div className='app'>
      <Route exact path='/' render={()=>(    <div className='list-books'>
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
      {<BookShelf shelfName='Currently Reading' booksList={this.state.books.filter(book => (book.shelf === "currentlyReading")) } onSelect={this.shelfUpdate}/> }
      {<BookShelf shelfName='Want to Read' booksList={this.state.books.filter(book => (book.shelf === "wantToRead"))} onSelect={this.shelfUpdate}/> }
      {<BookShelf shelfName='Read' booksList={this.state.books.filter(book => (book.shelf === "read"))} onSelect={this.shelfUpdate}/> }
      <div className="open-search">
              <Link to='/search_books'>
                <button>Add a book</button>
              </Link>
      </div>    
    </div>)}/>

    <Route exact path='/search_books' render={()=>(<Search onSelect={this.shelfUpdate}/>)}/>
    </div>


  ) }
}


export default BooksApp
