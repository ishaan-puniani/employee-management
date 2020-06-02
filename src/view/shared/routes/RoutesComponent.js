import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Route,
    Switch,
    withRouter,
} from 'react-router-dom';
import PublicRoute from 'view/shared/routes/PublicRoute';
import PrivateRoute from 'view/shared/routes/PrivateRoute';
import CustomLoadable from 'view/shared/CustomLoadable';
import ProgressBar from 'view/shared/ProgressBar';
import routes from 'view/routes';

class RoutesComponent extends Component {
    componentWillMount() {
        if (this.props.loading) {
            ProgressBar.start();
        }
    }

    componentDidUpdate(prevProps) {}

    get currentUser() {
        return this.props.currentUser;
    }

    render() {
        if (this.props.loading) {
            return <div />;
        }

        return (
            <Switch>
                {routes.publicRoutes.map((route) => (
                    <PublicRoute
                        key={route.path}
                        exact
                        path={route.path}
                        x
                        component={CustomLoadable({
                            loader: route.loader,
                        })}
                    />
                ))}
                {routes.privateRoutes.map((route) => (
                    <PrivateRoute
                        key={route.path}
                        exact
                        path={route.path}
                        x
                        component={CustomLoadable({
                            loader: route.loader,
                        })}
                    />
                ))}

                {routes.simpleRoutes.map((route) => (
                    <Route
                        key={route.path}
                        exact
                        path={route.path}
                        component={CustomLoadable({
                            loader: route.loader,
                        })}
                    />
                ))}
            </Switch>
        );
    }
}

const select = (state) => ({});

export default withRouter(connect(select)(RoutesComponent));
