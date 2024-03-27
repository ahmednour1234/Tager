<template>
  <div class="d-flex flex-column align-items-center gap-3 mt-2">

  <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container">
    <h1 class="navbar-brand text-dark fs-2 fw-bold" @click="filterByCategory(null)">All Products</h1>

    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav align-items-lg-center gap-5">
        <li class="nav-item d-lg-flex flex-lg-row align-items-lg-center">
          <h3 v-for="category in uniqueCategories" :class="{ 'active': category === activeCategory }" :key="category"
            @click="filterByCategory(category)"
            class="nav-link fs-3 fw-bold">{{ category }}</h3>
        </li>
        <li class="nav-item">
          <label for="priceRange" class="form-label text-dark">Filter By Price</label>
          <input type="range" id="priceRange" v-model="selectedPriceRange" :min="minPrice" :max="maxPrice"
            @input="filterByPriceRange" class="form-range" />
          <div class="d-flex justify-content-between align-items-center">
            <span class="text-dark">Min: 0$</span>
            <span class="text-dark">Max: {{ selectedPriceRange }}$</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
    <div class="d-flex flex-row mt-1">
      <img src="@/assets/img2.png" class="w-50">
      <img src="@/assets/img3.png" class="w-50">
    </div>
    <div class="container d-flex flex-column align-items-center justify-content-between">
      <div class="row row-cols-3 gy-5 g-3 gap-5">
        <div class="card" v-for="product in  filteredItems" :key="product.id" :id="product.id">
          <div class="imgBox">
            <img src="@/assets/product.png" class="mouse">
          </div>
          <div class="contentBox">
            <h3 class="fs-2 fw-bold text-dark">{{ product.name }}</h3>
            <h2 class="fs-4 fw-bold text-dark">{{ product.price }}</h2>
            <router-link :to="{ name: 'DetailsProduct', params: { id: product.id } }"  class="buy">Show details</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-100 overflow-hidden mt-2">
  <!-- Footer -->
  <footer
          class="text-dark text-center"
          >
    <!-- Section: Social media -->
    <section
             class="d-flex justify-content-between  p-4 text-white"
             style="background-color: #2874f0"
             >
      <!-- Left -->
      <div class="me-5">
        <span>Get connected with us on social networks:</span>
      </div>
      <!-- Left -->

      <!-- Right -->
      <div>
        <a href="" class="text-white me-4">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-google"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-github"></i>
        </a>
      </div>
      <!-- Right -->
    </section>
    <!-- Section: Social media -->

    <!-- Section: Links  -->
    <section class="">
      <div class="">
        <!-- Grid row -->
        <div class="row align-items-start">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto ps-4">
            <!-- Content -->
            <h1 class="text-uppercase fw-bold">Tager Online</h1>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #2874f0; height: 2px"
                />
            <p>
            This Company Tager For Ecommerce Online 
            You can Sell And Buy Any Products For Our Platforms
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-3 mx-auto mt-4">
            <!-- Links -->
            <h5 class="text-uppercase fw-bold">Products</h5>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #2874f0; height: 2px"
                />
            <p>
              <a href="#!" class="text-dark text-decoration-none">Shoese</a>
            </p>
            <p>
              <a href="#!" class="text-dark text-decoration-none">Clothes</a>
            </p>
            <p>
              <a href="#!" class="text-dark text-decoration-none">Offers</a>
            </p>
            <p>
              <a href="#!" class="text-dark text-decoration-none">Watches</a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-3 mx-auto mt-4">
            <!-- Links -->
            <h5 class="text-uppercase fw-bold">Categories</h5>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #2874f0; height: 2px"
                />
            <p>
              <a href="#!" class="text-dark text-decoration-none">Men`s</a>
            </p>
            <p>
              <a href="#!" class="text-dark text-decoration-none">Women`s</a>
            </p>
            <p>
              <a href="#!" class="text-dark text-decoration-none">Kids</a>
            </p>
            <p>
              <a href="#!" class="text-dark text-decoration-none">Babys</a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold">Contact</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p><i class="fas fa-home mr-3"></i> Alexanderia,sababasha</p>
            <p><i class="fas fa-envelope mr-3"></i> Tager456@gmail.com</p>
            <p><i class="fas fa-phone mr-3"></i> 5863956</p>
            <p><i class="fas fa-print mr-3"></i> 01233227597</p>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->

    <!-- Copyright -->
    <div
         class="text-center p-3"
         style="background-color:#2874f0"
         >
      © 2023 Copyright:
      <a class="text-dark" href="https://int-web24.netlify.app/"
         >INT</a
        >
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Product-All',
  data() {
    return {
      selectedCategory: null,
      selectedPriceRange: 0,
      apiData: []
    }
  },
  mounted() {
    // Call your API when the component is mounted
    this.fetchData();
  },
  computed: {
    uniqueCategories() {
      return [...new Set(this.apiData.map(product => product.category))];
    },
    maxPrice() {
      return Math.max(...this.apiData.map(product => product.price));
    },
    filteredItems() {
      let filtered = this.selectedCategory
        ? this.apiData.filter(product => product.category === this.selectedCategory)
        : this.apiData;

      filtered = filtered.filter(product => product.price <= this.selectedPriceRange);

      return filtered;
    },
  },
  methods: {
    async fetchData() {
      try {
        // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
        const response = await axios.get('http://127.0.0.1:8000/api/products');
        this.apiData = response.data; // assuming the API response is an array
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    },
    filterByCategory(category) {
      this.selectedCategory = category;
    },
    filterProducts() {
      // Optionally, you can perform additional actions when the price range changes
      // For example, update the UI or fetch additional data
      console.log('Selected Price Range:', this.selectedPriceRange);
    },
  },
}
</script>

<style lang="scss" scoped>
.active {
  /* Change the background color for the active category */
  color: #000000;
  /* Change the text color for the active category */
}

@import "./product.scss";
</style>