import React, { Component } from 'react';


const LoaderHoc = propName => WrappedComponent => {
  return class LoaderHoc extends Component {

    componentDidMount() {
      this.propFromHoc = 'hello from hoc :)';
    }

    isEmpty = prop => {
      return prop === undefined ||
        prop === null ||
        (prop.hasOwnProperty('length') && prop.length === 0) ||
        (prop.constructor === 'object' && Object.keys(prop).length === 0)
    };


    render() {
      const customProp = { propFromHoc: this.propFromHoc }
      return this.isEmpty(this.props[propName]) ?
        <div children="loading" /> :
        <WrappedComponent {...this.props} {...customProp} />
    }
  }
}

export default LoaderHoc;