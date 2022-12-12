import { createContext, useState } from 'react';
import axios from 'axios';


export const BooksContext = createContext();


const BooksContextProvider = (children) => {
  const [books, setBooks] = useState([]);


  const getAllBooks = async () => {
    const response = await axios.get("http://127.0.0.1:3001/books");
    console.log(response.data);
    setBooks(response.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle("");
    setImageLink("");
  };

  const handleCreateBook = async () => {
    const response = await axios.post("http://127.0.0.1:3001/books", {
      title,
      imageLink,
    });
    setBooks([...books, response.data]);
  };

  const handleDeleteBook = async (id) => {
    await axios.delete(`http://127.0.0.1:3001/books/${id}`);

    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
  };

  const defaultImage = "https://media.nomadicmatt.com/2022/norwayguide.jpeg";

  const handleEditBook = async (id, newTitle) => {
    const response = await axios.put(`http://127.0.0.1:3001/books/${id}`, {
      title: newTitle,
      imageLink: imageLink ? imageLink : defaultImage,
    });

    const newBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(newBooks);
  };


  const BooksContextValues = {
    books,
    getAllBooks,
    handleSubmit,
    handleCreateBook,
    handleDeleteBook,
    handleEditBook,
  };


  return (
    <BooksContext.Provider value={BooksContextValues}>
      {children}
    </BooksContext.Provider>
  )
}

export default BooksContextProvider;