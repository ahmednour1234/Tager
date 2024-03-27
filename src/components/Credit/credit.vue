<template>
  <section class="overflow-hidden">
    <div class="row">
      <div class="col-md-8 mb-3">
        <div class="card mb-4">
          <div class="card-header py-3">
            <h5 class="mb-0">Billing details</h5>
          </div>
          <div class="card-body">
            <form @submit.prevent="placeOrder">
              <div class="row mb-4">
                <div class="col">
                  <div class="form-outline">
                    <input v-model="form.firstName" type="text" placeholder="First name" class="form-control" required />
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <input v-model="form.lastName" type="text" placeholder="Last name" class="form-control" required />
                  </div>
                </div>
              </div>

              <div class="form-outline mb-4">
                <input v-model="form.address" type="text" placeholder="Address" class="form-control" required />
              </div>

              <div class="form-outline mb-4">
                <input v-model="form.email"  type="email" placeholder="Email" class="form-control" required />
              </div>

              <div class="form-outline mb-4">
                <input v-model="form.phone" placeholder="Phone" class="form-control" required />
              </div>

              <hr class="my-4" />

              <div class="form-check">
                <input v-model="form.shippingSameAsBilling" class="form-check-input" type="checkbox" id="checkoutForm1" />
                <label class="form-check-label" for="checkoutForm1">
                  Shipping address is the same as my billing address
                </label>
              </div>

              <div class="form-check mb-4">
                <input v-model="form.saveInformation" class="form-check-input" type="checkbox" id="checkoutForm2" checked />
                <label class="form-check-label" for="checkoutForm2">
                  Save this information for next time
                </label>
              </div>

              <hr class="my-4" />

              <h5 class="mb-4">Payment</h5>

              <div v-for="method in paymentMethods" :key="method.id" class="form-check">
                <input v-model="form.paymentMethod" class="form-check-input" type="radio" :id="method.id" :value="method.id" />
                <label class="form-check-label" :for="method.id">{{ method.name }}</label>
              </div>

              <div class="row mb-4">
                <div class="col">
                  <div class="form-outline">
                    <input v-model="form.nameOnCard" type="text" placeholder="Name on card" class="form-control" required />
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <input v-model="form.cardNumber" type="text" placeholder="Credit card number" class="form-control" />
                  </div>
                </div>
              </div>

              <div class="row mb-4">
                <div class="col-3">
                  <div class="form-outline">
                    <input v-model="form.expiration" type="text" placeholder="Expiration" class="form-control" required />
                  </div>
                </div>
                <div class="col-3">
                  <div class="form-outline">
                    <input v-model="form.cvv" type="text" placeholder="CVV" class="form-control" required />
                  </div>
                </div>
              </div>

              <button class="btn btn-primary btn-lg btn-block w-100" type="submit">
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
      </div>

      <div class="col-md-4 mb-4">
        <div class="card mb-4">
          <div class="card-header py-3">
            <h5 class="mb-0">Summary</h5>
          </div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Products
                <span>{{ calculateTotal() }}$</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                Shipping
                <span>Gratis</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount</strong>
                  <strong>
                    <p class="mb-0">(including VAT)</p>
                  </strong>
                </div>
                <span><strong>{{ calculateSubTotal() }}$</strong></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const DISCOUNT_AMOUNT = 95;
const DELIVERY_CHARGE = 10;
import axios from 'axios';

export default {
  name: "CreditCard",
  
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        address: "",
        email:"",
        phone: "",
        shippingSameAsBilling: false,
        saveInformation: true,
        paymentMethod: "", // Should be initialized based on your payment methods
        nameOnCard: "",
        cardNumber: "",
        expiration: "",
        cvv: "",
      },
    };
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    paymentMethods() {
      // Define your payment methods here
      return [
        { id: "creditCard", name: "Credit Card" },
        { id: "debitCard", name: "Debit Card" },
        { id: "paypal", name: "Paypal" },
      ];
    },
    apiUrl() {
      // Retrieve the API URL from environment variables
      return process.env.VUE_APP_API_URL || "http://127.0.0.1:8000/api/orders";
    },
    username() {
      // Retrieve the username from user information stored in local storage
      const user = JSON.parse(localStorage.getItem("user"));
      return user ? user.name : "";
    },
    
  },

  methods: {
    calculateTotal() {
      return this.cart.reduce((total, item) => total + item.price, 0) - DISCOUNT_AMOUNT;
    },
    calculateSubTotal() {
      return this.cart.reduce((total, item) => total + item.price , 0) + DELIVERY_CHARGE;
    },
   
    async placeOrder() {
      try {
        const isAuthenticated = this.$store.state.user !== null;

if (!isAuthenticated) {
  console.error('User not authenticated');
  return;
}

// Get the user ID from the Vuex store
const userId = this.$store.state.user.id;

console.log('User ID:', userId);

// Rest of your code...
// Prepare order data
        const orderData = {
          ...this.form,
          user_id: userId,
          products: this.cart.map(product => ({
            product_id: product.id,
            product_name: product.name,
            price: product.price,
            // Add other necessary product fields
          })),
        };

        // Make API request to store the order
        const response = await axios.post("http://127.0.0.1:8000/api/orders", orderData);

        // Handle success, e.g., show a success message
        console.log(response.data.message);

        // Clear the cart or perform other actions
        this.clearCart();
      } catch (error) {
        // Handle error, e.g., show an error message
        console.error("Error placing order", error.response ? error.response.data.message : error.message);
      }
    },
    clearCart() {
      // Clear the cart or perform other actions
      this.$store.commit("clearCart");
    },
  },
};
</script>

<style>
@import "./credit.scss";
</style>
