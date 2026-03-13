import { createRouter, createWebHistory } from 'vue-router'
import CookieClicker from '@/views/CookieClicker.vue'
import UserCreate from '@/views/UserCreate.vue'
import ViewLists from '@/views/ViewLists.vue'
import PokemonData from '@/views/PokemonData.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CookieClicker,
    },
    {
      path: '/usercreate',
      name: 'usercreate',
      component: UserCreate,
    },
    {
      path: '/viewlists',
      name: 'viewlists',
      component: ViewLists,
    },
    {
      path: '/pkmn/:id',
      name: 'pokemon data',
      component: PokemonData,
    }
  ],
})

export default router
