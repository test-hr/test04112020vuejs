<template>
  <div class="user-listing">
    <h1>Users</h1>
    <raw-table/>

  </div>
</template>

<script lang="ts">
/*
 * Responsibilities of component: Houses all components regarding the user entity
 */
import { Component } from 'vue-property-decorator';
import RawTable from '@/shared/components/sinpex_table/RawTable.vue';
import { mixins } from 'vue-class-component';
import { UserModuleMixin } from '@/modules/user/mixins/UserModuleMixin';
import { User } from '@/modules/user/User';

@Component({ components: { RawTable } })
export default class UserListing extends mixins(UserModuleMixin) {
  get users(): User[] {
    return this.userModule.items;
  }
}
</script>

<style scoped lang="scss">
.user-listing {
  height: 100%;
  max-width: 1400px;
  width: 100%;
}
</style>
