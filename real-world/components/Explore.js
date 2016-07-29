/**
 * Created by 9cjin on 7/29/16.
 */
import React from 'react';

const GITHUB_REPO = "http://github.com/reactjs/redux";

class Explore extends React.Component{
    constructor(props){
        super(props)
        this.handleKeyUp = this.handleKeyUp.bind(this)
        this.handleGoClick = this.handleGoClick.bind(this)
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.value !== this.props.value) {
            this.setInputValue(nextProps.value)
        }
    }
    getInputValue() {
        return this._input.value
    }
    setInputValue(val) {
        this._input.value = val
    }
    handleKeyUp(e) {
        if(e.keyCode === 13){
            this.handleGoClick()
        }
    }
    handleGoClick() {
        this.props.onChange(this.getInputValue())
    }
    render(){
        return(
            <div>
                <p>Type a username or repo full name and hit Go: </p>
                <input
                    size="45"
                    ref= {(c)=> this._input = c}
                    defaultValue={this.props.value}
                    onKeyUp={this.handleKeyUp}
                />
                <button onClick={this.handleGoClick}>
                    GO !
                </button>
                <p>
                    Code on <a href={GITHUB_REPO} target="_blank">Github</a>.
                </p>
                <p>
                    Move the DevTools with Ctrl+W or hide them with Ctrl+H
                </p>
            </div>
        );
    }
}

Explore.propTypes = {
    value: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired
}
export default Explore;