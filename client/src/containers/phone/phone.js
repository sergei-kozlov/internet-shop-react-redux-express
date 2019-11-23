import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import * as R from 'ramda';
import {Link} from 'react-router-dom';

import {fetchPhoneById, addPhoneToBasket} from '../../actions';
import {getPhoneById} from '../../selectors/selectors';
import Spinner from '../../components/spinner';
//
import './phone.css'


class Phone extends Component {

    componentDidMount() {

        const phoneId = this.props.match.params.id;

        this.props.fetchPhoneById(phoneId)
    }

    renderField() {
        const {phone} = this.props;

        const columnField = R.compose(
            R.toPairs,
            R.pick([
                'cpu',
                'camera',
                'size',
                'weight',
                'display',
                'battery',
                'memory'
            ])
        )(phone);

        return columnField.map(([key, value]) => (
                <div className='parent' key={key}>

                    <div className="pull-left">
                            <b> {key}: &nbsp; </b>
                    </div>
                    <div className="pull-left">
                        {value}
                    </div>
                </div>
            )
        )
    }

    renderContent() {
        const {phone} = this.props;
        const content = <PhoneImageView phone={phone}/>;

        return (


            <div className="thumbnail">
                <div className="img-thumbnail float-img">
                    {content}
                </div>

                <div className='caption-full'>
                    <h4 className='pull-right'>${phone.price}</h4>
                    <h4>{phone.name}</h4>
                    <p>{phone.description}</p>
                </div>

            </div>

        )
    }

    renderSidebar() {
        const {phone, addPhoneToBasket} = this.props;

        return (
            <div>
                <span className='lead logo'>KWIK-E-MART</span>

                <div className='form-group'>
                    <h4>{phone.name}</h4>
                    <h4>${phone.price}</h4>
                </div>
                <Link to='/' className='btn btn-secondary btn-block btn-height'>
                    Back to store
                </Link>
                <button
                    type='button'
                    className='btn btn-primary btn-block btn-height'
                    onClick={() => addPhoneToBasket(phone.id)}
                >
                    Add to cart
                </button>
            </div>
        )
    }


    render() {
        const {loading} = this.props;

        const spinner = loading ? <Spinner/> : null;


        return (
            <div className='view-container'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-4'>
                            {spinner}
                            {this.props.phone && this.renderContent()}
                        </div>
                        <div className="col-sm-5">
                            {this.props.phone && this.renderField()}

                        </div>
                        <div className='col-sm-3'>
                            {this.props.phone && this.renderSidebar()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const PhoneImageView = ({phone}) => {
    return (
        <Fragment>
            <img
                src={phone.image}
                alt={phone.name}
            />
        </Fragment>
    );
};

const mapStateToProps = state => {
    return {
        loading: state.phonePage.loading,
        phone: getPhoneById(state, state.phonePage.id)
    }
};

const mapDispatchToProps = {
    fetchPhoneById,
    addPhoneToBasket
};

export default connect(mapStateToProps, mapDispatchToProps)(Phone);