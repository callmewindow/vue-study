import Vue from 'vue'
import Router from 'vue-router'
import Adopt from "../components/Adopt";
import Visit from "../components/Visit";
import index from "../components/index";

Vue.use(Router);

const routes = [
  {
    path: "/",
    redirect: "Adopt"
  },
  {
    path: "/Adopt",
    component: Adopt,
    children: [
      {
        path: "/",
        redirect: "index"
      },
      {
        path: "index",
        name: "index",
        component: index
      }
    ]
  },
  {
    path: "/Visit",
    name: "Visit",
    component: Visit
  }
];

export default new Router({
  routes
})
