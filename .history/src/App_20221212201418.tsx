import { useEffect, useState } from "react";
import "./App.css";
import BookList from "./components/Books/BookList";
import MainButton from "./components/Buttons/MainButton";
import ImageInput from "./components/Inputs/ImageInput";
import TextInput from "./components/Inputs/TextInput";
import { useContext } from "react";
import { BooksContext } from "./context/books";

function App() {
  const [
    title,
    imageLink,
    books,
    getAllBooks,
    handleSubmit,
    handleCreateBook,
    handleDeleteBook,
    handleEditBook,
    handleTitleChange,
    handleImageLinkChange,
  ] = useContext(BooksContext);

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <div>
      <div className='bg-green-400'>
        <form onSubmit={handleSubmit}>
          <TextInput
            label='Add Book Title'
            placeholder='Book Title'
            value={title}
            onChange={handleTitleChange}
          />
          <TextInput
            label='Add Book Image Link'
            placeholder='Book Image Link'
            value={imageLink}
            onChange={handleImageLinkChange}
          />
          <div className='flex justify-center'>
            <MainButton
              onClick={handleCreateBook}
              type='submit'
              buttonText='Create Book'
            />
          </div>
        </form>
      </div>
      <div className='px-4'>
        <BookList
          EditClick={handleEditBook}
          DeleteClick={handleDeleteBook}
          books={books}
        />
      </div>
    </div>
  );
}

export default App;
