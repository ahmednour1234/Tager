<template>
    <LoadSpinner>
    <div class="row overflow-hidden w-100">
        <div class="col overflow-hidden w-100 p-5  d-flex flex-column align-items-center">
            <h1 class="typing-demo">
                Tager E-commerce
            </h1>
            <h2 class="text-primary"> Women`s New Collectoin</h2>
            <h3 class="text-dark fw-normal">New Arrivals</h3>
            <router-link to="/product" class="showall fw-bold mb-4">Shop Now</router-link>
        </div>
        <img class="homeimg w-50 d-none d-sm-none d-xs-none d-lg-flex"
            src="@/assets/home.png"
            alt="">
    </div>
    <section>
  <div class="text-center container py-5">
    <h4 class="mt-4 mb-5 fs-1"><strong>Bestsellers</strong></h4>
    <div class="row bg-white">
      <div class="col-lg-4 col-md-12 mb-4">
        <div class="cards">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/belt.webp"
              class="w-100" />
            <a href="#!">
              <div class="mask">
                <div class="d-flex justify-content-start align-items-end h-100">
                  <h5><span class="badge bg-primary ms-2">New</span></h5>
                </div>
              </div>
              <div class="hover-overlay">
                <div class="mask"></div>
              </div>
            </a>
          <div class="card-body">
            <a href="" class="text-reset">
              <h5 class="card-title mb-3">Bag Geld</h5>
            </a>
            <a href="" class="text-reset">
              <p>Mens</p>
            </a>
            <h6 class="mb-3">$61.99</h6>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="cards">
          <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"
              class="w-100" />
            <a href="#!">
              <div class="mask">
                <div class="d-flex justify-content-start align-items-end h-100">
                  <h5><span class="badge bg-success ms-2">Eco</span></h5>
                </div>
              </div>
              <div class="hover-overlay">
                <div class="mask"></div>
              </div>
            </a>
          </div>
          <div class="card-body">
            <a href="" class="text-reset">
              <h5 class="card-title mb-3">Clothe Nice</h5>
            </a>
            <a href="" class="text-reset">
              <p>Mens</p>
            </a>
            <h6 class="mb-3">$61.99</h6>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="cards">
          <div class="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/shoes%20(3).webp"
              class="w-100" />
            <a href="#!">
              <div class="mask">
                <div class="d-flex justify-content-start align-items-end h-100">
                  <h5><span class="badge bg-danger ms-2">-10%</span></h5>
                </div>
              </div>
              <div class="hover-overlay">
                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
              </div>
            </a>
          </div>
          <div class="card-body">
            <a href="" class="text-reset">
              <h5 class="card-title mb-3">Shoes Convers</h5>
            </a>
            <a href="" class="text-reset">
              <p>Women</p>
            </a>
            <h6 class="mb-3">
              <s>$61.99</s><strong class="ms-2 text-danger">$50.99</strong>
            </h6>
          </div>
        </div>
      </div>
    </div>
    </div>
</section>
    <section class="container d-flex flex-column  align-items-center">
    <header class="mb-4">
      <h3 class="fw-bold fs-1">New products</h3>
    </header>
      <div class="row row-cols-1 row-cols-sm-1 row-cols-md-3 mt-3 bg-white gy-5">
        <div class="card" v-for="item in apiData" :key="item.id"
>
          <div class="imgBox">
            <img src="@/assets/product.png" class="mouse">
          </div>
          <div class="contentBox">
            <h3 class="fs-2 fw-bold text-dark">{{ item.name }}</h3>
            <h2 class="fs-4 fw-bold text-dark">{{ item.price }} $</h2>
            <div class="d-flex flex-row gap-2">
            </div>
            <router-link :to="{ name: 'DetailsProduct', params: { id: item.id } }" class="buy">Show details</router-link>
          </div>
        </div>
      </div>
      <router-link to="/product" class="showall fw-bold mb-4">Show All Products</router-link>
</section>
<section class="overflow-hidden">
  <div class="cotainer">
    <div class="row p-5">
    <div class="col">
    <div class="mb-3">
  <div class="card1 row g-0 rounded" style="height:250px">
    <div class="col-md-8">
      <div class="card-body ps-2 g-5">
        <h1 class="card-title">T-shirt For Sell</h1>
        <h5 class="card-text">Get 40% off our excliusive
bundles full best seller!</h5>
        <a class="card-text text-dark">Shop Now</a>
      </div>
    </div>
  </div>
</div>
<div class="mb-3">
  <div class="card2 row g-0 rounded" style="height:250px">
    <div class="col-md-8">
      <div class="card-body ps-2 g-5">
        <h1 class="card-title">T-shirt For Sell</h1>
        <h5 class="card-text">Get 40% off our excliusive
bundles full best seller!</h5>
        <a class="card-text text-dark">Shop Now</a>
      </div>
    </div>

  </div>
</div>
</div>
<div class="mb-3" style="max-width: 540px;">
  <div class="card5 col pt-5 ps-5 rounded" style="height:550px;">
    <div class="col-md-8">
      <div class="card-body mb-5">
        <h1 class="card-title mb-1">T-shirt For Sell</h1>
        <h5 class="card-text mb-1">Get 40% off our excliusive
bundles full best seller!</h5>
        <a class="card-text text-dark">Shop Now</a>
      </div>
    </div>
  </div>
</div>
<div class="col">
  <div class="mb-3">
  <div class="card3 row g-0 rounded" style="height:250px">
    <div class="col-md-8">
      <div class="card-body ps-2 g-5">
        <h1 class="card-title">T-shirt For Sell</h1>
        <h5 class="card-text">Get 40% off our excliusive
bundles full best seller!</h5>
        <a class="card-text text-dark">Shop Now</a>
      </div>
    </div>
  </div>
</div>
<div class="mb-3">
  <div class="card4 row g-0 rounded" style="height:250px">
    <div class="col-md-8">
      <div class="card-body ps-2 g-5">
        <h1 class="card-title">T-shirt For Sell</h1>
        <h5 class="card-text">Get 40% off our excliusive
bundles full best seller!</h5>
        <a class="card-text text-dark">Shop Now</a>
      </div>
    </div>
  </div>
</div>
</div>
</div>
  </div>
</section>
<div class="w-100 overflow-hidden">
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
</LoadSpinner>
</template>

<script>
import axios from 'axios';
import LoadSpinner from '@/components/Loading/loadHello.vue';
export default {
  name:'home-view',
  components: {
        LoadSpinner,
  },
  data() {
    return {
      apiData: [], // to store the data retrieved from the API
    };
  },
  mounted() {
    // Call your API when the component is mounted
    this.fetchData();
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
  },
  
};
</script>

<style lang="scss" scoped>
@import './home.scss';
</style>