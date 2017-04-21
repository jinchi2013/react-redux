import React, { Component, PropTypes } from 'react';

const GITHUB_REPO = 'https://github.com/reactjs/redux';

class Explore extends Component {
    constructor (props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.value != this.props.value) {
            this.setInputValue(nextProps.value);
        }
    }

    setInputValue (val) {
        return this.refs.input.value = val;
    }

    handleKeyUp (e) {
        if (e.keyCode === 13) {
            this.handleGoClick();
        }
    }

    handleGoClick () {
        this.props.onChange(this.getInputValue());
    }

    getInputValue () {
        return this.refs.input.value;
    }

    render () {
        const { children, inputValue } = this.props;
        return (
            <div>
                <p>Type a username or repo full name and hit 'Go': </p>
                <iput
                    size="45"
                    ref="input"
                    defaultValue={this.props.value}
                    onKeyUp={this.handleKeyUp}
                />
                <button onClick={this.handleGoClick} >
                    Go !
                </button>
                <p>
                    Code on <a href={GITHUB_REPO} target="_blank">Github</a>
                </p>
                <p>
                    Move the DevTools with Ctrl+W or hide them with Ctrl+H
                </p>
            </div>
        );
    }
}

Explore.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Explore;
