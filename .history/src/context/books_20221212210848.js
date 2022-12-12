import { createContext, useState } from 'react';
import axios from 'axios';


const BooksContext = createContext();


function BooksContextProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [imageLink, setImageLink] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleImageLinkChange = (e) => {
    setImageLink(e.target.value);
  };

  const getAllBooks = async () => {
    const response = await axios.get("http://127.0.0.1:3001/books");
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


  const booksContextValues = {
    books,
    getAllBooks,
    handleSubmit,
    handleCreateBook,
    handleDeleteBook,
    handleEditBook,
    handleTitleChange,
    handleImageLinkChange,
    title,
    imageLink,
  };


  return (
    <BooksContext.Provider value={booksContextValues}>
      {children}
    </BooksContext.Provider>
  )
}


export { BooksContextProvider };
export default BooksContext;