import * as R from 'ramda';
import request from 'superagent';

// import phones from './mockPhones';
// import categories from './mockCategories';




export const fetchPhones = async () => {
    const {body} = await request.get(
        'http://localhost:5000/api/phones'
    );
    return body.phones;

    // return new Promise(resolve => {
    //         resolve(phones)
    // })
};



export const loadMorePhones = async ({offset}) => {

    const { body } = await request.get(
        'http://localhost:5000/api/phones'
    );
    return body.phones;


    // return new Promise(resolve => {
    //     resolve(phones)
    // })
};


export const fetchPhoneById = async (id) => {
    const {body} = await request.get(
        'http://localhost:5000/api/phones'
    );
    return R.find(R.propEq('id', id), body.phones);

    // return new Promise(resolve => {
    //     const phone = R.find(R.propEq('id', id), phones);
    //     resolve(phone)
    //
    // })
};



export const fetchCategories = async () => {
    const { body } = await request.get(
        'http://localhost:5000/api/categories'
    );

    return body.categories;

    //
    // return new Promise(resolve => {
    //     resolve(categories)
    //
    // })
};