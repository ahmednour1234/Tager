import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../components/Home/home.vue";
import LogIn from "../components/Login/login.vue";
import SignUp from "../components/Signup/signup.vue";
import ProductAll from "../components/Products/product.vue";
import DetailsProduct from "../components/Details/details.vue";
import CartTager from "../components/Cart/cart.vue";
import CreditCard from "../components/Credit/credit.vue";
import UploadProduct from "../components/Upload/upload.vue";
import ShowOrders from "../components/Orders/order.vue";
import ResetPassword from "../components/ResetPassword/reset.vue";
import UpdatePassword from "../components/ResetPassword/updatepass.vue";

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
    meta: { showNavbar: true, requiresAuth: true },
  },
  {
    path: "/login",
    name: "login",
    component: LogIn,
    meta: { showNavbar: false },
  },
  {
    path: "/reset",
    name: "reset",
    component: ResetPassword,
    meta: { showNavbar: false },
  },
  {
    path: "/update",
    name: "updatepassword",
    component: UpdatePassword,
    meta: { showNavbar: false },
    props: (route) => ({ token: route.query.token }),
  },
  {
    path: "/",
    name: "signup",
    component: SignUp,
    meta: { showNavbar: false },
  },
  {
    path: "/product",
    name: "product",
    component: ProductAll,
    meta: { showNavbar: true, requiresAuth: true },
  },
  {
    path: "/details/:id",
    name: "DetailsProduct",
    component: DetailsProduct,
    meta: { showNavbar: true, requiresAuth: true },
  },
  {
    path: "/cart",
    name: "cart",
    component: CartTager,
    meta: { showNavbar: true, requiresAuth: true },
  },
  {
    path: "/credit",
    name: "credit",
    component: CreditCard,
    meta: { showNavbar: true, requiresAuth: true },
  },
  {
    path: "/upload",
    name: "upload",
    component: UploadProduct,
    meta: { showNavbar: true, requiresAuth: true },
  },
  {
    path: "/order",
    name: "ShowOrders",
    component: ShowOrders,
    meta: { showNavbar: true, requiresAuth: true },
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  console.log("Before Each Guard:", to.name, from.name);

  function isAuthenticated() {
    const token = localStorage.getItem("token");
    return !!token;
  }

  if (to.matched.some((route) => route.meta.requiresAuth)) {
    const authenticated = isAuthenticated();
    console.log("Authenticated:", authenticated);

    if (!authenticated) {
      console.log("Redirecting to /login");
      next("/login");
    } else {
      console.log("Allowed");
      next();
    }
  } else {
    console.log("Public route");
    next();
  }
});
export default router;
