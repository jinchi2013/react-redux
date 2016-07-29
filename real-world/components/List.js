/**
 * Created by 9cjin on 7/29/16.
 */
import React from 'react';

class List extends React.Component{
    renderLoadMore() {
        const { isFetching, onLoadMoreClick } = this.props;
        <button
            style={
                {
                    fontSize: '150%'
                }
            }
            onClick={onLoadMoreClick}
            disabled={isFetching}
        >
            { isFetching ? 'Loading...' : 'Load More' }
        </button>
    }

    render() {
        const { isFetching, nextPageUrl, pageCount, items, renderItem, loadingLabel } = this.props;
        const isEmpty = items.length === 0;
        if(isEmpty && isFetching){
            return (
                <h2><i>{loadingLabel}</i></h2>
            );
        }
        const isLastPage = !nextPageUrl;
        if(isEmpty && isLastPage){
            return (
                <h1><i>Nothing here !</i></h1>
            );
        }

        return (
            <div>
                { items.map(renderItem) }
                { pageCount > 0 && !isLastPage && this.renderLoadMore() }
            </div>
        );
    }
}

List.propTypes = {
    loadingLabel: React.PropTypes.string.isRequired,
    pageCount: React.PropTypes.number,
    renderItem: React.PropTypes.func.isRequired,
    items: React.PropTypes.array.isRequired,
    isFetching: React.PropTypes.bool.isRequired,
    onLoadMoreClick: React.PropTypes.func.isRequired,
    nextPageUrl: React.PropTypes.string
}

List.defaultProps = {
    isFetching: true,
    loadingLabel: 'loading...'
}

export default List;