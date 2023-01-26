import { createWebHistory, createRouter } from "vue-router";
import Main from './components/Main.vue';
import List from './components/List.vue';
import Detail from './components/Detail.vue';
import NF404 from './components/NF404.vue'
import Author from './components/Author.vue';
import Comment from './components/Comment.vue';
const routes = [
  {
    path: "/detail/:id(\\d+)",
    component: Detail,
    children:[
      {
        path: "author",
        component: Author,
      },
      {
        path: "comment",
        component: Comment,
      },
    ]
  },
  {
    path: "/",
    component: Main,
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/:아무문자(.*)",
    component: NF404,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 