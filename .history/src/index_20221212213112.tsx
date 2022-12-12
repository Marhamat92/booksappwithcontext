import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "remixicon/fonts/remixicon.css";
import { BooksContextProvider } from "./context/books";

console.log(BooksContextProvider, "Hello from index.tsx");

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BooksContextProvider>
    <App />
  </BooksContextProvider>
);
