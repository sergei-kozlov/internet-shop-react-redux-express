import * as R from 'ramda';
import request from 'superagent';

export const fetchPhones = async () => {
    const {body} = await request.get(
        'http://localhost:5000/api/phones'
    );
    return body.phones;

};


export const loadMorePhones = async ({offset}) => {
    const { body } = await request.get(
        'http://localhost:5000/api/phones'
    );
    return body.phones;

};


export const fetchPhoneById = async (id) => {
    const {body} = await request.get(
        'http://localhost:5000/api/phones'
    );
    return R.find(R.propEq('id', id), body.phones);

};


export const fetchCategories = async () => {
    const { body } = await request.get(
        'http://localhost:5000/api/categories'
    );
    return body.categories;

};