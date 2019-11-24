import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchPhone} from '../../actions';

import './shop-search.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.searchPhone(this.state.value)
    }

    render() {

        return (

            <div className="container main-search">
                <div className="row">

                    <div className="col-md-12">
                        <form onSubmit={this.handleSubmit}>
                            <div className="input-group">

                                <input
                                    onChange={this.handleChange}
                                    type="text"
                                    className="form-control"
                                    placeholder="Search..."/>
                                <div className="input-group-append">
                                    <button className="btn btn-secondary">
                                        <i className="fa fa-search"/>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        )
    }
}


const mapDispatchToProps = {
    searchPhone
};


export default connect(null, mapDispatchToProps)(Search);