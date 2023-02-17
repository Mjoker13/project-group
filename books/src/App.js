import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { GetBooks } from "./components/Api";
import { DeliteBook } from "./components/Api";
import { PostBook } from "./components/Api";
const App = () => {
  const [books, setBooks] = useState([]);

  const createNewId = () => {
    if (books.length === 0) {
      return 1;
    }
    let idArray = books.map((el) => el.id); //[{id:1, title: "dsfs"}, {id:2, title: "sdfs"}] => [1, 2]
    return Math.max(...idArray) + 1; // Math.max(1,23,45,1,3) => 45
  };

  const createBook =async (title) => {
    const newBook = await PostBook({title:title});
    setBooks([...books, newBook]); 
  };

  const deleteBookById = async (id) => {
    const response = await DeliteBook(id);
    const updateAllBooks = await GetBooks();
    setBooks(updateAllBooks);
  };

  const updateBookById = (id, newTitle) => {
    console.log("Update book with id " + id + ": " + newTitle);
    const updatedBooks = books.map((el) => {
      if (el.id === id) {
        // se l'elemento ha l'id del libro che devo modificare, sostituisco l'oggetto book
        return { ...el, title: newTitle };
      } else {
        // altrimenti restituisco direttamente el
        return el;
      }
    });
    setBooks(updatedBooks);
  };

  const updateAllBooks = async () => {
    const response = await GetBooks();
    console.log(response);
    setBooks(response);
  };

  useEffect(() => {
    updateAllBooks();
  }, []);

  return (
    <div className="container d-flex flex-column align-items-center">
      <h1>Book List</h1>
      <BookList
        bookList={books}
        onDelete={deleteBookById}
        onEdit={updateBookById}
      />
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;
