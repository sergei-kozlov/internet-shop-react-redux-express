import {
    FETCH_PHONES_START,
    FETCH_PHONES_SUCCESS,
    FETCH_PHONES_FAILURE,
    LOAD_MORE_PHONES_FAILURE,
    LOAD_MORE_PHONES_START,
    LOAD_MORE_PHONES_SUCCESS,
    FETCH_PHONES_BY_ID_FAILURE,
    FETCH_PHONES_BY_ID_START,
    FETCH_PHONES_BY_ID_SUCCESS,
    ADD_PHONE_TO_BASKET,
    SEARCH_PHONE,
    FETCH_CATEGORIES_FAILURE,
    FETCH_CATEGORIES_START,
    FETCH_CATEGORIES_SUCCESS,
    REMOVE_PHONE_FROM_BASKET,
    CLEAN_BASKET,
    REMOVE_ALL_PHONES_FROM_BASKET
} from '../actionTypes';
import {
    fetchPhones as fetchPhonesApi,
    loadMorePhones as loadMorePhonesApi,
    fetchPhoneById as fetchPhoneByIdApi,
    fetchCategories as fetchCategoriesApi
} from '../api';
import {getRenderedPhonesLength} from '../selectors/selectors';

export const fetchPhones = () => async dispatch => {
    dispatch({type: FETCH_PHONES_START});

    try {
        const phones = await fetchPhonesApi();
        dispatch({
            type: FETCH_PHONES_SUCCESS,
            payload: phones
        })
    } catch (err) {
        dispatch({
            type: FETCH_PHONES_FAILURE,
            payload: err,
            error: true
        })
    }
};

export const loadMorePhones = () => async (dispatch, getState) => {
    const offset = getRenderedPhonesLength(getState());
    dispatch({type: LOAD_MORE_PHONES_START});

    try {
        const phones = await loadMorePhonesApi({offset});
        dispatch({
            type: LOAD_MORE_PHONES_SUCCESS,
            payload: phones
        })
    } catch (err) {
        dispatch({
            type: LOAD_MORE_PHONES_FAILURE,
            payload: err,
            error: true
        })
    }
};

export const fetchPhoneById = (id) => async dispatch => {
    dispatch({type: FETCH_PHONES_BY_ID_START});

    try {
        const phone = await fetchPhoneByIdApi(id);
        dispatch({
            type: FETCH_PHONES_BY_ID_SUCCESS,
            payload: phone
        })
    } catch (err) {
        dispatch({
            type: FETCH_PHONES_BY_ID_FAILURE,
            payload: err,
            error: true
        })
    }
};


export const searchPhone = text => dispatch => {
    dispatch({
        type: SEARCH_PHONE,
        payload: text
    })
};

export const fetchCategories = () => async dispatch => {
    dispatch({type: FETCH_CATEGORIES_START});

    try {
        const categories = await fetchCategoriesApi();
        dispatch({
            type: FETCH_CATEGORIES_SUCCESS,
            payload: categories
        })
    } catch (err) {
        dispatch({
            type: FETCH_CATEGORIES_FAILURE,
            payload: err,
            error: true
        })
    }
};


// Cart Actions

export const addPhoneToBasket = id => {
    return({
        type: ADD_PHONE_TO_BASKET,
        payload: id
    })
};

export const removePhoneFromBasket = id => {
    return({
        type: REMOVE_PHONE_FROM_BASKET,
        payload: id
    })
};

export const cleanBasket = () => async dispatch => {
    dispatch({
        type: CLEAN_BASKET
    })
};

export const basketCheckout = phones => () => {
    alert(JSON.stringify(phones))

};


//New Actions of basket

export const removeAllPhonesFromBasket = id => {
   return({
        type: REMOVE_ALL_PHONES_FROM_BASKET,
        payload: id
    })
};

//End of New Actions

// End of Cart Actions