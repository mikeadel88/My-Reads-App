import "./App.css";
import { useEffect, useState } from "react";
import {Route,Routes} from "react-router-dom"
import SearchPage from "./components/search";
import HomePage from "./components/home";
import * as BooksAPI from "./BooksAPI"
function App() {
const[books,setBooks]=useState([])
useEffect(
  ()=>{
    const getBook=async()=>{
      const res=await BooksAPI.getAll()
      setBooks(res)
    }
    getBook()
  }
  ,[])
  const changeShelf=(book,shelf)=>{
    book.shelf=shelf
    BooksAPI.update(book,shelf).then(()=>{
      setBooks([...books.filter((b) => b.id !== book.id).concat(book) ]);
    })
    
  }
  return (
    <div className="app">
      <Routes>
      <Route exact path="/search" element={<SearchPage books={books} changeShelf={changeShelf}/>} />
      <Route exact path="/" element={<HomePage books={books} changeShelf={changeShelf}/>} />
      </Routes>
      
    </div>
  );
}

export default App;
