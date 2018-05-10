import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/components/pages/Form'
import Grid from '@/components/pages/Grid'
import Table from '@/components/pages/Table'
import Others from '@/components/pages/Others'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component:{template:`<h2>IVIEW</h2>`}
    },
    {
      path:'/grid',
      name:'grid',
      component:Grid
    },
    {
      path:'/form',
      name:'form',
      component:Form
    },
    {
      path:'/table',
      name:'table',
      component:Table
    },
    {
      path:'/others',
      name:'others',
      component:Others
    },
  ]
})
