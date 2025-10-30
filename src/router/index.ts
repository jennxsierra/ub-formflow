import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: 'UB FormFlow' },
  },
  {
    path: '/design-and-development',
    name: 'Design & Development',
    component: () => import('@/views/DesignDevelopmentView.vue'),
    meta: { title: 'Design & Development | UB FormFlow' },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.afterEach((to) => {
  const meta = to.meta as { title?: string }
  document.title = meta.title ?? 'UB FormFlow'
})

export default router
