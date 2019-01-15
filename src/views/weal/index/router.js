import Vue from 'vue'
import VueRouter from 'vue-router'

// import photo from './index.vue'
// import photo_detail from  './photo_detail.vue'



Vue.use(VueRouter);

const router = new VueRouter({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
      // name: 'index',
      // component: resolve => require(['./index.vue'], resolve),
    },
    {
      name: 'home',
      path: '/home',
      component: resolve => require(['./home.vue'], resolve),
      children: [
        {
          path: 'movie',
          name: 'movie',
          component:resolve => require(['../../../components/movie/movie.vue'], resolve),
        },
        {
          path: 'music',
          name: 'music',
          component:resolve => require(['../../../components/music/music.vue'], resolve),
        },
        // {
        //   path: 'book',
        //   name: 'book',
        //   component: require('../components/book/book.vue')
        // },
        {
          path: 'photo',
          name: 'photo',
          component: resolve => require(['../../../components/photo/photo.vue'], resolve),
        }
      ]
    },
    {
      path: '/home/movie/detail/:id',
      name: 'movie_detail',
      component: resolve => require(['../../../components/movie/movie_detail.vue'], resolve),
    },
    {
      path: '/home/photo/detail/:id',
      name: 'photo_detail',
      component: resolve => require(['../../../components/photo/photo_detail.vue'], resolve),
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]

});


export default router;