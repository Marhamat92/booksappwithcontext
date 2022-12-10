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
  const [imageLink, setImageLink] = useState<string>("");

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

  const handleImageLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageLink(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTitle("");
    setImage("");
  };

  const handleCreateBook = async () => {
    const response = await axios.post("http://127.0.0.1:3001/books", {
      title,
      imageLink,
    });
    setBooks([...books, response.data]);
  };

  const handleDeleteBook = async (id: number) => {
    await axios.delete(`http://127.0.0.1:3001/books/${id}`);

    const newBooks = books.filter((book: any) => book.id !== id);
    setBooks(newBooks);
  };

  const handleEditBook = async (
    id: number,
    newTitle: string,
    newImage: string
  ) => {
    const response = await axios.put(`http://127.0.0.1:3001/books/${id}`, {
      title: newTitle,
      imageLink: imageLink,
    });

    const newBooks = books.map((book: any) => {
      if (book.id === id) {
        return { ...book, ...response.data };
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
