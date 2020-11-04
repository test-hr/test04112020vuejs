import Router from 'vue-router';
import { Routes } from '@/routing/Routes';

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: Routes.USERS,
      component: () => import('@/modules/user/screens/UserListing.vue'),
    },
    {
      path: '/todos',
      name: Routes.TODOS,
      component: () => import('@/modules/todo/screens/TodoListing.vue'),
    },
    {
      path: '/statistics',
      name: Routes.STATISTICS,
      component: () => import('@/modules/statistic/screens/Statistics.vue'),
    },
  ],
});
