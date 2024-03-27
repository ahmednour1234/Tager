<template>
  <section class="order-form m-2">
    <form  @submit="uploadItem">
    <div class="container pt-2">
      <div class="row">
        <div class="col-12 px-4">
          <h1>You can Upload New Product</h1>
          <span>with some explanation below</span>
          <hr class="mt-1" />
        </div>
        <div class="col-12">
          <div class="row mx-4">
            <div class="col-12">
              <h5 class="order-form-label">Category</h5>
            </div>
            <div class="col-sm-12">
              <div class="form-outline">
                <input
                  type="text"
                  id="form1"
                  v-model="category"
                  class="form-control order-form-input"
                />
              </div>
            </div>
            <div class="col-12">
              <h5 class="order-form-label">Product Name</h5>
            </div>
            <div class="col-sm-12 mt-2 mt-sm-0">
              <div class="form-outline"> 
                <input
                  type="text"
                  v-model="name"
                  class="form-control order-form-input"
                />
              </div>
            </div>
          </div>

          <div class="row mt-3 mx-4">
            <div class="col-12">
              <h5 class="order-form-label">Description Product</h5>
            </div>
            <div class="col-12">
              <div class="form-outline">
                <input
                  type="text"
                  v-model="description"
                  class="form-control order-form-input"
                />
              </div>
            </div>
          </div>

          <div class="row mt-3 mx-4">
            <div class="col-12">
              <h5 class="order-form-label">Shipping and returns</h5>
            </div>
            <div class="col-12">
              <div class="form-outline">
                <input
                  type="text"
                  v-model="shipping"
                  class="form-control order-form-input"
                />
              </div>
            </div>
          </div>

          <div class="row mt-3 mx-4">
            <div class="col-12">
              <h5 class="order-form-label" for="price-picker-example"
                >price</h5
              >
            </div>
            <div class="col-12">
              <div
                class="form-outline datepicker"
                data-mdb-toggle-button="false"
              >
                <input
                  type="text"
                  class="form-control order-form-input"
                  v-model="price"
                  data-mdb-toggle="datepicker"
                />
              </div>
            </div>
          </div>

          <div class="row mt-0 mx-4">
            <div class="col-12">
              <h5 class="order-form-label">color</h5>
            </div>
            <div class="col-sm-6 mt-2 pe-sm-2">
              <div class="form-outline">
                <input
                  v-model="color1"
                  type="text"
                  class="form-control order-form-input"
                />
                <h5 class="form-label" >color1</h5>
              </div>
            </div>
            <div class="col-sm-6 mt-2 ps-sm-0">
              <div class="form-outline">
                <input
                  v-model="color2"
                  type="text"
                  class="form-control order-form-input"
                />
                <h5 class="form-label">color2</h5>
              </div>
            </div>
            <div class="col-sm-6 mt-2 pe-sm-2">
              <div class="form-outline">
                <input
                  v-model="color3"
                  type="text"
                  class="form-control order-form-input"
                />
                <h5 class="form-label" >color3</h5>
              </div>
            </div>
            <div class="col-sm-6 mt-2 ps-sm-0">
              <div class="form-outline">
                <input
                  v-model="color4"
                  type="text"
                  class="form-control order-form-input"
                />
                <h5 class="form-label">color4</h5>
              </div>
            </div>
          </div>
          <div class="row mt-0 mx-4">
            <div class="col-12">
              <h5 class="order-form-label">Size</h5>
            </div>
            <div class="col-sm-6 mt-2 pe-sm-2">
              <div class="form-outline">
                <input
                  v-model="size1"
                  type="text"
                  class="form-control order-form-input"
                />
                <h5 class="form-label">Size1</h5>
              </div>
            </div>
            <div class="col-sm-6 mt-2 ps-sm-0">
              <div class="form-outline">
                <input
                  v-model="size2"
                  type="text"
                  class="form-control order-form-input"
                />
                <h5 class="form-label">Size2</h5>
              </div>
            </div>
            <div class="col-sm-6 mt-2 pe-sm-2">
              <div class="form-outline">
                <input
                  v-model="size3"
                  type="text"
                  class="form-control order-form-input"
                />
                <h5 class="form-label">Size3</h5>
              </div>
            </div>
            <div class="col-sm-6 mt-2 ps-sm-0">
              <div class="form-outline">
                <input
                  v-model="size4"
                  type="text"
                  class="form-control order-form-input"
                />
                <h5 class="form-label">Size4</h5>
              </div>
            </div>
          </div>
          <div class="input-group mb-3">
    <input type="file" ref="fileInput1" @change="handleFileChange1" class="form-control"/>
    <label class="input-group-text">Upload image 1</label>
</div>
<div class="input-group mb-3">
    <input type="file" ref="fileInput2" @change="handleFileChange2" class="form-control"/>
    <label class="input-group-text">Upload image 2</label>
</div>
<div class="input-group mb-3">
    <input type="file" ref="fileInput3" @change="handleFileChange3" class="form-control"/>
    <label class="input-group-text">Upload image 3</label>
</div>
          <div class="row mt-3">
            <div class="col-12">
              <button
                type="submit"
                class="btn btn-primary d-block mx-auto btn-submit"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </form>
  </section>
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
import axios from 'axios';

export default {
  name: "Upload-Product",
  data() {
    return {
      category: '',
      name: '',
      description: '',
      shipping: '',
      price: '',
      color1: '',
      color2: '',
      color3: '',
      color4: '',
      size1: '',
      size2: '',
      size3: '',
      size4: '',
      selectedFile1: null,
      selectedFile2: null,
      selectedFile3: null,
    };
  },
  methods: {
    handleFileChange1(event) {
      this.selectedFile1 = event.target.files[0];
    },
    handleFileChange2(event) {
      this.selectedFile2 = event.target.files[0];
    },
    handleFileChange3(event) {
      this.selectedFile3 = event.target.files[0];
    },
   async uploadItem() {
      if (!this.category || !this.name || !this.description || !this.shipping || !this.price || !this.color1 || !this.color2 || !this.color3 || !this.color4 || !this.size1 || !this.size2 || !this.size3 || !this.size4) {
      console.error("Please fill in all fields");
      return;
   }
      const formData = new FormData();
      formData.append('category', this.category);
      formData.append('description', this.description);
      formData.append('shipping', this.shipping);
      formData.append('name', this.name);
      formData.append('price', this.price);
      formData.append('color1', this.color1);
      formData.append('color2', this.color2);
      formData.append('color3', this.color3);
      formData.append('color4', this.color4);
      formData.append('size1', this.size1);
      formData.append('size2', this.size2);
      formData.append('size3', this.size3);
      formData.append('size4', this.size4);
      formData.append('image1', this.selectedFile1);
      formData.append('image2', this.selectedFile2);
      formData.append('image3', this.selectedFile3);

      const response = await axios.post('http://127.0.0.1:8000/api/products', formData, {
        timeout: 15000, 
        headers: {
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*',
        },
      });
      console.log('Upload successful', response.data);
      }, catch (error) {
        console.error('Error uploading data', error.message);
        // اتخاذ إجراءات في حالة حدوث خطأ
    },
  }

};
</script>
<style>
@import "./upload.scss";
</style>
