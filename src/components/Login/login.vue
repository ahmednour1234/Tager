
<template>
  <div v-if="error" class="alert alert-danger" role="alert">
    {{ error }}
  </div>
  <section class="bg-light p-3 p-md-4 p-xl-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-xxl-11">
          <div class="card border-light-subtle shadow-sm">
            <div class="row g-0">
              <div class="col-12 col-md-6">
                <img
                  class="img-fluid bg-primary rounded-start w-100 h-100"
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
                          <h2 class="h4 text-center">Login</h2>
                          <h3
                            class="fs-6 fw-normal text-secondary text-center m-0"
                          >
                           Welcome Back!
                          </h3>
                        </div>
                      </div>
                    </div>
                    <form @submit.prevent="login">
                      <div class="row gy-3 overflow-hidden">
                        <div class="col-12">
                          <div class="form-floating mb-3">
                            <input
                              type="email"
                              class="form-control"
                              name="email"
                              id="email"
                              v-model="email"
                              placeholder="**********"
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
                              placeholder="**********"
                              required
                            />
                            <label for="email" class="form-label">Enter Password</label>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="d-grid">
                            <button class="btn btn-primary btn-lg" type="submit">
                             Login
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div class="row">
              <div class="col-12">
                <hr class="mt-5 mb-4 border-secondary-subtle">
                <div class="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end">
                  <router-link to="/" class="link-secondary text-decoration-none">Register</router-link>||
                  <router-link to="/reset" class="link-secondary text-decoration-none">Forgot Your Password?</router-link>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <p class="mt-5 mb-4">Or sign in with</p>
                <div class="d-flex gap-3 flex-column flex-xl-row">
                  <a @click="loginWithGoogle" class="btn bsb-btn-xl btn-outline-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                      <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                    </svg>
                    <span  class="ms-2 fs-6">Google</span>
                  </a>
                </div>
              </div>
            </div>
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
import axios from "axios";

export default {
  name: "LogIn",
  data() {
    return {
      email: "",
      password: "",
      registrationMessage: null,
      error: null,
      loggedIn: false,
      user: null,
    };
  },
  methods: {
    login() {
      this.error = null;
      axios
        .post("http://127.0.0.1:8000/api/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          this.registrationMessage = response.data.message;
          const { access_token, user } = response.data;
          localStorage.setItem("token", access_token);
          localStorage.setItem("user", JSON.stringify(user));
          this.$store.commit("SET_USER", user);

          // Store user ID in localStorage
          localStorage.setItem("userId", user.id);

          // Store user ID in localStorage

          if (response.data.message === "Login Successful") {
            // Registration successful
            this.$router.push({ name: "home" }); // Replace 'home' with the actual name of your home route
          } else {
            this.error = response.data.message || "An error occurred.";
          }
        })
        .catch((error) => {
          console.error("Error during registration:", error);
          this.error = "possibel email or password is incorrect";
        });
    },
    loginWithGoogle() {
      window.location.href = "http://127.0.0.1:8000/api/login/google";
    },
  },
  created() {
  // Extract the token from the URL
  const url = new URL("http://127.0.0.1:8000/api/login/google/callback?token=");
const token = url.searchParams.get('token');

// Check if the token is present and authenticated
if (token !== null && token !== 'false') {
  // Store the token as needed (e.g., in local storage)
  localStorage.setItem('token', token);
  console.log(token);

  // Redirect or perform other actions as needed
  // Replace with your actual home route
  // For example, if your home route is "/dashboard", you can use:
  // this.$router.push('/dashboard');
} else {
  // Handle authentication failure, maybe redirect to a login page
  // or show an error message
  console.error("Authentication failed");
}
},

};
</script>

<style lang="scss" scoped>
@import "./login.scss";

nav {
  visibility: hidden;
}
</style>
