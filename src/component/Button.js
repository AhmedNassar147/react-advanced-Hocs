import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  outline: 0;
  border: 0px;
  font-size: 18px;
  max-width: 150px;
  border-radius: 4px;
  font-weight: bold;
  background-color: #C51162;
  color: #c3c3c3;
  height: 44px;
  cursor: pointer;

  &:hover{
    box-shadow: 0px 20px 18px rgba(4, 250, 350, 0.9);
  }
`;

const Button = ({ onClick }) => <StyledButton onClick={onClick} children="change theme" />

Button.propTypes = {
  onClick: PropTypes.func
}

export default Button;