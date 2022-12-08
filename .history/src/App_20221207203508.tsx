import { useState } from "react";
import "./App.css";
import BookList from "./components/Books/BookList";
import MainButton from "./components/Buttons/MainButton";
import ImageInput from "./components/Inputs/ImageInput";
import TextInput from "./components/Inputs/TextInput";

function App() {
  const [title, setTitle] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [books, setBooks] = useState<any>([]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(URL.createObjectURL(e.target.value[0]));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(title);
    setTitle("");
    console.log(image);
    setImage("");
  };

  const handleCreateBook = () => {
    const newBook = [
      ...books,
      {
        id: Math.round(Math.random() * 9999),
        title,
        image,
      },
    ];
    setBooks(newBook);
    console.log(books);
  };

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
          <ImageInput
            onChange={handleImageChange}
            value={image}
            label='Add Book Image'
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
        <BookList books={books} />
      </div>
    </div>
  );
}

export default App;
