import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ListGroup } from 'reactstrap';
import { deleteItem } from '../../actions';

import TreeListItem from './TreeListItem';

class TreeList extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    // dummy state
    this.state = {
      a: 0
    };
  }

  deleteListItem(id) {
    const { deleteWithID } = this.props;

    deleteWithID(id);

    /* - A dirty workaround -
     * What is this????
     * This triggers the re-render the component. And why?
     * After using deepRemove /utils/deepRemove
     * method manipulating actual data and returns it but
     * selector memozie the data and not triggering the prop change a all
     * Work around this is manually change a state
     * I tried forceUpdate() failed!
    */
    this.setState({
      a: 1
    });
  }

  render() {
    const { items } = this.props;
    return (
      <ListGroup>
        {
          Object.keys(items)
            .map(key =>
              (<TreeListItem
                item={items[key]}
                key={items[key].ID}
                onDelete={id => this.deleteListItem(id)}
              />))
        }
      </ListGroup>
    );
  }
}

TreeList.defaultProps = {
  items: {},
  deleteWithID: () => {}
};

const mapDispatchToProps = dispatch => ({
  deleteWithID: itemID => dispatch(deleteItem(itemID))
});

TreeList.propTypes = {
  items: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  deleteWithID: PropTypes.func
};

export default connect(null, mapDispatchToProps)(TreeList);
