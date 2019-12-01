import React from 'react'
import {Link} from 'react-router-dom';
import './afterOdrer-page.css';

const AfterOrderPage = () => {
    return (
        <div className="container main">
            <div className="row">
                <div className="col-12"/>
                <h1 className="h1">Congratulation! You are Awesome :)</h1>
            </div>
            <Link to='/'>
                <button
                    type='button'
                    className='btn btn-primary btn-block btn-height butt'>
                    Back to store
                </button>
            </Link>
        </div>
    );
};

export default AfterOrderPage;