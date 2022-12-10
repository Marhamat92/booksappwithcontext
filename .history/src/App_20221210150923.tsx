import { useEffect, useState } from "react";
import "./App.css";
import BookList from "./components/Books/BookList";
import MainButton from "./components/Buttons/MainButton";
import ImageInput from "./components/Inputs/ImageInput";
import TextInput from "./components/Inputs/TextInput";
import axios from "axios";

function App() {
  const [title, setTitle] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [books, setBooks] = useState<any>([]);

  const getAllBooks = async () => {
    const response = await axios.get("http://127.0.0.1:3001/books");
    console.log(response.data);
    setBooks(response.data);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(URL.createObjectURL(e.target.files![0]));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTitle("");
    setImage("");
  };

  const handleCreateBook = async (title: string, image: string) => {
    const response = await axios.post("http://127.0.0.1:3001/books", {
      title,
      image,
    });

    const newBook = [...books, response.data];
    setBooks(newBook);
    console.log(newBook);
  };

  const handleDeleteBook = (id: number) => {
    const newBooks = books.filter((book: any) => book.id !== id);
    setBooks(newBooks);
  };

  const handleEditBook = (id: number, newTitle: string) => {
    const newBooks = books.map((book: any) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(newBooks);
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
          <ImageInput onChange={handleImageChange} label='Add Book Image' />
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
