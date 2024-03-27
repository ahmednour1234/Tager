<template>
  <section class="h-100" style="background-color: #eee">
    <div class="container h-100 py-2">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <div class="card shopping-cart" style="border-radius: 15px">
            <div class="card-body text-black">
              <div class="row">
                <div class="col-lg-6 px-5 py-4">
                  <h3 class="mb-5 pt-2 text-center fw-bold text-uppercase">
                    Your products
                  </h3>
                  <div v-for="(product, index) in cart" :key="product.id">
                  <div class="d-flex align-items-center mb-5">
                    <div class="flex-shrink-0">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/6.webp"
                        class="img-fluid"
                        style="width: 150px"
                        alt="Generic placeholder image"
                      />
                    </div>
                    <div class="flex-grow-1 ms-1  overflow-hidden">
                      <a class="float-end text-black"  @click="removeFromCart(index)"
                        ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
</svg></a>
                      <h5 class="text-primary"> {{ product.name }}</h5>
                      <h6 style="color: #000000">Color: <span class="text-secondary">{{ product.selectedColor }}</span></h6>
                      <h6 style="color: #000000">Size: <span class="text-secondary">{{ product.selectedSize}}</span> </h6>
                      <div class="d-flex align-items-center">
                        <p class="fw-bold mb-0">Price: <span class="text-secondary">{{ product.price }}$</span></p>
                        <div class="def-number-input  ms-4 number-input safari_only">
                          <button
                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                            class="minus"
                          ></button>
                          <input
                            class="quantity fw-bold text-black"
                            min="0"
                            name="quantity"
                            value="1"
                            type="number"
                          />
                          <button
                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                            class="plus"
                          ></button>
                        </div>
                      </div>
                    </div>
                  </div>
</div>
                  <hr
                    class="mb-4"
                    style="height: 2px; background-color: #1266f1; opacity: 1"
                  />

                  <div class="d-flex justify-content-between px-x">
                    <p class="fw-bold">Discount:</p>
                    <p class="fw-bold">95$</p>
                  </div>
                  <div
                    class="d-flex justify-content-between p-2 mb-2"
                    style="background-color: #e1f5fe"
                  >
                    <h5 class="fw-bold mb-0">Total:</h5>
                    <h5 class="fw-bold mb-0">{{ calculateTotal()}}$</h5>
                  </div>
                </div>
                <div class="col-lg-6 px-5 py-4">
                  <h3 class="mb-5 pt-2 text-center fw-bold text-uppercase">
                    Cart Summary
                  </h3>

                  <form class="mb-5">
                    <div class="form-outline mb-5">
                      <label class="form-label fs-5 fw-bold" for="typeText"
                        >Another Note</label
                      >
                      <input
                        type="text"
                        id="typeText"
                        class="form-control form-control-lg"
                        siez="17"
                      />
                    </div>

                    <div class="form-outline mb-5">
                      <label class="form-label fs-5 fw-bold" for="typeName"
                        >Delivery Charger</label
                      >
                      <p class="fs-5 fw-bold text-secondary">10$</p>
                    </div>
                    <div class="form-outline">
                      <label class="form-label fs-5 fw-bold" for="typeName"
                        >Total</label
                      >
                      <p class="fs-5 fw-bold text-secondary">{{ calculateTotal()}}$</p>
                    </div>
                    <div class="col-md-6 mb-5">
                      <div class="form-outline">
                        <label class="form-label fs-5 fw-bold" for="typeName"
                          >Sub Total</label
                        >
                        <p class="fs-5 fw-bold text-secondary">{{ calculateSubTotal()}}$</p>
                      </div>
                    </div>

                    <p class="mb-5">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit
                      <a href="#!">obcaecati sapiente</a>.
                    </p>
                    <div class="d-flex flex-row gap-5">
                      <router-link
                        type="button"
                        class="btn btn-primary btn-block btn-lg"
                        to="/credit"
                      >
                        Buy now
                      </router-link>
                      <router-link
                        type="button"
                        class="btn btn-white text-primary border-primary btn-block btn-lg"
                        to="/home"
                      >
                        Back To Shopping
                      </router-link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const DISCOUNT_AMOUNT = 95;
const DELIVERY_CHARGE = 10;
export default {
  name: "CartTager",
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    totalItemsInCart() {
      return this.$store.state.totalItemsInCart;
    },
    selectedColor() {
      // Access the selected color from the store
      return this.$store.state.selectedColor;
    },
  },
  methods: {
    removeFromCart(index) {
      this.$store.commit('removeFromCart', index);
    },
    calculateTotal() {
      return this.cart.reduce((total, item) => total + item.price, 0) - DISCOUNT_AMOUNT;
    },
    calculateSubTotal() {
      return this.cart.reduce((total, item) => total + item.price + 10 , 0)+ DELIVERY_CHARGE;
    },
  },
};
</script>

<style>
@import "./cart.scss";
</style>
