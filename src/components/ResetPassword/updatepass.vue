<template>
  <!-- Password Reset 8 - Bootstrap Brain Component -->
  <section class="bg-light p-3 p-md-4 p-xl-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-xxl-11">
          <div class="card border-light-subtle shadow-sm">
            <div class="row g-0">
              <div class="col-12 col-md-6">
                <img
                  class="img-fluid bg-dark rounded-start w-100 h-100 object-fit-cover"
                  loading="lazy"
                  src="@/assets/logo.png"
                  alt="Welcome back you've been missed!"
                />
              </div>
              <div
                class="col-12 col-md-6 d-flex align-items-center justify-content-center"
              >
                <div class="col-12 col-lg-11 col-xl-10">
                  <div class="card-body p-3 p-md-4 p-xl-5">
                    <div class="row">
                      <div class="col-12">
                        <div class="mb-5">
                          <h2 class="h4 text-center">Password Reset</h2>
                          <h3
                            class="fs-6 fw-normal text-secondary text-center m-0"
                          >
                            Update Your Password
                          </h3>
                        </div>
                      </div>
                    </div>
                    <form @submit.prevent="resetPassword">
                      <div class="row gy-3 overflow-hidden">
                        <div class="col-12">
                          <div class="form-floating mb-3">
                            <input
                              type="email"
                              class="form-control"
                              name="email"
                              id="email"
                              v-model="email"
                              required
                            />
                            <label for="email" class="form-label">Enter Your Email</label>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="form-floating mb-3">
                            <input
                              type="password"
                              class="form-control"
                              name="password"
                              id="password"
                              v-model="password"
                              required
                            />
                            <label for="email" class="form-label">New Password</label>
                          </div>
                        </div>
                        <div class="col-12">
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              name="password_confirmation"
              id="password_confirmation"
              v-model="password_confirmation"
              required
            />
            <label for="password_confirmation" class="form-label">Confirm Password</label>
          </div>
        </div>
                        <div class="col-12">
                          <div class="d-grid">
                            <button class="btn btn-dark btn-lg" type="submit">
                              Reset Password
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
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
// Import the necessary modules from Vue and Axios
import { useRoute } from 'vue-router';
import axios from 'axios';

export default {
  name: 'UpdatePassword',
  data() {
    return {
      email: '',
      password: '',
      password_confirmation: '',
      token: '',
      message: '',
      error: '',
    };
  },
  mounted() {
    // Use the route object from the router
    const route = useRoute();

    // Extract the token from the URL parameters
    this.token = route.query.token;
  },
  methods: {
    async resetPassword() {
      try {
        if (this.password !== this.password_confirmation) {
          this.error = 'Password and confirmation do not match.';
          alert('Password and confirmation do not match');
          return;
        }

        const response = await axios.post('http://127.0.0.1:8000/api/reset-password', {
          token: this.token,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
        });

        // Check if 'response.data.message' is defined before accessing it
        if (response && response.data && response.data.message) {
          this.message = response.data.message;
          alert('Password reset successful.'); 
        } else {
          // If 'response' or 'response.data' is undefined, handle it gracefully
          this.error = 'Unexpected response from the server.';
        }
      } catch (error) {
        this.error = error.response ? error.response.data.error : 'An unexpected error occurred.';
      }
    },
  },
};


</script>

<style>
</style>