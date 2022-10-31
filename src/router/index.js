import { createRouter, createWebHistory } from 'vue-router';
import Expos from "../components/Expos.vue";
import PublicityWork from "../components/PublicityWork.vue";
import About from '../views/About.vue';
import Main from '../views/Main.vue';
import Publications from "../views/Publications.vue";
import Selling from "../views/Selling.vue";

const routes = [
  {
    path: '/', 
    name: 'Home', 
    component: Main
  }, 
  {
    path: '/selling', 
    name: 'selling', 
    component: Selling
  }, 
  {
    path: '/about', 
    name: 'Over', 
    component: About
  },
  {
    path: '/publicaties', 
    name: 'publicaties', 
    component: Publications, 
    children: [
      {
        path: 'expos', 
        name: 'expos', 
        component: Expos
      }, 
      {
        path: '', 
        name: 'Publicaties', 
        component: PublicityWork
      }
    ]
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;