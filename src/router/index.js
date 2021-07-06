import Vue from 'vue'
import VueRouter from 'vue-router'
import Market from '../views/Market.vue'
import { auth } from '../firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/market',
    name: 'Market',
    alias: '*',
    component: Market,
    meta: {
      requireAuth: true,
      title: 'Mercado | '
    }
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: 'Login | '
    },
    component: () => import('../views/authentication/Login.vue')
  },
  {
    path: '/forgetpassword',
    name: 'Password',
    meta: {
      title: 'Esqueci minha Senha | '
    },
    component: () => import('../views/authentication/Password.vue')
  },
  {
    path: '/register',
    name: 'Register',
    meta: {
      title: 'Register | '
    },
    component: () => import('../views/authentication/Register.vue')
  },
  {
    path: '/myindications',
    name: 'MyIndications',
    meta: {
      requireAuth: true,
      title: 'Minhas Indicações | '
    },
    component: () => import('../views/MyIndications.vue')
  },
  {
    path: '/results',
    name: 'Results',
    meta: {
      requireAuth: true,
      title: 'Resultados | '
    },
    component: () => import('../views/Results.vue')
  },
  {
    path: '/business',
    name: 'HomeBS',
    meta: {
      requireAuth: true,
      title: 'Indicou Business | '
    },
    component: () => import('../views/HomeBS.vue')
  },
  {
    path: '/myindications/info/:id',
    name: 'InfoIndications',
    meta: {
      requireAuth: true,
      title: 'Minhas Indicações | '
    },
    component: () => import('../views/InfoIndications.vue')
  },
  {
    path: '/results/info/:id',
    name: 'InfoResults',
    meta: {
      requireAuth: true,
      title: 'Resultados | '
    },
    component: () => import('../views/InfoResults.vue')
  },
  {
    path: '/bs/:id',
    name: 'Dashboard',
    meta: {
      requireAuth: true,
      title: 'Dashboard | '
    },
    component: () => import('../views/DashboardBS.vue')
  },
  {
    path: '/bs/:id/my-ad',
    name: 'MyAdBS',
    meta: {
      requireAuth: true,
      title: 'Meus Anúncios | '
    },
    component: () => import('../views/MyAdBS.vue')
  },
  {
    path: '/bs/:id/create-ad',
    name: 'CreateAdBS',
    meta: {
      requireAuth: true,
      title: 'Criar Anúncio | '
    },
    component: () => import('../views/CreateAdBS.vue')
  },
  {
    path: '/bs/:id/edit-ad/:idcard',
    name: 'EditAdBS',
    meta: {
      requireAuth: true,
      title: 'Editar Anúncio | '
    },
    component: () => import('../views/EditAdBS.vue')
  },
  {
    path: '/bs/:id/results',
    name: 'ResultsBS',
    meta: {
      requireAuth: true,
      title: 'Resultados | '
    },
    component: () => import('../views/ResultsBS.vue')
  },
  {
    path: '/bs/:id/results/status/:card',
    name: 'StatusBS',
    meta: {
      requireAuth: true,
      title: 'Status Indicações | '
    },
    component: () => import('../views/StatusBS.vue')
  },
  {
    path: '/form/:id',
    name: 'FormIndication',
    meta: {
      requireAuth: true,
      title: 'Formulário de Indicações | '
    },
    component: () => import('../views/FormIndication.vue')
  },
  {
    path: '/home',
    alias: '/',
    name: 'Home',
    meta: {
      requireAuth: false,
      title: '',
      icon: '../assets/checklist.png'
    },
    component: () => import('../views/Home.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}Indicou`
  const requireAuth = to.matched.some(x => x.meta.requireAuth)

  if (requireAuth && !auth.currentUser) {
    next('/login')
  } else {
    next()
  }
  if (auth.currentUser !== null && to.path === '/login') {
    next('/home')
  }
  if (auth.currentUser !== null && to.path === '/register') {
    next('/home')
  }
})

export default router
