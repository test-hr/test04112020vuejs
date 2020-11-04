import Vue from 'vue';
import Component from 'vue-class-component';
import { Inject } from 'vue-property-decorator';
import { Modules } from '@/store/Modules';
import { TodoModule } from '@/modules/todo/store/TodoModule';

@Component
export class TodoModuleMixin extends Vue {
  @Inject(Modules.TODO_MODULE)
  protected todoModule!: TodoModule;

  created() {
    if (
      this.todoModule.items.length === 0 &&
      !this.todoModule.loading
    ) {
      this.todoModule.fetchAll();
    }
  }
}
