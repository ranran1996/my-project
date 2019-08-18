import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children: [
        {
          path: "article/index",
          name: "article-index",
          //推荐使用这种方式，懒加载，不点击这个连接就不会加载这个页面，比放在最上面要节省加载资源和时间
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/Article.vue")
        },
        {
          path: "article/create",
          name: "article-create",
          //推荐使用这种方式，懒加载，不点击这个连接就不会加载这个页面，比放在最上面要节省加载资源和时间
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/Create.vue")
        },
        {
          // 编辑页面
          path: "article/:id/edit",
          name: "article-edit",
          //推荐使用这种方式，懒加载，不点击这个连接就不会加载这个页面，比放在最上面要节省加载资源和时间
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/Edit.vue")
        }
      ]
    }
  ]
});
