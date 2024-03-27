<template>
  <LoadSpinner>
    <!-- As a link -->
    <div class="main-navbar shadow-sm sticky-top" v-if="shouldShowNavbar">
      <div class="top-navbar">
        <div class="container-fluid">
          <div class="row">
            <div
              class="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block"
            >
              <router-link to="/home">
                <h5 class="brand-name fs-1 Fw-bolder fst-italic">TAGER</h5>
              </router-link>
            </div>
            <div class="col-md-5 my-auto">
              <form role="search">
                <div class="input-group">
                  <input
                    type="search"
                    placeholder="Search your product"
                    class="form-control"
                  />
                  <button class="btn bg-white" type="submit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
            <div class="col-md-5 my-auto">
              <ul class="nav justify-content-end">
                <li class="nav-item">
                  <router-link class="nav-link" to="/cart">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-cart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                      />
                    </svg>
                    Cart ({{ totalItemsInCart }})
                  </router-link>
                </li>
                <li class="nav-item">
                  <ul class="navbar-nav">
                    <!-- Other Navbar Items -->

                    <!-- Products Dropdown -->
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="productsDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-heart-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                          />
                        </svg>
                        Wishlists ({{ totalItemsInWishlist }})
                      </a>
                      <ul
                        class="dropdown-menu overflow-y-scroll"
                        aria-labelledby="productsDropdown"
                      >
                        <!-- Check if there are products to display -->
                        <li v-if="wishlist.length === 0" class="dropdown-item fs-4">
                          No Wishlist available
                        </li>

                        <!-- Loop through products and display details -->
                        <li
                          v-else
                          v-for="(item, index) in wishlist"
                          :key="item.id"
                          class="dropdown-item"
                        >
                        
                          <div class="d-flex felx-row gx-5 align-items-center ">
                        <router-link :to="{ name: 'DetailsProduct', params: { id: item.id } }">
                            <img
                              src="@/assets/logo.png"
                              alt="Product Image"
                              class="img-thumbnail rounded-circle"
                              style="max-width: 100px; max-height: 100px"
                            />
                        </router-link>
                            <div
                              class="d-flex felx-row align-items-center ms-2"
                            >
                              <div class="d-flex flex-column g-3">
                                <h6 class="mb-2">
                                  name:
                                  <span class="text-secondary">{{
                                    item.name
                                  }}</span>
                                </h6>
                                <h6 class="mt-2">
                                  Price:
                                  <span class="text-secondary"
                                    >{{ item.price }}$</span
                                  >
                                </h6>
                              </div>
                              <a
                                class="float-end text-black ms-3"
                                @click="removeFromWishlist(index)"
                                ><svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="30"
                                  height="30"
                                  fill="currentColor"
                                  class="bi bi-trash"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"
                                  />
                                  <path
                                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"
                                  /></svg
                              ></a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    v-if="isLoggedIn"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fa fa-user"></i> {{ username }}
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <router-link class="dropdown-item" to="/profile">
                        <i class="fa fa-user"></i> Profile
                      </router-link>
                    </li>
                    <li>
                      <router-link class="dropdown-item" to="/order">
                        <i class="fa fa-list"></i> My Orders
                      </router-link>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#" @click="logout">
                        <i class="fa fa-sign-out"></i> Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </LoadSpinner>
  <router-view />
</template>
  
<script>
import axios from "axios";

export default {
  data() {
    return {
      showNotificationDropdown: false,
    };
  },
  methods: {
    toggleNotificationDropdown() {
      this.showNotificationDropdown = !this.showNotificationDropdown;
    },
    removeFromWishlist(index) {
      this.$store.commit("removeFromWishlist", index);
    },
    logout() {
      // Clear the token from local storage
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      // Optionally: Send a logout request to the backend
      axios
        .post("http://127.0.0.1:8000/api/logout")
        .then((response) => {
          console.log("Logout successful", response);
        })
        .catch((error) => {
          console.error("Logout error", error);
        });

      // Redirect to the login page or another page
      this.$router.push("/login");
    },
  },
  computed: {
    totalItemsInCart() {
      return this.$store.state.totalItemsInCart;
    },
    shouldShowNavbar() {
      // Access the current route's meta field to determine whether to show the navbar
      return this.$route.meta.showNavbar;
    },
    isLoggedIn() {
      // Check if the user is logged in based on the presence of the token
      return !!localStorage.getItem("token");
    },
    username() {
      // Retrieve the username from user information stored in local storage
      const user = JSON.parse(localStorage.getItem("user"));
      return user ? user.name : "";
    },
    wishlist() {
      return this.$store.state.wishlist;
    },
    totalItemsInWishlist() {
      return this.$store.state.totalItemsInWishlist;
    },
  },
};
</script>
  
<style lang="scss" scoped>
.main-navbar {
  border-bottom: 1px solid #ccc;
}

.main-navbar .top-navbar {
  background-color: #2874f0;
  padding-top: 10px;
  padding-bottom: 10px;
}

.main-navbar .top-navbar .brand-name {
  color: #ffff;
}

.main-navbar .top-navbar .nav-link {
  color: #ffff;
  font-size: 16px;
  font-weight: 500;
}

.main-navbar .top-navbar .dropdown-menu {
  padding: 0px 0px;
  border-radius: 0px;
}

.main-navbar .top-navbar .dropdown-menu .dropdown-item {
  padding: 8px 16px;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
}

.main-navbar .top-navbar .dropdown-menu .dropdown-item i {
  width: 20px;
  text-align: center;
  color: #2874f0;
  font-size: 14px;
}

.main-navbar .navbar {
  padding: 0px;
  background-color: #ddd;
}

.main-navbar .navbar .nav-item .nav-link {
  padding: 8px 20px;
  color: #000;
  font-size: 15px;
}

@media only screen and (max-width: 600px) {
  .main-navbar .top-navbar .nav-link {
    font-size: 12px;
    padding: 8px 10px;
  }
}
.dropdown-menu.overflow-y-scroll {
  max-height: 400px; /* Adjust the max height as needed */
  overflow-y: auto;
}
</style>
  