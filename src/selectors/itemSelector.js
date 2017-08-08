import { createSelector } from 'reselect';
import { Map } from 'immutable';

const selectItems = state => state.getIn(['itemsReducer', 'items']);

const makeSelectItems = () => createSelector(
  selectItems,
  (itemList) => {
    if (itemList instanceof Map) {
      return {};
    }
    return itemList;
  }
);

export {
  selectItems,
  makeSelectItems
};
