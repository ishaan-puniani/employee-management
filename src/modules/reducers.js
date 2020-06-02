import { connectRouter } from 'connected-react-router';
import layout from 'modules/layout/layoutReducers';
import { combineReducers } from 'redux';

export default (history) =>
    combineReducers({
        router: connectRouter(history),
        layout,
    });
