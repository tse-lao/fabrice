import { createRouter, createWebHistory } from 'vue-router';
import About from '../views/About.vue';
import Main from '../views/Main.vue';
import Projects from '../views/Projects.vue';
import Publications from "../views/Publications.vue";



const routes = [
  {
    path: '/', 
    name: 'Home', 
    component: Main
  }, 
  {
    path: '/landschappen', 
    name: 'Landschappen', 
    component: Main
  }, 
  {
    path: '/about', 
    name: 'Over', 
    component: About
  },
  {
    path: '/projecten', 
    name: 'projecten', 
    component: Projects
  },
  {
    path: '/publicaties', 
    name: 'publicaties', 
    component: Publications, 
    children: [
      {
        path: 'timeline', 
        name: 'timeline', 
        component: Projects
      }, 
      {
        path: '', 
        name: 'Publicaties', 
        component: About
      }
    ]
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;