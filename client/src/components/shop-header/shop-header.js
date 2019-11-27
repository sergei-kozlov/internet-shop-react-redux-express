import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {
    getTotalBasketCount,
    getTotalBasketPrice
} from '../../selectors/selectors';

import './shop-header.css';
import Logo from "./images/kwik-e-mart_cr_small.png";

const ShopHeaderCart = ({totalBasketCount, totalPrice}) => {

    return (
        <header >
            <div id="top-header" >

                <div className="container">

                    <div className="pull-left">
                        <div className="header-logo">
                            <Link to='/' className="logo" exact="true" >
                                <img src={Logo} alt="Welcome to KWIK-E-MART"/>
                            </Link>
                        </div>
                    </div>

                    <div className="pull-right">
                        <ul className="header-top-links">
                            <li><Link to='/store'>Store</Link></li>
                            <li><Link to='./newsletter'>Newsletter</Link></li>
                            <li><Link to='/faq'>FAQ</Link></li>
                            {/*<li>*/}
                            {/*    <Link to='/login' className="text-uppercase">Login</Link>*/}
                            {/*    /*/}
                            {/*    <Link to='/join' className="text-uppercase">Join</Link>*/}


                            {/*</li>*/}

                            <li>
                                <Link to='/cart'>
                                <span className="header-btns-icon">
                                    <i className="fa fa-shopping-cart"/>
                                    <span> </span>
                                    <span className="qty">{totalBasketCount}</span>
                                </span> <span>  </span>
                                    <strong>My Cart:</strong>
                                    <span>{totalPrice}</span>
                                </Link>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

const mapStateToProps = state => {
    return {
        totalBasketCount: getTotalBasketCount(state),
        totalPrice: getTotalBasketPrice(state)
    };
};

export default connect(mapStateToProps, null)(ShopHeaderCart);





