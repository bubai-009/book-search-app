import React, { Children } from "react";
import { useState, useCallback, useContext, useEffect } from "react";

const URL = "https://openlibrary.org/search.json?title=";
const AppConext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("The lost World");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setresultTitle] = useState("");

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${URL}${searchTerm}`);
      const data = await response.json();
      const { docs } = data;

      if (docs) {
        const newBooks = docs.slice(0, 20).map((bookSingle) => {
          const {
            key,
            author_name,
            cover_i,
            edition_count,
            first_publish_year,
            title,
          } = bookSingle;

          return {
            id: key,
            author: author_name,
            cover_id: cover_i,
            edition_count: edition_count,
            first_publish_year: first_publish_year,
            title: title,
          };
        });
        setBooks(newBooks);

        if (newBooks.length > 1) {
          setresultTitle("Your Search Result");
        } else {
          setresultTitle("No Search Result Found!");
        }
      } else {
        setBooks([]);
        setresultTitle("No Search Result Found!");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchBooks();
  }, [searchTerm, fetchBooks]);

  return (
    <AppConext.Provider
      value={{
        loading,
        books,
        setSearchTerm,
        resultTitle,
        setresultTitle,
      }}
    >
      {children}
    </AppConext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppConext);
};
export { AppConext, AppProvider };
