import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/pages/dashboard.vue'
import Create from '@/pages/create.vue'
import List from '@/pages/list.vue'
import Settings from '@/pages/settings.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
  ]
})
