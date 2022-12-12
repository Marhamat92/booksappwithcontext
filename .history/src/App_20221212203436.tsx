import { useEffect, useState } from "react";
import "./App.css";
import BookList from "./components/Books/BookList";
import MainButton from "./components/Buttons/MainButton";
import ImageInput from "./components/Inputs/ImageInput";
import TextInput from "./components/Inputs/TextInput";
import { useContext } from "react";
import { BooksContext } from "./context/books";

function App() {
  const [title, setTitle] = useState("");
  const [imageLink, setImageLink] = useState("");

  const [
    books,
    getAllBooks,

    handleCreateBook,
    handleTitleChange,
    handleImageLinkChange,
  ] = useContext(BooksContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle("");
    setImageLink("");
  };

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
        <BookList />
      </div>
    </div>
  );
}

export default App;
