import { useState } from "react";
import "./App.css";
import MainButton from "./components/Buttons/MainButton";
import ImageInput from "./components/Inputs/ImageInput";
import TextInput from "./components/Inputs/TextInput";

function App() {
  const [title, setTitle] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(title);
    setTitle("");
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
          <MainButton type='submit' buttonText='Create Book' />
        </form>
      </div>
    </div>
  );
}

export default App;
