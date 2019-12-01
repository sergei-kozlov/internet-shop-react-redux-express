import React from 'react';
import {connect} from 'react-redux';
import * as R from 'ramda';

import {Link} from 'react-router-dom';
import {Form, Field} from 'react-final-form';


import {
    removePhoneFromBasket,
    basketCheckout,
    cleanBasket,
    addPhoneToBasket,
    removeAllPhonesFromBasket
} from '../../actions';

import {
    getBasketPhonesWithCount,
    getTotalBasketPrice
} from '../../selectors/selectors';

import './basket.css'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2))
};

const required = value => (value ? undefined : 'Required');
const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined);
const minValue = min => value =>
    isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;
const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined);


const Basket = ({
                    phones,
                    totalPrice,
                    removePhoneFromBasket,
                    basketCheckout,
                    cleanBasket,
                    addPhoneToBasket,
                    removeAllPhonesFromBasket
                }) => {
    const isBasketEmpty = R.isEmpty(phones);

    const renderContent = () => {
        return (
            <div>
                <div className='table-responsive'>
                    <table className='table-bordered table-striped table-confidence table-cart'>
                        <thead>
                        <tr>
                            <th scope="col">Item Image</th>
                            <th scope="col">Item Description</th>
                            <th scope="col">Item Price</th>
                            <th scope="col">Item Count</th>
                            <th scope="col">Actions</th>
                        </tr>
                        </thead>

                        <tbody>
                        {phones.map((phone, index) => (
                            <tr
                                key={index}
                                className='item-checkout'
                            >
                                <td className="first-column-checkout">
                                    <img
                                        className="rounded img-fluid img-size"
                                        src={phone.image}
                                        alt={phone.name}
                                    />
                                </td>

                                <td>{phone.name}</td>
                                <td>${phone.price}</td>
                                <td>{phone.count}</td>
                                <td>
                                    <button
                                        onClick={() => addPhoneToBasket(phone.id)}
                                        className="btn btn-outline-success btn-table-size">
                                        <i className="fa fa-plus-circle"/>
                                    </button>
                                    <button
                                        onClick={() => removeAllPhonesFromBasket(phone.id)}
                                        className="btn btn-outline-danger btn-table-size">
                                        <i className="fa fa-trash-o"/>
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                {R.not(isBasketEmpty) && <div className="total-user-checkout">
                    <b>Total Price: </b> ${totalPrice}
                </div>
                }
                {isBasketEmpty && <div class="message">Your shopping cart is empty</div>}
            </div>
        )
    };


    const app = phones.map((phoneOrder, index) => (

        R.assoc('count', phoneOrder.count, R.pick(['name', 'price'], phoneOrder))
    ));

    const phonesOrdered = {app};


    const renderSidebar = () => (


        <div>
            {R.not(isBasketEmpty) &&
            <div>
                <Form
                    onSubmit={onSubmit}
                    render={({handleSubmit, form, submitting, pristine, values}) => (

                        <form className="ui form">
                            <div className="unstackable two fields">

                                <Field name="firstName" validate={required}>
                                    {({input, meta}) => (
                                        <div className="field">
                                            <label>First name</label>
                                            <div className="ui input">
                                                <input id="name" {...input} type="text" placeholder="First name"/>
                                                {meta.error && meta.touched && <span>{meta.error}</span>}
                                            </div>
                                        </div>
                                    )}
                                </Field>

                                <Field name="lastName" validate={required}>
                                    {({input, meta}) => (
                                        <div className="field">
                                            <label>First name</label>
                                            <div className="ui input">
                                                <input id="surname" {...input} type="text" placeholder="Last name"/>
                                                {meta.error && meta.touched && <span>{meta.error}</span>}
                                            </div>
                                        </div>
                                    )}
                                </Field>
                            </div>


                            <div className="two fields">
                                <Field name="Email" validate={required}>
                                    {({input, meta}) => (
                                        <div className="field">
                                            <label>Email</label>
                                            <div className="ui input">
                                                <input id="email"{...input} type="text" placeholder="Email"/>
                                                {meta.error && meta.touched && <span>{meta.error}</span>}
                                            </div>
                                        </div>
                                    )}
                                </Field>


                                {/*<div className="field">*/}
                                {/*    <label>Address</label>*/}
                                {/*    <div className="ui input"><input type="text" placeholder="Address"/></div>*/}
                                {/*</div>*/}

                                <div className="field">
                                    <label>Phone</label>
                                    <div className="ui input">
                                        <input id="phone" type="text" placeholder="Phone"/></div>
                                </div>
                            </div>
                            {/*<div className="field">*/}
                            {/*    <div className="ui checkbox">*/}
                            {/*        <input type="checkbox" className="hidden" readOnly="" tabIndex="0"/>*/}
                            {/*        <label>I agree to the Terms and Conditions</label>*/}
                            {/*    </div>*/}
                            {/*</div>*/}


                            <Link to={'/successful'}>
                                <button type="submit" className="ui button" disabled={submitting}

                                        onClick={() => {
                                            const personalData =
                                                {
                                                    name: document.getElementById("name").value,
                                                    surname: document.getElementById("surname").value,
                                                    email: document.getElementById("email").value,
                                                    phone: document.getElementById("phone").value
                                                };
                                            const order = R.mergeDeepLeft(personalData, phonesOrdered);
                                            basketCheckout(order);
                                            cleanBasket();
                                        }}>
                                    Checkout
                                </button>
                            </Link>
                            <button className="ui button btn-reset" type="button"
                                onClick={form.reset}
                                disabled={submitting || pristine}
                            >
                                Reset
                            </button>

                        </form>
                    )
                    }

                />
            </div>
            }
        </div>
    );

    return (
        <div className='view-container main'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8'>
                        {renderContent()}
                    </div>
                    <div className='col-md-4'>
                        {renderSidebar()}
                    </div>

                </div>
            </div>
        </div>
    )
};

// const Validation = () => {
//     return (
//         <Fragment>
//             <ValidationForm
//                 onSubmit={onSubmit}
//                 validate={values => {
//                     const errors = {};
//                     if (!values.firstName) {
//                         errors.firstName = 'Required'
//                     }
//                     if (!values.lastName) {
//                         errors.lastName = 'Required'
//                     }
//                     if (!values.age) {
//                         errors.age = 'Required'
//                     } else if (isNaN(values.age)) {
//                         errors.age = 'Must be a number'
//                     } else if (values.age < 18) {
//                         errors.age = 'No kids allowed'
//                     }
//                     return errors
//                 }}
//                 render={({ handleSubmit, reset, submitting, pristine, values }) => (
//                     <form onSubmit={handleSubmit}>
//                         <div>
//                             <label>First Name</label>
//                             <Field
//                                 name="firstName"
//                                 component="input"
//                                 placeholder="First Name"
//
//                             />
//                         </Fragment>
//
//                         )
//                         };

const mapStateToProps = state => {
    return {
        phones: getBasketPhonesWithCount(state),
        totalPrice: getTotalBasketPrice(state)
    }
};

const mapDispatchToProps = {
    removePhoneFromBasket,
    cleanBasket,
    basketCheckout,
    addPhoneToBasket,
    removeAllPhonesFromBasket
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);