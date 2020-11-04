<template>
  <div class="todo-listing">
    <!-- <user-list :users="users" filter-query="" /> -->
    <h1>Todos</h1>
    <h5>Filter by user</h5>
    <Select style="margin-bottom: 50px" :items="users"/>
    <raw-table />
  </div>
</template>

<script lang="ts">
/*
 * Responsibilities of component: Houses all components regarding the user entity
 */
import { Component } from 'vue-property-decorator';
import RawTable from '@/shared/components/sinpex_table/RawTable.vue';
import Select from '@/shared/components/sinpex_select/Select.vue';
import { mixins } from 'vue-class-component';
import { TodoModuleMixin } from '@/modules/todo/mixins/TodoModuleMixin';
import { Todo } from '@/modules/todo/Todo';
import { UserModuleMixin } from '@/modules/user/mixins/UserModuleMixin';
import { User } from '@/modules/user/User';

@Component({ components: { RawTable, Select } })
export default class TodoListing extends mixins(TodoModuleMixin, UserModuleMixin) {
  get todos(): Todo[] {
    return this.todoModule.items;
  }
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
