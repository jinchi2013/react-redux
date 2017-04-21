export const middlewareAction = () => ({
	type: 'MIDDLEWARE_ACTION'
})

export const metaDelay = () => ({
	type: 'METADELAY',
	meta: {
		delay: 100
	}
})