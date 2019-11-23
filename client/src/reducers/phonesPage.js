import * as R from 'ramda';

import {
  FETCH_PHONES_SUCCESS,
  LOAD_MORE_PHONES_SUCCESS,
  SEARCH_PHONE
} from '../actionTypes';

const initialState = {
  ids: [],
  search: '',
  loading: true,
  error: false
};

export default (state = initialState, {type, payload}) => {
  if (state === undefined) {
    return {
      books: [],
      loading: true,
      error: false
    };
  }
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      return R.mergeRight(state, {
        ids: R.pluck('id', payload),
        loading: R.prop('loading', payload),
        error: R.prop('error', payload)
      });

    case LOAD_MORE_PHONES_SUCCESS:
      const ids = R.pluck('id', payload);
      return R.mergeRight(state, {
        ids: R.concat(ids, state.ids),
        loading: R.prop('loading', payload),
        error: R.prop('error', payload)
      });

    case SEARCH_PHONE:
      return R.mergeRight(state, {
        search: payload
      });
    default:
      return state;
  }
};