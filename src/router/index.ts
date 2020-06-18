import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import DeckNew from '../views/DeckNew.vue'
import Deck from '../views/Deck.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: { name: 'DeckNew' }
  },
  {
    path: '/deck/new',
    name: 'DeckNew',
    meta: {
      title: 'Cards'
    },
    component: DeckNew
  },
  {
    path: '/deck/:id',
    name: 'Deck',
    meta: {
      title: 'Ordered Pile'
    },
    component: Deck
  }
]

const router = new VueRouter({
  routes
})

export default router
