import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectItems } from '../selectors/itemSelector';
import { fetchItems } from '../actions';
import {  } from '../reducers/items';
import { TreeList } from './TreeList';

class Tree extends Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.fetchItems();
  }
  render() {
    const { items } = this.props;
    return (
      <div className="row">
        <TreeList items={items} />
      </div>
    );
  }
}

Tree.defaultProps = {
  fetchItems: () => {},
  items: {}
};

Tree.propTypes = {
  fetchItems: PropTypes.func,
  items: PropTypes.object // eslint-disable-line react/forbid-prop-types
};

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchItems())
});

const mapStateToProps = createStructuredSelector({
  items: makeSelectItems()
});

export default connect(mapStateToProps, mapDispatchToProps)(Tree);
