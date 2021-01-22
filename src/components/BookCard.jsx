import React from "react";
import styled from "styled-components";

const BookCard = ({ image, title, published, author }) => {
  return (
    <BookCardContainer>
      <CardImage src={image} />
      <CardDesc>
        <h2>{title}</h2>
        <h3>Author(s): {author}</h3>
        <p>Published: {published === '0000' ? 'Not available': published.substring(0,4)}</p>
      </CardDesc>
    </BookCardContainer>
  );
};

// Styles ****************************************
const BookCardContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: space-evenly; */
  /* align-items: center; */
  height: 480px;
  width: 300px;
  margin: 0 auto;
  background: #fff;
  border-radius: 7px;
`;
const CardImage = styled.img`
  height: 320px;
  width: 100%;
  margin-bottom: 20px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
`;
const CardDesc = styled.div`
  padding: 0 20px;
  h2 {
    font-size: 18px;
    font-weight: 300;
    text-align: left;
  }

  h3 {
    font-size: 14px;
    text-align: left;
  }

  p {
    font-size: 14px;
    text-align: left;
  }
`;

export default BookCard;
