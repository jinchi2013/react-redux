import products, * as fromProducts from './products'

describe('products reducers', ()=>{
	it('resolve REQUEST_PRODUCTS action', ()=>{

		const action = {
			type: 'REQUEST_PRODUCTS'
		}

		expect(products({}, action)).toEqual({
			productsIdMap: {
				isRequesting: true,
				requestFailed: false,
			},
			productsIdArray: []
		})
	})

	it('resovle RECEIVE_PRODUCTS action', ()=>{
		const action = {
			type: 'RECEIVE_PRODUCTS',
			products: [
				{
					id: '1',
					itemName: 'p1'
				},
				{
					id: '2',
					itemName: 'p2'
				}
			]
		}

		const state = {
			productsIdMap: {
				isRequesting: true,
				requestFailed: false
			},
			productsIdArray: []
		}

		expect(products(state, action)).toEqual({
			productsIdMap: {
				'1': {
					id: '1',
					itemName: 'p1'
				},
				'2': {
					id: '2',
					itemName: 'p2'
				},
				isRequesting: false,
				requestFailed: false
			},
			productsIdArray: ['1','2']
		})

	})

	it('resolve UPDATE_PRODUCT_QUANTITY and INCREASE_PRODUCT_QUANTITY', ()=>{
		const action1 = {
			productId: "1",
			type: 'UPDATE_PRODUCT_QUANTITY'
		}

		const action2 = {
			productId: "2",
			type: 'INCREASE_PRODUCT_QUANTITY'
		}

		const state = {
			productsIdMap: {
				'1': {
					id: '1',
					itemName: 'p1',
					quantityRemaining: 3
				},
				'2': {
					id: '2',
					itemName: 'p2',
					quantityRemaining: 5
				},
				isRequesting: false,
				requestFailed: false
			},
			productsIdArray: ['1','2']
		}

		expect(products(state, action1)).toEqual({
			productsIdMap: {
				'1': {
					id: '1',
					itemName: 'p1',
					quantityRemaining: 2
				},
				'2': {
					id: '2',
					itemName: 'p2',
					quantityRemaining: 5
				},
				isRequesting: false,
				requestFailed: false
			},
			productsIdArray: ['1','2']
		})

		expect(products(state, action2)).toEqual({
			productsIdMap: {
				'1': {
					id: '1',
					itemName: 'p1',
					quantityRemaining: 3
				},
				'2': {
					id: '2',
					itemName: 'p2',
					quantityRemaining: 4
				},
				isRequesting: false,
				requestFailed: false
			},
			productsIdArray: ['1','2']
		})
	})

	it('resovle DECREASE_PRODUCT_QUANTITY action', ()=> {
		const action = {
			type: 'DECREASE_PRODUCT_QUANTITY',
			productId: '1'
		}

		const state = {
			productsIdMap: {
				'1': {
					id: '1',
					itemName: 'p1',
					quantityRemaining: 3
				},
				isRequesting: false,
				requestFailed: false
			},
			productsIdArray: ['1']
		}

		expect(products(state, action)).toEqual({
			productsIdMap: {
				'1': {
					id: '1',
					itemName: 'p1',
					quantityRemaining: 4
				},
				isRequesting: false,
				requestFailed: false
			},
			productsIdArray: ['1']
		})
	})

	it('resolve REMOVE_PRODUCT_IN_CART action', () => {
		const action = {
			type: 'REMOVE_PRODUCT_IN_CART',
			productId: '1',
			quantity: 10
		}

		const state = {
			productsIdMap: {
				'1': {
					id: '1',
					itemName: 'p1',
					quantityRemaining: 3
				},
				isRequesting: false,
				requestFailed: false
			},
			productsIdArray: ['1']
		}

		expect(products(state, action)).toEqual({
			productsIdMap: {
				'1': {
					id: '1',
					itemName: 'p1',
					quantityRemaining: 13
				},
				isRequesting: false,
				requestFailed: false
			},
			productsIdArray: ['1']
		})
	})
})

describe('selectors', () => {
	it('should get one product by its id', ()=> {
		const state = {
			productsIdMap: {
				'1': {
					id: '1',
					name: 'p1'
				}
			}
		}

		expect(fromProducts.getProduct(state, 1)).toEqual({
			id: '1',
			name: 'p1'
		})
	})

	it('should get all product in array', ()=>{
		const state = {
			productsIdMap: {
				'1': {
					id: '1',
					name: 'p1'
				},
				'2': {
					id: '2',
					name: 'p2'
				}
			},
			productsIdArray: ['1', '2']
		}

		expect(fromProducts.getAllProducts(state)).toEqual([
			{
				id: '1',
				name: 'p1'	
			},
			{
				id: '2',
				name: 'p2'
			}
		])
	})
})
