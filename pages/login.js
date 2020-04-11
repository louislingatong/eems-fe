import React from 'react';
import { connect } from 'react-redux';
import { login } from '../services/authService';
import '../scss/styles.scss';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            credentials: {
                email: '',
                password: ''
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(name, value) {
        this.setState({credentials: {...this.state.credentials, [name]: value}});
    }

    handleSubmit(e) {
        e.preventDefault();

        const { credentials } = this.state;
        const { onSubmit } = this.props;

        onSubmit(credentials);
    }

    render() {
        return (
            <div title="Login">
                <h3 className="title is-3">Login</h3>
                <form onSubmit={this.handleSubmit} className="container" style={{width: '540px'}}>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <input
                                name="username"
                                className="input"
                                type="email"
                                placeholder="Email"
                                required
                                value={this.state.email}
                                onChange={e => this.handleChange(e.target.name, e.target.value)}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"/>
                            </span>
                            <span className="icon is-small is-right">
                                <i className="fas fa-check"/>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left">
                            <input
                                name="password"
                                className="input"
                                type="password"
                                placeholder="Password"
                                required
                                value={this.state.credentials.password}
                                onChange={e => this.handleChange(e.target.name, e.target.value)}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock"/>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-text-centered">
                            <button type="submit" className="button is-success">
                                Sign In
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        isAuthenticated: state.auth.isAuthenticated
    }
);

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (data) => {
            dispatch(login(data));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
