import React from 'react';
import PropTypes from 'prop-types';
import ContactsList from './Contacts';
import ColorContainer from '../component/Color';


const RenderPage = ({ contacts }) => {
  return (
    <ColorContainer>
      {(color, changeColor) => <ContactsList color={color} handleChangeColor={changeColor} contacts={contacts} />}
    </ColorContainer>
  )
}

RenderPage.propTypes = {
  contacts: PropTypes.array,
}

export default RenderPage;