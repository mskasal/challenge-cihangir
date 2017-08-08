import { fromJS } from 'immutable';
import { deepRemove } from './../utils';

import {
  FETCH_ITEMS,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAIL,
  DELETE_ITEM
} from '../constants';

const itemsInitialState = fromJS({
  loading: false,
  error: null,
  success: null,
  items: {}
});

const itemsReducer = (state = itemsInitialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return state
        .set('loading', true)
        .set('error', null)
        .set('success', null)
        .set('items', {});
    case FETCH_ITEMS_SUCCESS:
      return state
        .set('loading', false)
        .set('error', null)
        .set('success', true)
        .set('items', action.itemList);
    case FETCH_ITEMS_FAIL:
      return state
        .set('loading', false)
        .set('success', null)
        .set('error', action.error)
        .set('items', {});
    case DELETE_ITEM:
    {
      const filtered = deepRemove(state.get('items'), action.itemID);
      return state
        .set('loading', false)
        .set('success', null)
        .set('error', null)
        .set('items', filtered);
    }
    default:
      return state;
  }
};

export default itemsReducer;
