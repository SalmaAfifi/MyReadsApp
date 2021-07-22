import React from 'react'
import Shelf from './Shelf'

function Book({book, onSelect}) {
    return (
        <li>
            <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
            <div className="book-shelf-changer">
                <Shelf book={book} onSelect={onSelect}/>

            </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
        </div> 
        </li>
    )
}
export default Book
