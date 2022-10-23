import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import * as BooksAPI from "../BooksAPI"
import NoSearch from "./noSearch"
import Books from "./book"
const SearchPage=({books,changeShelf})=>{
  const [query,setQuery]=useState("")
  const [searchBooks,setsearchBooks]=useState([])
  useEffect(()=>{
    if(query!==""){
      const search=async(query)=>{
        const res=await BooksAPI.search(query,500)
        if(res.error)
        {
          setsearchBooks([])
        }
        else{
          setsearchBooks(res)
        }
      }
      search(query)
    }
  },[query])

 

return(
<div className="search-books">
<div className="search-books-bar">
  <Link to="/" className="close-search"> Close</Link>
  <div className="search-books-input-wrapper">
    <input
      type="text"
      value={query}
      onChange={(e)=>{setQuery(e.target.value)}}
      placeholder="Search by title, author, or ISBN"
    />
  </div>
</div>
<div className="search-books-results">
{query ==="" ? (<NoSearch/>): <ol className="books-grid">
    {searchBooks.map((b)=>{
      let shelf="none"
      books.forEach((book)=>{
        if(book.id!==b.id)
        {
          shelf="none"
        }
        else{
          shelf=book.shelf
        }
      })

      return (
        <li key={b.id}>
      <Books book={b} changeShelf={changeShelf} currentShelf={shelf}/>
      </li>
      )
    })}
  </ol>}
</div>
</div>
    )
}
export default SearchPage