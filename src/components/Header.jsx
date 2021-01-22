import React from "react";
import { FaBook } from "react-icons/fa";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <BookIcon />
      <h1>Book Cards</h1>
    </HeaderContainer>
  );
};

// Styles ****************************************
const HeaderContainer = styled.div`
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  h1 {
    color: #fff;
    margin-left: 15px;
  }
`;

const BookIcon = styled(FaBook)`
  font-size: 34px;
  color: #fff;
`;

export default Header;
