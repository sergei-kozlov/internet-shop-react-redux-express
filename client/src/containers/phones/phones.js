import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as R from 'ramda';


import {
    fetchPhones,
    loadMorePhones,
    addPhoneToBasket,
    fetchCategories
} from '../../actions';
import {getPhones} from '../../selectors/selectors';
import Layout from '../layout';

import Spinner from "../../components/spinner";
import ErrorIndicator from "../../components/error-indicator";

import './phones.css';


class Phones extends Component {
    componentDidMount() {
        this.props.fetchPhones();
        this.props.fetchCategories()
    }

    renderPhone(phone, index) {
        const {addPhoneToBasket} = this.props;
        const shortDescription = `${R.take(30, phone.description)}...`;

        return (

            <div className="col-sm-4" key={index}>

                <div className='thumbnail'>
                    <img
                        className="img-thumbnail img-fluid figure-img"
                        src={phone.image}
                        alt={phone.name}
                    />
                    <div className="figure-caption">
                        <h6 className="pull-right">${phone.price}</h6>
                        <h5>
                            <Link to={`/phones/${phone.id}`}>
                                {phone.name}
                            </Link>
                        </h5>
                        <p>{shortDescription}</p>
                        <span>
                            <button type="button" className="btn btn-primary btn-buy-size"
                                    onClick={() => addPhoneToBasket(phone.id)}>
                                Buy Now!
                            </button>


                            <Link to={`/phones/${phone.id}`}>
                                <button className='btn btn-secondary btn-info-size pull-right'>
                                    More info
                                </button>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>

        )
    }

    render() {

        const {loading, error} = this.props;

        if (loading) {
            return <Spinner/>;
        }

        if (error) {
            return <ErrorIndicator/>;
        }

        const {phones, loadMorePhones} = this.props;
        return (
            <Layout>
                <div className="row books">
                    {phones.map((phone, index) => this.renderPhone(phone, index))}
                </div>

                <div>
                    <button type="button" className="btn btn-secondary btn-load-more-size btn-block"
                            onClick={loadMorePhones}
                    >
                        Load More
                    </button>
                </div>
            </Layout>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    phones: getPhones(state, ownProps),
    loading: state.phonesPage.loading,
    error: state.phonesPage.error
});

const mapDispatchToProps = {
    fetchPhones,
    loadMorePhones,
    addPhoneToBasket,
    fetchCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(Phones);
