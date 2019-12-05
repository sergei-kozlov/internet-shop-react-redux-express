import React from 'react';
import {connect} from 'react-redux';
import * as R from 'ramda';
import {Formik, Field, Form} from 'formik';

import {Link} from 'react-router-dom';
import BasketFormSchema from "./basket-form-schema";

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

                <Formik
                    initialValues={{
                        firstname: "",
                        secondname: "",
                        email: "",
                        phone: ""
                    }}

                    validationSchema={BasketFormSchema}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                        }, 500);
                        setSubmitting(false);
                    }}
                    render={({
                                 errors,
                                 touched,
                                 isSubmitting,
                                 handleReset,
                                 dirty
                             }) => (

                        <Form className="ui form">
                            <div className="unstackable two fields">
                                <div className="field">
                                    <label>First name</label>
                                    <div className="ui input">

                                        <Field
                                            id="firstname"
                                            name="firstname"
                                            type="text"
                                            placeholder="First name"
                                        />
                                        {errors.firstname && touched.firstname &&
                                        (<div className="field-error">{errors.firstname}</div>
                                        )}

                                    </div>
                                </div>


                                <div className="field">
                                    <label>Second name</label>
                                    <div className="ui input">
                                        <Field
                                            id="secondname"
                                            name="secondname"
                                            type="text"
                                            placeholder="Last name"
                                        />
                                        {errors.secondname && touched.secondname &&
                                        (<div className="field-error">{errors.secondname}</div>
                                        )}

                                    </div>
                                </div>
                            </div>


                            <div className="two fields">

                                <div className="field">
                                    <label>Email</label>
                                    <div className="ui input">
                                        <Field
                                            id="email"
                                            name="email"
                                            type="text"
                                            placeholder="Email"
                                        />
                                        {errors.email && touched.email &&
                                        (<div className="field-error">{errors.email}</div>
                                        )}

                                    </div>
                                </div>

                                <div className="field">
                                    <label>Phone</label>
                                    <div className="ui input">
                                        <Field
                                            id="phone"
                                            name="phone"
                                            type="text"
                                            placeholder="Phone"
                                        />

                                        {errors.phone && touched.phone &&
                                        (<div className="field-error">{errors.phone}</div>
                                        )}
                                    </div>
                                </div>
                            </div>


                            <Link to={'/successful'}>

                                <button type="submit" className="ui button" disabled={isSubmitting}
                                        onClick={() => {
                                            const personalData =
                                                {
                                                    name: document.getElementById("firstname").value,
                                                    surname: document.getElementById("secondname").value,
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

                        </Form>

                    )}
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