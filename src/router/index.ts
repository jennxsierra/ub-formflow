import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: 'UB FormFlow' },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutView.vue'),
    meta: { title: 'About | UB FormFlow' },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// set document.title after each navigation
router.afterEach((to) => {
  const meta = to.meta as { title?: string }
  document.title = meta.title ?? 'UB FormFlow'
})

export default router
