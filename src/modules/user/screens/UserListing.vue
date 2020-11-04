<template>
  <div class="user-listing">
    <user-list :users="users" filter-query="" />
  </div>
</template>

<script lang="ts">
/*
 * Responsibilities of component: Houses all components regarding the user entity
 */
import { Component } from 'vue-property-decorator';
import UserList from '@/modules/user/components/UserList.vue';
import { mixins } from 'vue-class-component';
import { UserModuleMixin } from '@/modules/user/mixins/UserModuleMixin';
import { User } from '@/modules/user/User';

@Component({ components: { UserList } })
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
  width: 100vw;
}
</style>
