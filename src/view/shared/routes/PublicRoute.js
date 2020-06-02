import React from 'react';
import { Route } from 'react-router-dom';
import PublicLayout from 'view/layout/PublicLayout';
function PublicRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => {
                return (
                    <PublicLayout {...props}>
                        <Component {...props} />
                    </PublicLayout>
                );
            }}
        />
    );
}

export default PublicRoute;
