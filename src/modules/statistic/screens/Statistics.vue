<template>
  <div class="statistics">
    <h1>Statistics</h1>
    <div class="card">
      <bar-chart />
    </div>
  </div>
</template>

<script lang="ts">
/*
 * Responsibilities of component: Houses all components regarding the user entity
 */
import { Component } from 'vue-property-decorator';
import BarChart from '@/modules/statistic/components/BarChart.vue';
import { mixins } from 'vue-class-component';
import { UserModuleMixin } from '@/modules/user/mixins/UserModuleMixin';
import { User } from '@/modules/user/User';

@Component({ components: { BarChart } })
export default class UserListing extends mixins(UserModuleMixin) {
  get users(): User[] {
    return this.userModule.items;
  }
}
</script>

<style scoped lang="scss">
.statistics{
  height: 100%;
  width: 100%;

  .card {
    width: 500px;
    height: 600px;
  }
}
</style>
