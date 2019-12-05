import * as R from 'ramda';
import request from 'superagent';


//Change URL before deploing to Heroku
const URL = 'http://localhost:5000';


export const fetchPhones = async () => {
    const {body} = await request.get(
        URL +'/api/phones'
    );
    return body.phones;
};


export const loadMorePhones = async ({offset}) => {
    const { body } = await request.get(
        URL +'/api/phones'
    );
    return body.phones;
};


export const fetchPhoneById = async (id) => {
    const {body} = await request.get(
        URL +'/api/phones'
    );
    return R.find(R.propEq('id', id), body.phones);
};


export const fetchCategories = async () => {
    const { body } = await request.get(
        URL + '/api/categories'
    );
    return body.categories;
};


export const saveOrderToDB = async (personalData) => {
   await request.post(
       URL + '/api/order'
   )
        .set('Content-Type', 'application/json')
        .send(personalData);
};