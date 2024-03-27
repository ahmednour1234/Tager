<template>
  <div class="container my-5 overflow-hidden">
    <div v-if="product">
      <div class="row">
        <div class="col-md-5">
          <div class="main-img">
            <img class="img-fluid" :src="selectedImage" alt="ProductS" />
            <div class="row my-3 previews">
              <div class="col-md-3">
                <img
                  @click="selectImage"
                  class="w-100"
                  src="https://cdn.pixabay.com/photo/2015/07/24/18/40/model-858754_960_720.jpg"
                  alt="Sale"
                />
              </div>
              <div class="col-md-3">
                <img
                  @click="selectImage1"
                  class="w-100"
                  src="https://cdn.pixabay.com/photo/2015/07/24/18/38/model-858749_960_720.jpg"
                  alt="Sale"
                />
              </div>
              <div class="col-md-3">
                <img
                  @click="selectImage2"
                  class="w-100"
                  src="https://cdn.pixabay.com/photo/2015/07/24/18/39/model-858751_960_720.jpg"
                  alt="Sale"
                />
              </div>
              <div class="col-md-3">
                <img
                  @click="selectImage3"
                  class="w-100"
                  src="https://cdn.pixabay.com/photo/2015/07/24/18/37/model-858748_960_720.jpg"
                  alt="Sale"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <div class="main-description px-2">
            <div class="category text-dark text-bold">
              {{ product.category }}
            </div>
            <div class="product-title text-bold my-3">
              {{ product.name }}
            </div>

            <div class="price-area my-4">
              <p class="old-price mb-1">
                <del>$100</del>
                <span class="old-price-discount text-danger">(20% off)</span>
              </p>
              <p class="new-price text-bold mb-1">{{ product.price }}$</p>
              <p class="text-secondary mb-1">
                (Additional tax may apply on checkout)
              </p>
            </div>
          </div>
          <div class="row questions p-3">
        Select Size:<select class="form-select" v-model="selectedSize" aria-label="Default select size">
  <option :value="product.size1">{{ product.size1 }}</option>
  <option :value="product.size2">{{ product.size2 }}</option>
  <option :value="product.size3">{{ product.size3 }}</option>
  <option :value="product.size4">{{ product.size4 }}</option>
</select>

          </div>
          <div class="row questions p-3">
           Select Color:<select
  class="form-select"
  v-model="selectedColor"
  aria-label="Default select color"
>
  <option :value="product.color1">{{ product.color1 }}</option>
  <option :value="product.color2">{{ product.color2 }}</option>
  <option :value="product.color3">{{ product.color3 }}</option>
  <option :value="product.color4">{{ product.color4 }}</option>
</select>

            <div class="buttons d-flex my-5">
              <div class="block">
                <a
                  href="#"
                  @click="addToWishlist(product)"
                  class="shadow btn custom-btn"
                  >Wishlist</a
                >
              </div>
              <div class="block">
                <button
                  @click="addToCart(product)"
                  class="shadow btn bg-white text-primary border border-primary custom-btn"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div class="product-details my-4">
            <p class="details-title text-color mb-1">Product Details</p>
            <p class="description">{{ product.description }}</p>
          </div>
          <div class="delivery my-4">
            <p class="font-weight-bold mb-0">
              <span><i class="fa-solid fa-truck"></i></span>
              <b>Delivery done in 3 days from date of purchase</b>
            </p>
            <p class="text-secondary">{{ product.shipping }}</p>
          </div>
          <div class="delivery-options my-4">
            <p class="font-weight-bold mb-0">
              <span><i class="fa-solid fa-filter"></i></span>
              <b>Delivery options</b>
            </p>
            <p class="text-secondary">View delivery options here</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container similar-products my-4">
    <hr />
    <p class="display-5">Related Products</p>
    <div class="row">
      <div class="col-md-3" v-for="product in products" :key="product.id">
        <div class="similar-product">
          <router-link
            :to="{ name: 'DetailsProduct', params: { id: product.id } }"
          >
            <img
              class="w-100"
              src="https://source.unsplash.com/gsKdPcIyeGg"
              alt="Preview"
            />
          </router-link>
          <p class="title">{{ product.name }}</p>
          <p class="price">{{ product.price }}$</p>
        </div>
      </div>
    </div>
  </div>
  <div class="overflow-hidden">
    <!-- Footer -->
    <footer class="text-dark text-center">
      <!-- Section: Social media -->
      <section
        class="d-flex justify-content-between p-4 text-white"
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
                This Company Tager For Ecommerce Online You can Sell And Buy Any
                Products For Our Platforms
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
      <div class="text-center p-3" style="background-color: #2874f0">
        © 2023 Copyright:
        <a class="text-dark" href="https://int-web24.netlify.app/">INT</a>
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DetailsProduct",

  data() {
    return {
      images: [
        "https://cdn.pixabay.com/photo/2015/07/24/18/40/model-858753_960_720.jpg",
        "https://cdn.pixabay.com/photo/2015/07/24/18/38/model-858749_960_720.jpg",
        "https://cdn.pixabay.com/photo/2015/07/24/18/39/model-858751_960_720.jpg",
      ],
      product: null,
      products: [],
      selectedImage:
        "https://cdn.pixabay.com/photo/2015/07/24/18/40/model-858754_960_720.jpg",
      selectedColor: null,
      selectedSize: null,

    };
  },
  mounted() {
    // Call your API when the component is mounted
    this.fetchProductDetails();
    this.fetchProducts();
  },
  methods: {
    selectImage() {
      this.selectedImage =
        "https://cdn1.bambinifashion.com/img/p/1/8/3/9/8/2/183982--product.jpg";
    },
    selectImage2() {
      this.selectedImage =
        "https://cdn.pixabay.com/photo/2015/07/24/18/38/model-858749_960_720.jpg";
    },
    selectImage3() {
      this.selectedImage =
        "https://cdn.pixabay.com/photo/2015/07/24/18/39/model-858751_960_720.jpg";
    },
    addToCart(product) {
      this.$store.commit("addToCart", {
        product,
        selectedColor: this.selectedColor,
        selectedSize:this.selectedSize,
      });
      const isAuthenticated = this.isAuthenticated();
      if (!isAuthenticated) {
        // Redirect to the login page if not authenticated
        this.$router.push("/login");
        return;
      }
      // Proceed with adding the product to the cart logic
      // In a real application, you might make an API call to add the product to the cart
    },
    addToWishlist(product) {
      this.$store.commit("addToWishlist", product);
    },
    isAuthenticated() {
      // This function checks if the user is authenticated based on a token
      const token = localStorage.getItem("token");
      return !!token;
    },
    fetchProductDetails() {
      // Replace 'your-api-endpoint' with the actual API endpoint
      const productId = this.$route.params.id; // Assuming you're using Vue Router

      axios
        .get(`http://127.0.0.1:8000/api/products/${productId}`)
        .then((response) => {
          this.product = response.data.product;
        })
        .catch((error) => {
          console.error("Error fetching product details:", error);
        });
    },
    async fetchProducts() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/products"); // Replace with your API endpoint
        this.products = response.data.slice(0, 4); // Take the first 4 products
      } catch (error) {
        console.error("Error fetching products", error);
      }
    },
  },
  filters: {
    formatCurrency(value) {
      // Implement your own currency formatting logic here
      return `$${value.toFixed(2)}`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./details.scss";
</style>
