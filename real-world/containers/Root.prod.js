/**
 * Created by 9cjin on 8/8/16.
 */
import React from 'react';
import { Provider } from 'react-redux';
import routes from '../routes';
import { Router } from 'react-router';

export default class Root extends React.Component{
    render() {
        const { store, history } = this.props;
        return(
            <Provider store={store}>
                <Router history={history} routes={routes} />
            </Provider>
        );
    }
}
Root.propTypes = {
    store: React.PropTypes.object.isRequired,
    history: React.PropTypes.object.isRequired
};