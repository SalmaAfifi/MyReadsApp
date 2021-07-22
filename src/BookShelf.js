import React from 'react'
import Book from './Book'

function BookShelf({shelfName, booksList, onSelect}) {
    return (
        <div className="list-books-content">
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{shelfName}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {booksList.map(book => <Book key={book.id} book={book} onSelect={onSelect}/>)}
                    </ol>
                </div>
                </div>
        </div>
    
    )
}

export default BookShelf
