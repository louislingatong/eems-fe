import Head from 'next/head';
import { connect } from 'react-redux';
import Header from './Header';

const Layout = ({ title, children, isAuthenticated }) => (
    <div>
        <Head>
            <title>{ title }</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css" />
        </Head>
        {isAuthenticated && <Header></Header>}
        <div className="has-text-centered">
            { children }
        </div>
    </div>
);

const mapStateToProps = (state) => (
    {
        isAuthenticated: state.authentication.isAuthenticated
    }
);

export default connect(mapStateToProps)(Layout);
