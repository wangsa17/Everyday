import { createWebHistory, createRouter } from "vue-router"
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Daftar from '../views/Daftar.vue'

const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      component: About,
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
  ];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;