import React from 'react';
import { connect } from 'react-redux';
import Layout from '../components/layout';
import Router from 'next/router';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            credentials: {
                email: '',
                password: ''
            }
        };
    }

    componentDidMount(){
        const { pathname } = Router;
        const { isAuthenticated } = this.props;

        if( pathname === '/' && !isAuthenticated ){
            Router.push('/login');
        }
    }

    render() {
        return (
            <React.Fragment>
                <Layout title="Home"></Layout>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => (
    {
        isAuthenticated: state.authentication.isAuthenticated
    }
);

export default connect(mapStateToProps)(Index);
