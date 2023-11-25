import { createWebHistory, createRouter } from "vue-router"
import Home from '../views/Home.vue'
import HomeLogin from '../views/HomeLogin.vue'
import About from '../views/About.vue'
import Cart from '../views/Cart.vue'
import Payment from '../views/Payment.vue'
import History from '../views/History.vue'
import Login from '../views/Login.vue'
import Daftar from '../views/Daftar.vue'
import Notify from '../views/notify.vue'

const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    { path: '/HomeLogin', name: 'HomeLogin', component: HomeLogin },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart,
    },
    {
      path: "/payment",
      name: "Payment",
      component: Payment,
    },
    {
      path: "/history",
      name: "History",
      component: History,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/daftar",
      name: "Daftar",
      component: Daftar,
    },
    {
      path: "/notify",
      name: "Notify",
      component: Notify
    }
  ];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;