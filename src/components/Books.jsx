import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import SearchArea from "./SearchArea";
import BookList from "./BookList";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sort, setSort] = useState("");

  const search = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchField}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          const cleanedData = cleanData(data);
          setBooks(cleanedData);
          console.log(books);

          setIsLoading(false);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Fetch aborted");
          } else {
            setIsLoading(false);
          }
        });
    }, 1000);
  };

  const handleSearch = (e) => {
    setSearchField(e.target.value);
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  const cleanData = (data) => {
    const cleanedData = data.items.map((item) => {
      if (!item.volumeInfo.hasOwnProperty("publishedDate")) {
        item.volumeInfo["publishedDate"] = "0000";
      } else if (!item.volumeInfo.hasOwnProperty("imageLinks")) {
        item.volumeInfo["imageLinks"] = {
          thumbnail: "https://picsum.photos/320/300"
        };
      }

      return item;
    });

    return cleanedData;
  };

  const sortedBooks = books.sort((a, b) => {
    if (sort === "Newest") {
      return (
        parseInt(b.volumeInfo.publishedDate.substring(0, 4)) -
        parseInt(a.volumeInfo.publishedDate.substring(0, 4))
      );
    } else if (sort === "Oldest") {
      return (
        parseInt(a.volumeInfo.publishedDate.substring(0, 4)) -
        parseInt(b.volumeInfo.publishedDate.substring(0, 4))
      );
    }
  });

  return (
    <BooksContainer>
      <SearchArea
        handleSearch={handleSearch}
        search={search}
        handleSort={handleSort}
      />
      {isLoading ? "Loading..." : <BookList books={sortedBooks} />}
    </BooksContainer>
  );
};

// Styles ****************************************
const BooksContainer = styled.div``;
export default Books;
