import * as R from 'ramda';

import {FETCH_PHONES_BY_ID_SUCCESS} from '../actionTypes';

const initialState = {
    id: null,
    loading: true,
    error: false
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_PHONES_BY_ID_SUCCESS:
            return R.mergeRight(state, {
                id: R.prop('id', payload),
                loading: R.prop('loading', payload),
                error: R.prop('error', payload)
            });

        default:
            return state;
    }
};