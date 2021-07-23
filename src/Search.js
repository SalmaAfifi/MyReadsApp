import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'



class Search extends Component{

    state = {
        books:[]
    }
    
    shelfValue = (searchItem, existingBooks ) => {
        const existing = existingBooks.filter(book=>book.id === searchItem.id)
        if(existing.length>0){return existing[0].shelf}
        else {return "none"}
        }
    

    searchUpdate = async(query) => {
        let books = []
        if(query.length>0) { books = await BooksAPI.search(query)}
        if("error" in books) {books = []}
        this.setState({books: books})
        }

    render(){
        const {existingBooks, onSelect} = this.props
        this.state.books.forEach((book)=>(book['shelf']=this.shelfValue(book,existingBooks )))       
    return (
        <div>
            <div className="search-books">
            <div className="search-books-bar">
              <Link to='/'><button className="close-search" >Close</button></Link>
              <div className="search-books-input-wrapper">
                <input type="text" 
                placeholder="Search by title or author"
                onChange={(event)=> this.searchUpdate(event.target.value)}/>

              </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">{this.state.books.map(book => <Book key={book.id} book={book} onSelect={onSelect}/>)}</ol>
            </div>
            
          </div>
        </div>
    )
}
}

export default Search