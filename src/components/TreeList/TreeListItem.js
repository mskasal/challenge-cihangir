import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { isEmpty } from 'lodash';
import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Collapse
} from 'reactstrap';

import TreeList from './TreeList';

const initialState = {
  collapse: false
};

class TreeListItem extends Component{
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  toggleCollapse(event) {
    event.preventDefault();

    const { collapse } = this.state;

    this.setState({
      collapse: !collapse
    });
  }

  deleteItem(item) {
    this.props.onDelete(item.ID);
  }

  render() {
    if (!this.props.item) return (<div />);
    const { item, item: { ID, Name, Phone, City } } = this.props;
    const { collapse } = this.state;
    const haveChildren = (item.children && !isEmpty(item.children));

    return (
      <ListGroupItem>
        <ListGroupItemHeading
          className='tree-list-item-heading justify-content-between'
        >
          <button
            className='btn btn-xs btn-link'
            onClick={event => this.toggleCollapse(event)}
          >
            {
              (haveChildren) && (
                (collapse)
                  ? <i className='material-icons'>remove</i>
                  : <i className='material-icons'>add</i>
              )
            }
            <span>#{ID} {Name}</span>
          </button>
          <button
            className='btn btn-xs btn-link'
            onClick={() => this.deleteItem(item)}
          >
            <i className='material-icons'>delete</i>
          </button>
        </ListGroupItemHeading>

        <ListGroupItemText>
          {Phone} | {City}
        </ListGroupItemText>
        {
          haveChildren && (
            <Collapse isOpen={collapse}>
              <TreeList items={item.children} />
            </Collapse>
          )
        }
      </ListGroupItem>
    );
  }
}

TreeListItem.PropTypes = {
  item: PropTypes.object,
  onDelete: PropTypes.func
};

export default TreeListItem;

