// Components
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import ThreadShow from "@/pages/ThreadShow.vue";
import NotFound from "@/pages/NotFound.vue";
import sourceData from '@/data.json';

// Routes
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/thread/:id",
    name: "ThreadShow",
    component: ThreadShow,
    props: true,
    beforeEnter: (to, from, next) => {
      // check thread exists
      const threadExists = sourceData.threads.find( thread => thread.id === to.params.id)
      // if thread exists continue
      if(threadExists){
        next()
      }else{
        next({
          name: "NotFound",
          params: { pathMatch: to.path.substring(1).split('/') },
          query: to.query,
          hash: to.hash
        })
      }
      // if threads does not exist redirect to page not found
    }
  },

  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
