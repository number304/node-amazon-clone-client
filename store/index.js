export const state = () => ({
  cart: [],
  cartLength: 0,
  shippingPrice: 0,
  shippingEstimatedDelivery: "",
});

export const getters = {
  getCartLength: (state) => state.cartLength,
  getCart: (state) => state.cart,
  getCartTotalPrice: (state) => {
    let total = 0;
    state.cart.map((product) => (total += product.price * product.quantity));
    return total;
  },
  getCartTotalPriceWithShipping: (state, getters) => {
    return getters.getCartTotalPrice + state.shippingPrice;
  },
  getEstimatedDelivery: (state) => state.shippingEstimatedDelivery,
};

export const actions = {
  addProductToCart({ state, commit }, product) {
    const cartProduct = state.cart.find((prod) => prod._id === product._id);

    if (!cartProduct) commit("pushProductToCart", product);
    else commit("incrementProductQty", cartProduct);

    commit("incrementCartLength");
  },
};

export const mutations = {
  incrementCartLength(state) {
    state.cartLength = 0;
    if (state.cart.length > 0)
      state.cart.map((product) => (state.cartLength += product.quantity));
  },
  incrementProductQty(state, product) {
    product.quantity += 1;
    let indexOfProduct = state.cart.indexOf(product);
    state.cart.splice(indexOfProduct, 1, product);
  },
  pushProductToCart(state, product) {
    product.quantity = 1;
    state.cart.push(product);
  },
  changeQty(state, { product, qty }) {
    let cartProduct = state.cart.find((prod) => prod._id === product._id);
    cartProduct.quantity = qty;

    state.cartLength = 0;
    if (state.cart.length > 0)
      state.cart.map((product) => (state.cartLength += product.quantity));

    let indexOfProduct = state.cart.indexOf(cartProduct);
    state.cart.splice(indexOfProduct, 1, cartProduct);
  },
  clearCart(state) {
    state.cart = [];
    state.cartLength = 0;
    state.shippingPrice = 0;
    state.shippingEstimatedDelivery = "";
  },
  removeProduct(state, product) {
    state.cartLength -= product.quantity;

    let indexOfProduct = state.cart.indexOf(product);
    state.cart.splice(indexOfProduct, 1);
  },
  setShipping(state, { price, estimatedDelivery }) {
    state.shippingPrice = price;
    state.shippingEstimatedDelivery = estimatedDelivery;
  },
};
