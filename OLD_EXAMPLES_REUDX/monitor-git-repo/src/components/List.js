import React, { Component, PropTypes } from 'react';

class List extends Component {
    static propTypes = {
        loadingLabel: PropTypes.string.isRequired,
        pageCount: PropTypes.number,
        renderItem: PropTypes.func.isRequired,
        items: PropTypes.array.isRequired,
        isFetching: PropTypes.bool.isRequired,
        onLoadMoreClick: PropTypes.func.isRequired,
        nextPageUrl: PropTypes.string
    };

    static defaultProps = {
        isFetching: true,
        loadingLabel: 'loading...'
    };

    constructor(props) {
        super(props);
    }

    renderLoadMore() {
        const { isFetching, onLoadMoreClick } = this.props;
        return (
            <button style={{ fontSize: '150%' }}
                    onClick={onLoadMoreClick}
                    disabled={isFetching}>
                {isFetching ? 'Loading...' : 'Load More'}
            </button>
        );
    }

    render () {
        const {
            pageCount,
            renderItem,
            items,
            isFetching,
            nextPageUrl } = this.props;

        const isEmpty = items.length === 0;

        if (isEmpty && isFetching) {
            return <h2><i>{LoadingLabel}</i></h2>
        }

        const isLastPage  = !nextPageUrl;

        if (isEmpty && isLastPage) {
            return <h1><i>Nothing here!</i></h1>
        }

        return (
            <div>
                {items.map(renderItem)}
                {pageCount > 0 && !isLastPage && this.renderLoadMore()}
            </div>
        );
    }
}
