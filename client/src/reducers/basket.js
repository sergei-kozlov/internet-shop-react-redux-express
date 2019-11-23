import * as R from 'ramda';



import {
    ADD_PHONE_TO_BASKET,
    REMOVE_PHONE_FROM_BASKET,
    CLEAN_BASKET,
    REMOVE_ALL_PHONES_FROM_BASKET
} from '../actionTypes';

const initialState = [];



// const updateCartItems = (cartItem, item, idx) =>{
//
//     if (item.count === 0) {
//         return[
//             ...cartItem.slice(0, idx),
//             ...cartItem.slice(idx + 1)
//         ];
//     }
//
//     if(idx=== -1) {
//         return [
//             ...cartItem,
//             item
//         ];
//     }
//
//     return [
//         ...cartItem.slice(0, idx),
//         item,
//         ...cartItem.slice(idx+1)
//     ];
// };
//
//
// const updateCartItem = (phone, item = {}, quantity) => {
//     const {
//         id = phone.id,
//         count = 0,
//         name = phone.name,
//         image = phone.image,
//         total = 0
//     } = item;
//
//     return {
//         id,
//         name,
//         image,
//         count: count + quantity,
//         total: total + quantity * phone.price
//     }
// };
//
// const updateOrder = (this.state., phoneId, quantity) => {
//     const{basketTemp: {phones}, }
//
// }

export default (state = initialState, {type, payload}) => {
    switch (type) {

        case ADD_PHONE_TO_BASKET:
            return R.append(payload, state);

        case REMOVE_PHONE_FROM_BASKET:
            return R.drop(R.of(payload), state);

        case REMOVE_ALL_PHONES_FROM_BASKET:
            return R.without(R.of(payload), state);

        case CLEAN_BASKET:
            return [];

        default:
            return state
    }
};



