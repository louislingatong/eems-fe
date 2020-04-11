import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import '../scss/styles.scss';

import { authCheck } from '../redux/actions/authActions';

class Index extends React.Component {

    componentDidMount() {
        const { isAuthenticated, dispatch} = this.props;

        if (!isAuthenticated) {
            dispatch(authCheck());
        }
    }

    componentDidUpdate() {
        const { isAuthenticated } = this.props;

        if (isAuthenticated) {
            Router.replace('/dashboard');
        } else {
            Router.replace('/login');
        }
    }

    render() {
        return <React.Fragment />;
    }
}

const mapStateToProps = (state) => (
    {
        isAuthenticated: state.auth.isAuthenticated
    }
);


export default connect(mapStateToProps)(Index);