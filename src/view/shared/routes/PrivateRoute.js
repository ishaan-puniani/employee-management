import React from 'react';
import { Route } from 'react-router-dom';
import Layout from 'view/layout/Layout';
function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => {
                return (
                    <Layout {...props}>
                        <Component {...props} />
                    </Layout>
                );
            }}
        />
    );
}

export default PrivateRoute;
