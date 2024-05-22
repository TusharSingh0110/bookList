import React, { Component } from 'react';
import Book from '../components/Book';

export class BookList extends Component {
    state = {
        books: [
            {id: 1, bookName: "Think and Grow", writer: "George"},
            {id: 2, bookName: "Ikigai", writer: "Meamo"},
            {id: 3, bookName: "Rich dad poor dad", writer: "Harry"}
        ],
        showBooks: true
    };

    deleteBookState = (index) => {
        const books = [...this.state.books]; // Use spread operator to create a new array
        books.splice(index, 1);
        this.setState({
            books: books
        });
    };

    changeInput = (event, index) => {
        const book = { ...this.state.books[index] };
        book.bookName = event.target.value;
        const books = [...this.state.books];
        books[index] = book;
        this.setState({ books: books });
    };

    toggleBooks = () =>{
        this.setState({showBooks: !this.state.showBooks})
    }
    render() {
        const books = this.state.books.map((book, index) => {
            return (
                <Book
                    bookName={book.bookName}
                    writer={book.writer}
                    delete={() => this.deleteBookState(index)}
                    key={book.id}
                    inputName={(event) => this.changeInput(event, index)}
                />
            );
        });

        return (
            <div className='App'>
                <h1>Book List</h1>
                <button onClick={this.toggleBooks}>toggleBooks</button>

                {/* {books} */}
                {/* //if showBooks == true the map function (books) will execute else not */}
                {this.state.showBooks ? books : null}   
            </div>
        );
    }
}

export default BookList;
