import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import InspectionForm from '../modules/Inspection/inspection-form.component.vue'
import FinishedInspection from '../modules/Inspection/components/finished-inspection.component.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'inspection',
    component: InspectionForm
  },
  {
    path: '/finished',
    name: 'finished',
    component: FinishedInspection
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
