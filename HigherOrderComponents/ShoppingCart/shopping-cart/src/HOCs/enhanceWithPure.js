import React, { PureComponent } from 'react'

const enhanceWithPure = () => (WrappedComponent) => {
	class WithPure extends PureComponent {
		render() {
			return <WrappedComponent {...this.props} />
		}
	}

	return WithPure
}

export default enhanceWithPure
