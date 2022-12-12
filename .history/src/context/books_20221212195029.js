import { createContext, useState } from 'react';

export const BooksContext = createContext();


const BooksContextProvider = (children) => {
  const [books, setBooks] = useState < any > ([]);


  const getAllBooks = async () => {
    const response = await axios.get("http://127.0.0.1:3001/books");
    console.log(response.data);
    setBooks(response.data);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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

  const handleDeleteBook = async (id: number) => {
    await axios.delete(`http://127.0.0.1:3001/books/${id}`);

    const newBooks = books.filter((book: any) => book.id !== id);
    setBooks(newBooks);
  };

  const defaultImage = "https://media.nomadicmatt.com/2022/norwayguide.jpeg";

  const handleEditBook = async (id: number, newTitle: string) => {
    const response = await axios.put(`http://127.0.0.1:3001/books/${id}`, {
      title: newTitle,
      imageLink: imageLink ? imageLink : defaultImage,
    });

    const newBooks = books.map((book: any) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(newBooks);
  };



  return (
    <BooksContext.Provider value={BooksContextValues}>
      {children}
    </BooksContext.Provider>
  )
}