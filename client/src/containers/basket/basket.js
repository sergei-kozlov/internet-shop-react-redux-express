import React from 'react';
import {connect} from 'react-redux';
import * as R from 'ramda';


import {
    removePhoneFromBasket,
    basketCheckout,
    cleanBasket,
    addPhoneToBasket,
    removeAllPhonesFromBasket,
} from '../../actions';

import {
    getBasketPhonesWithCount,
    getTotalBasketPrice
} from '../../selectors/selectors';

import './basket.css'
import {Link} from "react-router-dom";

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

                                    <Link to={`/phones/${phone.id}`}>
                                        <button className='btn btn-secondary btn-table-sizet'>
                                            <i className="fa fa-info-circle"/>

                                        </button>
                                    </Link>

                                    <button
                                        onClick={() => removePhoneFromBasket(phone.id)}
                                        className="btn btn-outline-danger btn-table-size">
                                        <i className="fa fa-minus-circle"/>
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
                {
                    R.not(isBasketEmpty) &&

                    <div className="total-user-checkout">
                        <b>Total Price: </b>
                        ${totalPrice}
                    </div>

                }
                {isBasketEmpty && <div>Your shopping cart is empty</div>}
            </div>

        )
    };
    const renderSidebar = () => (
        <div>

            {
                R.not(isBasketEmpty) &&
                <div>
                    <button
                        onClick= {() => cleanBasket}
                        className='btn btn-danger btn-size btn-block'
                    >
                        <span className='glyphicon glyphicon-trash'/>
                        Delete all Items
                    </button>
                    <button
                        className='btn btn-success btn-size btn-block'
                        onClick={() => basketCheckout(phones)}
                    >
                        <span className='glyphicon glyphicon-envelope'/>
                        Checkout
                    </button>
                </div>
            }
        </div>
    );

    return (
        <div className='view-container main'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-9'>
                        {renderContent()}
                    </div>
                    <div className='col-md-3'>
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