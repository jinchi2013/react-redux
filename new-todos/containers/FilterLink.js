import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link';

let mapStateToProps = function (state, ownProps) {
    console.log(state);
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

let mapDispatchProps = function (dispatch, ownProps) {
    return {
        onClick: ()=>{
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    };
}

let FilterLink = connect(
    mapStateToProps,
    mapDispatchProps
)(Link);

export default FilterLink;