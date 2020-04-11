import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import AdminLayout from '../layouts/admin';
import { authCheck } from '../redux/actions/authActions';
import '../scss/styles.scss';

class Dashboard extends React.Component {

    componentDidMount() {
        const { isAuthenticated, dispatch} = this.props;

        if (isAuthenticated === null) {
            dispatch(authCheck());
        } else if (typeof isAuthenticated === 'boolean' && !isAuthenticated) {
            Router.push('/login');
        } else {
            Router.push('/dashboard');
        }
    }

    componentDidUpdate() {
        const { isAuthenticated } = this.props;

        if (isAuthenticated) {
            Router.push('/dashboard');
        } else {
            Router.push('/login');
        }
    }

    render() {
        return (
            <React.Fragment>
                <AdminLayout />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => (
    {
        isAuthenticated: state.auth.isAuthenticated
    }
);

export default connect(mapStateToProps)(Dashboard);