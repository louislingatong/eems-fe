import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { logout } from '../../services/authService';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        const { onLogout } = this.props;

        onLogout();
    }

    render() {
        const { isAuthenticated } = this.props;

        return (
            <div className="tabs is-centered">
                <ul>
                    <Link href="/"><a>Home</a></Link>
                    {isAuthenticated && <li onClick={this.handleLogout}><a>Logout</a></li>}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        isAuthenticated: state.authentication.isAuthenticated
    }
);

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => {
            dispatch(logout());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);