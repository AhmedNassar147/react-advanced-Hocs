import React, { Component } from 'react'
import PropTypes from 'prop-types';
import SearchBar from '../component/searchBar'
import List from '../component/List'
import Button from '../component/Button'
import LoaderHoc from '../Hoc/loaderHoc'

export class ContactsList extends Component {
  state = {
    filterValue: '',
    searchResult: [],
  }

  handleFilterChanged = ({ target }) => {
    this.setState({ filterValue: target.value }, () => {
      const filteredContact = this.props.contacts.filter(contact => {
        const search = this.state.filterValue;
        if (contact.name.includes(search) || contact.email.includes(search)) {
          return contact;
        } else return false;
      })
      this.setState({ searchResult: filteredContact })
    })
  }

  render() {
    const { filterValue, searchResult } = this.state;
    const { contacts, propFromHoc, color, handleChangeColor } = this.props;
    return (
      <div style={{ background: color }} >
        <h1 children={propFromHoc} />
        <SearchBar
          onChange={this.handleFilterChanged}
          value={filterValue}
        />

        <List data={searchResult.length > 0 ? searchResult : contacts} />

        <div style={{ textAlign: 'center', marginTop: '10px' }} >
          <Button onClick={handleChangeColor} />
        </div>
      </div>
    )
  }
}

ContactsList.propTypes = {
  contacts: PropTypes.array,
  propFromHoc: PropTypes.string,
  handleChangeColor: PropTypes.func,
  color: PropTypes.string
}

export default LoaderHoc('contacts')(ContactsList);