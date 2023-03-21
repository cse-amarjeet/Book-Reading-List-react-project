import { useContext } from "react";
import BooksContext from "../context/book";

function useBooksContext() {
  return useContext(BooksContext);
}

export default useBooksContext;
