import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Json from '@/components/Json'

Vue.use(Router);

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      redirect: '/helloWorld'
    },{
      path: '/helloWorld',
      component: HelloWorld
    },{
      path: '/axios',
      component: Json
    }
  ]
})
