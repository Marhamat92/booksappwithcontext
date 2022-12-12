import { useEffect, useState } from "react";
import "./App.css";
import BookList from "./components/Books/BookList";
import MainButton from "./components/Buttons/MainButton";
import ImageInput from "./components/Inputs/ImageInput";
import TextInput from "./components/Inputs/TextInput";
import BooksContextProvider from "./context/books";

function App() {
  const [title, setTitle] = useState<string>("");
  const [imageLink, setImageLink] = useState<string>("");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleImageLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageLink(e.target.value);
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
          {/* <ImageInput onChange={handleImageChange} label='Add Book Image' /> */}
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
