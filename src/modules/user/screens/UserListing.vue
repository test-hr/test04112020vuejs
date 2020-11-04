<template>
  <div class="user-listing">
    <raw-table/>

  </div>
</template>

<script lang="ts">
/*
 * Responsibilities of component: Houses all components regarding the user entity
 */
import { Component } from 'vue-property-decorator';
import RawTable from '@/modules/user/components/RawTable.vue';
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
  display: flex;
  height: 100%;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}
</style>
