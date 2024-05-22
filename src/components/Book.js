import React from "react";
import '../stylesheet/Book.css';
const Book = (props) =>{
    return(
        <div className="Book">
            <h1 onClick={props.delete}>Book Name : {props.bookName}  writer Name : {props.writerName}</h1>
            <input type="text" onChange={props.inputName} value={props.bookName}/>
        </div>
    )
}

export default Book;

