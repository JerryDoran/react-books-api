import React from "react";
import styled from "styled-components";

const SearchArea = ({ handleSearch, handleSort, search }) => {
  return (
    <SearchContainer>
      <SearchForm onSubmit={search}>
        <input
          type="text"
          placeholder="Enter search item..."
          onChange={handleSearch}
        />
        <SearchButton type="submit">Search</SearchButton>
        <SelectContainer defaultValue="Sort" onChange={handleSort}>
          <OptionSelector disabled value="Sort">
            Sort
          </OptionSelector>
          <OptionSelector value="Newest">Newest</OptionSelector>
          <OptionSelector value="Oldest">Oldest</OptionSelector>
        </SelectContainer>
      </SearchForm>
    </SearchContainer>
  );
};

// Styles ****************************************
const SearchContainer = styled.div``;

const SearchForm = styled.form`
  input {
    margin-top: 20px;
    margin-right: 5px;
    padding: 4px 10px;
    font-size: 18px;
    border: none;
    outline: none;
    border-bottom: 1px solid #ccc;
  }
`;

const SearchButton = styled.button`
  padding: 8px 15px;
  background: #000;
  color: #fff;
  border: none;
  outline: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SelectContainer = styled.select`
  padding: 7px 15px;
  background: #000;
  margin-left: 5px;
  color: #fff;
  border: none;
  outline: none;
  border-radius: 4px;
  cursor: pointer;
`;

const OptionSelector = styled.option``;

export default SearchArea;
