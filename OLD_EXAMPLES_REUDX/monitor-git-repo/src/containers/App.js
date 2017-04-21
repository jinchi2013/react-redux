import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Explore from '../components/Explore';
import { resetErrorMessage } from '../actions';

class App extends React.Component {
    constructor (props) {
        super(props);
        this.handleDismissClick = this.handleDismissClick.bind(this);
    }

    handleDismissClick (e) {
        this.props.resetErrorMessage();
        e.preventDefault();
    }

    handleChange () {
        browserHistory.push(`/${nextValue}`)
    }

    renderErrorMessage () {
        const { errorMessage } = this.props;
        if (!errorMessage) {
            return null;
        }

        return (
            <p style={{ backgroundColor: '#e99', padding: 10 }}>
                <b>{ errorMessage }</b>
                { ' ' }
                (<a onClick={this.handleDismissClick}>
                    Dismiss
                </a>)
            </p>
        );
    }

    render () {
        const { children, inputValue } = this.props;
        return (
            <div>
                <Explore value={inputValue}
                         onChange={this.handleChange}/>
                <hr/>
                {this.renderErrorMessage()}
                {children}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    errorMessage: state.errorMessage,
    inputValue: ownProps.location.pathname.substring(1)
});

export default connect(mapStateToProps, {
    resetErrorMessage
})(App);