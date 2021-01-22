import React from "react";
import styled from "styled-components";
import BookCard from "./BookCard";

const BookList = ({ books }) => {
  return (
    <BookListContainer>
      {books.map((book, index) => {
        return (
          <BookCard
            key={index}
            image={book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title}
            published={book.volumeInfo.publishedDate}
            author={book.volumeInfo.authors}
          />
        );
      })}
    </BookListContainer>
  );
};

// Styles ****************************************
const BookListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin: 60px auto;
  padding: 20px 0;
`;

export default BookList;
