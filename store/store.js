export const state = () => ({
  cart: 0,
  product: {}
})

export const mutations = {
  increment(state) {
    state.cart = ++state.cart
  },
  decrement(state) {
    if (state.status === 0) return
    state.cart = --state.cart
  },
  setProduct(state, payload) {
    state.product = payload
  }
}

export const getters = {
  getCart: s => s.cart,
  getProduct: s => s.product
}
