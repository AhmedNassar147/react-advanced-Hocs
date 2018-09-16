import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchContainer = styled.div`
  padding: 4px;
  box-sizing: box-border;
  display: flex;
  justify-content: flex-start;
  max-height: 40px;
  border-radius: 4px;
  width: 450px;
  margin: auto;
  `;

const StyledInput = styled.input`
  padding: 10px;
  font-size: 16px;
  outline: 0;
  border: 0;
  transition: 0.8s;
  flex: 1;
  
  &:focus{
    padding: 10px;
    box-shadow: 0px 2px 17px rgba(4,200,200, 0.9);
    border-radius: 8px;
  };

  ::placeholder{
    color: gray;
  };
`;

const Search = ({ onChange, value, placeholder }) => (
  <SearchContainer>
    <StyledInput value={value} onChange={onChange} placeholder={placeholder} />
  </SearchContainer>
);

Search.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.any,
  placeholder: PropTypes.string
}

Search.defaultProps = {
  placeholder: 'search user'
}

export default Search;
