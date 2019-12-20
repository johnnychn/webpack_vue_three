import Vue from 'vue'
import Router from 'vue-router'
import ThreePage from "@/components/ThreePage";
import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ThreePage',
      component: ThreePage
    },{
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
