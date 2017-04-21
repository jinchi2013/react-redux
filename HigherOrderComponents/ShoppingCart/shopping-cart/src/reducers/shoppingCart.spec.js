import shoppingCart, * as fromShoppingCart from './shoppingCart'

describe('shoppingCart reducers', ()=> {
	it('resovle ADD_TO_CART action', ()=>{
		const action = {
			type: 'ADD_TO_CART',
			productId: '1'
		}

		const state = {
			addedProductsId: [],
			addedProductsQuantity: {}
		}

		expect(shoppingCart(state, action)).toEqual({
			addedProductsId: ['1'],
			addedProductsQuantity: {
				'1': 1
			}
		})
	})

	it('should resovle ADD_TO_CART on same id but update the quantity', ()=> {
		const nextState = {
			addedProductsId: ['1'],
			addedProductsQuantity: {
				'1': 1
			}
		}

		const action = {
			type: 'ADD_TO_CART',
			productId: '1'
		}

		expect(shoppingCart(nextState, action)).toEqual({
			addedProductsId: ['1'],
			addedProductsQuantity: {
				'1': 2
			}
		})
	})

	it('should resolve REMOVE_PRODUCT_IN_CART action', ()=>{
		const nextState = {
			addedProductsId: ['1', '2'],
			addedProductsQuantity: {
				'1': 1,
				'2': 2
			}
		}

		const action = {
			type: 'REMOVE_PRODUCT_IN_CART',
			productId: '2'
		}

		expect(shoppingCart(nextState, action)).toEqual({
			addedProductsId: ['1'],
			addedProductsQuantity: {
				'1': 1
			}
		})
	})

	it('should resolve REQUEST_CHECKOUT action', ()=> {
		const state = {
			addedProductsId: ['1', '2'],
			addedProductsQuantity: {
				'1': 1,
				'2': 2
			}
		}

		const action = {
			type: 'REQUEST_CHECKOUT'
		}

		expect(shoppingCart(state, action)).toEqual({
			addedProductsId: [],
			addedProductsQuantity: {}
		})
	})

	it('should resolve INCREASE_PRODUCT_QUANTITY', ()=>{
		const state = {
			addedProductsId: ['1', '2'],
			addedProductsQuantity: {
				'1': 1,
				'2': 2
			}
		}

		const action = {
			type: 'INCREASE_PRODUCT_QUANTITY',
			productId: 1
		}

		expect(shoppingCart(state, action)).toEqual({
			addedProductsId: ['1', '2'],
			addedProductsQuantity: {
				'1': 2,
				'2': 2
			}
		})
	})

	it('should resolve DECREASE_PRODUCT_QUANTITY', ()=> {
		const state = {
			addedProductsId: ['1', '2'],
			addedProductsQuantity: {
				'1': 2,
				'2': 2
			}
		}

		const action = {
			type: 'DECREASE_PRODUCT_QUANTITY',
			productId: 1
		}

		expect(shoppingCart(state, action)).toEqual({
			addedProductsId: ['1', '2'],
			addedProductsQuantity: {
				'1': 1,
				'2': 2
			}
		})
	})
})

describe('selectors in shoppingCart', ()=>{

	it('should get the product quantity in the cart by id and the array of ids in cart', ()=>{
		const state = {
			addedProductsId: ['1','2'],
			addedProductsQuantity: {
				'1':1,
				'2':2
			}
		}

		expect(fromShoppingCart.getProductQuantityInCart(state, 2)).toEqual(2)
		expect(fromShoppingCart.getAddedProductsIdInCart(state)).toEqual(['1','2'])
	})
})