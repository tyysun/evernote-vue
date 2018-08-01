import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import NotebookList from '@/components/NotebookList'
import NoteDetail from '@/components/NoteDetail'
import TrashDetail from '@/components/TrashDetail'
import NoteSidebar from '@/components/NoteSidebar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      alias: '/login',
      component: () => import('@/components/Login.vue')
    },
    {
      path: '/notebooks',
      component: () => import('@/components/NotebookList.vue')
    },
    {
      path: '/note',
      component: () => import('@/components/NoteDetail.vue')
    },
    {
      path: '/trash',
      component: () => import('@/components/TrashDetail.vue')
    }
    
  ]
})
