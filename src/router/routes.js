import Home from '../views/Home.vue'

export default [
    {
    path: '/',
    name: 'Home',
     component: Home
    },
    {
      path: '/profile',
      name: 'Profile',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue')
    },
    {
      path: '/reviews',
      name: 'Reviews',
      component: () => import(/* webpackChunkName: "about" */ '../views/Reviews.vue')
    }
]

