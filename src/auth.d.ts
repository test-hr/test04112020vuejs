import { VueRouter } from 'vue-router/types/router';

declare module 'vue/types/vue' {
  interface Vue {
    $auth: any;
    renderChart(chartData: any, options?: any): void;
  }

  interface VueConstructor {
    router: VueRouter;
    auth: any;
  }
}
