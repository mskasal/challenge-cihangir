import axios from 'axios';
import { toTree } from '../utils';
import {
  FETCH_ITEMS,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAIL,
  FETCH_LIST_URL,
  DELETE_ITEM
} from '../constants';

export const deleteItem = ID => ({
  type: DELETE_ITEM,
  itemID: ID
});

const fetchItemsSuccess = itemList => ({
  type: FETCH_ITEMS_SUCCESS,
  itemList
});

const fetchItemsFail = error => ({
  type: FETCH_ITEMS_FAIL,
  error
});

export const fetchItems = () =>
  (dispatch) => {
    dispatch({
      type: FETCH_ITEMS
    });

    axios.get(FETCH_LIST_URL)
      .then((response) => {
        dispatch(fetchItemsSuccess(toTree(response.data)));
      })
      .catch((error) => {
        dispatch(fetchItemsFail(error));
      });
  };
