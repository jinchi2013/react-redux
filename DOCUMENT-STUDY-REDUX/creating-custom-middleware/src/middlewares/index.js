export const logger = store => next => action => {
	console.group(action.type)
	console.info('dispatching', action)
	let result = next(action) // next(action) will dispatch action and return the action to next middleware
 	console.log('next state', store.getState())
	console.groupEnd(action.type)
	return result
}

export const timeoutScheduler = store => next => action => {
  if (!action.meta || !action.meta.delay) {
    return next(action)
  }

  let timeoutId = setTimeout(
    () => {
    	next(action)
    	console.log('get state after setTimeout', store.getState())
    },
    action.meta.delay
  )

  return function cancel() {
    clearTimeout(timeoutId)
  }
}
