<template>
  <table class="table align-middle pt-2 mb-0 bg-white">
    <thead class="bg-light">
      <tr>
        <th>Order</th>
        <th>Address</th>
        <th>Price</th>
        <th>Date</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="order in filteredOrders" :key="order.id">
        <td>
          <div class="d-flex align-items-center">
            <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt=""
              style="width: 45px; height: 45px"
              class="rounded-circle"
            />
            <div class="ms-3">
              <p class="fw-bold mb-1">{{ order.product_name }}</p>
              <p class="text-muted mb-0">Quantity:3</p>
            </div>
          </div>
        </td>
        <td>
          <p class="fw-normal mb-1">{{ order.address }}</p>
          <p class="text-muted mb-0">Seif Street</p>
        </td>
        <td>
          <p class="">{{ order.price }}$</p>
        </td>
        <td>{{ formatOrderDate(order.created_at) }}</td>
        <td>
          <h3>{{ order.payment_method }}</h3>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import axios from 'axios';
import moment from 'moment';

export default {
  name: 'ShowOrders',
  data() {
    return {
      ordersWithProducts: [],
      userId: null, // Initialize userId to null
    };
  },
  methods: {
    async fetchData() {
      try {
        // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
        const isAuthenticated = this.$store.state.user !== null;

        if (!isAuthenticated) {
          console.error('User not authenticated');
          return;
        }

        // Get the user ID from the Vuex store
        this.userId = this.$store.state.user.id;

        console.log('User ID:', this.userId);

        const response = await axios.get('http://127.0.0.1:8000/api/orders-with-products');
        this.ordersWithProducts = response.data; // assuming the API response is an array
      } catch (error) {
        console.error('Error fetching data:', error.message);
        this.ordersWithProducts = [];
      }
    },
    formatOrderDate(dateString) {
      // Use moment.js to format the date
      return moment(dateString).format('DD-MM-YYYY');
    },
  },
  computed: {
    filteredOrders() {
      if (this.userId !== null) {
        return this.ordersWithProducts.filter(order => order.user_id === this.userId);
      } else {
        // Handle the case when userId is not available
        console.error('User ID not available');
        return [];
      }
    },
  },
  created() {
    // Fetch data when the component is created
    this.fetchData();
  },
};
</script>
<style scoped lang="scss">
/* ... (your styles) ... */
</style>
