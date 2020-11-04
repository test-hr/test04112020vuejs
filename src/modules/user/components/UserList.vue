<template>
  <div class="container">
    <h2>Users</h2>
    <ul>
      <li v-for="(user, id) in users" :key="id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
/*
 * Responsibilities of component: List users by name
 */
import { Component, Prop, Vue } from 'vue-property-decorator';
import { User } from '@/modules/user/User';

@Component({ components: {} })
export default class UserList extends Vue {
  // interface
  @Prop({ required: true }) users!: User[];

  @Prop({ required: true }) filterQuery!: string;
}
</script>

<style scoped></style>
