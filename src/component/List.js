import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 600px;
  flex-wrap: wrap;
  margin: auto;
  background: #fff;
  border-radius: 8px;
`;

const ListItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 4px;
  padding: 4px 12px;
  box-shadow: 0px 1px 12px rgba(3, 300,400,0.9);
  border: 0;  
  border-radius: 8px;

  &:hover{
    box-shadow: 0px 14px 16px rgba(3, 300,400,0.9);
    transition: 0.4s;
    cursor: pointer;
  }

`;

const Avatar = styled.img`
  flex: 1;
  border-radius: 50%;
  width: 65px;
  height: 70px;
  box-shadow: 0px 1px 16px rgba(3, 200,300,0.6);
`;

const ListItemBody = styled.div`
  flex: 6;
  text-align: left;
  align-self: center;
  margin: 0px 4px;
  padding: 0px 18px;
`;

const ListItemTitle = styled.h5`
  font-size: 16px;
  font-weight: bold;
  padding: 0;
  margin: 0;
`;

const ListItemSubTitle = styled.label`
  font: 14px;
  font-weight: 250;
`;

const List = ({ data }) => (
  <ListContainer>
    {data && data.length > 0 && data.map((item, index) => (
      <ListItem key={index} >
        <Avatar src={item.thumbnail} />
        <ListItemBody>
          <ListItemTitle children={item.name} />
          <ListItemSubTitle children={item.email} />
        </ListItemBody>
      </ListItem>
    ))}
  </ListContainer>
)

List.propTypes = {
  data: PropTypes.array.isRequired
};

List.defaultProps = {
  data: []
};

export default List; 