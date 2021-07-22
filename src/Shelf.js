import React from 'react'

function Shelf({book, onSelect}) {
    return (
        <div>
                <select onChange={(event)=>onSelect(book, event.target.value)}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
                </select>
        </div>
    )
}

export default Shelf
