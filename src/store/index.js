import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: [],
    wishlist: [],
    totalItemsInCart: 0,
    totalItemsInWishlist: 0,
    selectedColor: null,
    products: [],
    user: null,
    token: null,
    registeredEmail: null, 
  },
  getters: {
    isAuthenticated: state => state.user !== null,
  },
  mutations: {
    addToCart(state, { product, selectedColor,selectedSize }) {
      const productWithColor = { ...product, selectedColor,selectedSize };
      state.cart.push(productWithColor);
      state.totalItemsInCart += 1;
    },
    addToWishlist(state, product) {
      state.wishlist.push(product);
      state.totalItemsInWishlist += 1;
    },
    removeFromCart(state, index) {
      state.cart.splice(index, 1);
      state.totalItemsInCart -= 1;
    },
    removeFromWishlist(state, index) {
      state.wishlist.splice(index, 1);
      state.totalItemsInWishlist -= 1;
    },
    setProducts(state, products) {
      state.products = products;
    },
   selectedColor(state, color) {
      state.selectedColor = color;
    },
    clearCart(state) {
      // Reset the cart and totalItemsInCart
      state.cart = [];
      state.totalItemsInCart = 0;
    },
    SET_USER(state, user) {
      console.log('SET_USER mutation called with user:', user);
      state.user = user;
    },
  
    SET_TOKEN(state, token) {
      console.log('SET_TOKEN mutation called with token:', token);
      state.token = token;
    },
  },
  actions: {
  },
  modules: {
  }
})
