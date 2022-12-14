import PropTypes from 'prop-types'
const Books=({book,changeShelf,currentShelf})=>{
  let image="";
  if(book.imageLinks){
    image=book.imageLinks.thumbnail
  }
  else{
    image=""
  }
    return(
                    <div className="book">
                      <div className="book-top">
                        <div
                          className="book-cover"
                          style={{
                            width: 128,
                            height: 193,
                            backgroundImage:`url("${image}")`
                                }}
                        ></div>
                        <div className="book-shelf-changer">
                          <select onChange={e=>{changeShelf(book,e.target.value)}} value={currentShelf}>
                            <option value="none" disabled>
                              Move to...
                            </option>
                            <option value="currentlyReading">
                              Currently Reading
                            </option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{book.title}</div>
                      <div className="book-authors">{book.authors}</div>
                    </div>
    )
}
Books.propTypes={
  book:PropTypes.array,
  changeShelf:PropTypes.func,
  currentShelf:PropTypes.string

}
export default Books