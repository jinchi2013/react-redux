/**
 * Created by 9cjin on 8/5/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Explore from '../components/Explore';
import { resetErrorMessage } from '../actions';

class App extends React.Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleDismissClick = this.handleDismissClick.bind(this)
    }
    handleDismissClick(e){
        this.props.resetErrorMessage();
        e.preventDefault();
    }
    handleChange( nextValue ){
        browserHistory.push(`/${nextValue}`)
    }
    renderErrorMessage(){
        const { errorMessage } = this.props;
        if(!errorMessage){
            return null;
        }
        return (
            <p>
                <b>{errorMessage}</b>
                {' '}
                (<a href="#"
                    onClick={this.handleDismissClick()}
                >
                    Dismiss
                </a>)s
            </p>
        );
    }
    render(){
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

App.propTypes = {
    //Injected by react-redux
    errorMessage: React.PropTypes.string,
    resetErrorMessage: React.PropTypes.func.isRequired,
    inputValue: React.PropTypes.string.isRequired,
    //Injected by React Router
    children: React.PropTypes.node
};
function mapStateToProps(state, ownProps){
    return  {
        errorMessage: state.errorMessage,
        inputValue: ownProps.location.pathname.substring(1)
    };
}

export default connect(mapStateToProps, {
    resetErrorMessage
})(App)



