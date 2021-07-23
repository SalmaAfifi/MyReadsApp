import React from 'react'


function Shelf({ book, onSelect}) {
    
    const selectValue = ("shelf" in book)?String(book['shelf']):"none"

    return (

        <div>
                <select value={selectValue} onChange={(event)=>onSelect(book, event.target.value)}>
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
