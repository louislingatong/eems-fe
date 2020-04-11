import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import LoginLayout from '../layouts/login';
import { authCheck } from '../redux/actions/authActions';
import '../scss/styles.scss';

class Login extends React.Component {

    componentDidMount() {
        const { isAuthenticated, dispatch} = this.props;

        if (!isAuthenticated) {
            dispatch(authCheck());
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
                <LoginLayout />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => (
    {
        isAuthenticated: state.auth.isAuthenticated
    }
);

export default connect(mapStateToProps)(Login);
